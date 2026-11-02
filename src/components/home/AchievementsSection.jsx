"use client";

import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  BookMarked,
  Star,
  TrendingUp,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const achievements = [
  {
    Icon: ShieldCheck,
    badge: "NAAC – B Grade",
    title: "Accredited by NAAC",
    description:
      "The college was accredited by the National Assessment and Accreditation Council (NAAC) with a B grade and a score of 2.78 in 2016.",
  },
  {
    Icon: BookMarked,
    badge: "UGC Recognised",
    title: "UGC Recognised Institution",
    description:
      "MVN JS & RVR College of Arts & Science operates as a UGC-recognised institution affiliated to Dr. B.R. Ambedkar Open University, offering approved undergraduate and postgraduate programmes.",
  },
  {
    Icon: Star,
    badge: "Recognised — Higher Education",
    title: "Centre of Excellence",
    description:
      "The institution has been recognised as a Centre of Excellence in higher education, committed to providing quality-based education to rural students at an affordable fee structure.",
  },
  {
    Icon: TrendingUp,
    badge: "Est. 1972",
    title: "Five Decades of Service",
    description:
      "Established in 1972, the college has served the Konaseema region for over five decades. It participates in the Unnat Bharat Abhiyan and the Andhra Pradesh State Skill Development Corporation initiatives.",
  },
];

export default function AchievementsSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    const elements = [heading, ...cards].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-10"
            );

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );
          } else {
            entry.target.classList.remove(
              "opacity-100",
              "translate-y-0"
            );

            entry.target.classList.add(
              "opacity-0",
              "translate-y-10"
            );
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      className="
        w-full
        bg-background-secondary
        py-14
        sm:py-16
        lg:py-[68px]
      "
    >
      <Container size="wide">

        {/* SECTION HEADING */}
        <div
          ref={headingRef}
          className="
            mx-auto
            mb-9
            flex
            max-w-[600px]
            flex-col
            items-center
            text-center

            opacity-0 translate-y-10
            transition-all duration-700 ease-out

            sm:mb-10
            lg:mb-10
          "
        >
          <Text
            variant="eyebrow"
            color="goldMuted"
            className="
              mb-2
              text-[10px]
              font-bold
              tracking-[2px]
              sm:text-[11px]
            "
          >
            RECOGNITION & MILESTONES
          </Text>

          <Text
            as="h2"
            variant="h2"
            color="primary"
            className="
              text-[26px]
              font-bold
              leading-tight
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Achievements & Accreditations
          </Text>

          <Text
            variant="small"
            color="body"
            align="center"
            className="
              mt-3
              text-[12px]
              leading-relaxed
              sm:text-[13px]
            "
          >
            Recognising our journey of academic excellence.
          </Text>

          {/* GOLD DIVIDER */}
          <span className="mt-4 h-[2px] w-12 bg-[#c3a365]" />
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div
          className="
            mx-auto
            grid
            max-w-[960px]
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-[18px]
          "
        >
          {achievements.map(
            ({ Icon, badge, title, description }, index) => (
              <div
                key={title}
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[250px]
                  min-w-0
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-[13px]
                  border
                  border-[#eadcc2]
                  bg-[#fffdf9]
                  px-4
                  py-6
                  text-center

                  shadow-[0_4px_15px_rgba(0,0,0,0.045)]

                  opacity-0 translate-y-10
                  transition-all duration-700 ease-out

                  hover:-translate-y-1
                  hover:border-[#c3a365]
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]

                  sm:min-h-[270px]
                  lg:min-h-[292px]
                  lg:px-3
                  xl:px-4
                "
              >
                {/* TOP GOLD BORDER */}
                <span
                  className="
                    absolute
                    left-4
                    right-4
                    top-0
                    h-[3px]
                    rounded-b-full
                    bg-[#c3a365]
                    transition-all duration-300
                    group-hover:left-0
                    group-hover:right-0
                  "
                />

                {/* ICON */}
                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#b9d3cf]
                    bg-[#eaf0ec]
                    text-[#006b63]
                    transition-all duration-300

                    group-hover:bg-[#006b63]
                    group-hover:text-white
                    group-hover:border-[#006b63]
                  "
                >
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                {/* BADGE */}
                <span
                  className="
                    mt-3
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#e5d0a9]
                    bg-[#f8f1e4]
                    px-3
                    py-[3px]
                    text-[9px]
                    font-semibold
                    leading-none
                    tracking-[0.2px]
                    text-[#8a682e]
                    sm:text-[9px]
                  "
                >
                  {badge}
                </span>

                {/* ACHIEVEMENT TITLE */}
                <Text
                  as="h3"
                  variant="h3"
                  color="primary"
                  className="
                    mt-2
                    text-[14px]
                    font-bold
                    leading-[1.3]
                    sm:text-[14px]
                  "
                >
                  {title}
                </Text>

                {/* DESCRIPTION */}
                <Text
                  variant="small"
                  color="body"
                  align="center"
                  className="
                    mt-3
                    max-w-[210px]
                    text-[10px]
                    leading-[1.8]
                    sm:text-[10px]
                    lg:text-[10px]
                  "
                >
                  {description}
                </Text>
              </div>
            )
          )}
        </div>

      </Container>
    </section>
  );
}