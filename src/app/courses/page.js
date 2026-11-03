"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
const courses = [
  {
    code: "B.A.",
    title: "Bachelor of Arts",
    desc: "A broad-based programme in the humanities and social sciences, developing critical thinking, communication and analytical skills across a range of disciplines.",
    slug: "bachelor-of-arts",
  },
  {
    code: "B.Sc.",
    title: "Bachelor of Science",
    desc: "A rigorous science programme fostering logical reasoning and scientific inquiry through core subjects in Mathematics, Physics, Chemistry, Botany and Zoology.",
    slug: "bachelor-of-science",
  },
  {
    code: "B.Com.",
    title: "Bachelor of Commerce",
    desc: "Prepares students for careers in business, finance and accounting with a strong foundation in commerce principles, including General and Computer Applications streams.",
    slug: "bachelor-of-commerce",
  },
  {
    code: "BCA",
    title: "Bachelor of Computer Applications",
    desc: "An applied computing programme equipping students with essential knowledge in programming, software development and information technology for a digital career.",
    slug: "bachelor-of-computer-applications",
  },
];

export default function CoursesPage() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        setHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
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
    <main className="relative overflow-hidden bg-background">
      {/* Page Banner */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-24">

        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-12">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-secondary" />

            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Academic Excellence
            </span>

            <span className="h-px w-9 bg-secondary" />
          </div>

          <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Courses &amp; Programmes
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-8 text-white/75 sm:text-base">
            Discover our undergraduate programmes designed to develop
            knowledge, practical skills and confidence for your future.
          </p>

          <div className="mx-auto mt-7 h-[3px] w-16 rounded-full bg-secondary" />

        </div>
      </section>

      {/* Courses Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">

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

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-secondary" />

              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-muted">
                Explore Our Courses
              </span>

              <span className="h-px w-9 bg-secondary" />
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-[42px]">
              Undergraduate Programmes
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-7 text-muted sm:text-base">
              Choose a programme that matches your interests and career
              aspirations. Our academic programmes provide opportunities
              for learning, development and professional growth.
            </p>

            <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-secondary" />

          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {courses.map((course, index) => {
              const isVisible = visibleCards.includes(index);

              return (
                <article
                  key={course.code}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  data-index={index}
                  className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-sm border border-secondary/20 bg-background-card shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-secondary/60 hover:shadow-xl ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 130}ms`,
                  }}
                >

                  {/* Gold Top Accent */}
                  <div className="h-[4px] w-full bg-secondary transition-all duration-500 group-hover:h-[6px] group-hover:bg-primary" />

                  <div className="flex flex-1 flex-col p-6 sm:p-7">

                    {/* Default Icon and Number */}
                    <div className="mb-7 flex items-center justify-between">

                      <div className="flex h-[66px] w-[66px] items-center justify-center rounded-sm border border-secondary/30 bg-background-secondary text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">

                        <GraduationCap
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
                      {course.code}
                    </span>

                    {/* Course Title */}
                    <h3 className="font-serif text-xl font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-gold-muted">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 flex-1 font-sans text-sm leading-7 text-muted">
                      {course.desc}
                    </p>

                    {/* Course Link */}
                    <div className="mt-7 flex items-center justify-between border-t border-secondary/20 pt-5">

                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-gold-muted"
                      >
                        View Details

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                      <span className="h-[2px] w-8 bg-secondary transition-all duration-500 group-hover:w-14" />

                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>
    </main>
  );
}