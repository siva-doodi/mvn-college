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
  ArrowRight,
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

// Scroll Reveal Hook
function useScrollReveal() {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll("[data-reveal]");

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

// Reveal Component
function Reveal({
  id,
  visibleItems,
  children,
  className = "",
}) {
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
    <main
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#fffdf8]"
    >
      {/* ================= HERO SECTION ================= */}

      <section className="bg-[#f5f1e7] py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal
              id="hero-label"
              visibleItems={visibleItems}
            >
              <Text
                variant="eyebrow"
                color="goldMuted"
                className="mb-4 text-[11px] tracking-[2.5px] sm:text-[13px]"
              >
                STUDENT SUPPORT & WELFARE
              </Text>
            </Reveal>

            <Reveal
              id="hero-title"
              visibleItems={visibleItems}
            >
              <Text
                as="h1"
                variant="h1"
                color="primary"
                className="text-[30px] leading-tight sm:text-[40px] lg:text-[46px]"
              >
                Scholarships & Schemes
              </Text>
            </Reveal>

            <Reveal
              id="hero-description"
              visibleItems={visibleItems}
            >
              <Text
                color="body"
                className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 sm:text-[15px]"
              >
                Explore scholarship opportunities and student
                welfare schemes designed to support education,
                encourage academic excellence and make higher
                education accessible to all.
              </Text>
            </Reveal>

            <Reveal
              id="hero-divider"
              visibleItems={visibleItems}
            >
              <div className="mx-auto mt-6 h-[3px] w-14 rounded-full bg-[#c3a365]" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================= AVAILABLE SCHEMES ================= */}

      <section className="bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
        <Container size="wide">
          <Reveal
            id="schemes-heading"
            visibleItems={visibleItems}
          >
            <div className="mb-10 text-center sm:mb-14">
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
                Financial assistance opportunities to help
                students pursue their academic goals.
              </Text>

              <div className="mx-auto mt-5 h-[2px] w-12 bg-[#c3a365]" />
            </div>
          </Reveal>

          {/* Full Width Sections */}

          <div>
            {schemes.map((scheme, index) => {
              const Icon = scheme.icon;

              return (
                <Reveal
                  key={scheme.title}
                  id={`scheme-${index}`}
                  visibleItems={visibleItems}
                >
                  <section
                    className={`
                      group py-9 sm:py-11 lg:py-12
                      ${
                        index !== 0
                          ? "border-t border-[#e9dfce]"
                          : ""
                      }
                    `}
                  >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[90px_1fr] lg:grid-cols-[110px_1fr] lg:gap-10">
                      {/* Icon */}

                      <div className="flex items-start">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf0ec] sm:h-[76px] sm:w-[76px]">
                          <Icon
                            size={32}
                            strokeWidth={1.6}
                            className="text-[#006d65]"
                          />
                        </div>
                      </div>

                      {/* Content */}

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <Text
                            variant="eyebrow"
                            color="goldMuted"
                            className="text-[10px] tracking-[1.5px] sm:text-[11px]"
                          >
                            {scheme.category}
                          </Text>
                        </div>

                        <Text
                          as="h3"
                          variant="h3"
                          color="primary"
                          className="mt-2 text-[20px] leading-snug sm:text-[24px] lg:text-[27px]"
                        >
                          {scheme.title}
                        </Text>

                        <Text
                          color="body"
                          className="mt-3 max-w-3xl text-[13px] leading-7 sm:text-[14px] lg:text-[15px]"
                        >
                          {scheme.description}
                        </Text>

                        {/* Benefits */}

                        <div className="mt-5">
                          <Text
                            variant="label"
                            color="primaryDark"
                            className="mb-3 text-[12px]"
                          >
                            Key Benefits
                          </Text>

                          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                            {scheme.benefits.map((benefit) => (
                              <div
                                key={benefit}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle2
                                  size={16}
                                  className="mt-0.5 shrink-0 text-[#08766c]"
                                />

                                <Text
                                  variant="small"
                                  color="body"
                                  className="text-[12px] leading-5 sm:text-[13px]"
                                >
                                  {benefit}
                                </Text>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ================= APPLICATION PROCESS ================= */}

      <section className="bg-[#f5f1e7] py-14 sm:py-16 lg:py-20">
        <Container size="wide">
          <Reveal
            id="process-heading"
            visibleItems={visibleItems}
          >
            <div className="mb-12 text-center">
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
                Follow these steps when applying for an
                eligible scheme.
              </Text>

              <div className="mx-auto mt-5 h-[2px] w-12 bg-[#c3a365]" />
            </div>
          </Reveal>

          {/* Horizontal Process */}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {applicationSteps.map((step, index) => (
              <Reveal
                key={step.number}
                id={`step-${index}`}
                visibleItems={visibleItems}
              >
                <div className="relative border-l-2 border-[#c3a365] py-1 pl-5 sm:pl-6">
                  <Text
                    color="goldMuted"
                    className="text-[30px] font-bold leading-none sm:text-[34px]"
                  >
                    {step.number}
                  </Text>

                  <Text
                    as="h3"
                    variant="h3"
                    color="primary"
                    className="mt-4 text-[17px] sm:text-[19px]"
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

      {/* ================= IMPORTANT INFORMATION ================= */}

      <section className="bg-[#fffdf8] py-14 sm:py-16">
        <Container size="wide">
          <Reveal
            id="important-information"
            visibleItems={visibleItems}
          >
            <div className="mx-auto max-w-4xl border-l-[3px] border-[#c3a365] bg-[#f8f3e9] p-6 sm:p-8 lg:p-10">
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
                    Scheme availability, eligibility,
                    application dates and benefits are subject
                    to the latest government guidelines.
                    Students are advised to verify the
                    information through the respective official
                    portals or contact the college administration
                    before applying.
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