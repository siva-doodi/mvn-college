"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  BookMarked,
  Star,
  TrendingUp,
} from "lucide-react";

const items = [
  {
    Icon: ShieldCheck,
    label: "NAAC Accreditation",
    headline: "Accredited by NAAC",
    slug: "naac-accreditation",
    detail:
      "The college was accredited by the National Assessment and Accreditation Council (NAAC) with a B grade and a score of 2.78 in 2016.",
    badge: "NAAC – B Grade",
  },
  {
    Icon: BookMarked,
    label: "UGC Recognition",
    headline: "UGC Recognised Institution",
     slug: "naac-accreditation",
    detail:
      "MVN JS & RVR College of Arts & Science operates as a UGC-recognised institution affiliated to Dr. B.R. Ambedkar Open University, offering approved undergraduate and postgraduate programmes.",
    badge: "UGC Recognised",
  },
  {
    Icon: Star,
    label: "Centre of Excellence",
    headline: "Centre of Excellence",
     slug: "naac-accreditation",
    detail:
      "The institution has been recognised as a Centre of Excellence in higher education, committed to providing quality, value-based education to rural students at an affordable fee structure.",
    badge: "Recognised — Higher Education",
  },
  {
    Icon: TrendingUp,
    label: "Academic Milestones",
    headline: "Five Decades of Service",
     slug: "naac-accreditation",
    detail:
      "Established in 1972, the college has served the Konaseema region for over five decades. It participates in the Unnat Bharat Abhiyan and the Andhra Pradesh State Skill Development Corporation initiatives.",
    badge: "Est. 1972",
  },
];

export default function Achievements() {
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
      { threshold: 0.12 }
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
      id="achievements"
      className="relative overflow-hidden  bg-background-secondary py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#c3a365]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#075e59]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div
          ref={headingRef}
          className="mx-auto mb-14 max-w-3xl translate-y-8 text-center opacity-0 transition-all duration-1000 ease-out sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#92723a] sm:text-sm">
            <span className="h-px w-7 bg-[#c3a365]" />
            RECOGNITION &amp; MILESTONES
            <span className="h-px w-7 bg-[#c3a365]" />
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#064b47] sm:text-4xl lg:text-5xl">
            Achievements &amp; Accreditations
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647473] sm:text-base sm:leading-8">
            Recognising our journey of academic excellence and our
            commitment to quality education, institutional growth and
            student development.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 bg-[#c3a365]" />
            <span className="h-2 w-2 rotate-45 bg-[#c3a365]" />
            <span className="h-[2px] w-10 bg-[#c3a365]" />
          </div>
        </div>

        {/* Achievement Cards */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {items.map(
            ({ Icon, label, headline, detail, badge, slug }, index) => (
              <Link
                key={label}
                href={`/achievements/${slug}`}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                style={{
                  transitionDelay: `${index * 130}ms`,
                }}
                className="group relative block translate-y-10 overflow-hidden rounded-2xl border border-[#e8e2d4] bg-white p-7 opacity-0 shadow-[0_5px_25px_rgba(6,75,71,0.05)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#c3a365]/60 hover:shadow-[0_18px_40px_rgba(6,75,71,0.12)] sm:p-8"
              >
                {/* Top Gold Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#c3a365] transition-all duration-500 group-hover:w-full" />

                {/* Decorative Circle */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#075e59]/[0.03] transition-transform duration-700 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#075e59]/[0.07] text-[#075e59] transition-all duration-500 group-hover:bg-[#075e59] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#075e59]/20">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Label */}
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#92723a]">
                  {label}
                </span>

                {/* Headline */}
                <h3 className="mt-3 min-h-[60px] font-serif text-xl font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-[#92723a]">
                  {headline}
                </h3>

                {/* Divider */}
                <div className="my-5 flex items-center gap-2">
                  <span className="h-[2px] w-9 bg-[#c3a365] transition-all duration-500 group-hover:w-14" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c3a365]" />
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-[#647473]">
                  {detail}
                </p>
              </Link>
            )
          )}
        </div>

      </div>
    </section>
  );
}