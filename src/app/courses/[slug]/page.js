import Link from "next/link";
import { notFound } from "next/navigation";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Award,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const courses = {
  ba: {
    code: "B.A.",
    title: "Bachelor of Arts",
    duration: "3 Years",
    eligibility: "10+2 or equivalent examination",
    description:
      "The Bachelor of Arts programme provides a broad-based education in humanities and social sciences. It helps students develop critical thinking, communication and analytical skills across a range of disciplines.",
    highlights: [
      "Strong foundation in humanities and social sciences",
      "Development of communication skills",
      "Critical thinking and analytical abilities",
      "Opportunities for higher education",
    ],
    subjects: [
      "History",
      "Political Science",
      "Economics",
      "English",
    ],
  },

  bsc: {
    code: "B.Sc.",
    title: "Bachelor of Science",
    duration: "3 Years",
    eligibility: "10+2 with relevant science subjects",
    description:
      "The Bachelor of Science programme provides a rigorous science education, fostering logical reasoning and scientific inquiry through core subjects and practical learning experiences.",
    highlights: [
      "Strong foundation in scientific concepts",
      "Practical and laboratory-based learning",
      "Development of analytical skills",
      "Preparation for higher studies and careers",
    ],
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Botany",
      "Zoology",
    ],
  },

  bcom: {
    code: "B.Com.",
    title: "Bachelor of Commerce",
    duration: "3 Years",
    eligibility: "10+2 or equivalent examination",
    description:
      "The Bachelor of Commerce programme prepares students for careers in business, finance and accounting with a strong foundation in commerce principles.",
    highlights: [
      "Understanding of business and commerce",
      "Accounting and financial knowledge",
      "Business management fundamentals",
      "Preparation for professional careers",
    ],
    subjects: [
      "Financial Accounting",
      "Business Economics",
      "Business Management",
      "Business Law",
    ],
  },

  bca: {
    code: "BCA",
    title: "Bachelor of Computer Applications",
    duration: "3 Years",
    eligibility: "10+2 or equivalent examination",
    description:
      "The Bachelor of Computer Applications programme provides an applied computing education, equipping students with essential knowledge in programming, software development and information technology.",
    highlights: [
      "Programming and computer fundamentals",
      "Software development concepts",
      "Practical computing knowledge",
      "Preparation for IT careers",
    ],
    subjects: [
      "Programming in C",
      "Database Management Systems",
      "Web Technologies",
      "Computer Networks",
      "Software Engineering",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({
    slug,
  }));
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;

  const course = courses[slug.toLowerCase()];

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fffdf8]">

      {/* PAGE BANNER */}
      <section className="border-b border-[#e8dcc7] bg-[#f5f1e7] py-12 sm:py-16 lg:py-20">
        <Container size="wide">
          <Link
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#00645c] transition-colors hover:text-[#b18a46]"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <Text
            variant="eyebrow"
            color="goldMuted"
            className="mb-3"
          >
            ACADEMIC PROGRAMMES
          </Text>

          <Text
            as="h1"
            variant="h1"
            color="primary"
            className="text-[32px] leading-tight sm:text-[40px] lg:text-[48px]"
          >
            {course.title}
          </Text>

          <Text
            color="muted"
            className="mt-4 max-w-2xl text-sm leading-7 sm:text-base"
          >
            Explore the programme details, eligibility, duration
            and academic opportunities offered at MVN JS & RVR
            College of Arts & Science.
          </Text>
        </Container>
      </section>

      {/* COURSE CONTENT */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-12">

            {/* LEFT CONTENT */}
            <div className="space-y-8">

              {/* COURSE INTRODUCTION */}
              <div className="rounded-2xl border border-[#eadcc2] bg-white p-6 shadow-sm sm:p-8">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#edf2ef] text-[#006b63]">
                  <GraduationCap size={30} strokeWidth={1.6} />
                </div>

                <Text
                  as="h2"
                  variant="h2"
                  color="primary"
                  className="mb-4 text-[24px] sm:text-[28px]"
                >
                  About the Programme
                </Text>

                <Text
                  color="body"
                  className="text-sm leading-7 sm:text-base sm:leading-8"
                >
                  {course.description}
                </Text>
              </div>

              {/* COURSE HIGHLIGHTS */}
              <div className="rounded-2xl border border-[#eadcc2] bg-white p-6 shadow-sm sm:p-8">

                <Text
                  as="h2"
                  variant="h2"
                  color="primary"
                  className="mb-6 text-[23px] sm:text-[27px]"
                >
                  Programme Highlights
                </Text>

                <div className="space-y-4">
                  {course.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-[#08766c]"
                      />

                      <Text
                        color="body"
                        className="text-sm leading-6 sm:text-base"
                      >
                        {item}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUBJECTS */}
              <div className="rounded-2xl border border-[#eadcc2] bg-white p-6 shadow-sm sm:p-8">

                <Text
                  as="h2"
                  variant="h2"
                  color="primary"
                  className="mb-6 text-[23px] sm:text-[27px]"
                >
                  Subjects Offered
                </Text>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {course.subjects.map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center gap-3 rounded-lg border border-[#eee3d1] bg-[#faf7f0] px-4 py-3"
                    >
                      <BookOpen
                        size={17}
                        className="shrink-0 text-[#08766c]"
                      />

                      <Text
                        color="body"
                        className="text-sm font-medium"
                      >
                        {subject}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="h-fit rounded-2xl border border-[#e8d7b9] bg-[#f7f2e8] p-6 sm:p-8">

              <Text
                as="h2"
                variant="h3"
                color="primary"
                className="mb-6 text-[23px]"
              >
                Course Information
              </Text>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-white p-3 text-[#08766c]">
                    <GraduationCap size={21} />
                  </div>

                  <div>
                    <Text
                      color="muted"
                      className="text-xs"
                    >
                      Programme
                    </Text>

                    <Text
                      color="primary"
                      weight="semibold"
                      className="mt-1 text-sm"
                    >
                      {course.code}
                    </Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-white p-3 text-[#08766c]">
                    <Clock size={21} />
                  </div>

                  <div>
                    <Text
                      color="muted"
                      className="text-xs"
                    >
                      Duration
                    </Text>

                    <Text
                      color="primary"
                      weight="semibold"
                      className="mt-1 text-sm"
                    >
                      {course.duration}
                    </Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-white p-3 text-[#08766c]">
                    <Award size={21} />
                  </div>

                  <div>
                    <Text
                      color="muted"
                      className="text-xs"
                    >
                      Eligibility
                    </Text>

                    <Text
                      color="primary"
                      weight="semibold"
                      className="mt-1 text-sm leading-6"
                    >
                      {course.eligibility}
                    </Text>
                  </div>
                </div>

              </div>

              <div className="mt-8 border-t border-[#e4d5b9] pt-6">
                <Text
                  color="body"
                  className="mb-4 text-sm leading-6"
                >
                  Interested in joining MVN JS & RVR College?
                </Text>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-lg bg-[#00645c] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#004e48]"
                >
                  Contact College
                </Link>
              </div>

            </aside>
          </div>

        </Container>
      </section>

    </main>
  );
}