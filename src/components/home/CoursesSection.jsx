
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  BookOpen,
  FlaskConical,
  BarChart3,
  Monitor,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    Icon: BookOpen,
    code: "B.A.",
    title: "Bachelor of Arts",
    slug: "bachelor-of-arts",
    desc: "A broad-based programme in the humanities and social sciences, developing critical thinking, communication and analytical skills across a range of disciplines.",
  },
  {
    Icon: FlaskConical,
    code: "B.Sc.",
    title: "Bachelor of Science",
    slug: "bachelor-of-science",
    desc: "A rigorous science programme fostering logical reasoning and scientific inquiry through core subjects in Mathematics, Physics, Chemistry, Botany and Zoology.",
  },
  {
    Icon: BarChart3,
    code: "B.Com.",
    title: "Bachelor of Commerce",
    slug: "bachelor-of-commerce",
    desc: "Prepares students for careers in business, finance and accounting with a strong foundation in commerce principles, including General and Computer Applications streams.",
  },
  {
    Icon: Monitor,
    code: "BCA",
    title: "Bachelor of Computer Applications",
    slug: "bachelor-of-computer-applications",
    desc: "An applied computing programme equipping students with essential knowledge in programming, software development and information technology for a digital career.",
  },
];

export default function CoursesSection() {
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
      { threshold: 0.12 }
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
      id="courses-programmes"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
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
              Academic Programmes
            </span>

            <span className="h-px w-9 bg-secondary" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-[42px]">
            Courses &amp; Programmes Offered
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-7 text-muted sm:text-base">
            Explore diverse academic programmes designed to build knowledge,
            skills and opportunities for your future.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-secondary" />
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {courses.map(({ Icon, code, title, desc, slug }, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <Link
                key={slug}
                href={`/courses/${slug}`}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                data-index={index}
                style={{
                  transitionDelay: `${index * 130}ms`,
                }}
                className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-sm border border-secondary/20 bg-background-card shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-secondary/60 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Gold Top Accent */}
                <div className="h-[4px] w-full bg-secondary transition-all duration-500 group-hover:h-[6px] group-hover:bg-primary" />

                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  {/* Icon and Number */}
                  <div className="mb-7 flex items-center justify-between">

                    <div className="flex h-[66px] w-[66px] items-center justify-center rounded-sm border border-secondary/30 bg-background-secondary text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <span className="font-serif text-4xl font-bold text-primary/10 transition-colors duration-300 group-hover:text-secondary/30">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Course Code */}
                  <span className="mb-3 inline-flex w-fit items-center rounded-sm bg-secondary/10 px-3 py-1.5 font-sans text-xs font-bold tracking-wider text-gold-muted">
                    {code}
                  </span>

                  {/* Course Title */}
                  <h3 className="font-serif text-xl font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-gold-muted">
                    {title}
                  </h3>

                  {/* Course Description */}
                  <p className="mt-4 flex-1 font-sans text-sm leading-7 text-muted">
                    {desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-7 flex items-center justify-between border-t border-secondary/20 pt-5">
                    <span className="h-[2px] w-10 bg-secondary transition-all duration-500 group-hover:w-16" />

                    <ArrowRight
                      size={19}
                      strokeWidth={1.6}
                      className="text-primary transition-all duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </Link>
            );
          })}

        </div>

        {/* Explore Courses Button */}
        <div className="mt-12 flex justify-center sm:mt-14">
          <Link
            href="/academic/courses"
            className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-sans text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Explore All Courses

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
