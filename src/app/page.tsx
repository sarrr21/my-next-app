
import ContactPage from "@/components/Contact";
import Footer from "@/components/footer";
import FooterSection from "@/components/footer1";
import HelpingHandSection from "@/components/helping-hand-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Initiatives from "@/components/seaction";




export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Initiatives />
      <HelpingHandSection />
      <ContactPage />
      <FooterSection />
    </main>
  )
}
