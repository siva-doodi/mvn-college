"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/hero/college-banner-1.jpg",
    alt: "College faculty and students",
  },
  {
    id: 2,
    image: "/images/hero/college-banner-2.jpg",
    alt: "College campus",
  },
  {
    id: 3,
    image: "/images/hero/college-banner-3.jpg",
    alt: "College activities",
  },
  {
    id: 4,
    image: "/images/hero/college-banner-4.jpg",
    alt: "College events",
  },
  {
    id: 5,
    image: "/images/hero/college-banner-5.jpg",
    alt: "College students",
  },
  {
    id: 6,
    image: "/images/hero/college-banner-6.jpg",
    alt: "College facilities",
  },
  {
    id: 7,
    image: "/images/hero/college-banner-7.jpg",
    alt: "College activities",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      {/* SLIDER */}
      <div className="relative h-[260px] w-full sm:h-[380px] md:h-[480px] lg:h-[600px] xl:h-[min(42vw,800px)]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0
              transition-opacity duration-1000 ease-in-out
              ${
                activeSlide === index
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }
            `}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* SLIDER INDICATORS */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index}
            onClick={() => setActiveSlide(index)}
            className={`
              h-[18px] w-[18px] rounded-full border
              border-white/80
              transition-all duration-300
              ${
                activeSlide === index
                  ? "scale-110 bg-[#c3a365]"
                  : "bg-white/40 hover:bg-white/80"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}