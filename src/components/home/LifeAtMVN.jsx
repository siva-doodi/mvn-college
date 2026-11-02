"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Text } from "@/components";
import Container from "@/components/ui/Container";

const activities = [
  {
    title: "NSS & Community Service",
    description:
      "Students participate in the National Service Scheme, contributing to community welfare, social awareness programmes and rural development activities.",
    image: "/images/life/nss-community.jpg",
    alt: "Students participating in NSS community service activities",
  },
  {
    title: "Sports & Games",
    description:
      "The college encourages participation in sports and physical activities, helping students build fitness, discipline and a spirit of healthy competition.",
    image: "/images/life/sports.jpg",
    alt: "Students participating in college sports activities",
  },
  {
    title: "Cultural Activities",
    description:
      "Vibrant cultural events, college day celebrations and programmes that nurture creativity, artistic expression and a shared sense of community.",
    image: "/images/life/cultural.jpg",
    alt: "Students performing at a college cultural event",
  },
  {
    title: "Seminars & Workshops",
    description:
      "Regular seminars, workshops and guest lectures that expose students to current academic developments, career guidance and skill-building opportunities.",
    image: "/images/life/seminars.jpg",
    alt: "Students attending a college seminar",
  },
];

export default function LifeAtMVN() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    // Heading animation
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add("opacity-100", "translate-y-0");
          heading.classList.remove("opacity-0", "translate-y-8");
        } else {
          heading.classList.remove("opacity-100", "translate-y-0");
          heading.classList.add("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.2 }
    );

    if (heading) {
      headingObserver.observe(heading);
    }

    // Cards animation
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => cardsObserver.observe(card));

    return () => {
      headingObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="life-at-mvn"
      className="w-full bg-background-secondary py-14 sm:py-16 lg:py-20"
    >
      <Container size="wide">
        {/* SECTION HEADING */}
        <div
          ref={headingRef}
          className="
            mb-10 flex flex-col items-center text-center
            opacity-0 translate-y-8
            transition-all duration-700 ease-out
            sm:mb-12 lg:mb-14
          "
        >
          <Text
            variant="eyebrow"
            color="goldMuted"
            className="mb-2 text-[10px] tracking-[2.5px] sm:text-[11px]"
          >
            STUDENT LIFE
          </Text>

          <Text
            as="h2"
            variant="h1"
            color="primary"
            className="
              text-[28px] leading-tight
              sm:text-[32px]
              lg:text-[36px]
            "
          >
            Life at MVN
          </Text>

          <Text
            variant="body"
            color="muted"
            align="center"
            className="
              mt-3 max-w-[500px]
              text-[12px] leading-relaxed
              sm:text-[13px]
            "
          >
            Learning, friendships and experiences that shape the future.
          </Text>

          {/* GOLD DIVIDER */}
          <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-transparent via-[#c3a365] to-transparent" />
        </div>

        {/* ACTIVITY CARDS */}
        <div
          className="
            mx-auto grid w-full max-w-[1000px]
            grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-[18px]
          "
        >
          {activities.map((item, index) => (
            <article
              key={item.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              className="
                group flex h-full flex-col overflow-hidden
                rounded-[15px]
                border border-[#e9d9bd]
                bg-[#fffdf8]
                shadow-[0_5px_18px_rgba(0,0,0,0.06)]
                opacity-0 translate-y-10
                transition-all duration-700 ease-out
                hover:-translate-y-1
                hover:shadow-[0_12px_25px_rgba(0,0,0,0.10)]
              "
            >
              {/* IMAGE */}
              <div className="
                relative aspect-[1.5/1]
                w-full overflow-hidden
                bg-[#eee8dc]
              ">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CARD CONTENT */}
              <div className="
                flex flex-1 flex-col
                px-4 py-4
                sm:px-4 sm:py-4
              ">
                <Text
                  as="h3"
                  variant="h3"
                  color="primary"
                  className="
                    mb-2
                    text-[15px]
                    leading-snug
                    font-bold
                    sm:text-[15px]
                  "
                >
                  {item.title}
                </Text>

                <Text
                  variant="small"
                  color="body"
                  className="
                    text-[11px]
                    leading-[1.8]
                    sm:text-[11px]
                    lg:text-[10.5px]
                    xl:text-[11px]
                  "
                >
                  {item.description}
                </Text>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}