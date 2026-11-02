import { AboutSection, CoursesSection, FacilitiesSection, HeroSlider, LeadershipSection, OurPrincipal,WhyChooseSection,LifeAtMVN,AchievementsSection,AlumniSection,ContactSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <LeadershipSection />
      <OurPrincipal />
      <WhyChooseSection />
      <CoursesSection />
      <FacilitiesSection />
      <LifeAtMVN />
      <AchievementsSection />
      <AlumniSection />
      <ContactSection />
    </>
  );
}
