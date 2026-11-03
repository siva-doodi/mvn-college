import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";

const features = {
  "academic-excellence": {
    title: "Academic Excellence",
    subtitle: "Building Knowledge Through Quality Education",
    images: [
      "/assets/Images/academic-1.jpeg",
      "/assets/Images/academic-2.jpeg",
      "/assets/Images/academic-3.jpeg",
    ],
    paragraphs: [
      "MVN JS & RVR College of Arts & Science is committed to providing quality higher education across Arts, Science and Commerce. The institution focuses on creating an academic environment that encourages students to develop knowledge, critical thinking and practical understanding.",

      "With the support of dedicated faculty members, students are encouraged to participate in classroom learning, academic activities and knowledge-sharing programmes. The learning process aims to strengthen subject understanding, communication skills and confidence.",

      "Academic excellence is not limited to examination results. The institution also encourages independent thinking, continuous learning and the development of skills that help students prepare for higher education and future career opportunities."
    ],
  },

  "established-legacy": {
    title: "Established Legacy",
    subtitle: "A Tradition of Higher Education Since 1972",
    images: [
      "/assets/Images/legacy-1.jpeg",
      "/assets/Images/legacy-2.jpeg",
      "/assets/Images/legacy-3.jpeg",
    ],
    paragraphs: [
      "Established in 1972, MVN JS & RVR College of Arts & Science has a long-standing presence in higher education in the Konaseema region. The institution reflects a continued commitment to making higher education accessible to students and supporting their academic aspirations.",

      "Over the years, the college has focused on academic learning, student participation and opportunities for personal development. Its educational journey represents the importance of knowledge, discipline and learning in shaping individuals and communities.",

      "The institution continues to focus on its educational responsibilities while creating opportunities for present and future generations of students to pursue their academic goals."
    ],
  },

  "student-development": {
    title: "Student Development",
    subtitle: "Encouraging Growth Beyond the Classroom",
    images: [
      "/assets/Images/student-development-1.jpeg",
      "/assets/Images/student-development-2.jpeg",
      "/assets/Images/student-development-3.jpeg",
    ],
    paragraphs: [
      "Student development is an important part of the educational experience at MVN JS & RVR College of Arts & Science. Along with academic learning, students are encouraged to participate in extracurricular and co-curricular activities that support their overall growth.",

      "Through sports, cultural programmes, seminars, workshops and other student activities, learners get opportunities to develop communication, teamwork, leadership and interpersonal skills. These experiences help students discover their interests and abilities.",

      "The college aims to create opportunities for students to build confidence, develop positive values and prepare themselves for future responsibilities in their professional and personal lives."
    ],
  },

  "supportive-campus": {
    title: "Supportive Campus",
    subtitle: "A Welcoming Environment for Every Student",
    images: [
      "/assets/Images/supportive-campus-1.jpeg",
      "/assets/Images/supportive-campus-2.jpeg",
      "/assets/Images/supportive-campus-3.jpeg",
    ],
    paragraphs: [
      "MVN JS & RVR College of Arts & Science aims to provide a welcoming and supportive campus environment where students can focus on learning, personal development and their future aspirations.",

      "The college encourages positive interaction between students and faculty members through academic guidance, classroom participation and campus activities. A supportive learning environment helps students develop confidence and feel encouraged throughout their educational journey.",

      "By promoting participation, cooperation and mutual respect, the institution strives to create an environment where students can explore their interests, strengthen their abilities and work towards their goals."
    ],
  },
};

export default async function WhyChooseUsPage({ params }) {
  const { slug } = await params;
  const feature = features[slug];

  if (!feature) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Static Banner */}
      <Banner />

      {/* Feature Content */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="mb-9">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-muted">
              Our Strengths • MVN
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {feature.title}
            </h1>

            <p className="mt-3 text-base font-medium text-muted sm:text-lg">
              {feature.subtitle}
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Three Paragraphs */}
          <div className="space-y-7">
            {feature.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Feature Image Gallery */}
          <div className="mt-14">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
                Campus Highlights
              </span>

              <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                {feature.title} Gallery
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-secondary" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {feature.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary/20 bg-background-secondary shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${feature.title} gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}