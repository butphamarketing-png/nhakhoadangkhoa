import { useCallback, useEffect, useState } from "react";
import { apiFetch } from "./api";
import type { SiteContentKey } from "./cms-keys";

export function useContent<T>(key: SiteContentKey, fallback: T) {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const remote = await apiFetch<T>(`/api/content/${key}`, { auth: false });
      setData(remote);
    } catch {
      setData(fallback);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fallback is initial default only
  }, [key]);

  useEffect(() => {
    load();
  }, [load]);

  const save = async (next: T) => {
    setSaving(true);
    try {
      await apiFetch(`/api/content/${key}`, {
        method: "PUT",
        body: JSON.stringify(next),
      });
      setData(next);
    } finally {
      setSaving(false);
    }
  };

  return { data, setData, loading, saving, save, reload: load };
}

export async function saveContent(key: SiteContentKey, data: unknown) {
  await apiFetch(`/api/content/${key}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}
