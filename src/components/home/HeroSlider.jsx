
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/Campus photo.png", alt: "MVN college campus" },
  { src: "/images/Mvn - 4.jpeg", alt: "College campus view" },
  { src: "/images/Mvn - 5.jpeg", alt: "College facilities" },
  { src: "/images/Mvn - 6.jpeg", alt: "College buildings" },
  { src: "/images/Mvn - 7.jpeg", alt: "College campus" },
  { src: "/images/Mvn Block 2.png", alt: "College block" },
  { src: "/images/Mvn-3.jpeg", alt: "MVN college campus" },
];

export default function HeroSlider() {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!showSlideshow) return;

    const slideTimer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 4000);

    const videoTimer = setTimeout(() => {
      setShowSlideshow(false);
      setCurrentIndex(0);
    }, 20000);

    return () => {
      clearInterval(slideTimer);
      clearTimeout(videoTimer);
    };
  }, [showSlideshow]);

  const handleVideoEnd = () => {
    setCurrentIndex(0);
    setShowSlideshow(true);
  };

  const handleVideoError = () => {
    console.error("Campus video failed to load.");
    setVideoError(true);
  };

  return (
    <section className="relative isolate h-[320px] w-full overflow-hidden bg-[#075e59] sm:h-[400px] md:h-[46vw] md:min-h-[350px] md:max-h-[680px]">

      {/* Campus Video */}
      {!showSlideshow && !videoError && (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={images[0].src}
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          aria-label="MVN college campus video"
        >
          <source src="/video/Campus Video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Campus Slideshow */}
      {(showSlideshow || videoError) && (
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}

      {/* Video Error Message */}
      {videoError && (
        <div className="absolute left-1/2 top-5 z-20 -translate-x-1/2 rounded-md bg-black/60 px-4 py-2 text-center text-xs text-white sm:text-sm">
          Campus video unavailable. Showing campus photos.
        </div>
      )}

      {/* Image Indicators - Always Visible */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-[18px] sm:gap-[10px]">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            onClick={() => {
              setCurrentIndex(index);
              setShowSlideshow(true);
            }}
            className={`h-[11px] w-[11px] shrink-0 rounded-full border border-[#fffdf8] transition-all duration-300 ${
              index === currentIndex
                ? "scale-125 bg-[#c3a365]"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
