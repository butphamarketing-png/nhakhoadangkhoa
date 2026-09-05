import { connect, type TLSSocket } from "node:tls";

type SendGmailInput = {
  user: string;
  pass: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};

function encodeSubject(subject: string): string {
  return `=?UTF-8?B?${Buffer.from(subject, "utf8").toString("base64")}?=`;
}

function toBase64(value: string): string {
  return Buffer.from(value, "utf8").toString("base64");
}

function readSmtpResponse(socket: TLSSocket): Promise<{ code: number; text: string }> {
  return new Promise((resolve, reject) => {
    let buffer = "";
    const onData = (chunk: string) => {
      buffer += chunk;
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!/^\d{3}[\s-]/.test(line)) continue;
        if (line[3] === "-") continue;
        socket.off("data", onData);
        socket.off("error", onError);
        resolve({ code: Number(line.slice(0, 3)), text: line });
        return;
      }
    };
    const onError = (err: Error) => {
      socket.off("data", onData);
      reject(err);
    };
    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function expect(socket: TLSSocket, code: number, command?: string): Promise<void> {
  if (command !== undefined) socket.write(`${command}\r\n`);
  const res = await readSmtpResponse(socket);
  if (res.code !== code) {
    throw new Error(`SMTP ${res.code}: ${res.text}`);
  }
}

/**
 * Gửi 1 email qua Gmail SMTP (App Password). Không cần thư viện ngoài.
 */
export async function sendGmailSmtp(input: SendGmailInput): Promise<void> {
  const user = input.user.trim();
  const pass = input.pass.replace(/\s+/g, "");
  const to = input.to.trim();
  if (!user || !pass || !to) {
    throw new Error("Thiếu GMAIL_USER, GMAIL_APP_PASSWORD hoặc email nhận.");
  }

  const boundary = `dk_${Date.now().toString(16)}`;
  const payload = [
    `From: "Nha khoa Dang Khoa" <${user}>`,
    `To: ${to}`,
    `Subject: ${encodeSubject(input.subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    input.text,
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    input.html,
    `--${boundary}--`,
    "",
  ]
    .join("\r\n")
    .replace(/^\./gm, "..");

  const socket = connect({
    host: "smtp.gmail.com",
    port: 465,
    timeout: 20_000,
    servername: "smtp.gmail.com",
  });
  socket.setEncoding("utf8");
  const greeting = readSmtpResponse(socket);

  try {
    await new Promise<void>((resolve, reject) => {
      socket.once("secureConnect", () => resolve());
      socket.once("error", reject);
      socket.once("timeout", () => reject(new Error("Gmail SMTP timeout")));
    });
    const hello = await greeting;
    if (hello.code !== 220) throw new Error(`SMTP ${hello.code}: ${hello.text}`);
    await expect(socket, 250, "EHLO nhakhoadangkhoa.local");
    await expect(socket, 235, `AUTH PLAIN ${toBase64(`\0${user}\0${pass}`)}`);
    await expect(socket, 250, `MAIL FROM:<${user}>`);
    await expect(socket, 250, `RCPT TO:<${to}>`);
    await expect(socket, 354, "DATA");
    await expect(socket, 250, `${payload}\r\n.`);
    await expect(socket, 221, "QUIT");
  } finally {
    socket.destroy();
  }
}
