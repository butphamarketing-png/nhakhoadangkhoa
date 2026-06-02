import { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import MobileBottomBar from "./MobileBottomBar";
import BookingModal from "./BookingModal";
import ScrollProgress from "./ScrollProgress";

export const BookingContext = createContext<{ openBooking: () => void }>({
  openBooking: () => {},
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      <ScrollProgress />
      <Header onBookingClick={openBooking} />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[88px] pb-20 lg:pb-0 xl:pr-[4.5rem]">{children}</main>
      <Footer />
      <FloatingButtons onBookingClick={openBooking} />
      <MobileBottomBar onBookingClick={openBooking} />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </BookingContext.Provider>
  );
}
