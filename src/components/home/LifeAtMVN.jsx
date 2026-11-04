
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const activities = [
  {
    image: "/assets/Images/Nss.jpeg",
    title: "NSS & Community Service",
    slug: "nss-community-service",
    desc: "Students participate in the National Service Scheme, contributing to community welfare, social awareness programmes and rural development activities.",
    alt: "MVN college students participating in an NSS community service activity",
  },
  {
    image: "/assets/Images/Sports.jpeg",
    title: "Sports & Games",
    slug: "sports-and-games",
    desc: "The college encourages participation in sports and physical activities, helping students build fitness, discipline and a spirit of healthy competition.",
    alt: "MVN college students participating in a sports activity",
  },
  {
    image: "/assets/Images/Culturals.jpeg",
    title: "Cultural Activities",
    slug: "cultural-activities",
    desc: "Vibrant cultural events, college day celebrations and programmes that nurture creativity, artistic expression and a shared sense of community.",
    alt: "MVN college students performing a cultural dance",
  },
  {
    image: "/assets/Images/Seminars.jpeg",
    title: "Seminars & Workshops",
    slug: "seminars-and-workshops",
    desc: "Regular seminars, workshops and guest lectures that expose students to current academic developments, career guidance and skill-building opportunities.",
    alt: "Seminar or workshop conducted at MVN college",
  },
];

export default function LifeAtMVN() {
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
        if (heading) {
          heading.classList.toggle(
            "opacity-100",
            entry.isIntersecting
          );
          heading.classList.toggle(
            "translate-y-0",
            entry.isIntersecting
          );
          heading.classList.toggle(
            "opacity-0",
            !entry.isIntersecting
          );
          heading.classList.toggle(
            "translate-y-8",
            !entry.isIntersecting
          );
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
      id="campus-life"
      className="relative overflow-hidden bg-[#f5f1e7] py-20 sm:py-24 lg:py-28"
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
            STUDENT LIFE
            <span className="h-px w-7 bg-[#c3a365]" />
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#064b47] sm:text-4xl lg:text-5xl">
            Life at MVN
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647473] sm:text-base sm:leading-8">
            Learning, friendships and experiences that shape the future.
            Discover the activities and opportunities that make campus
            life memorable.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 bg-[#c3a365]" />
            <span className="h-2 w-2 rotate-45 bg-[#c3a365]" />
            <span className="h-[2px] w-10 bg-[#c3a365]" />
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {activities.map(({ image, title, desc, alt, slug }, index) => (
            <Link
              key={slug}
              href={`/life-at-mvn/${slug}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              className="group block translate-y-10 overflow-hidden rounded-2xl border border-[#e8e2d4] bg-white opacity-0 shadow-[0_5px_25px_rgba(6,75,71,0.05)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#c3a365]/60 hover:shadow-[0_18px_40px_rgba(6,75,71,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075e59]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden sm:h-52 lg:h-56">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#064b47]/65 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Gold Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#c3a365] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7">

                <h3 className="font-serif text-xl font-bold leading-snug text-[#064b47] transition-colors duration-300 group-hover:text-[#92723a]">
                  {title}
                </h3>

                {/* Gold Divider */}
                <div className="my-4 flex items-center gap-2">
                  <span className="h-[2px] w-9 bg-[#c3a365] transition-all duration-500 group-hover:w-14" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c3a365]" />
                </div>

                <p className="text-sm leading-7 text-[#647473]">
                  {desc}
                </p>

                {/* Bottom Icon */}
                <div className="mt-6 flex justify-end">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d4] text-[#92723a] transition-all duration-300 group-hover:border-[#075e59] group-hover:bg-[#075e59] group-hover:text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="text-sm font-medium text-[#647473] sm:text-base">
            More than education — experiences that last a lifetime.
          </p>

          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#c3a365]" />
        </div>

      </div>
    </section>
  );
}
