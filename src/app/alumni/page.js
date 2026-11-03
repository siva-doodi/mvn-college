
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
      { threshold: 0.12 }
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {alumniCards.map((card, index) => {
            const Icon = card.Icon;

            return (
              <article
                key={card.title}
                data-reveal
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className="group relative flex min-w-0 translate-y-10 flex-col overflow-hidden rounded-2xl border border-[#e8e2d4] bg-white p-7 opacity-0 shadow-[0_5px_25px_rgba(6,75,71,0.05)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#c3a365]/60 hover:shadow-[0_18px_40px_rgba(6,75,71,0.12)] sm:p-8"
              >
                {/* Top Gold Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#c3a365] transition-all duration-500 group-hover:w-full" />

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#075e59]/[0.03] transition-transform duration-700 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#075e59]/[0.07] text-[#075e59] transition-all duration-500 group-hover:bg-[#075e59] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#075e59]/20">
                  <Icon
                    size={30}
                    strokeWidth={1.6}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <Text
                  as="h2"
                  variant="h3"
                  color="primary"
                  className="font-serif text-xl font-bold leading-snug text-[#064b47] transition-colors duration-300 group-hover:text-[#92723a]"
                >
                  {card.title}
                </Text>

                {/* Divider */}
                <div className="my-5 flex items-center gap-2">
                  <span className="h-[2px] w-9 bg-[#c3a365] transition-all duration-500 group-hover:w-14" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c3a365]" />
                </div>

                {/* Description */}
                <Text
                  variant="body"
                  color="body"
                  className="flex-1 text-sm leading-7 text-[#647473]"
                >
                  {card.description}
                </Text>

                {/* Link */}
                <a
                  href={card.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#92723a] transition-all duration-300 hover:gap-3 hover:text-primary"
                >
                  {card.linkText}
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
