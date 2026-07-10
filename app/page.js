"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import HowItWorksSection from '@/components/HowItWorksSection';
import DestinationsSection from '@/components/DestinationsSection';
import WhyUsSection from '@/components/WhyUsSection';
import FeaturedTours from '@/components/FeaturedTours';
import TripPlannerSection from '@/components/TripPlannerSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MemoriesSection from '@/components/MemoriesSection';
import FaqSection from '@/components/FaqSection';
import NewsletterSection from '@/components/NewsletterSection';
import FloatingContact from '@/components/FloatingContact';
import InquiryPopup from '@/components/InquiryPopup';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <DestinationsSection />
        <HowItWorksSection />
        <WhyUsSection />
        <FeaturedTours />
        <TripPlannerSection />
        <TestimonialsSection />
        <MemoriesSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
      <FloatingContact />
      <InquiryPopup />
    </>
  );
}
