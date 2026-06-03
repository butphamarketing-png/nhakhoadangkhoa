import { Redirect, useRoute } from "wouter";
import { LEGACY_SERVICE_REDIRECTS } from "@/lib/services/legacy-redirects";

/** Chuyển URL nhóm / slug cũ sang cấu trúc mới */
export default function ServiceGroupPage() {
  const [, params] = useRoute("/dich-vu/:groupId");
  const target = params?.groupId ? LEGACY_SERVICE_REDIRECTS[params.groupId] : undefined;
  if (target) return <Redirect to={target} />;
  return <Redirect to="/dich-vu" />;
}
