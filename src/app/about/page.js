import Image from "next/image";
import { Container, Text } from "@/components";
import {
  GraduationCap,
  BookOpen,
  Users,
  Target,
  Eye,
  Heart,
  Award,
  Building2,
} from "lucide-react";

const highlights = [
  {
    Icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Providing quality education across Arts, Science and Commerce through dedicated faculty and academic programmes.",
  },
  {
    Icon: Building2,
    title: "Established Legacy",
    description:
      "Established in 1972, with a long-standing commitment to higher education in the Konaseema region.",
  },
  {
    Icon: Users,
    title: "Student Development",
    description:
      "Encouraging students to develop their knowledge, skills, confidence and leadership abilities.",
  },
  {
    Icon: Award,
    title: "Recognised Institution",
    description:
      "Committed to academic standards, institutional development and quality education.",
  },
];

const values = [
  {
    Icon: BookOpen,
    title: "Quality Education",
    description:
      "Delivering meaningful education that builds knowledge, critical thinking and practical skills.",
  },
  {
    Icon: Heart,
    title: "Student-Centred Learning",
    description:
      "Creating a supportive learning environment that encourages every student to succeed.",
  },
  {
    Icon: Users,
    title: "Community Development",
    description:
      "Contributing to the educational and social development of surrounding communities.",
  },
];

