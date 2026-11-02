"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "Annual College Event",
    tag: "Event",
    title: "Annual College Day Celebration",
    desc: "MVN JS & RVR College celebrates its Annual Day, honouring student achievements in academics, sports and cultural activities with great enthusiasm.",
    image: "/assets/Images/news-annual-day.jpg",
  },
  {
    id: 2,
    date: "Admissions – 2026–27",
    tag: "Notice",
    title: "Admissions Open – Academic Year 2026–27",
    desc: "Applications are now open for all undergraduate programmes. Join MVN JS & RVR College for quality education in Arts, Science and Commerce.",
    image: "/assets/Images/news-admissions.jpg",
  },
  {
    id: 3,
    date: "Seminar & Workshop",
    tag: "Workshop",
    title: "Skill Development Workshop",
    desc: "An interactive workshop session organised for students, featuring expert guidance on career skills, academic growth and personal development.",
    image: "/assets/Images/news-workshop.jpg",
  },
];

const tagColors = {
  Event: "bg-[#075e59]/10 text-[#075e59]",
  Notice: "bg-[#c3a365]/20 text-[#7a5c28]",
  Workshop: "bg-[#2c5aa0]/10 text-[#1a4a7a]",
};

export default function NewsEvents() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (heading) {
          heading.classList.toggle("opacity-100", entry.isIntersecting);
          heading.classList.toggle("translate-y-0", entry.isIntersecting);
          heading.classList.toggle("opacity-0", !entry.isIntersecting);
          heading.classList.toggle("translate-y-8", !entry.isIntersecting);
        }
      },
      { threshold: 0.2 }
    );

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "opacity-100",
            entry.isIntersecting
          );
          entry.target.classList.toggle(
            "translate-y-0",
            entry.isIntersecting
          );
          entry.target.classList.toggle(
            "opacity-0",
            !entry.isIntersecting
          );
          entry.target.classList.toggle(
            "translate-y-10",
            !entry.isIntersecting
          );
        });
      },
      { threshold: 0.1 }
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
      id="news-events"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
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
            NEWS &amp; EVENTS
            <span className="h-px w-7 bg-[#c3a365]" />
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#064b47] sm:text-4xl lg:text-5xl">
            Latest News &amp; Events
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647473] sm:text-base sm:leading-8">
            Stay connected with the latest happenings at MVN. Explore
            college events, announcements, workshops and student
            achievements.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 bg-[#c3a365]" />
            <span className="h-2 w-2 rotate-45 bg-[#c3a365]" />
            <span className="h-[2px] w-10 bg-[#c3a365]" />
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {newsItems.map(({ id, date, tag, title, desc, image }, index) => (
            <article
              key={id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                transitionDelay: `${index * 130}ms`,
              }}
              className="group translate-y-10 overflow-hidden rounded-2xl border border-[#e8e2d4] bg-white opacity-0 shadow-[0_5px_25px_rgba(6,75,71,0.05)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#c3a365]/60 hover:shadow-[0_18px_40px_rgba(6,75,71,0.12)]"
            >
              {/* Image Panel */}
              <div className="relative h-60 overflow-hidden sm:h-64">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#064b47]/50 via-transparent to-transparent" />

                {/* Category Badge */}
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-bold tracking-wide ${tagColors[tag] || tagColors.Event}`}
                >
                  {tag}
                </span>

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#c3a365] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7">

                {/* Date */}
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-[#92723a]">
                  <CalendarDays size={15} strokeWidth={1.8} />
                  <span>{date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold leading-snug text-[#064b47] transition-colors duration-300 group-hover:text-[#92723a] sm:text-2xl">
                  {title}
                </h3>

                {/* Divider */}
                <div className="my-5 flex items-center gap-2">
                  <span className="h-[2px] w-10 bg-[#c3a365] transition-all duration-500 group-hover:w-16" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c3a365]" />
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-[#647473]">
                  {desc}
                </p>

                {/* Read More */}
                <a
                  href="#news-events"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#075e59] transition-all duration-300 hover:gap-3 hover:text-[#92723a]"
                >
                  Read More
                  <ArrowRight size={16} strokeWidth={2} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <a
            href="#news-events"
            className="group inline-flex items-center gap-3 rounded-full bg-[#075e59] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#075e59]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#064b47] hover:shadow-xl"
          >
            View All News
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}