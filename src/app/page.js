import { AboutSection, CoursesSection, FacilitiesSection, HeroSlider, NewsEvents,LeadershipSection,OrgChart, OurPrincipal,WhyChooseSection,LifeAtMVN,AchievementsSection,AlumniSection,ContactSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <LeadershipSection />
      <OurPrincipal />
      <OrgChart />
      <WhyChooseSection />
      <CoursesSection />
      <FacilitiesSection />
      <LifeAtMVN />
      <NewsEvents />
      <AchievementsSection />
      <AlumniSection />
      <ContactSection />
    </>
  );
}
