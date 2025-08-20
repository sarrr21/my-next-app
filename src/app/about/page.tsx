import ContactPage from "@/components/Contact";
import Footer from "@/components/footer";
import FooterSection from "@/components/footer1";
import Navbar from "@/components/navbar";
import TimelineSection from "@/components/timeline";
import { Badge } from "@/components/ui/badge";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TLGEF",
  description: "Learn more about the Tausi Likokola Global Empowerment Foundation (TLGEF).",
};

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6  bg-orange-600 hover:bg-orange-700 text-sm font-medium">
            Global Empowerment Foundation
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Tausi Likokola Global Empowerment Foundation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-sans">
            "Alone, one can only do so much — but together, we can do so much more." Unity multiplies impact.
          </p>
         
        </div>
      </section>
    <main className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 py-10 prose">
    <div className="flex gap-2 ">
        <h2 className="text-gray-500 ">ABOUT</h2>
        <div className="border-b w-20 mb-2 border-orange-500" />
        </div>
        <p className=" text-3xl font-bold mb-4 mt-4">WHO WE ARE</p>
      <p>
        The Tausi Likokola Global Empowerment Foundation (TLGEF) is a nonprofit organization founded by internationally recognized author, former fashion model, entrepreneur, and humanitarian Tausi Likokola. Based in Georgia, United States, with a global mission focused on East Africa and Tanzania, TLGEF is dedicated to empowering vulnerable communities through education, healthcare, legal advocacy, mentorship, and sustainable development initiatives. The foundation works to uplift women and girls by providing sanitary products, mentorship, workshops, and legal resources, while amplifying human rights and social justice.
      </p>
      <p>
        Our vision is a world where every woman, child, and underserved community has access to education, healthcare, legal support, and the tools to rise above poverty and injustice — empowering them to live with dignity and freedom. To achieve this, TLGEF implements core programs in education and literacy advancement, women’s health and sanitation initiatives, legal advocacy, workshops and mentorship, and global partnerships with organizations such as UNICEF, WHO, and USIDHR.
      </p>
      <p>
        TLGEF is structured under a Board of Directors led by Founder & President Tausi Likokola, Vice President Dr. Jackson Munuo, Secretary Neema Newton, and Treasurer Attorney James Harris. The foundation is in the process of completing its legal registration as a Georgia Nonprofit Corporation, filing for 501(c)(3) federal tax-exempt status, and obtaining an EIN.
      </p>
      <p>
        Our work directly supports the United Nations Sustainable Development Goals (SDGs), including ending poverty, promoting good health, advancing quality education, achieving gender equality, reducing inequalities, strengthening justice, and building partnerships for sustainable development.
      </p>
      <p>
        With a strong foundation of humanitarian service, Tausi Likokola brings years of experience as a human rights advocate and mentor, having co-founded The Tausi AIDS Fund (TAF) and contributed to numerous international charitable causes. Through TLGEF, she continues her lifelong commitment to empowering women, children, and underserved communities across Africa, the United States, and beyond.
      </p>
      
    </main>
    <TimelineSection />
    <ContactPage />
    <FooterSection />
    </>
  );
}
