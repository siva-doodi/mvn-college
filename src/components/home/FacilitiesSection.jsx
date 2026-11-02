"use client";

import { useEffect, useRef } from "react";
import {
  BookOpen,
  FlaskConical,
  School,
  Monitor,
  Bus,
  Wifi,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const facilities = [
  {
    Icon: BookOpen,
    title: "Library",
    description:
      "A well-stocked library offering a wide collection of textbooks, reference materials and periodicals to support students across all programmes.",
  },
  {
    Icon: FlaskConical,
    title: "Science Laboratories",
    description:
      "Dedicated laboratories for Physics, Chemistry, Botany and Zoology, providing students with hands-on practical learning experiences.",
  },
  {
    Icon: School,
    title: "Classrooms",
    description:
      "Spacious and well-ventilated classrooms that provide a comfortable and focused environment for effective teaching and learning.",
  },
  {
    Icon: Monitor,
    title: "Computer Labs",
    description:
      "Equipped computer laboratories giving students access to essential computing tools and software for academic and practical coursework.",
  },
  {
    Icon: Bus,
    title: "Transportation",
    description:
      "College transportation facilities that help students commute safely and conveniently from surrounding areas to the campus.",
  },
  {
    Icon: Wifi,
    title: "Digital Learning",
    description:
      "Support for digital and technology-aided learning, helping students engage with modern educational resources and methods.",
  },
];

export default function FacilitiesSection() {
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
      id="campus-facilities"
      className="
        w-full
        bg-background-secondary
        py-14 sm:py-16 lg:py-[68px]
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
            INFRASTRUCTURE
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
            Campus Facilities
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
            A supportive environment for learning, growth and development.
          </Text>

          {/* GOLD DIVIDER */}
          <span className="mt-4 h-[2px] w-12 bg-[#c3a365]" />
        </div>

        {/* FACILITIES GRID */}
        <div
          className="
            mx-auto
            grid
            max-w-[1000px]
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-[18px]
          "
        >
          {facilities.map(({ Icon, title, description }, index) => (
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
                flex
                min-h-[210px]
                min-w-0
                flex-col
                items-center
                rounded-[13px]
                border
                border-[#eadcc2]
                bg-[#fffdf9]
                px-5
                py-6
                text-center

                shadow-[0_4px_15px_rgba(0,0,0,0.045)]

                opacity-0 translate-y-10
                transition-all duration-700 ease-out

                hover:-translate-y-1
                hover:border-[#c3a365]
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]

                sm:min-h-[210px]
                lg:px-4
                xl:px-5
              "
            >
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
                  bg-[#eaf0ec]
                  text-[#006b63]
                  transition-all duration-300

                  group-hover:bg-[#006b63]
                  group-hover:text-white
                "
              >
                <Icon size={25} strokeWidth={1.7} />
              </div>

              {/* FACILITY TITLE */}
              <Text
                as="h3"
                variant="h3"
                color="primary"
                className="
                  mt-4
                  text-[15px]
                  font-bold
                  leading-tight
                  sm:text-[15px]
                "
              >
                {title}
              </Text>

              {/* SMALL DIVIDER */}
              <span
                className="
                  mt-2
                  h-[1.5px]
                  w-7
                  bg-[#c3a365]
                  transition-all duration-300
                  group-hover:w-12
                "
              />

              {/* DESCRIPTION */}
              <Text
                variant="small"
                color="body"
                align="center"
                className="
                  mt-3
                  max-w-[290px]
                  text-[11px]
                  leading-[1.7]
                  sm:text-[11px]
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