
import Footer from "@/components/footer";
import HelpingHandSection from "@/components/helping-hand-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import StatsSection from "@/components/stats-section";
import VolunteersPage from "@/components/Volunters";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HelpingHandSection />
      
      <Footer />
    </main>
  )
}
