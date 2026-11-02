"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PrincipalSection() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [contentVisible, setContentVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const elements = [
      { ref: contentRef, setVisible: setContentVisible },
      { ref: imageRef, setVisible: setImageVisible },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = elements.find(
            (item) => item.ref.current === entry.target
          );
          if (target) target.setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const childAnimation = (index, visible) => ({
    className: `transform transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
    }`,
    style: { transitionDelay: visible ? `${0.05 + index * 0.1}s` : "0s" },
  });

  // TODO: replace with the Principal's actual message / profile
  const paragraphs = [
    "N. Ananda Mahani serves as the Principal of MVN JS & RVR College of Arts & Science, guiding the academic and administrative activities of the institution.",
    "Under her leadership, the college focuses on academic excellence, student development, and a supportive learning environment for students and staff.",
    "She encourages students to build their knowledge, skills, and values so they are prepared for a successful future.",
  ];

  return (
    <section
      id="principal"
      className="w-full overflow-x-clip px-4 py-10 sm:px-6 md:py-14 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.05fr)] lg:gap-12">
        {/* IMAGE CARD (left) */}
        <div
          ref={imageRef}
          className={`group relative mx-auto flex w-full min-w-0 max-w-[650px] flex-col overflow-hidden rounded-[14px] border border-[rgba(214,184,117,0.65)] bg-[#fffdf8] shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:mx-0 lg:max-w-none lg:hover:-translate-y-[6px] lg:hover:shadow-[0_18px_40px_rgba(0,0,0,0.28),0_6px_14px_rgba(0,0,0,0.12)] ${
            imageVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-6 opacity-0 md:-translate-x-12"
          }`}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-[440px]">
            <Image
              src="/images/principal_madam.png"
              alt="N. Ananda Mahani, Principal"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_35%] transition-transform duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:group-hover:scale-[1.04]"
            />
          </div>

          <div className="flex flex-col gap-1 border-t-[3px] border-[#c3a365] bg-[#fffdf8] px-4 py-3.5 text-[#064b47] sm:px-5 sm:py-[18px]">
            <strong className="break-words text-[17px] font-semibold sm:text-[19px]">
              College Leadership
            </strong>
            <span className="text-[13px] text-[#52635f]">
              MVN JS &amp; RVR College of Arts &amp; Science
            </span>
          </div>
        </div>

        {/* TEXT (right) */}
        <div
          ref={contentRef}
          className={`min-w-0 rounded-[10px] p-0 transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:p-4 lg:hover:-translate-y-[3px] lg:hover:bg-[rgba(195,163,101,0.07)] lg:hover:shadow-[0_6px_22px_rgba(7,94,89,0.07)] ${
            contentVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-6 opacity-0 md:translate-x-12"
          }`}
        >
          <span
            className={`mb-3 inline-block text-xs font-extrabold tracking-[2px] text-[#92723a] ${childAnimation(0, contentVisible).className}`}
            style={childAnimation(0, contentVisible).style}
          >
            OUR PRINCIPAL
          </span>

          <h2
            className={`mb-4 break-words text-[clamp(26px,5vw,40px)] font-semibold leading-[1.2] text-[#075e59] ${childAnimation(1, contentVisible).className}`}
            style={childAnimation(1, contentVisible).style}
          >
            N. Ananda Mahani
          </h2>

          <h3
            className={`mb-3 break-words text-[clamp(18px,3.5vw,25px)] font-semibold leading-[1.4] text-[#064b47] ${childAnimation(2, contentVisible).className}`}
            style={childAnimation(2, contentVisible).style}
          >
            Principal, M.A.
          </h3>

          <div
            className={`mb-5 h-[3px] w-[65px] rounded-full bg-[#c3a365] ${childAnimation(3, contentVisible).className}`}
            style={childAnimation(3, contentVisible).style}
          />

          {paragraphs.map((text, i) => (
            <p
              key={i}
              className={`mb-4 break-words text-[15px] leading-[1.8] text-[#354b4a] last:mb-0 sm:text-base md:text-justify ${childAnimation(4 + i, contentVisible).className}`}
              style={childAnimation(4 + i, contentVisible).style}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}