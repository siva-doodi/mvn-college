"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Wallet,
  BookOpen,
  ShieldCheck,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const schemes = [
  {
    icon: GraduationCap,
    category: "Government Scholarship",
    title: "Post Matric Scholarship",
    description:
      "Financial assistance for eligible students pursuing higher education after matriculation.",
    benefits: [
      "Tuition fee assistance",
      "Support for eligible students",
      "Encourages higher education",
    ],
  },
  {
    icon: Wallet,
    category: "Andhra Pradesh Government",
    title: "Jagananna Vidya Deevena",
    description:
      "Financial support towards college tuition fees for students who meet the prescribed eligibility criteria.",
    benefits: [
      "Tuition fee reimbursement",
      "Support for eligible families",
      "Promotes access to education",
    ],
  },
  {
    icon: BookOpen,
    category: "Student Welfare",
    title: "Jagananna Vasathi Deevena",
    description:
      "Financial assistance intended to help eligible students meet accommodation and educational expenses.",
    benefits: [
      "Accommodation support",
      "Assistance with living expenses",
      "Encourages continued education",
    ],
  },
  {
    icon: ShieldCheck,
    category: "Central Government",
    title: "National Scholarship Scheme",
    description:
      "Scholarship opportunities through government programmes for students meeting eligibility criteria.",
    benefits: [
      "Merit-based opportunities",
      "Financial assistance",
      "Multiple scholarship categories",
    ],
  },
  {
    icon: Users,
    category: "Social Welfare",
    title: "SC / ST / BC Scholarships",
    description:
      "Scholarship assistance for eligible students belonging to designated social welfare categories.",
    benefits: [
      "Category-based assistance",
      "Educational fee support",
      "Equal learning opportunities",
    ],
  },
  {
    icon: Building2,
    category: "Student Support",
    title: "Minority Welfare Scholarships",
    description:
      "Financial support opportunities for eligible minority community students pursuing recognised educational programmes.",
    benefits: [
      "Financial assistance",
      "Support for higher studies",
      "Educational development",
    ],
  },
];

const applicationSteps = [
  {
    number: "01",
    title: "Check Eligibility",
    description:
      "Review the scheme guidelines and confirm that you meet the eligibility requirements.",
  },
  {
    number: "02",
    title: "Prepare Documents",
    description:
      "Keep your Aadhaar, bank details, certificates and academic documents ready.",
  },
  {
    number: "03",
    title: "Submit Application",
    description:
      "Apply through the relevant official government scholarship portal.",
  },
  {
    number: "04",
    title: "Track Application",
    description:
      "Monitor your application status and respond to verification requests when required.",
  },
];

