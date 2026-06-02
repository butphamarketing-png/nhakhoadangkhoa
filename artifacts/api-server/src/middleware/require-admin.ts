import type { NextFunction, Request, Response } from "express";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) {
    res.status(503).json({ error: "ADMIN_API_KEY chưa được cấu hình trên server" });
    return;
  }
  const auth = req.headers.authorization;
  if (auth === `Bearer ${expected}`) {
    next();
    return;
  }
  res.status(401).json({ error: "Unauthorized" });
}
