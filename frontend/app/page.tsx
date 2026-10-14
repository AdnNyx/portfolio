import HeroSection from "@/components/sections/Hero";
import ProfileSection from "@/components/sections/Profile";
import ProjectGrid from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Intro Section - Full Height */}
      <HeroSection />
      <ProfileSection />
      <ProjectGrid />
      <Certificates />
      <ContactSection />
    </main>
  );
}
