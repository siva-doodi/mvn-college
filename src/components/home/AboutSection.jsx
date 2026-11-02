"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Text, Container } from "@/components";

const statistics = [
  {
    key: "classrooms",
    value: 44,
    label: "Classrooms across two blocks",
  },
  {
    key: "books",
    value: 17140,
    label: "Books in the library",
  },
  {
    key: "journals",
    value: 38,
    label: "Journals for students",
  },
];

const initialStats = {
  classrooms: 0,
  books: 0,
  journals: 0,
};

export default function AboutSection() {
  const visualRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const [stats, setStats] = useState(initialStats);

  // IMAGE INTERSECTION OBSERVER
  useEffect(() => {
    const element = visualRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // TEXT INTERSECTION OBSERVER
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTextVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // STATISTICS INTERSECTION OBSERVER
  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStatsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // ANIMATED NUMBER COUNTER
  useEffect(() => {
    if (!isStatsVisible) {
      setStats(initialStats);
      return;
    }

    const targets = {
      classrooms: 44,
      books: 17140,
      journals: 38,
    };

    const duration = 1600;
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out animation
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
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isStatsVisible]);

  return (
    <section
      className="w-full overflow-hidden bg-[#fffdf8] py-12 sm:py-16 lg:py-20"
      id="about-college"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-2 lg:gap-8 xl:gap-10">

          {/* LEFT COLUMN - COLLEGE IMAGE */}
          <div className="w-full min-w-0">

            {/* SECTION LABEL */}
            <Text
              variant="eyebrow"
              color="goldMuted"
              className="mb-3 text-[12px] tracking-[2.5px] sm:text-[13px]"
            >
              OUR HERITAGE • EST. 1972
            </Text>

            {/* SECTION HEADING */}
            <Text
              as="h2"
              variant="h1"
              color="primary"
              className="
                mb-6
                text-[30px]
                leading-[1.15]
                sm:text-[34px]
                lg:text-[38px]
              "
            >
              About MVN JS & RVR College
            </Text>

            {/* COLLEGE IMAGE */}
            <div
              ref={visualRef}
              className={`
                relative aspect-[1.76/1]
                w-full overflow-hidden
                rounded-[18px]
                border border-[#e5d6b9]
                shadow-[0_15px_35px_rgba(0,0,0,0.10)]
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "translate-x-0 scale-100 opacity-100"
                    : "-translate-x-12 scale-[0.96] opacity-0"
                }
              `}
            >
              {/* BACKGROUND IMAGE */}
              <Image
                src="/images/about/college-about.jpg"
                alt="MVN JS & RVR College campus"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* DARK BOTTOM OVERLAY */}
              <div
                className="
                  absolute inset-x-0 bottom-0 z-10
                  h-[110px]
                  bg-gradient-to-t
                  from-[#003e38]/95
                  via-[#003e38]/50
                  to-transparent
                "
              />

              {/* COLLEGE LOGO */}
              <div
                className="
                  pointer-events-none absolute inset-0 z-10
                  flex items-center justify-center
                "
              >
                <Image
                  src="/images/Mvn_logo-Bg.png"
                  alt="MVN JS & RVR College emblem"
                  width={420}
                  height={420}
                  className="
                    h-[65%]
                    w-auto
                    max-w-[60%]
                    object-contain
                    drop-shadow-[0_5px_12px_rgba(0,0,0,0.25)]
                  "
                />
              </div>

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-4 left-5 z-20 flex flex-col">
                <Text
                  as="h3"
                  variant="h3"
                  color="white"
                  className="text-[19px] font-bold sm:text-[23px]"
                >
                  MVN JS & RVR College
                </Text>

                <Text
                  variant="small"
                  color="white"
                  className="mt-1 text-[13px] sm:text-[14px]"
                >
                  Malikipuram, Konaseema
                </Text>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - COLLEGE INFORMATION */}
          <div
            ref={textRef}
            className={`
              flex w-full min-w-0 flex-col lg:pt-5
              transition-all duration-1000 ease-out
              ${
                isTextVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            {/* RIGHT HEADING */}
            <Text
              as="h3"
              variant="h2"
              color="primaryDark"
              className="
                mb-5
                text-[27px]
                leading-tight
                sm:text-[20px]
                lg:text-[25px]
              "
            >
              A Legacy of Learning Since 1972
            </Text>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-5 text-justify">

              <Text
                variant="body"
                color="body"
                className="
                  text-[12px]
                  leading-[1.85]
                  md:text-[16px]
                "
              >
                Set in the rural pastoral surroundings of Konaseema, MVN JS
                & RVR College of Arts & Science was established in 1972 by
                the Antervedipalem Firka Development Trust, Malikipuram.
                The institution began with undergraduate programmes in
                Arts, Science and Commerce, serving the educational
                aspirations of the surrounding communities.
              </Text>

              <Text
                variant="body"
                color="body"
                className="
                  text-[12px]
                  leading-[1.85]
                  md:text-[16px]
                "
              >
                Over the years, the college has grown steadily and earned
                appreciation from the public, affiliating universities and
                government authorities for its discipline, academic results
                and maintenance. It was affiliated with Andhra University
                until 2012 and has been affiliated with Adikavi Nannaya
                University since 2013.
              </Text>

              <Text
                variant="body"
                color="body"
                className="
                  text-[12px]
                  leading-[1.85]
                  md:text-[16px]
                "
              >
                The college has a longstanding UGC recognition history,
                with recognition under Section 12(B) in 1979 and
                Section 2(f) in 1981.
              </Text>
            </div>

            {/* STATISTICS CARDS */}
            <div
              ref={statsRef}
              className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-3"
            >
              {statistics.map((item, index) => (
                <div
                  key={item.key}
                  style={{
                    transitionDelay: isStatsVisible
                      ? `${index * 150}ms`
                      : "0ms",
                  }}
                  className={`
                    flex min-h-[115px]
                    flex-col justify-center
                    rounded-[14px]
                    border border-[#e7d5b5]
                    bg-[#f7f2e8]
                    px-4 py-4
                    transition-all duration-700 ease-out
                    hover:-translate-y-1
                    hover:shadow-md
                    sm:min-h-[126px]
                    sm:px-3
                    lg:px-3
                    xl:px-4
                    ${
                      isStatsVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }
                  `}
                >
                  {/* NUMBER */}
                  <Text
                    as="h4"
                    variant="h2"
                    color="primary"
                    className="
                      text-[29px]
                      font-bold
                      leading-tight
                      sm:text-[27px]
                      lg:text-[29px]
                      xl:text-[32px]
                    "
                  >
                    {stats[item.key].toLocaleString("en-US")}
                  </Text>

                  {/* LABEL */}
                  <Text
                    variant="small"
                    color="muted"
                    className="
                      mt-1
                      text-[11px]
                      leading-relaxed
                      md:text-[12px]
                    "
                  >
                    {item.label}
                  </Text>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}