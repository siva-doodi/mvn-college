
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Atom,
  Monitor,
  Leaf,
  Microscope,
  Landmark,
  ArrowUpRight,
  GraduationCap,
  Users,
  Library,
  CheckCircle2,
} from "lucide-react";

import { Banner, Container } from "@/components";

const departments = [
  {
    id: "01",
    name: "Department of English",
    category: "Humanities",
    Icon: BookOpen,
    description:
      "The Department of English focuses on developing communication, language proficiency, literary appreciation and critical thinking skills among students.",
    programmes: ["B.A.", "Language Courses"],
    subjects: ["English Literature", "Communication Skills", "Grammar"],
  },
  {
    id: "02",
    name: "Department of Mathematics",
    category: "Science",
    Icon: Calculator,
    description:
      "The Department of Mathematics encourages logical reasoning, analytical thinking and problem-solving through the study of mathematical concepts and applications.",
    programmes: ["B.Sc."],
    subjects: ["Algebra", "Calculus", "Statistics"],
  },
  {
    id: "03",
    name: "Department of Physics",
    category: "Science",
    Icon: Atom,
    description:
      "The Department of Physics introduces students to fundamental scientific principles through theoretical instruction, practical experiments and laboratory learning.",
    programmes: ["B.Sc."],
    subjects: ["Mechanics", "Optics", "Electronics"],
  },
  {
    id: "04",
    name: "Department of Chemistry",
    category: "Science",
    Icon: FlaskConical,
    description:
      "The Department of Chemistry helps students understand chemical principles, laboratory techniques and the applications of chemistry in everyday life.",
    programmes: ["B.Sc."],
    subjects: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
  },
  {
    id: "05",
    name: "Department of Computer Science",
    category: "Technology",
    Icon: Monitor,
    description:
      "The Department of Computer Science introduces students to programming, computing concepts, databases and information technology through practical learning.",
    programmes: ["BCA", "B.Sc. Computer Science"],
    subjects: ["Programming", "Database Management", "Computer Applications"],
  },
  {
    id: "06",
    name: "Department of Botany",
    category: "Science",
    Icon: Leaf,
    description:
      "The Department of Botany explores plant science, biodiversity, ecology and the importance of plant life through classroom and laboratory activities.",
    programmes: ["B.Sc."],
    subjects: ["Plant Anatomy", "Plant Physiology", "Ecology"],
  },
  {
    id: "07",
    name: "Department of Zoology",
    category: "Science",
    Icon: Microscope,
    description:
      "The Department of Zoology introduces students to animal biology, biodiversity, biological systems and scientific observation.",
    programmes: ["B.Sc."],
    subjects: ["Animal Physiology", "Genetics", "Biodiversity"],
  },
  {
    id: "08",
    name: "Department of Commerce",
    category: "Commerce",
    Icon: Landmark,
    description:
      "The Department of Commerce provides students with knowledge of accounting, business management, finance and commercial practices.",
    programmes: ["B.Com."],
    subjects: ["Financial Accounting", "Business Management", "Economics"],
  },
];

const facilities = [
  {
    Icon: BookOpen,
    title: "Academic Resources",
    description:
      "Learning resources and reference materials to support academic development.",
  },
  {
    Icon: Microscope,
    title: "Laboratory Learning",
    description:
      "Practical learning opportunities that help students understand subject concepts.",
  },
  {
    Icon: Users,
    title: "Faculty Guidance",
    description:
      "Academic guidance and support from teaching staff across disciplines.",
  },
];

export default function DepartmentsPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf6] text-[#233c36]">

    <Banner />
      {/* ================= INTRODUCTION ================= */}
      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#a17c3d]">
                Explore Our Disciplines
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-[#123e36] sm:text-4xl lg:text-[46px]">
                Education Across Diverse Fields of Knowledge
              </h2>

              <div className="my-7 h-[3px] w-16 bg-[#d4b477]" />
            </div>

            <div>
              <p className="text-sm leading-8 text-[#64716c] sm:text-base">
                MVN JS & RVR College offers academic learning opportunities
                across Arts, Science and Commerce disciplines. Each department
                supports students in developing subject knowledge, practical
                understanding and essential skills.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#64716c] sm:text-base">
                Through classroom instruction, academic activities and
                practical learning, departments aim to provide a supportive
                environment for students to explore their interests and
                prepare for further education and professional opportunities.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ================= DEPARTMENT LIST ================= */}
      <section className="bg-[#f1efe8] py-20 sm:py-24">
        <Container size="wide">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#a17c3d]">
                Academic Divisions
              </p>

              <h2 className="text-3xl font-semibold text-[#123e36] sm:text-4xl">
                Explore Our Departments
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#64716c]">
                Learn about the different departments and the subjects
                offered across our academic programmes.
              </p>
            </div>

            <span className="text-sm font-semibold text-[#075e58]">
              {departments.length} Academic Departments
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => {
              const Icon = department.Icon;

              return (
                <article
                  key={department.id}
                  className="group flex flex-col border border-[#e3ddcf] bg-[#fbfaf6] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a66e] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] sm:p-8"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#b18b4d]">
                      {department.id}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center bg-[#e9eee8] text-[#075e58] transition-colors group-hover:bg-[#075e58] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.6} />
                    </div>
                  </div>

                  <span className="mb-3 w-fit bg-[#f0e9da] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#92703b]">
                    {department.category}
                  </span>

                  <h3 className="text-xl font-semibold leading-snug text-[#123e36]">
                    {department.name}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#64716c]">
                    {department.description}
                  </p>

                  <div className="mt-7 border-t border-[#e8e2d6] pt-5">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#9a8358]">
                      Programmes
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {department.programmes.map((programme) => (
                        <span
                          key={programme}
                          className="bg-[#e9eee8] px-3 py-1.5 text-xs font-semibold text-[#075e58]"
                        >
                          {programme}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#9a8358]">
                      Key Subjects
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {department.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="border border-[#e5dfd3] px-2.5 py-1.5 text-[11px] text-[#68766e]"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/courses"
                    className="mt-7 inline-flex items-center gap-2 border-t border-[#e8e2d6] pt-5 text-sm font-bold text-[#075e58] transition-all group-hover:gap-4"
                  >
                    Explore Programmes
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ================= ACADEMIC SUPPORT ================= */}
      <section className="py-20 sm:py-24">
        <Container size="wide">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#a17c3d]">
              Supporting Learning
            </p>

            <h2 className="text-3xl font-semibold text-[#123e36] sm:text-4xl">
              Supporting Every Step of Learning
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#64716c]">
              Our academic environment encourages students to strengthen
              their understanding through learning resources, practical
              experiences and faculty guidance.
            </p>
          </div>

          <div className="grid gap-8 border-y border-[#e5dfd3] py-10 md:grid-cols-3">
            {facilities.map(({ Icon, title, description }, index) => (
              <div key={title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#e9eee8] text-[#075e58]">
                  <Icon size={24} strokeWidth={1.6} />
                </div>

                <div>
                  <span className="text-xs font-bold text-[#b18b4d]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-[#123e36]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64716c]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#073f38] py-20 sm:py-24">
        <Container size="wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#d4b477]">
              Begin Your Academic Journey
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Discover the Right Programme for Your Future
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              Explore our academic programmes and take the next step
              towards achieving your educational goals.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/academic/courses"
                className="inline-flex items-center gap-3 bg-[#d4b477] px-7 py-4 text-sm font-bold text-[#173c34] transition hover:bg-white"
              >
                View Courses
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#073f38]"
              >
                Contact College
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
