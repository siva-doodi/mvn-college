"use client";

import { useEffect, useRef } from "react";
import {
  Users,
  CalendarDays,
  Star,
  Activity,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const ALUMNI_CARDS = [
  {
    id: 1,
    icon: Users,
    title: "Alumni Association",
    description:
      "A vibrant community of graduates who stay connected, mentor current students and contribute to the growth of MVN JS & RVR College of Arts & Science.",
    link: "https://mvnjsrvrcollege.ac.in/page.php?id=alumni-meet&type=alumni",
    linkLabel: "Learn More",
  },
  {
    id: 2,
    icon: CalendarDays,
    title: "Alumni Meet",
    description:
      "Annual alumni gatherings that bring together graduates from all batches to celebrate shared memories, reconnect with faculty and inspire future students.",
    link: "https://mvnjsrvrcollege.ac.in/page.php?id=alumni-meet&type=alumni",
    linkLabel: "View Alumni Meet",
  },
  {
    id: 3,
    icon: Star,
    title: "Distinguished Alumni",
    description:
      "Honouring graduates who have made outstanding contributions in their respective fields — academics, public service, business and beyond.",
    link: "https://mvnjsrvrcollege.ac.in/page.php?id=alumni-meet&type=alumni",
    linkLabel: "Our Achievers",
  },
  {
    id: 4,
    icon: Activity,
    title: "Alumni Activities",
    description:
      "From guest lectures and mentorship programmes to community initiatives — our alumni actively engage with and enrich campus life year-round.",
    link: "https://mvnjsrvrcollege.ac.in/page.php?id=alumni-meet&type=alumni",
    linkLabel: "See Activities",
  },
];

const ALUMNI_URL =
  "https://mvnjsrvrcollege.ac.in/page.php?id=alumni-meet&type=alumni";

export default function AlumniSection() {
  const statRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observers = [];

    const observeElement = (element, visibleClasses, hiddenClasses) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibleClasses.forEach((className) =>
            element.classList.toggle(className, entry.isIntersecting)
          );

          hiddenClasses.forEach((className) =>
            element.classList.toggle(className, !entry.isIntersecting)
          );
        },
        { threshold: 0.15 }
      );

      observer.observe(element);
      observers.push(observer);
    };

    observeElement(
      statRef.current,
      ["opacity-100", "translate-y-0"],
      ["opacity-0", "translate-y-8"]
    );

    cardsRef.current.forEach((card) => {
      observeElement(
        card,
        ["opacity-100", "translate-y-0"],
        ["opacity-0", "translate-y-10"]
      );
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section
      id="alumni"
      className="relative overflow-hidden bg-background-secondary  py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c3a365]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#075e59]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#92723a] sm:text-sm">
            <span className="h-px w-7 bg-[#c3a365]" />
            ALUMNI &amp; COMMUNITY
            <span className="h-px w-7 bg-[#c3a365]" />
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#064b47] sm:text-4xl lg:text-5xl">
            Our Alumni Community
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647473] sm:text-base sm:leading-8">
            Graduates who carry MVN&apos;s values forward — in their
            careers, communities and lives.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 bg-[#c3a365]" />
            <span className="h-2 w-2 rotate-45 bg-[#c3a365]" />
            <span className="h-[2px] w-10 bg-[#c3a365]" />
          </div>
        </div>

        {/* Alumni Statistics Banner */}
        <div
          ref={statRef}
          className="relative mb-12 translate-y-8 overflow-hidden rounded-2xl bg-[#064b47] p-7 opacity-0 shadow-xl shadow-[#064b47]/10 transition-all duration-1000 ease-out sm:mb-16 sm:p-10 lg:p-12"
        >
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-5 -top-12 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-[#c3a365]/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-7 text-center md:flex-row md:justify-between md:text-left">

            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#c3a365]/30 bg-white/10 text-[#e2c58d]">
              <GraduationCap size={42} strokeWidth={1.5} />
            </div>

            {/* Number and Label */}
            <div className="flex flex-col items-center md:items-start">
              <div className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl">
                1,000
                <span className="text-[#c3a365]">+</span>
              </div>

              <span className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#e2c58d]">
                Registered Alumni
              </span>
            </div>

            {/* Description */}
            <div className="max-w-md md:ml-auto">
              <p className="text-sm leading-7 text-white/75 sm:text-base">
                As reported in the college&apos;s published records — a
                growing network of proud MVN graduates connected through
                shared experiences and achievements.
              </p>
            </div>
          </div>
        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {ALUMNI_CARDS.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className="group relative flex translate-y-10 flex-col overflow-hidden rounded-2xl border border-[#e8e2d4] bg-white p-7 opacity-0 shadow-[0_5px_25px_rgba(6,75,71,0.05)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#c3a365]/60 hover:shadow-[0_18px_40px_rgba(6,75,71,0.12)] sm:p-8"
              >
                {/* Top Gold Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#c3a365] transition-all duration-500 group-hover:w-full" />

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#075e59]/[0.03] transition-transform duration-700 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#075e59]/[0.07] text-[#075e59] transition-all duration-500 group-hover:bg-[#075e59] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#075e59]/20">
                  <Icon
                    size={30}
                    strokeWidth={1.6}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold leading-snug text-[#064b47] transition-colors duration-300 group-hover:text-[#92723a]">
                  {card.title}
                </h3>

                {/* Divider */}
                <div className="my-5 flex items-center gap-2">
                  <span className="h-[2px] w-9 bg-[#c3a365] transition-all duration-500 group-hover:w-14" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c3a365]" />
                </div>

                {/* Description */}
                <p className="flex-1 text-sm leading-7 text-[#647473]">
                  {card.description}
                </p>

                {/* Link */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#92723a] transition-all duration-300 hover:gap-3 hover:text-primary "
                >
                  {card.linkLabel}
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

        {/* Explore Alumni CTA */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <a
            href={ALUMNI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#075e59] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#075e59]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#064b47] hover:shadow-xl"
          >
            Explore Alumni
            <ArrowRight
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}