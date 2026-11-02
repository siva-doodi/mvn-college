"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Building2,
  Users,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    Icon: GraduationCap,
    number: "01",
    title: "Academic Excellence",
    desc: "Quality education across Arts, Science and Commerce, supported by experienced and dedicated faculty.",
  },
  {
    Icon: Building2,
    number: "02",
    title: "Established Legacy",
    desc: "Established in 1972, with a long-standing commitment to higher education in the Konaseema region.",
  },
  {
    Icon: Users,
    number: "03",
    title: "Student Development",
    desc: "Opportunities for academic learning, extracurricular activities, sports and overall personal development.",
  },
  {
    Icon: Heart,
    number: "04",
    title: "Supportive Campus",
    desc: "A welcoming and inclusive learning environment that encourages every student to grow and succeed.",
  },
];

export default function WhyChooseSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const heading = headingRef.current;

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        setHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (heading) {
      headingObserver.observe(heading);
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          setVisibleCards((previous) => {
            if (entry.isIntersecting) {
              return previous.includes(index)
                ? previous
                : [...previous, index];
            }

            return previous.filter((item) => item !== index);
          });
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      headingObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="why-choose-mvn"
      className="relative overflow-hidden bg-background-secondary py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* --------------------------------
            Section Heading
        -------------------------------- */}

        <div
          ref={headingRef}
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-1000 ease-out sm:mb-16 ${
            headingVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-secondary" />

            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-muted">
              Our Strengths
            </span>

            <span className="h-px w-9 bg-secondary" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-[42px]">
            Why Choose MVN JS &amp; RVR College?
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-secondary" />

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-7 text-muted sm:text-base">
            Building a strong foundation for academic excellence, personal
            growth and a brighter future through quality education and
            meaningful opportunities.
          </p>
        </div>

        {/* --------------------------------
            Features Grid
        -------------------------------- */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map(({ Icon, number, title, desc }, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <article
                key={title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                data-index={index}
                className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-sm border border-secondary/20 bg-background-card p-7 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-secondary/60 hover:shadow-xl sm:p-8 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Number */}
                <span className="absolute right-6 top-5 font-serif text-4xl font-bold text-primary/5 transition-colors duration-500 group-hover:text-secondary/20">
                  {number}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-[68px] w-[68px] items-center justify-center rounded-sm border border-secondary/30 bg-background-secondary text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="font-serif text-xl font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-gold-muted">
                    {title}
                  </h3>

                  <p className="mt-4 font-sans text-sm leading-7 text-muted">
                    {desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-auto flex items-center justify-between pt-7">
                    <span className="h-[2px] w-10 bg-secondary transition-all duration-500 group-hover:w-16" />

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="text-gold-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </div>
                </div>

                {/* Bottom Hover Border */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}