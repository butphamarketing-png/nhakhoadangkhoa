import { useContext } from "react";
import { BookingContext } from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import HeroSupportBar from "@/components/home/HeroSupportBar";
import QuickServicesBar from "@/components/home/QuickServicesBar";
import AboutSection from "@/components/home/AboutSection";
import CommitmentsSection from "@/components/home/CommitmentsSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import PromotionsSection from "@/components/home/PromotionsSection";
import DoctorTeamSection from "@/components/home/DoctorTeamSection";
import SmileDesignSection from "@/components/home/SmileDesignSection";
import TechnologySection from "@/components/home/TechnologySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import KnowledgeSection from "@/components/home/KnowledgeSection";
import BookingFormSection from "@/components/home/BookingFormSection";
import BookingCtaSection from "@/components/home/BookingCtaSection";

export default function HomePage() {
  const { openBooking } = useContext(BookingContext);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <HeroSupportBar />
      <QuickServicesBar />
      <AboutSection />
      <CommitmentsSection />
      <StatsSection />
      <WhyChooseSection />
      <FeaturedServicesSection />
      <PromotionsSection />
      <DoctorTeamSection />
      <SmileDesignSection />
      <TechnologySection />
      <TestimonialsSection />
      <KnowledgeSection />
      <BookingFormSection />
      <BookingCtaSection onBookingClick={openBooking} />
    </div>
  );
}
