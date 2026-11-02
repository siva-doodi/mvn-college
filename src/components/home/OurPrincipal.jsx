"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Text, Container } from "@/components";
export default function OurPrincipal() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  // INTERSECTION OBSERVER
  useEffect(() => {
    const contentElement = contentRef.current;
    const imageElement = imageRef.current;

    if (!contentElement || !imageElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;

          if (entry.target === contentElement) {
            setIsContentVisible(isIntersecting);
          }

          if (entry.target === imageElement) {
            setIsImageVisible(isIntersecting);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(contentElement);
    observer.observe(imageElement);

    return () => observer.disconnect();
  }, []);

  // STAGGERED ANIMATION DELAY
  const childAnimation = (index) => ({
    transitionDelay: isContentVisible ? `${index * 120}ms` : "0ms",
  });

  return (
    <section
      className="w-full overflow-hidden py-12 sm:py-16 lg:py-20"
      id="secretary-correspondent"
    >
      <Container size="wide">
        <div
          className="
            grid grid-cols-1
            items-center
            gap-9
            lg:grid-cols-[1.2fr_1fr]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* LEFT - LEADERSHIP CONTENT */}
            <div
            ref={imageRef}
            className={`
              mx-auto w-full max-w-[650px] min-w-0
              transition-all duration-1000 ease-out
              ${
                isImageVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }
            `}
          >
            <div
              className="
                group
                overflow-hidden
                rounded-[16px]
                border border-[#e7d2a9]
                bg-[#fffdf8]
                shadow-[0_15px_35px_rgba(0,0,0,0.13)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)]
              "
            >
              {/* PERSON IMAGE */}
              <div className="
                relative
                aspect-[1.45/1]
                w-full
                overflow-hidden
              ">
                <Image
                  src="/secretary.jpg"
                  alt="Sri M. V. Satyanarayana Murthy, Secretary and Correspondent"
                  fill
                  priority
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>

              {/* IMAGE CAPTION */}
              <div className="flex flex-col px-5 py-4 sm:px-6 sm:py-5">
                <Text
                  as="h3"
                  variant="h3"
                  color="primary"
                  className="
                    text-[19px]
                    font-bold
                    leading-snug
                    sm:text-[22px]
                  "
                >
                  Sri M. V. Satyanarayana Murthy
                </Text>

                <Text
                  variant="small"
                  color="muted"
                  className="mt-1 text-[13px] sm:text-[14px]"
                >
                  Secretary &amp; Correspondent
                </Text>

                <Text
                  variant="small"
                  color="muted"
                  className="mt-1 text-[13px] sm:text-[14px]"
                >
                  MVN JS &amp; RVR College
                </Text>
              </div>
            </div>
          </div>
          <div
            ref={contentRef}
            className={`
              flex min-w-0 flex-col
              transition-all duration-1000 ease-out
              ${
                isContentVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }
            `}
          >
            {/* SECTION LABEL */}
            <Text
              variant="eyebrow"
              color="goldMuted"
              style={childAnimation(0)}
              className={`
                mb-3
                text-[12px]
                tracking-[2.5px]
                sm:text-[13px]
                transition-all duration-700 ease-out
                ${
                  isContentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              OUR LEADERSHIP
            </Text>

            {/* MAIN HEADING */}
            <Text
              as="h2"
              variant="h1"
              color="primary"
              style={childAnimation(1)}
              className={`
                mb-5
                text-[30px]
                leading-[1.15]
                sm:text-[36px]
                lg:text-[38px]
                xl:text-[42px]
                transition-all duration-700 ease-out
                ${
                  isContentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              Secretary & Correspondent
            </Text>

            {/* PERSON NAME */}
            <Text
              as="h3"
              variant="h3"
              color="primaryDark"
              style={childAnimation(2)}
              className={`
                mb-5
                text-[21px]
                font-bold
                leading-snug
                sm:text-[25px]
                lg:text-[27px]
                transition-all duration-700 ease-out
                ${
                  isContentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              Sri M. V. Satyanarayana Murthy
            </Text>

            {/* DECORATIVE DIVIDER */}
            <div
              style={childAnimation(3)}
              className={`
               
                bg-[#c3a365]
                transition-all duration-700 ease-out
                ${
                  isContentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            />

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-5 text-justify">
              <Text
                variant="body"
                color="body"
                style={childAnimation(4)}
                className={`
                  text-[14px]
                  leading-[1.85]
                  sm:text-[14px]
                  lg:text-[16px]
                  transition-all duration-700 ease-out
                  ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
              >
                Sri M. V. Satyanarayana Murthy serves as the Secretary
                &amp; Correspondent of MVN JS &amp; RVR College of Arts
                &amp; Science. He contributes to the institution&apos;s
                administration, development, and educational mission,
                supporting its continued growth and service to the
                community.
              </Text>

              <Text
                variant="body"
                color="body"
                style={childAnimation(5)}
                className={`
                  text-[14px]
                  leading-[1.85]
                  sm:text-[14px]
                  lg:text-[16px]
                  transition-all duration-700 ease-out
                  ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
              >
                His role supports the smooth functioning of the
                institution and its commitment to providing a
                supportive learning environment for students and staff.
              </Text>

              <Text
                variant="body"
                color="body"
                style={childAnimation(6)}
                className={`
                  text-[14px]
                  leading-[1.85]
                  sm:text-[14px]
                  lg:text-[16px]
                  transition-all duration-700 ease-out
                  ${
                    isContentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
              >
                Through his continued guidance and commitment, the
                institution strives to strengthen its academic standards,
                improve educational opportunities, and nurture an
                environment that encourages students to develop their
                knowledge, skills, and values for a successful future.
              </Text>
            </div>
          </div>

          {/* RIGHT - LEADERSHIP IMAGE CARD */}
        
        </div>
      </Container>
    </section>
  );
}