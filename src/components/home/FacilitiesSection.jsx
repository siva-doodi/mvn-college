"use client";

import { useEffect, useRef } from "react";
import {
  BookOpen,
  FlaskConical,
  School,
  Monitor,
  Bus,
  Wifi,
  ArrowRight,
} from "lucide-react";

const facilities = [
  {
    Icon: BookOpen,
    title: "Library",
    desc: "A well-stocked library offering a wide collection of textbooks, reference materials and periodicals to support students across all programmes.",
  },
  {
    Icon: FlaskConical,
    title: "Science Laboratories",
    desc: "Dedicated laboratories for Physics, Chemistry, Botany and Zoology, providing students with hands-on practical learning experiences.",
  },
  {
    Icon: School,
    title: "Classrooms",
    desc: "Spacious and well-ventilated classrooms that provide a comfortable and focused environment for effective teaching and learning.",
  },
  {
    Icon: Monitor,
    title: "Computer Labs",
    desc: "Equipped computer laboratories giving students access to essential computing tools and software for academic and practical coursework.",
  },
  {
    Icon: Bus,
    title: "Transportation",
    desc: "College transportation facilities that help students commute safely and conveniently from surrounding areas to the campus.",
  },
  {
    Icon: Wifi,
    title: "Digital Learning",
    desc: "Support for digital and technology-aided learning, helping students engage with modern educational resources and methods.",
  },
];

export default function FacilitiesSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    const observerOptions = {
      threshold: 0.12,
    };

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.remove("opacity-0", "translate-y-8");
          heading.classList.add("opacity-100", "translate-y-0");
        } else {
          heading.classList.add("opacity-0", "translate-y-8");
          heading.classList.remove("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    const cardsObserver = new IntersectionObserver(
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
            entry.target.classList.add(
              "opacity-0",
              "translate-y-10"
            );
            entry.target.classList.remove(
              "opacity-100",
              "translate-y-0"
            );
          }
        });
      },
      observerOptions
    );

    if (heading) headingObserver.observe(heading);

    cards.forEach((card) => {
      cardsObserver.observe(card);
    });

    return () => {
      headingObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="campus-facilities"
      className="relative overflow-hidden bg-background-secondary py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c3a365]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#075e59]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div
          ref={headingRef}
          className="mx-auto mb-14 max-w-3xl translate-y-8 text-center opacity-0 transition-all duration-1000 ease-out sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#92723a] sm:text-sm">
            <span className="h-px w-7 bg-[#c3a365]" />
            INFRASTRUCTURE
            <span className="h-px w-7 bg-[#c3a365]" />
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#064b47] sm:text-4xl lg:text-5xl">
            Campus Facilities
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647473] sm:text-base sm:leading-8">
            A supportive environment for learning, growth and development.
            Our campus provides the essential facilities to help students
            achieve academic excellence and build their future.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 bg-[#c3a365]" />
            <span className="h-2 w-2 rotate-45 bg-[#c3a365]" />
            <span className="h-[2px] w-10 bg-[#c3a365]" />
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {facilities.map(({ Icon, title, desc }, index) => (
            <div
              key={title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className="group relative translate-y-10 overflow-hidden rounded-2xl border border-[#e8e2d4] bg-white p-7 opacity-0 shadow-[0_5px_25px_rgba(6,75,71,0.04)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#c3a365]/60 hover:shadow-[0_18px_40px_rgba(6,75,71,0.10)] sm:p-8"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#c3a365] transition-all duration-500 group-hover:w-full" />

              {/* Decorative Circle */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#075e59]/[0.03] transition-transform duration-700 group-hover:scale-150" />

              {/* Icon */}
              <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#075e59]/[0.07] text-[#075e59] transition-all duration-500 group-hover:bg-[#075e59] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#075e59]/20">
                <Icon
                  size={30}
                  strokeWidth={1.6}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="relative font-serif text-xl font-bold text-[#064b47] transition-colors duration-300 group-hover:text-[#92723a] sm:text-2xl">
                {title}
              </h3>

              {/* Gold Divider */}
              <div className="my-5 flex items-center gap-2">
                <span className="h-[2px] w-10 bg-[#c3a365] transition-all duration-500 group-hover:w-16" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#c3a365]" />
              </div>

              {/* Description */}
              <p className="text-sm leading-7 text-[#647473] sm:text-[15px]">
                {desc}
              </p>

              {/* Bottom Decoration */}
              <div className="mt-7 flex items-center justify-end">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d4] text-[#92723a] transition-all duration-300 group-hover:border-[#075e59] group-hover:bg-[#075e59] group-hover:text-white">
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}