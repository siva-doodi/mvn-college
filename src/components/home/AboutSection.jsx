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
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
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
      ([entry]) => {
        setIsTextVisible(entry.isIntersecting);
      },
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
      ([entry]) => {
        setIsStatsVisible(entry.isIntersecting);
      },
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
        classrooms: Math.floor(
          targets.classrooms * easedProgress
        ),
        books: Math.floor(
          targets.books * easedProgress
        ),
        journals: Math.floor(
          targets.journals * easedProgress
        ),
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
      className="w-full bg-[#fffdf8] px-4 py-7 sm:px-5 sm:py-8 md:px-6 md:py-[50px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">

        {/* Section Heading */}

        <div className="mb-[22px] mt-0 md:mb-5">

          <span className="mb-[10px] inline-block text-[10px] font-extrabold tracking-[1.5px] text-[#92723a] sm:text-xs sm:tracking-[2px]">
            OUR HERITAGE • EST. 1972
          </span>

          <h2 className="font-serif m-0 text-[28px] font-bold leading-[1.2] text-[#075e59] sm:text-[32px] lg:text-[38px]">
            About MVN JS &amp; RVR College
          </h2>

        </div>

        {/* Main Content */}

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2">

          {/* College Image */}

          <div
            ref={visualRef}
            className={`
              group relative min-w-0 self-start overflow-hidden
              rounded-xl border border-[#c3a3658c]
              bg-[#f1eadc]
              shadow-[0_10px_28px_rgba(6,75,71,0.12)]
              transition-all duration-[600ms] ease-out
              sm:rounded-[18px]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
              hover:border-[#c3a365]
              hover:shadow-[0_16px_36px_rgba(6,75,71,0.2)]
            `}
          >

            <Image
              src="/"
              fill
              alt="MVN JS and RVR College campus buildings and emblem"
              priority={false}
              className={`
                block h-[300px] w-full object-cover object-center
                transition-transform duration-[900ms] ease-out
                sm:h-[400px]
                lg:h-[400px]
                ${
                  isVisible
                    ? "scale-[1.04]"
                    : "scale-100"
                }
                group-hover:scale-[1.07]
              `}
            />

            {/* Image Caption */}

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-[5px] bg-gradient-to-t from-[rgba(6,55,51,0.94)] to-transparent px-[14px] pb-[14px] pt-6 text-[#fffdf8] sm:px-[22px] sm:pb-[18px] sm:pt-[25px]">

              <span className="text-lg font-bold sm:text-[21px]">
                MVN JS &amp; RVR College
              </span>

              <span className="text-[13px] text-[#e8d4a8]">
                Malikipuram, Konaseema
              </span>

            </div>

          </div>

          {/* College Description */}

          <div
            ref={textRef}
            className="min-w-0 lg:-mt-20"
          >

            {/* Description Heading */}

            <h3
              className={`
                mb-[18px] text-[22px] font-bold
                leading-[1.35] text-[#064b47]
                transition-all duration-[600ms] ease-out
                lg:text-[28px]
                ${
                  isTextVisible
                    ? "translate-x-0 opacity-100 delay-100"
                    : "-translate-x-5 opacity-0"
                }
              `}
            >
              A Legacy of Learning Since 1972
            </h3>

            {/* Paragraph 1 */}

            <p
              className={`
                mb-[18px] text-[15px] leading-[1.75]
                text-[#354b4a] sm:text-base sm:leading-[1.85]
                lg:text-justify
                transition-all duration-[600ms] ease-out
                ${
                  isTextVisible
                    ? "translate-y-0 opacity-100 delay-[250ms]"
                    : "translate-y-3 opacity-0"
                }
              `}
            >
              Set in the rural pastoral surroundings of Konaseema,
              MVN JS &amp; RVR College of Arts &amp; Science was
              established in 1972 by the Antervedipalem Firka
              Development Trust, Malikipuram. The institution began
              with undergraduate programmes in Arts, Science and
              Commerce, serving the educational aspirations of the
              surrounding communities.
            </p>

            {/* Paragraph 2 */}

            <p
              className={`
                mb-[18px] text-[15px] leading-[1.75]
                text-[#354b4a] sm:text-base sm:leading-[1.85]
                lg:text-justify
                transition-all duration-[600ms] ease-out
                ${
                  isTextVisible
                    ? "translate-y-0 opacity-100 delay-[400ms]"
                    : "translate-y-3 opacity-0"
                }
              `}
            >
              Over the years, the college has grown steadily and
              earned appreciation from the public, affiliating
              universities and government authorities for its
              discipline, academic results and maintenance.
              It was affiliated with Andhra University until 2012
              and has been affiliated with Adikavi Nannaya University
              since 2013.
            </p>

            {/* Paragraph 3 */}

            <p
              className={`
                mb-[18px] text-[15px] leading-[1.75]
                text-[#354b4a] sm:text-base sm:leading-[1.85]
                lg:text-justify
                transition-all duration-[600ms] ease-out
                ${
                  isTextVisible
                    ? "translate-y-0 opacity-100 delay-[550ms]"
                    : "translate-y-3 opacity-0"
                }
              `}
            >
              The college has a longstanding UGC recognition history,
              with recognition under Section 12(B) in 1979 and
              Section 2(f) in 1981.
            </p>

            {/* Animated Statistics */}

            <div
              ref={statsRef}
              className="my-[26px] mb-[22px] grid grid-cols-3 gap-2 sm:gap-3"
            >

              {/* Classrooms */}

              <div className="flex min-h-[100px] flex-col justify-center rounded-xl border border-[#e6dac0] bg-[#f7f2e8] px-2 py-3 sm:min-h-[112px] sm:px-3 sm:py-4">

                <span className="mb-[7px] text-xl font-bold tabular-nums text-[#075e59] sm:text-[27px]">
                  {stats.classrooms}
                </span>

                <span
                  className={`
                    text-[11px] leading-[1.5] text-[#5c6965]
                    transition-all duration-500
                    sm:text-xs
                    ${
                      isStatsVisible
                        ? "translate-y-0 opacity-100 delay-100"
                        : "translate-y-2 opacity-0"
                    }
                  `}
                >
                  Classrooms across two blocks
                </span>

              </div>

              {/* Library Books */}

              <div className="flex min-h-[100px] flex-col justify-center rounded-xl border border-[#e6dac0] bg-[#f7f2e8] px-2 py-3 sm:min-h-[112px] sm:px-3 sm:py-4">

                <span className="mb-[7px] text-xl font-bold tabular-nums text-[#075e59] sm:text-[27px]">
                  {stats.books.toLocaleString("en-US")}
                </span>

                <span
                  className={`
                    text-[11px] leading-[1.5] text-[#5c6965]
                    transition-all duration-500
                    sm:text-xs
                    ${
                      isStatsVisible
                        ? "translate-y-0 opacity-100 delay-200"
                        : "translate-y-2 opacity-0"
                    }
                  `}
                >
                  Books in the library
                </span>

              </div>

              {/* Journals */}

              <div className="flex min-h-[100px] flex-col justify-center rounded-xl border border-[#e6dac0] bg-[#f7f2e8] px-2 py-3 sm:min-h-[112px] sm:px-3 sm:py-4">

                <span className="mb-[7px] text-xl font-bold tabular-nums text-[#075e59] sm:text-[27px]">
                  {stats.journals}
                </span>

                <span
                  className={`
                    text-[11px] leading-[1.5] text-[#5c6965]
                    transition-all duration-500
                    sm:text-xs
                    ${
                      isStatsVisible
                        ? "translate-y-0 opacity-100 delay-300"
                        : "translate-y-2 opacity-0"
                    }
                  `}
                >
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