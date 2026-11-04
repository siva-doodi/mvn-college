"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


export default function AboutSection() {
  const visualRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const [stats, setStats] = useState({
    classrooms: 0,
    books: 0,
    journals: 0,
  });

  // Image visibility observer
  useEffect(() => {
    const element = visualRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Text visibility observer
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsTextVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Statistics visibility observer
  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsStatsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Animated counter
  useEffect(() => {
    if (!isStatsVisible) {
      setStats({
        classrooms: 0,
        books: 0,
        journals: 0,
      });
      return;
    }

    const targets = {
      classrooms: 44,
      books: 17140,
      journals: 38,
    };

    const duration = 1600;
    let animationFrame;
    let startTime = null;

    function animate(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setStats({
        classrooms: Math.floor(targets.classrooms * easedProgress),
        books: Math.floor(targets.books * easedProgress),
        journals: Math.floor(targets.journals * easedProgress),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setStats(targets);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isStatsVisible]);

  return (
    <section
      id="about-college"
      className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold-muted sm:text-sm">
            Our Heritage • Est. 1972
          </span>

          <h2 className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            About MVN JS &amp; RVR College
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-secondary" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* College Image */}
          <div
            ref={visualRef}
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 scale-100 opacity-100"
                : "-translate-x-12 scale-[0.97] opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-secondary/30 bg-background-secondary p-3 shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/Vintage College Emblem Collage.png"
                  alt="MVN JS and RVR College campus buildings and emblem"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Image Caption */}
              <div className="flex flex-col gap-1 px-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-serif text-base font-bold text-primary sm:text-lg">
                  MVN JS &amp; RVR College
                </span>

                <span className="text-sm text-muted">
                  Malikipuram, Konaseema
                </span>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-2xl border-2 border-secondary/40" />
          </div>

          {/* College Description */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 ease-out ${
              isTextVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
              About Our Institution
            </span>

            <h3 className="mb-6 font-serif text-2xl font-bold leading-snug text-primary sm:text-3xl">
              A Legacy of Learning Since 1972
            </h3>

            <div className="space-y-5 text-sm leading-8 text-foreground sm:text-base">
              <p>
                Set in the rural pastoral surroundings of Konaseema,
                MVN JS &amp; RVR College of Arts &amp; Science was
                established in 1972 by the Antervedipalem Firka
                Development Trust, Malikipuram. The institution began
                with undergraduate programmes in Arts, Science and
                Commerce, serving the educational aspirations of the
                surrounding communities.
              </p>

              <p>
                Over the years, the college has grown steadily and
                earned appreciation from the public, affiliating
                universities and government authorities for its
                discipline, academic results and maintenance.
                It was affiliated with Andhra University until 2012
                and has been affiliated with Adikavi Nannaya University
                since 2013.
              </p>

              <p>
                The college has a longstanding UGC recognition history,
                with recognition under Section 12(B) in 1979 and
                Section 2(f) in 1981.
              </p>
            </div>

            {/* Statistics */}
            <div
              ref={statsRef}
              className={`mt-9 grid grid-cols-1 gap-4 border-t border-secondary/30 pt-7 transition-all duration-700 sm:grid-cols-3 ${
                isStatsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Classrooms */}
              <div className="border-b border-secondary/20 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-3">
                <span className="block font-serif text-3xl font-bold text-primary sm:text-4xl">
                  {stats.classrooms}
                  <span className="text-secondary">+</span>
                </span>

                <span className="mt-2 block text-xs leading-5 text-muted sm:text-sm">
                  Classrooms across two blocks
                </span>
              </div>

              {/* Books */}
              <div className="border-b border-secondary/20 pb-4 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-3">
                <span className="block font-serif text-3xl font-bold text-primary sm:text-4xl">
                  {stats.books.toLocaleString("en-US")}
                  <span className="text-secondary">+</span>
                </span>

                <span className="mt-2 block text-xs leading-5 text-muted sm:text-sm">
                  Books in the library
                </span>
              </div>

              {/* Journals */}
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-primary sm:text-4xl">
                  {stats.journals}
                  <span className="text-secondary">+</span>
                </span>

                <span className="mt-2 block text-xs leading-5 text-muted sm:text-sm">
                  Journals for students
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}