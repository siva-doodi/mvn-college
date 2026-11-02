"use client";

import { useEffect, useRef } from "react";
import {
  UsersRound,
  CalendarDays,
  Star,
  Activity,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import { Text,Container } from "..";

const alumniFeatures = [
  {
    Icon: UsersRound,
    title: "Alumni Association",
    description:
      "A vibrant community of graduates who stay connected, mentor current students and contribute to the growth of MVN JS & RVR College of Arts & Science.",
    linkText: "Learn More",
  },
  {
    Icon: CalendarDays,
    title: "Alumni Meet",
    description:
      "Annual alumni gatherings that bring together graduates from all batches to celebrate shared memories, reconnect with faculty and strengthen relationships.",
    linkText: "View Alumni Meet",
  },
  {
    Icon: Star,
    title: "Distinguished Alumni",
    description:
      "Honouring graduates who have made outstanding contributions in their respective fields — academics, public service, business and entrepreneurship.",
    linkText: "Our Achievers",
  },
  {
    Icon: Activity,
    title: "Alumni Activities",
    description:
      "From guest lectures and mentorship programmes to community initiatives — our alumni actively engage with and enrich campus life year-round.",
    linkText: "See Activities",
  },
];

export default function AlumniSection() {
  const headingRef = useRef(null);
  const bannerRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const banner = bannerRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const button = buttonRef.current;

    const elements = [
      heading,
      banner,
      ...cards,
      button,
    ].filter(Boolean);

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
      id="alumni"
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
            max-w-[650px]
            flex-col
            items-center
            text-center

            opacity-0
            translate-y-10
            transition-all
            duration-700
            ease-out

            sm:mb-10
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
            ALUMNI & COMMUNITY
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
            Our Alumni Community
          </Text>

          <Text
            variant="small"
            color="body"
            align="center"
            className="
              mt-3
              max-w-[500px]
              text-[12px]
              leading-relaxed
              sm:text-[13px]
            "
          >
            Graduates who carry MVN&apos;s values forward — in their careers,
            communities and lives.
          </Text>

          {/* GOLD DIVIDER */}
          <span className="mt-4 h-[2px] w-12 bg-[#c3a365]" />
        </div>

        {/* ALUMNI STAT BANNER */}
        <div
          ref={bannerRef}
          className="
            mx-auto
            mb-10
            flex
            max-w-[870px]
            items-center
            rounded-[13px]
            bg-[#08776e]
            px-5
            py-6

            shadow-[0_8px_22px_rgba(0,107,99,0.18)]

            opacity-0
            translate-y-10
            transition-all
            duration-700
            ease-out

            sm:px-8
            sm:py-7
          "
          style={{
            transitionDelay: "120ms",
          }}
        >
          {/* ICON */}
          <div
            className="
              flex
              h-[54px]
              w-[54px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[rgba(255,255,255,0.12)]
              text-[#c3a365]

              sm:h-[58px]
              sm:w-[58px]
            "
          >
            <GraduationCap
              size={28}
              strokeWidth={1.8}
            />
          </div>

          {/* COUNT */}
          <div className="ml-4 sm:ml-5">
            <div className="flex items-end">
              <span
                className="
                  text-[34px]
                  font-bold
                  leading-none
                  text-white
                  sm:text-[38px]
                "
              >
                1,000
              </span>

              <span
                className="
                  mb-[2px]
                  ml-1
                  text-[24px]
                  font-bold
                  leading-none
                  text-[#c3a365]
                  sm:text-[27px]
                "
              >
                +
              </span>
            </div>

            <p
              className="
                mt-1
                text-[10px]
                font-bold
                tracking-[1px]
                text-[#dceae7]
                sm:text-[11px]
              "
            >
              REGISTERED ALUMNI
            </p>
          </div>

          {/* DIVIDER */}
          <div
            className="
              mx-5
              hidden
              h-[40px]
              w-px
              bg-[rgba(255,255,255,0.35)]
              sm:block
              lg:mx-7
            "
          />

          {/* DESCRIPTION */}
          <p
            className="
              hidden
              max-w-[450px]
              text-[11px]
              font-medium
              leading-[1.8]
              text-white
              sm:block
              sm:text-[11px]
            "
          >
            As reported in the college&apos;s published records — a growing
            network of proud MVN graduates.
          </p>
        </div>

        {/* ALUMNI CARDS */}
        <div
          className="
            mx-auto
            grid
            max-w-[870px]
            grid-cols-1
            gap-4

            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-[18px]
          "
        >
          {alumniFeatures.map(
            (
              {
                Icon,
                title,
                description,
                linkText,
              },
              index
            ) => (
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
                  min-h-[245px]
                  min-w-0
                  flex-col
                  rounded-[13px]
                  border
                  border-[#e4e8e5]
                  bg-[#fffdf9]
                  px-5
                  py-6

                  shadow-[0_4px_15px_rgba(0,0,0,0.045)]

                  opacity-0
                  translate-y-10
                  transition-all
                  duration-700
                  ease-out

                  hover:-translate-y-1
                  hover:border-[#c3a365]
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]

                  lg:min-h-[245px]
                  lg:px-5
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[44px]
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#e4efec]
                    text-[#006b63]

                    transition-all
                    duration-300

                    group-hover:bg-[#006b63]
                    group-hover:text-white
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                {/* TITLE */}
                <Text
                  as="h3"
                  variant="h3"
                  color="primary"
                  className="
                    mt-4
                    text-[14px]
                    font-bold
                    leading-tight
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
                    text-[10px]
                    leading-[1.9]
                    sm:text-[10px]
                  "
                >
                  {description}
                </Text>

                {/* LINK */}
                <button
                  className="
                    mt-auto
                    flex
                    items-center
                    gap-1
                    pt-4
                    text-left
                    text-[10px]
                    font-bold
                    text-[#c3a365]

                    transition-all
                    duration-300

                    hover:text-[#006b63]
                  "
                >
                  {linkText}

                  <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            )
          )}
        </div>

        {/* EXPLORE BUTTON */}
        <div
          ref={buttonRef}
          className="
            mt-10
            flex
            justify-center

            opacity-0
            translate-y-10
            transition-all
            duration-700
            ease-out
          "
          style={{
            transitionDelay: "500ms",
          }}
        >
          <button
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#08776e]
              px-7
              py-3
              text-[11px]
              font-bold
              text-white

              shadow-[0_6px_16px_rgba(0,107,99,0.22)]

              transition-all
              duration-300

              hover:-translate-y-[2px]
              hover:bg-[#006b63]
              hover:shadow-[0_10px_22px_rgba(0,107,99,0.28)]
            "
          >
            Explore Alumni

            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

      </Container>
    </section>
  );
}