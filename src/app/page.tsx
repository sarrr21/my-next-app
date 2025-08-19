
import ContactPage from "@/components/Contact";
import Footer from "@/components/footer";
import HelpingHandSection from "@/components/helping-hand-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Initiatives from "@/components/seaction";
import StatsSection from "@/components/stats-section";



export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Initiatives />
      <HelpingHandSection />
      <ContactPage />
      <Footer />
    </main>
  )
}