function useScrollReveal() {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll("[data-reveal]");

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.reveal;

          setVisibleItems((previous) => ({
            ...previous,
            [id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return { sectionRef, visibleItems };
}

function Reveal({ id, visibleItems, children, className = "" }) {
  return (
    <div
      data-reveal={id}
      className={`
        transition-all duration-700 ease-out
        ${
          visibleItems[id]
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default function SchemesPage() {
  const { sectionRef, visibleItems } = useScrollReveal();

  return (
    <main ref={sectionRef} className="w-full overflow-hidden bg-[#fffdf8]">

      {/* HERO SECTION */}

      <section className="bg-[#f5f1e7] py-14 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="mx-auto max-w-3xl text-center">

            <Reveal id="hero-label" visibleItems={visibleItems}>
              <Text
                variant="eyebrow"
                color="goldMuted"
                className="mb-4 text-[11px] tracking-[2.5px] sm:text-[13px]"
              >
                STUDENT SUPPORT & WELFARE
              </Text>
            </Reveal>

            <Reveal id="hero-title" visibleItems={visibleItems}>
              <Text
                as="h1"
                variant="h1"
                color="primary"
                className="text-[30px] leading-tight sm:text-[40px] lg:text-[46px]"
              >
                Scholarships & Schemes
              </Text>
            </Reveal>

            <Reveal id="hero-description" visibleItems={visibleItems}>
              <Text
                color="body"
                className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 sm:text-[15px]"
              >
                Explore scholarship opportunities and student welfare
                schemes designed to support education, encourage academic
                excellence and make higher education accessible to all.
              </Text>
            </Reveal>

            <Reveal id="hero-divider" visibleItems={visibleItems}>
              <div className="mx-auto mt-6 h-[3px] w-14 rounded-full bg-[#c3a365]" />
            </Reveal>

          </div>
        </Container>
      </section>

      {/* AVAILABLE SCHEMES */}

      <section className="bg-[#fffdf8] py-12 sm:py-16 lg:py-20">
        <Container size="wide">

          <Reveal id="schemes-heading" visibleItems={visibleItems}>
            <div className="mb-10 text-center sm:mb-12">
              <Text
                variant="eyebrow"
                color="goldMuted"
                className="mb-3 text-[11px] tracking-[2px]"
              >
                FINANCIAL ASSISTANCE
              </Text>

              <Text
                as="h2"
                variant="h2"
                color="primary"
                className="text-[25px] sm:text-[32px] lg:text-[36px]"
              >
                Available Student Schemes
              </Text>

              <Text
                color="body"
                className="mx-auto mt-3 max-w-xl text-[13px] leading-7 sm:text-[15px]"
              >
                Financial assistance opportunities to help students
                pursue their academic goals.
              </Text>

              <div className="mx-auto mt-5 h-[2px] w-12 bg-[#c3a365]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {schemes.map((scheme, index) => {
              const Icon = scheme.icon;
              const id = `scheme-${index}`;

              return (
                <Reveal
                  key={scheme.title}
                  id={id}
                  visibleItems={visibleItems}
                  className="h-full"
                >
                  <article
                    className="
                      group relative flex h-full flex-col
                      overflow-hidden rounded-2xl
                      border border-[#ead9bb]
                      bg-[#fffefa] p-5 sm:p-6
                      shadow-[0_5px_18px_rgba(35,50,40,0.05)]
                      transition-all duration-300
                      hover:-translate-y-2 hover:shadow-xl
                    "
                  >
                    <div className="absolute left-5 right-5 top-0 h-[3px] rounded-b-full bg-[#c3a365]" />

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf0ec]">
                        <Icon
                          size={27}
                          strokeWidth={1.7}
                          className="text-[#006d65]"
                        />
                      </div>

                      <span className="rounded-full border border-[#e8d2ad] bg-[#f8f1e5] px-3 py-1 text-center text-[10px] font-semibold text-[#92713d] sm:text-[11px]">
                        {scheme.category}
                      </span>
                    </div>

                    <Text
                      as="h3"
                      variant="h3"
                      color="primary"
                      className="mt-5 text-[18px] leading-snug sm:text-[20px]"
                    >
                      {scheme.title}
                    </Text>

                    <Text
                      color="body"
                      className="mt-3 text-[13px] leading-7 sm:text-[14px]"
                    >
                      {scheme.description}
                    </Text>

                    <div className="mt-5 border-t border-[#eee4d4] pt-4">
                      <Text
                        variant="label"
                        color="primaryDark"
                        className="mb-3 text-[12px]"
                      >
                        Key Benefits
                      </Text>

                      <ul className="space-y-2">
                        {scheme.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-1 shrink-0 text-[#08766c]"
                            />

                            <Text
                              variant="small"
                              color="body"
                              className="text-[12px] leading-5 sm:text-[13px]"
                            >
                              {benefit}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* APPLICATION PROCESS */}

      <section className="bg-[#f5f1e7] py-12 sm:py-16 lg:py-20">
        <Container size="wide">

          <Reveal id="process-heading" visibleItems={visibleItems}>
            <div className="mb-10 text-center">
              <Text
                variant="eyebrow"
                color="goldMuted"
                className="mb-3 text-[11px] tracking-[2px]"
              >
                SIMPLE PROCESS
              </Text>

              <Text
                as="h2"
                variant="h2"
                color="primary"
                className="text-[26px] sm:text-[32px]"
              >
                How to Apply
              </Text>

              <Text
                color="body"
                className="mt-3 text-[13px] sm:text-[15px]"
              >
                Follow these steps when applying for an eligible scheme.
              </Text>

              <div className="mx-auto mt-5 h-[2px] w-12 bg-[#c3a365]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step, index) => (
              <Reveal
                key={step.number}
                id={`step-${index}`}
                visibleItems={visibleItems}
                className="h-full"
              >
                <div className="
                  h-full rounded-2xl border border-[#e7d6b8]
                  bg-[#fffefa] p-5 sm:p-6
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                ">
                  <Text
                    color="goldMuted"
                    className="text-[28px] font-bold"
                  >
                    {step.number}
                  </Text>

                  <Text
                    as="h3"
                    variant="h3"
                    color="primary"
                    className="mt-3 text-[18px]"
                  >
                    {step.title}
                  </Text>

                  <Text
                    color="body"
                    className="mt-3 text-[13px] leading-7"
                  >
                    {step.description}
                  </Text>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* IMPORTANT INFORMATION */}

      <section className="bg-[#fffdf8] py-12 sm:py-16">
        <Container size="wide">
          <Reveal
            id="important-information"
            visibleItems={visibleItems}
          >
            <div className="mx-auto max-w-4xl rounded-2xl border border-[#e6d4b4] bg-[#f8f3e9] p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4 sm:gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7eee9]">
                  <ShieldCheck
                    size={25}
                    className="text-[#006d65]"
                  />
                </div>

                <div>
                  <Text
                    as="h3"
                    variant="h3"
                    color="primary"
                    className="text-[19px] sm:text-[22px]"
                  >
                    Important Information
                  </Text>

                  <Text
                    color="body"
                    className="mt-3 text-[13px] leading-7 sm:text-[14px]"
                  >
                    Scheme availability, eligibility, application dates
                    and benefits are subject to the latest government
                    guidelines. Students are advised to verify the
                    information through the respective official portals
                    or contact the college administration before applying.
                  </Text>
                </div>

              </div>
            </div>
          </Reveal>
        </Container>
      </section>

    </main>
  );
}