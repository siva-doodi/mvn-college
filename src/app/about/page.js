
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  BookOpen,
  Microscope,
  Eye,
  Target,
  Heart,
  Award,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  Landmark,
  Lightbulb,
} from "lucide-react";

import { Banner, Container } from "@/components";

const stats = [
  {
    value: "10K+",
    label: "Active Students",
    Icon: GraduationCap,
  },
  {
    value: "100+",
    label: "Teaching Staff",
    Icon: Users,
  },
  {
    value: "25+",
    label: "Faculty with PhDs",
    Icon: Award,
  },
  {
    value: "50+",
    label: "Research Projects",
    Icon: Microscope,
  },
];

const features = [
  {
    number: "01",
    Icon: BookOpen,
    title: "Academic Excellence",
    description:
      "Providing quality education across Arts, Science and Commerce through dedicated faculty and academic programmes.",
  },
  {
    number: "02",
    Icon: Heart,
    title: "Student Development",
    description:
      "Encouraging students to develop knowledge, practical skills, confidence and leadership abilities.",
  },
  {
    number: "03",
    Icon: Lightbulb,
    title: "Learning Beyond Classrooms",
    description:
      "Supporting student growth through academic activities, practical learning and opportunities for exploration.",
  },
  {
    number: "04",
    Icon: Landmark,
    title: "Established Legacy",
    description:
      "Established in 1972, with a long-standing commitment to higher education in the Konaseema region.",
  },
];

const milestones = [
  {
    year: "1972",
    title: "The Beginning",
    description:
      "MVN JS & RVR College was established by the Antervedipalem Firka Development Trust, Malikipuram.",
  },
  {
    year: "1979",
    title: "UGC Recognition",
    description:
      "The institution received recognition under Section 12(B) of the UGC Act.",
  },
  {
    year: "1981",
    title: "Section 2(f) Recognition",
    description:
      "The college received recognition under Section 2(f) of the UGC Act.",
  },
  {
    year: "2013",
    title: "University Affiliation",
    description:
      "The college has been affiliated with Adikavi Nannaya University since 2013.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf6] text-[#233c36]">

    <Banner />
      {/* ================= ABOUT INTRO ================= */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container size="wide">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* Image area */}
            <div className="relative pb-8 pr-7 sm:pr-12">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about.webp"
                  alt="MVN JS and RVR College"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 flex h-36 w-36 flex-col justify-center bg-[#d4b477] p-5 text-[#173c34] sm:h-44 sm:w-44 sm:p-7">
                <span className="text-4xl font-bold sm:text-5xl">
                  1972
                </span>
                <span className="mt-2 text-xs font-semibold uppercase leading-5 tracking-wider">
                  Year of Establishment
                </span>
              </div>

              <div className="absolute -left-3 top-10 -z-10 h-40 w-40 border border-[#d4b477] sm:-left-5 sm:h-56 sm:w-56" />
            </div>

            {/* Content */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#a17c3d]">
                Our Story
              </p>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#123e36] sm:text-4xl lg:text-[46px]">
                Shaping Minds and Building a Better Tomorrow
              </h2>

              <div className="my-7 h-[3px] w-16 bg-[#d4b477]" />

              <p className="text-justify text-sm leading-8 text-[#64716c] sm:text-[15px]">
                MVN JS & RVR College of Arts & Science is situated in the
                rural pastoral surroundings of Konaseema. The institution
                was established in 1972 by the Antervedipalem Firka
                Development Trust, Malikipuram.
              </p>

              <p className="mt-5 text-justify text-sm leading-8 text-[#64716c] sm:text-[15px]">
                The college began with undergraduate programmes in Arts,
                Science and Commerce, serving the educational aspirations
                of the surrounding communities.
              </p>

              <p className="mt-5 text-justify text-sm leading-8 text-[#64716c] sm:text-[15px]">
                Over the years, the institution has continued to develop
                its academic activities and infrastructure, maintaining
                its commitment to quality education, student development
                and community service.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-[#e8e2d6] pt-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9eee9] text-[#075e58]">
                  <Building2 size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#173c34]">
                    MVN JS & RVR College
                  </p>
                  <p className="mt-1 text-xs text-[#78827c]">
                    Malikipuram, Konaseema
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="bg-primary py-16 sm:py-20">
        <Container size="wide">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#d4b477]">
              Our Impact
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              The Numbers Behind Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-white/15 lg:grid-cols-4 lg:divide-y-0">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center px-4 py-8 text-center sm:px-8"
              >
                <Icon
                  size={29}
                  strokeWidth={1.5}
                  className="mb-5 text-[#d4b477]"
                />

                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  {value}
                </p>

                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/75 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="grid gap-6 lg:grid-cols-2">

            <div className="relative overflow-hidden bg-[#e9eee8] p-8 sm:p-12 lg:p-14">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#075e58] text-white">
                <Eye size={27} strokeWidth={1.6} />
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[2.5px] text-[#a17c3d]">
                Our Direction
              </p>

              <h2 className="text-3xl font-semibold text-[#123e36]">
                Our Vision
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[#64716c] sm:text-base">
                To provide an environment that encourages academic
                excellence, personal growth, knowledge development and
                responsible participation in society.
              </p>

              <span className="pointer-events-none absolute -bottom-12 -right-7 text-[180px] font-bold leading-none text-[#075e58]/[0.05]">
                V
              </span>
            </div>

            <div className="relative overflow-hidden bg-[#f1e8d7] p-8 sm:p-12 lg:p-14">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#b18b4d] text-white">
                <Target size={27} strokeWidth={1.6} />
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[2.5px] text-[#92703b]">
                Our Commitment
              </p>

              <h2 className="text-3xl font-semibold text-[#123e36]">
                Our Mission
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[#64716c] sm:text-base">
                To support students through quality education, dedicated
                teaching, learning opportunities and a supportive campus
                environment.
              </p>

              <span className="pointer-events-none absolute -bottom-12 -right-7 text-[180px] font-bold leading-none text-[#a17c3d]/[0.07]">
                M
              </span>
            </div>

          </div>
        </Container>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#f1efe8] py-20 sm:py-24">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#a17c3d]">
                The MVN Advantage
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-[#123e36] sm:text-4xl lg:text-[46px]">
                An Environment Where Students Can Grow
              </h2>

              <div className="my-7 h-[3px] w-16 bg-[#d4b477]" />

              <p className="text-sm leading-8 text-[#64716c]">
                We believe that education extends beyond textbooks.
                Our focus is on creating an environment where students
                can learn, explore their interests and prepare for
                meaningful opportunities.
              </p>

              <div className="mt-8">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-3 border-b-2 border-[#b18b4d] pb-2 text-sm font-bold text-[#075e58] transition hover:gap-5"
                >
                  Discover Our Programmes
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              {features.map(({ number, Icon, title, description }) => (
                <div
                  key={number}
                  className="border-b border-[#d9d4c8] p-6 sm:p-8"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#b18b4d]">
                      {number}
                    </span>
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#075e58]"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-[#123e36]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64716c]">
                    {description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
