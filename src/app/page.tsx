
import ContactPage from "@/components/Contact";
import Footer from "@/components/footer";
import FooterSection from "@/components/footer1";
import HelpingHandSection from "@/components/helping-hand-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Partners from "@/components/Partner";
import Initiatives from "@/components/seaction";
import TestimonialsSection from "@/components/testimonial";
import UpcomingEventsSection from "@/components/upcoming-events";




export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Initiatives />
      <HelpingHandSection />
      <UpcomingEventsSection />
      <Partners />
      <TestimonialsSection />
      <ContactPage />
      <FooterSection />
    </main>
  )
}
