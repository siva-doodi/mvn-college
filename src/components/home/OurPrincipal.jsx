"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";



export default function LeadershipSection() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [contentVisible, setContentVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const elements = [
      {
        ref: contentRef,
        setVisible: setContentVisible,
      },
      {
        ref: imageRef,
        setVisible: setImageVisible,
      },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = elements.find(
            (item) => item.ref.current === entry.target
          );

          if (target) {
            target.setVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const childAnimation = (index, visible) => ({
    className: `
      transform transition-all duration-[600ms]
      ease-[cubic-bezier(0.22,1,0.36,1)]
      motion-reduce:transition-none
      ${visible
        ? "translate-y-0 opacity-100"
        : "translate-y-7 opacity-0"
      }
    `,
    style: {
      transitionDelay: visible ? `${0.05 + index * 0.1}s` : "0s",
    },
  });

  return (
    <section
      id="secretary-correspondent"
      className="box-border w-full  px-4 py-9 min-[601px]:px-6 min-[601px]:py-14"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center  gap-7 min-[901px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] min-[901px]:gap-10">
        {/* Image Content */}
         <div
          ref={imageRef}
          className={`
    group relative flex min-w-0 flex-col overflow-hidden rounded-[14px]
    border border-[rgba(214,184,117,0.65)]
    bg-[#fffdf8]
    shadow-[0_10px_28px_rgba(0,0,0,0.2)]
    transition-all duration-[750ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:-translate-y-[6px]
    hover:shadow-[0_18px_40px_rgba(0,0,0,0.28),0_6px_14px_rgba(0,0,0,0.12)]
    motion-reduce:transition-none
    ${imageVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}
    max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[650px]
  `}
        >
          {/* Image box: fixed ratio so `fill` works */}
          <div className="relative aspect-[4/3] w-full overflow-hidden min-[901px]:aspect-auto min-[901px]:h-[440px]">
            <Image
              src="/images/principal_madam.png"
              alt="Sri M. V. Satyanarayana Murthy, Secretary and Correspondent"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="
        object-cover object-[center_35%]
        transition-transform duration-[550ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-[1.04]
        motion-reduce:transition-none
      "
            />
          </div>

          {/* Caption */}
          <div className="flex flex-col gap-[5px] border-t-[3px] border-[#c3a365] bg-[#fffdf8] px-4 py-[14px] text-[#064b47] min-[601px]:px-5 min-[601px]:py-[18px]">
            <strong className="text-[19px] font-semibold">
           College Leadership
            </strong>
            <span className="text-[13px] text-[#52635f]">
              MVN JS & RVR College of Arts & Science

            </span>
          </div>
        </div>
        {/* Text Content */}
        <div
          ref={contentRef}
          className={`
            min-w-0 rounded-[10px] p-4
            transition-all duration-[750ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-[3px]
            hover:bg-[rgba(195,163,101,0.07)]
            hover:shadow-[0_6px_22px_rgba(7,94,89,0.07)]
            motion-reduce:transition-none
            ${contentVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
            }
          `}
        >
          {/* Eyebrow */}
          <span
            {...childAnimation(0, contentVisible)}
            className={`
              mb-3 inline-block text-xs font-extrabold
              tracking-[2px] text-[#92723a]
              ${childAnimation(0, contentVisible).className}
            `}
            style={childAnimation(0, contentVisible).style}
          >
           OUR PRINCIPAL
          </span>

          {/* Main Heading */}
          <h2
            className={`
              mb-[18px] text-[clamp(28px,3vw,40px)]
              font-semibold leading-[1.2] text-[#075e59]
              ${childAnimation(1, contentVisible).className}
            `}
            style={childAnimation(1, contentVisible).style}
          >
            N. Ananda Mahani
          </h2>

          {/* Name */}
          <h3
            className={`
              mb-[14px] text-[clamp(19px,2vw,25px)]
              font-semibold leading-[1.4] text-[#064b47]
              ${childAnimation(2, contentVisible).className}
            `}
            style={childAnimation(2, contentVisible).style}
          >
           Principal, M.A.
          </h3>

          {/* Divider */}
          <div
            className={`
              mb-5 h-[3px] w-[65px] rounded-full bg-[#c3a365]
              ${childAnimation(3, contentVisible).className}
            `}
            style={childAnimation(3, contentVisible).style}
          />

          {/* Description */}
          <p
            className={`
              mb-4 text-base leading-[1.8] text-[#354b4a]
              text-justify max-[600px]:text-left
              max-[600px]:text-[15px]
              ${childAnimation(4, contentVisible).className}
            `}
            style={childAnimation(4, contentVisible).style}
          >
            Sri M. V. Satyanarayana Murthy serves as the Secretary
            &amp; Correspondent of MVN JS &amp; RVR College of Arts
            &amp; Science. He contributes to the institution&apos;s
            administration, development, and educational mission,
            supporting its continued growth and service to the
            community.
          </p>

          <p
            className={`
              mb-4 text-base leading-[1.8] text-[#354b4a]
              text-justify max-[600px]:text-left
              max-[600px]:text-[15px]
              ${childAnimation(5, contentVisible).className}
            `}
            style={childAnimation(5, contentVisible).style}
          >
            His role supports the smooth functioning of the
            institution and its commitment to providing a
            supportive learning environment for students and staff.
          </p>

          <p
            className={`
              mb-4 text-base leading-[1.8] text-[#354b4a]
              text-justify max-[600px]:text-left
              max-[600px]:text-[15px]
              ${childAnimation(6, contentVisible).className}
            `}
            style={childAnimation(6, contentVisible).style}
          >
            Through his continued guidance and commitment, the institution
            strives to strengthen its academic standards, improve educational
            opportunities, and nurture an environment that encourages students
            to develop their knowledge, skills, and values for a successful future.
          </p>
        </div>
      </div>
    </section>
  );
}