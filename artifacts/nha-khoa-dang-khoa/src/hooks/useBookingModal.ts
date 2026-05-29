import { useState } from "react";

export function useBookingModal() {
  const [open, setOpen] = useState(false);
  return { open, setOpen, openModal: () => setOpen(true), closeModal: () => setOpen(false) };
}
