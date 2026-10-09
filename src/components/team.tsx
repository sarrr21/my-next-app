"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export type TeamMember = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  linkedin?: string;
  summary: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "board-member-2",
    name: "DR. JACKSON A. MUNUO",
    image: "/images/IMG_7216.PNG",
    imageAlt: "TLGEF board member",
    linkedin: "https://www.linkedin.com/in/jacksonmunuo",
    summary:"Cybersecurity and technology leader with 25+ years of experience, supporting TLGEF’s mission to empower underserved communities.",
    bio: "Dr. Jackson A. Munuo is a technology executive with more than 25 years of leadership experience in cybersecurity, technology governance, enterprise risk management, and organizational transformation. He serves as IT Vice President at CNA Financial, where he leads global technology risk and governance teams.He holds a Doctor of Engineering in Cybersecurity Analytics from George Washington University and is a certified CISSP, CISA, PMP, and ITIL professional. Dr. Munuo currently serves on the board of the Tausi Likokola Global Empowerment Foundation, where he is passionate about strengthening nonprofit organizations, improving governance, and expanding opportunities for underserved communities.",
  },
  {
    id: "board-member-3",
    name: "JAMES T. HARRIS, ESQ.",
    image: "/images/MARCH Headshot.jpg",
    imageAlt: "TLGEF board member",
    linkedin: "https://www.linkedin.com/in/jamestharris/",
    summary:
      "Business and legal leader with 30 years of experience, dedicated to advancing TLGEF’s mission and empowering communities.",
    bio: "James T. Harris, Esq. is a business and legal professional with 30 years of experience, including 20 years as Corporate Intellectual Property Counsel for UPS. He is the Founder of Trademark Creations, specializing in trademark maintenance, monitoring, and licensing.Mr. Harris has extensive experience in intellectual property, technology, advertising, sponsorships, contracts, and business agreements. He holds a law degree from Chicago-Kent College of Law, a Bachelor of Science in Mechanical Engineering from Tennessee State University, and an MBA from Emory University’s Goizueta Business School.He is also deeply committed to community service and has served on numerous nonprofit, education, and community boards, supporting initiatives that create opportunities and strengthen underserved communities.",
  },
  {
    id: "board-member-5",
    name: "DR. CEABERT GRIFFITH",
    image: "/images/IMGs.jpg",
    imageAlt: "TLGEF board member",
    linkedin: "https://www.linkedin.com/in/dr-ceabert-j-griffith-1609103b7/",
    summary:
      "Public health and wellness expert advancing TLGEF’s mission to promote health equity and empower underserved communities.",
    bio: "Dr. Ceabert Griffith is a Family Medicine and Public Health expert, wellness coach, and global public health consultant committed to health equity and community empowerment. He serves as an Adjunct Professor of Health Sciences at Touro University Worldwide and conducts research in biobehavioral science, focusing on lifestyle, environment, and long-term health outcomes.An award-winning health writer, Dr. Griffith has authored three books on wellness and preventive health. Inspired by his experience living in Okinawa, Japan, he combines evidence-based medicine with insights from Okinawan approaches to healthy aging and longevity. He brings his clinical, academic, and public health expertise to TLGEF, supporting its mission to uplift and empower underserved communities worldwide.",
  },
  {
    id: "board-member-4",
    name: "DR. VANESSA M. GRIFFITH",
    image: "/images/Vanessa.jpg",
    imageAlt: "TLGEF board member",
    linkedin: "https://www.linkedin.com/in/vanessamgriffith/",
    summary:
      "Public health and military leader advancing health, science, and community well-being.",
    bio: "Dr. Vanessa M. Griffith is a Doctor of Public Health, Army leader, and public health scientist whose multidisciplinary work bridges chemical and biological sciences, infectious disease epidemiology, and military leadership. Her scientific expertise includes tuberculosis, HIV, and SARS-CoV-2, with a focus on public health laboratory science and molecular epidemiology.",
  },
  {
    id: "board-member-5",
    name: "SARA GETNET",
    image: "/images/sara.jpg",
    imageAlt: "TLGEF board member",
    linkedin: "https://www.linkedin.com/in/sara-getnet/",
    summary:
      "Senior Software Engineer with 5+ years of experience, building TLGEF’s digital platform to advance its mission and community impact.",
    bio: "Sara Getnet is a Senior Software Engineer with over 5 years of experience building modern, scalable web applications. She specializes in full-stack development and led the design and development of the Tausi Likokola Global Empowerment Foundation (TLGEF) website, creating a modern digital platform to support the organization’s mission and community impact.",
  },
];

const linkedInIconClassName =
  "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0077B5] text-white hover:bg-[#006399] transition-colors";

function LinkedInButton({ member }: { member: TeamMember }) {
  const url = member.linkedin?.trim();

  const icon = <Linkedin className="h-4 w-4" aria-hidden />;

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={linkedInIconClassName}
        aria-label={`${member.name} on LinkedIn`}
      >
        {icon}
      </a>
    );
  }

  return (
    <span
      className={linkedInIconClassName}
      role="img"
      aria-label={`${member.name} on LinkedIn`}
    >
      {icon}
    </span>
  );
}

function BoardMemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="h-full bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden flex flex-col">
      <div className="aspect-[1] overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
          <LinkedInButton member={member} />
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1 min-h-0">
          {expanded ? member.bio : member.summary}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className={cn(
            "mt-auto pt-4 text-sm font-medium text-orange-600 hover:text-orange-700 text-left w-fit",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm"
          )}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex gap-2">
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2">
              ABOUT
            </p>
            <div className="w-16 h-0.5 bg-orange-400 mt-2" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            TLGEF Board Members
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {teamMembers.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
