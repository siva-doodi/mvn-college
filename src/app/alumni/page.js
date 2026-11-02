"use client";

import { useEffect, useRef } from "react";
import {
  Users,
  CalendarDays,
  Star,
  Activity,
  ArrowRight,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const alumniCards = [
  {
    Icon: Users,
    title: "Alumni Association",
    description:
      "A vibrant community of graduates who stay connected, mentor current students and contribute to the growth of MVN JS & RVR College of Arts & Science.",
    linkText: "Learn More",
    href: "/alumni/association",
  },
  {
    Icon: CalendarDays,
    title: "Alumni Meet",
    description:
      "Annual alumni gatherings that bring together graduates from all batches to celebrate shared memories, reconnect with faculty and inspire future students.",
    linkText: "View Alumni Meet",
    href: "/alumni/meet",
  },
  {
    Icon: Star,
    title: "Distinguished Alumni",
    description:
      "Honouring graduates who have made outstanding contributions in their respective fields — academics, public service, business and beyond.",
    linkText: "Our Achievers",
    href: "/alumni/achievers",
  },
  {
    Icon: Activity,
    title: "Alumni Activities",
    description:
      "From guest lectures and mentorship programmes to community initiatives — our alumni actively engage with and enrich campus life year-round.",
    linkText: "See Activities",
    href: "/alumni/activities",
  },
];

export default function AlumniPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll("[data-reveal]");

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8"
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
              "translate-y-8"
            );
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="min-h-screen w-full bg-[#f5f1e7] py-10 sm:py-12 lg:py-16"
    >
      <Container size="wide">
        <div
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-3 lg:gap-7
          "
        >
          {alumniCards.map(
            ({ Icon, title, description, linkText, href }, index) => (
              <article
                key={title}
                data-reveal
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className="
                  group flex min-w-0 min-h-[390px]
                  flex-col items-start
                  rounded-[20px]
                  border border-[#e7e9e6]
                  bg-white
                  px-7 py-8
                  shadow-[0_8px_25px_rgba(0,0,0,0.045)]
                  opacity-0 translate-y-8
                  transition-all duration-700 ease-out

                  hover:-translate-y-1
                  hover:border-[#c3a365]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]

                  sm:min-h-[400px]
                  lg:px-7 lg:py-9
                  xl:px-9
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex h-[87px] w-[87px]
                    shrink-0 items-center justify-center
                    rounded-[18px]
                    bg-gradient-to-br from-[#f1f0e7] to-[#d7ebe7]
                    text-[#006b63]
                    transition-all duration-300
                    group-hover:bg-[#006b63]
                    group-hover:text-white
                  "
                >
                  <Icon size={40} strokeWidth={1.7} />
                </div>

                {/* TITLE */}
                <Text
                  as="h2"
                  variant="h3"
                  color="primary"
                  className="
                    mt-5
                    text-[20px]
                    font-bold
                    leading-snug
                    sm:text-[19px]
                    lg:text-[19px]
                    xl:text-[21px]
                  "
                >
                  {title}
                </Text>

                {/* DESCRIPTION */}
                <Text
                  variant="body"
                  color="body"
                  className="
                    mt-6
                    text-[15px]
                    leading-[1.7]
                    sm:text-[14px]
                    lg:text-[14px]
                    xl:text-[15px]
                  "
                >
                  {description}
                </Text>

                {/* LINK */}
                <a
                  href={href}
                  className="
                    mt-auto inline-flex items-center gap-2
                    pt-6
                    text-[15px]
                    font-bold
                    text-[#c3a365]
                    transition-all duration-300
                    hover:gap-3
                    hover:text-[#006b63]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#006b63]
                  "
                >
                  {linkText}
                  <ArrowRight
                    size={19}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            )
          )}
        </div>
      </Container>
    </main>
  );
}