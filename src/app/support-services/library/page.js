"use client";

import { useEffect, useRef } from "react";
import {
  BookOpen,
  BookMarked,
  GraduationCap,
  Search,
  LibraryBig,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const facilities = [
  {
    Icon: BookOpen,
    title: "Books & Reference Materials",
    description:
      "Access a collection of academic textbooks, reference books and learning materials that support different courses and subjects.",
  },
  {
    Icon: BookMarked,
    title: "Journals & Publications",
    description:
      "Explore academic journals, magazines and publications that help students expand their subject knowledge.",
  },
  {
    Icon: Search,
    title: "Study & Research",
    description:
      "A dedicated learning environment where students can read, prepare for examinations and develop research skills.",
  },
  {
    Icon: GraduationCap,
    title: "Academic Support",
    description:
      "Library resources that complement classroom teaching and encourage independent learning and continuous development.",
  },
];

export default function LibraryPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll("[data-reveal]");

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "opacity-100",
            entry.isIntersecting
          );
          entry.target.classList.toggle(
            "translate-y-0",
            entry.isIntersecting
          );
          entry.target.classList.toggle(
            "opacity-0",
            !entry.isIntersecting
          );
          entry.target.classList.toggle(
            "translate-y-8",
            !entry.isIntersecting
          );
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="min-h-screen bg-[#f5f1e7] py-12 sm:py-14 lg:py-16"
    >
      <Container size="wide">
        {/* HEADING */}
        <div
          data-reveal
          className="mx-auto mb-10 max-w-[650px] text-center opacity-0 translate-y-8 transition-all duration-700 sm:mb-12"
        >
          <Text
            variant="eyebrow"
            color="goldMuted"
            className="mb-3 text-[11px] font-bold tracking-[2px]"
          >
            CAMPUS FACILITIES
          </Text>

          <Text
            as="h1"
            variant="h2"
            color="primary"
            className="text-[27px] font-bold leading-tight sm:text-[32px] lg:text-[36px]"
          >
            College Library
          </Text>

          <Text
            variant="body"
            color="body"
            align="center"
            className="mx-auto mt-4 max-w-[570px] text-[13px] leading-[1.8] sm:text-[14px]"
          >
            A learning resource centre that encourages reading,
            knowledge sharing, independent study and academic
            excellence among students.
          </Text>

          <span className="mx-auto mt-5 block h-[2px] w-12 bg-[#c3a365]" />
        </div>

        {/* LIBRARY INTRODUCTION */}
        <div
          data-reveal
          className="mb-8 grid overflow-hidden rounded-[18px] border border-[#e8dfcf] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all duration-700 opacity-0 translate-y-8 md:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5efeb] text-[#006b63]">
              <LibraryBig size={29} strokeWidth={1.7} />
            </div>

            <Text
              as="h2"
              variant="h3"
              color="primary"
              className="text-[21px] font-bold sm:text-[24px]"
            >
              A Space for Knowledge & Discovery
            </Text>

            <Text
              variant="body"
              color="body"
              className="mt-4 text-[13px] leading-[1.9] sm:text-[14px]"
            >
              The college library supports students and faculty
              by providing access to academic resources and a
              suitable environment for reading and learning.
              It plays an important role in developing reading
              habits, research interests and lifelong learning.
            </Text>
          </div>

          <div className="flex min-h-[240px] items-center justify-center bg-gradient-to-br from-[#e9eee7] to-[#d6e8e2] p-8">
            <LibraryBig
              size={115}
              strokeWidth={0.8}
              className="text-[#006b63]/70"
            />
          </div>
        </div>

        {/* LIBRARY FACILITIES */}
        <div className="mb-7 text-center">
          <Text
            as="h2"
            variant="h3"
            color="primary"
            className="text-[22px] font-bold sm:text-[25px]"
          >
            Library Facilities
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map(({ Icon, title, description }, index) => (
            <article
              key={title}
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
              className="group min-h-[235px] rounded-[15px] border border-[#e8dfcf] bg-white p-6 shadow-[0_5px_18px_rgba(0,0,0,0.04)] opacity-0 translate-y-8 transition-all duration-700 hover:-translate-y-1 hover:border-[#c3a365] hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[15px] bg-[#e5efeb] text-[#006b63] transition-all duration-300 group-hover:bg-[#006b63] group-hover:text-white">
                <Icon size={27} strokeWidth={1.7} />
              </div>

              <Text
                as="h3"
                variant="h3"
                color="primary"
                className="mt-5 text-[17px] font-bold"
              >
                {title}
              </Text>

              <Text
                variant="small"
                color="body"
                className="mt-3 text-[12px] leading-[1.8]"
              >
                {description}
              </Text>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}