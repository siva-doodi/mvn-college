"use client";

import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Building2,
  Users,
  Heart,
} from "lucide-react";

import { Text, Container } from "@/components";

const strengths = [
  {
    Icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Quality education across Arts, Science and Commerce, supported by experienced and dedicated faculty.",
  },
  {
    Icon: Building2,
    title: "Established Legacy",
    description:
      "Established in 1972, with a long-standing commitment to higher education in the Konaseema region.",
  },
  {
    Icon: Users,
    title: "Student Development",
    description:
      "Opportunities for academic learning, extracurricular activities, sports and overall personal development.",
  },
  {
    Icon: Heart,
    title: "Supportive Campus",
    description:
      "A welcoming and inclusive learning environment that encourages every student to grow and succeed.",
  },
];

export default function WhyChooseSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!heading) return;

    // HEADING OBSERVER
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.remove("opacity-0", "translate-y-8");
          heading.classList.add("opacity-100", "translate-y-0");
        } else {
          heading.classList.remove("opacity-100", "translate-y-0");
          heading.classList.add("opacity-0", "translate-y-8");
        }
      },
      {
        threshold: 0.2,
      }
    );

    headingObserver.observe(heading);

    // CARDS OBSERVER
    const cardObserver = new IntersectionObserver(
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

    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      headingObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      className="w-full bg-background-secondary py-12 sm:py-14 lg:py-16 xl:py-[72px]"
      id="why-choose-mvn"
    >
      <Container size="wide">

        {/* SECTION HEADING */}
        <div
          ref={headingRef}
          className="
            mb-9
            flex flex-col items-center text-center
            opacity-0 translate-y-8
            transition-all duration-700 ease-out
            sm:mb-10 lg:mb-9
          "
        >
          <Text
            variant="eyebrow"
            color="goldMuted"
            className="
              mb-3 text-[10px]
              tracking-[2px]
              sm:text-[11px]
            "
          >
            OUR STRENGTHS
          </Text>

          <Text
            as="h2"
            variant="h2"
            color="primary"
            className="
              text-[25px]
              font-bold
              leading-tight
              sm:text-[30px]
              md:text-[32px]
              lg:text-[34px]
            "
          >
            Why Choose MVN JS & RVR College?
          </Text>

          <span className="mt-4 h-[2px] w-12 bg-[#17106d] sm:mt-5" />
        </div>

        {/* STRENGTH CARDS */}
        <div
          className="
            grid grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-[18px]
          "
        >
          {strengths.map(({ Icon, title, description }, index) => (
            <div
              key={title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                group
                flex min-w-0 min-h-[205px]
                flex-col items-center
                rounded-[12px]
                border border-[#e9d9bb]
                bg-[#fffdf9]
                px-5 py-6
                text-center
                shadow-[0_4px_14px_rgba(0,0,0,0.04)]

                opacity-0 translate-y-10
                transition-all duration-700 ease-out

                hover:-translate-y-1
                hover:border-[#c3a365]
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]

                sm:min-h-[210px]
                lg:px-4
                xl:px-5
              "
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              {/* ICON */}
              <div
                className="
                  flex h-[54px] w-[54px]
                  shrink-0 items-center justify-center
                  rounded-full bg-[#edf1ed]
                  text-[#006b63]
                  transition-all duration-300
                  group-hover:bg-[#006b63]
                  group-hover:text-white
                "
              >
                <Icon size={27} strokeWidth={1.7} />
              </div>

              {/* TITLE */}
              <Text
                as="h3"
                variant="h3"
                color="primary"
                className="
                  mt-4
                  text-[16px]
                  font-bold
                  leading-snug
                  sm:text-[16px]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                {title}
              </Text>

              {/* DESCRIPTION */}
              <Text
                variant="small"
                color="body"
                className="
                  mt-3
                  max-w-[260px]
                  text-[12px]
                  leading-[1.65]
                  sm:text-[12px]
                  lg:text-[11px]
                  xl:text-[12px]
                "
              >
                {description}
              </Text>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}