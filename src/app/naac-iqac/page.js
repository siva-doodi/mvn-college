"use client";

import { useEffect } from "react";
import {
  ShieldCheck,
  Target,
  BookOpen,
  Users,
  TrendingUp,
  ClipboardCheck,
} from "lucide-react";

import { Container } from "@/components";

export default function NaacIqacPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#fffdf8]">
      {/* Page Heading */}
      <section className="bg-[#064b47] px-4 py-16 text-center sm:py-20">
        <Container>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#c3a365]">
            Quality Assurance
          </p>

          <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            NAAC & IQAC
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Commitment to academic excellence, institutional development,
            continuous improvement and quality education.
          </p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="px-4 py-14 sm:py-20">
        <Container>
          <div data-reveal className="reveal-section mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#92723a]">
              Introduction
            </p>

            <h2 className="mb-6 font-serif text-2xl font-bold text-[#064b47] sm:text-3xl">
              Maintaining Quality in Higher Education
            </h2>

            <p className="text-base leading-8 text-[#647473]">
              MVN JS & RVR College of Arts & Science focuses on providing
              quality education through academic planning, effective teaching
              practices, student development and continuous institutional
              improvement. The institution aims to create a supportive
              learning environment that encourages knowledge, skills,
              discipline and responsible citizenship.
            </p>

            <p className="mt-5 text-base leading-8 text-[#647473]">
              Quality assurance is an ongoing process involving academic
              evaluation, administrative improvements, stakeholder feedback
              and the review of institutional activities.
            </p>
          </div>
        </Container>
      </section>

      {/* NAAC */}
      <section className="bg-[#f5f1e7] px-4 py-14 sm:py-20">
        <Container>
          <div
            data-reveal
            className="reveal-section grid gap-8 md:grid-cols-[90px_1fr] md:gap-12"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#064b47] text-[#c3a365]">
              <ShieldCheck size={32} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#064b47] sm:text-3xl">
                National Assessment and Accreditation Council (NAAC)
              </h2>

              <p className="mt-5 text-base leading-8 text-[#647473]">
                The National Assessment and Accreditation Council (NAAC) is an
                autonomous body established to assess and accredit higher
                education institutions in India. Its assessment framework
                focuses on evaluating institutional performance and promoting
                quality improvement in higher education.
              </p>

              <p className="mt-4 text-base leading-8 text-[#647473]">
                NAAC assessment considers areas such as curricular aspects,
                teaching-learning processes, research, infrastructure,
                student support, governance and institutional values.
                Institutions use these quality benchmarks to review their
                performance and identify opportunities for improvement.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#92723a]">
                The college's current accreditation grade, status and
                assessment cycle should be added here after verification from
                official institutional records.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* IQAC */}
      <section className="px-4 py-14 sm:py-20">
        <Container>
          <div
            data-reveal
            className="reveal-section grid gap-8 md:grid-cols-[90px_1fr] md:gap-12"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#064b47] text-[#c3a365]">
              <Target size={32} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#064b47] sm:text-3xl">
                Internal Quality Assurance Cell (IQAC)
              </h2>

              <p className="mt-5 text-base leading-8 text-[#647473]">
                The Internal Quality Assurance Cell (IQAC) is an important
                mechanism for maintaining and improving institutional quality.
                It works towards developing a systematic approach to academic
                and administrative performance through planning, monitoring,
                evaluation and follow-up activities.
              </p>

              <p className="mt-4 text-base leading-8 text-[#647473]">
                IQAC encourages a culture of continuous improvement by
                supporting quality initiatives, collecting feedback from
                stakeholders, reviewing academic activities and promoting
                effective institutional practices.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Objectives */}
      <section className="bg-[#f5f1e7] px-4 py-14 sm:py-20">
        <Container>
          <div data-reveal className="reveal-section mx-auto max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <BookOpen className="text-[#92723a]" size={28} />
              <h2 className="font-serif text-2xl font-bold text-[#064b47] sm:text-3xl">
                Objectives of IQAC
              </h2>
            </div>

            <p className="mb-6 leading-8 text-[#647473]">
              The IQAC aims to establish a structured and continuous process
              for improving the academic and administrative quality of the
              institution.
            </p>

            <ul className="space-y-4 text-base leading-8 text-[#647473]">
              <li>Promote a culture of quality education and institutional excellence.</li>
              <li>Encourage learner-centric teaching and learning practices.</li>
              <li>Support faculty development and professional growth.</li>
              <li>Promote research, innovation and academic activities.</li>
              <li>Collect and analyse feedback from students and stakeholders.</li>
              <li>Encourage transparency and accountability in institutional activities.</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Functions */}
      <section className="px-4 py-14 sm:py-20">
        <Container>
          <div data-reveal className="reveal-section mx-auto max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <Users className="text-[#92723a]" size={28} />
              <h2 className="font-serif text-2xl font-bold text-[#064b47] sm:text-3xl">
                Functions of IQAC
              </h2>
            </div>

            <p className="mb-6 leading-8 text-[#647473]">
              IQAC supports institutional quality through the following
              activities:
            </p>

            <ul className="space-y-4 text-base leading-8 text-[#647473]">
              <li>Developing and implementing quality benchmarks.</li>
              <li>Coordinating academic and administrative quality initiatives.</li>
              <li>Organising workshops, seminars and faculty development programmes.</li>
              <li>Promoting documentation of institutional activities.</li>
              <li>Reviewing feedback and suggesting appropriate improvements.</li>
              <li>Preparing quality-related reports and supporting accreditation processes.</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Quality Initiatives */}
      <section className="bg-[#f5f1e7] px-4 py-14 sm:py-20">
        <Container>
          <div data-reveal className="reveal-section mx-auto max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <TrendingUp className="text-[#92723a]" size={28} />
              <h2 className="font-serif text-2xl font-bold text-[#064b47] sm:text-3xl">
                Quality Assurance Initiatives
              </h2>
            </div>

            <p className="leading-8 text-[#647473]">
              Quality assurance initiatives focus on improving teaching
              methodologies, strengthening student support systems, enhancing
              infrastructure, encouraging faculty development and promoting
              meaningful student participation. Regular reviews help identify
              areas that require attention and support continuous institutional
              development.
            </p>
          </div>
        </Container>
      </section>

      {/* Reports */}
      <section className="px-4 py-14 sm:py-20">
        <Container>
          <div data-reveal className="reveal-section mx-auto max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <ClipboardCheck className="text-[#92723a]" size={28} />
              <h2 className="font-serif text-2xl font-bold text-[#064b47] sm:text-3xl">
                Reports & Documentation
              </h2>
            </div>

            <p className="leading-8 text-[#647473]">
              Institutional quality documentation provides a record of
              academic activities, quality initiatives, feedback analysis,
              meetings and improvement measures. Relevant reports and
              supporting documents can be published in this section for
              students, faculty, stakeholders and visitors.
            </p>

            <p className="mt-5 leading-8 text-[#647473]">
              Official IQAC meeting minutes, annual quality assurance reports,
              action taken reports and accreditation documents should be
              uploaded here when available.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}