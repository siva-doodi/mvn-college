"use client";

import { useEffect, useRef } from "react";
import {
  BookOpen,
  FlaskConical,
  ChartNoAxesColumn,
  Monitor,
  ArrowRight,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const courses = [
  {
    Icon: BookOpen,
    code: "B.A.",
    title: "Bachelor of Arts",
    description:
      "A broad-based programme in the humanities and social sciences, developing critical thinking, communication and analytical skills across a range of disciplines.",
  },
  {
    Icon: FlaskConical,
    code: "B.Sc.",
    title: "Bachelor of Science",
    description:
      "A rigorous science programme fostering logical reasoning and scientific inquiry through core subjects in Mathematics, Physics, Chemistry, Botany and Zoology.",
  },
  {
    Icon: ChartNoAxesColumn,
    code: "B.Com.",
    title: "Bachelor of Commerce",
    description:
      "Prepares students for careers in business, finance and accounting with a strong foundation in commerce principles, including General and Computer Applications streams.",
  },
  {
    Icon: Monitor,
    code: "BCA",
    title: "Bachelor of Computer Applications",
    description:
      "An applied computing programme equipping students with essential knowledge in programming, software development and information technology for a digital career.",
  },
];

export default function CoursesSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const button = buttonRef.current;

    const elements = [heading, ...cards, button].filter(Boolean);

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
      id="courses"
      className="w-full bg-[#fffdf8] py-12 sm:py-14 lg:py-16 xl:py-[72px]"
    >
      <Container size="wide">
        {/* SECTION HEADING */}
        <div
          ref={headingRef}
          className="
            mx-auto mb-10
            flex max-w-[600px]
            flex-col items-center
            text-center
            opacity-0 translate-y-10
            transition-all duration-700 ease-out
            sm:mb-12 lg:mb-10
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
            ACADEMIC PROGRAMMES
          </Text>

          <Text
            as="h2"
            variant="h2"
            color="primary"
            className="
              text-[25px]
              font-bold
              leading-tight
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Courses & Programmes Offered
          </Text>

          <Text
            variant="small"
            color="body"
            align="center"
            className="
              mt-3
              max-w-[430px]
              text-[12px]
              leading-[1.7]
              sm:text-[13px]
            "
          >
            Explore diverse academic programmes designed to build
            knowledge, skills and opportunities for your future.
          </Text>

          {/* DECORATIVE DIVIDER */}
          <span className="mt-4 h-[2px] w-12 bg-[#c3a365]" />
        </div>

        {/* COURSE CARDS */}
        <div
          className="
            mx-auto grid max-w-[1120px]
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-[17px]
          "
        >
          {courses.map(({ Icon, code, title, description }, index) => (
            <div
              key={code}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              className="
                group relative
                flex min-w-0
                min-h-[270px]
                flex-col items-center
                overflow-hidden
                rounded-[13px]
                border border-[#eadcc2]
                bg-[#fffdf9]
                px-5 py-6
                text-center
                shadow-[0_4px_15px_rgba(0,0,0,0.045)]

                opacity-0 translate-y-10
                transition-all duration-700 ease-out

                hover:-translate-y-1
                hover:border-[#c3a365]
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]

                sm:min-h-[275px]
                lg:px-3
                xl:px-5
              "
            >
              {/* TOP GOLD BORDER */}
              <span
                className="
                  absolute left-4 right-4 top-0
                  h-[3px]
                  bg-[#c3a365]
                  transition-all duration-300
                  group-hover:left-0
                  group-hover:right-0
                "
              />

              {/* ICON */}
              <div
                className="
                  flex h-[54px] w-[54px]
                  shrink-0 items-center justify-center
                  rounded-full
                  bg-[#edf1ed]
                  text-[#006b63]
                  transition-all duration-300
                  group-hover:bg-[#006b63]
                  group-hover:text-white
                "
              >
                <Icon size={26} strokeWidth={1.7} />
              </div>

              {/* COURSE CODE */}
              <span
                className="
                  mt-3
                  inline-flex items-center justify-center
                  rounded-full
                  border border-[#e6d0a8]
                  bg-[#f7f0e3]
                  px-3 py-[2px]
                  text-[10px]
                  font-bold
                  leading-tight
                  tracking-wide
                  text-[#80602b]
                "
              >
                {code}
              </span>

              {/* COURSE TITLE */}
              <Text
                as="h3"
                variant="h3"
                color="primary"
                className="
                  mt-2
                  min-h-[22px]
                  text-[15px]
                  font-bold
                  leading-[1.3]
                  sm:text-[15px]
                "
              >
                {title}
              </Text>

              {/* COURSE DESCRIPTION */}
              <Text
                variant="small"
                color="body"
                align="center"
                className="
                  mt-2
                  text-[11px]
                  leading-[1.7]
                  sm:text-[11px]
                  lg:text-[10.5px]
                  xl:text-[11px]
                "
              >
                {description}
              </Text>
            </div>
          ))}
        </div>

        {/* EXPLORE BUTTON */}
        <div
          ref={buttonRef}
          className="
            mt-9 flex justify-center
            opacity-0 translate-y-10
            transition-all duration-700 ease-out
            sm:mt-10
          "
        >
          <a
            href="/courses"
            className="
              inline-flex items-center justify-center
              gap-2
              rounded-[7px]
              bg-[#006057]
              px-6 py-2.5
              text-[12px]
              font-semibold
              text-white
              shadow-[0_4px_12px_rgba(0,96,87,0.18)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#004d46]
              hover:shadow-lg
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#006057]
            "
          >
            Explore All Courses
            <ArrowRight size={15} />
          </a>
        </div>
      </Container>
    </section>
  );
}