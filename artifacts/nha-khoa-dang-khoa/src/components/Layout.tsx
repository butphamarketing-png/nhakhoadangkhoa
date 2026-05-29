import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import MobileBottomBar from "./MobileBottomBar";
import BookingModal from "./BookingModal";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onBookingClick={() => setBookingOpen(true)} />
      <main className="pt-16 md:pt-20 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <FloatingButtons onBookingClick={() => setBookingOpen(true)} />
      <MobileBottomBar onBookingClick={() => setBookingOpen(true)} />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