const milestones = [
  {
    year: "1972",
    title: "Establishment of the College",
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
    <main className="w-full overflow-hidden bg-[#fffdf8]">

      {/* =====================================================
          PAGE BANNER
      ===================================================== */}
      

      {/* =====================================================
          ABOUT INTRODUCTION
      ===================================================== */}
      <section className="bg-[#fffdf8] py-14 sm:py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-12">

            {/* College Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#e7d8bd] shadow-[0_15px_35px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/about/college-about.jpg"
                  alt="MVN JS & RVR College campus"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#003e38]/90 to-transparent px-5 pb-5 pt-16">
                  <Text
                    as="h3"
                    variant="h3"
                    color="white"
                    className="text-[20px] sm:text-[24px]"
                  >
                    MVN JS & RVR College
                  </Text>

                  <Text
                    color="white"
                    className="mt-1 text-[13px]"
                  >
                    Malikipuram, Konaseema
                  </Text>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-[#e7d8bd] bg-[#f5f1e7] px-7 py-5 shadow-lg sm:block lg:-right-5">
                <Text
                  as="h3"
                  variant="h2"
                  color="primary"
                  className="text-[32px] font-bold"
                >
                  1972
                </Text>
                <Text
                  color="muted"
                  className="text-[12px]"
                >
                  Year of Establishment
                </Text>
              </div>
            </div>

            {/* Introduction Content */}
            <div className="flex flex-col">
              <Text
                variant="eyebrow"
                color="goldMuted"
                className="mb-3 text-[12px] tracking-[2.5px]"
              >
                OUR HERITAGE
              </Text>

              <Text
                as="h2"
                variant="h1"
                color="primary"
                className="mb-5 text-[30px] leading-[1.2] sm:text-[36px] lg:text-[40px]"
              >
                About MVN JS & RVR College
              </Text>

              <div className="mb-6 h-[3px] w-14 rounded-full bg-[#c5a267]" />

              <Text
                color="body"
                className="mb-5 text-justify text-[14px] leading-[1.9] sm:text-[15px]"
              >
                MVN JS & RVR College of Arts & Science is situated in
                the rural pastoral surroundings of Konaseema. The
                institution was established in 1972 by the
                Antervedipalem Firka Development Trust, Malikipuram.
              </Text>

              <Text
                color="body"
                className="mb-5 text-justify text-[14px] leading-[1.9] sm:text-[15px]"
              >
                The college began with undergraduate programmes in
                Arts, Science and Commerce, serving the educational
                aspirations of the surrounding communities.
              </Text>

              <Text
                color="body"
                className="text-justify text-[14px] leading-[1.9] sm:text-[15px]"
              >
                Over the years, the institution has continued to
                develop its academic activities and infrastructure,
                maintaining its commitment to quality education,
                student development and community service.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          COLLEGE HIGHLIGHTS
      ===================================================== */}
      <section className="bg-[#f5f1e7] py-14 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="mb-10 text-center sm:mb-12">
            <Text
              variant="eyebrow"
              color="goldMuted"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              WHO WE ARE
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="primary"
              className="text-[27px] sm:text-[32px] lg:text-[36px]"
            >
              Our Institutional Highlights
            </Text>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#c5a267]" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group flex flex-col items-center rounded-xl border border-[#eadcc3] bg-[#fffdf8] px-5 py-8 text-center shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf0ec] text-[#00645d] transition-colors duration-300 group-hover:bg-[#075e58] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.6} />
                </div>

                <Text
                  as="h3"
                  variant="h4"
                  color="primary"
                  className="mb-3 text-[17px]"
                >
                  {title}
                </Text>

                <Text
                  color="body"
                  className="text-[13px] leading-[1.8]"
                >
                  {description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          VISION AND MISSION
      ===================================================== */}
      <section className="bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="mb-10 text-center">
            <Text
              variant="eyebrow"
              color="goldMuted"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              OUR PURPOSE
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="primary"
              className="text-[28px] sm:text-[34px]"
            >
              Vision & Mission
            </Text>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#c5a267]" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Vision */}
            <div className="rounded-2xl border border-[#e7d8bd] bg-[#f5f1e7] p-7 sm:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#075e58] text-white">
                <Eye size={24} />
              </div>

              <Text
                as="h3"
                variant="h3"
                color="primary"
                className="mb-4 text-[23px]"
              >
                Our Vision
              </Text>

              <Text
                color="body"
                className="text-[14px] leading-[1.9] sm:text-[15px]"
              >
                To provide an environment that encourages academic
                excellence, personal growth, knowledge development
                and responsible participation in society.
              </Text>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-[#e7d8bd] bg-[#f5f1e7] p-7 sm:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#075e58] text-white">
                <Target size={24} />
              </div>

              <Text
                as="h3"
                variant="h3"
                color="primary"
                className="mb-4 text-[23px]"
              >
                Our Mission
              </Text>

              <Text
                color="body"
                className="text-[14px] leading-[1.9] sm:text-[15px]"
              >
                To support students through quality education,
                dedicated teaching, learning opportunities and
                a supportive campus environment.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          OUR VALUES
      ===================================================== */}
      <section className="bg-[#f5f1e7] py-14 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="mb-10 text-center">
            <Text
              variant="eyebrow"
              color="goldMuted"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              WHAT GUIDES US
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="primary"
              className="text-[28px] sm:text-[34px]"
            >
              Our Core Values
            </Text>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#c5a267]" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-[#e7d8bd] bg-[#fffdf8] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf0ec] text-[#00645d]">
                  <Icon size={27} strokeWidth={1.6} />
                </div>

                <Text
                  as="h3"
                  variant="h4"
                  color="primary"
                  className="mb-3 text-[18px]"
                >
                  {title}
                </Text>

                <Text
                  color="body"
                  className="text-[13px] leading-[1.8]"
                >
                  {description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          COLLEGE HISTORY
      ===================================================== */}
      <section className="bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="mb-12 text-center">
            <Text
              variant="eyebrow"
              color="goldMuted"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              OUR JOURNEY
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="primary"
              className="text-[28px] sm:text-[34px]"
            >
              Our History & Milestones
            </Text>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#c5a267]" />
          </div>

          <div className="relative mx-auto max-w-3xl">

            {/* Timeline Line */}
            <div className="absolute bottom-5 left-[18px] top-5 w-[2px] bg-[#d8c39e] sm:left-[25px]" />

            <div className="space-y-8">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="relative flex gap-5 sm:gap-8"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#fffdf8] bg-[#075e58] text-[10px] font-bold text-white sm:h-[52px] sm:w-[52px] sm:text-[12px]">
                    {item.year.slice(2)}
                  </div>

                  <div className="flex-1 rounded-xl border border-[#e7d8bd] bg-[#f5f1e7] p-5 sm:p-6">
                    <Text
                      color="goldMuted"
                      className="mb-1 text-[12px] font-bold"
                    >
                      {item.year}
                    </Text>

                    <Text
                      as="h3"
                      variant="h4"
                      color="primary"
                      className="mb-2 text-[17px]"
                    >
                      {item.title}
                    </Text>

                    <Text
                      color="body"
                      className="text-[13px] leading-[1.8]"
                    >
                      {item.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CLOSING SECTION
      ===================================================== */}
      <section className="bg-[#075e58] py-14 sm:py-16">
        <Container size="wide">
          <div className="mx-auto max-w-3xl text-center">

            <Text
              variant="eyebrow"
              color="white"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              MVN JS & RVR COLLEGE
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="white"
              className="text-[27px] leading-tight sm:text-[34px]"
            >
              Building Knowledge. Inspiring Futures.
            </Text>

            <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-[#c5a267]" />

            <Text
              color="white"
              className="mt-5 text-[13px] leading-[1.8] sm:text-[15px]"
            >
              Continuing our commitment to education, student
              development and the community since 1972.
            </Text>
          </div>
        </Container>
      </section>

    </main>
  );
}