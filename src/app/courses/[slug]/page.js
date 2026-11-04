
import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";

const coursePages = {
  "bachelor-of-arts": {
    title: "Bachelor of Arts",
    code: "B.A.",
    image: "/assets/Images/courses-banner.jpg",
    images: [
      "/assets/Images/ba-1.jpg",
      "/assets/Images/ba-2.jpg",
      "/assets/Images/ba-3.jpg",
    ],
    paragraphs: [
      "The Bachelor of Arts (B.A.) programme at MVN JS & RVR College of Arts & Science provides students with a broad foundation in humanities and social sciences. The programme encourages students to understand society, culture, history and human behaviour through a range of academic disciplines.",
      "The curriculum focuses on developing communication, critical thinking, analytical reasoning and problem-solving abilities. Through classroom learning, discussions, assignments and academic activities, students gain knowledge that supports both personal development and further education.",
      "Graduates of the B.A. programme can explore opportunities in education, public administration, social services, journalism and other professional fields. The programme also provides a foundation for students interested in pursuing postgraduate studies and competitive examinations.",
    ],
  },

  "bachelor-of-science": {
    title: "Bachelor of Science",
    code: "B.Sc.",
    image: "/assets/Images/courses-banner.jpg",
    images: [
      "/assets/Images/bsc-1.jpg",
      "/assets/Images/bsc-2.jpg",
      "/assets/Images/bsc-3.jpg",
    ],
    paragraphs: [
      "The Bachelor of Science (B.Sc.) programme provides students with a strong academic foundation in scientific subjects. The programme encourages curiosity, logical reasoning and an understanding of scientific principles through subjects such as Mathematics, Physics, Chemistry, Botany and Zoology.",
      "Students develop their knowledge through theoretical instruction, practical laboratory sessions and academic activities. The learning approach helps students understand scientific concepts, conduct experiments and develop analytical and problem-solving skills.",
      "The B.Sc. programme prepares students for further education and career opportunities in science, research, education, laboratories and related industries. Students can also pursue postgraduate programmes and specialised professional courses.",
    ],
  },

  "bachelor-of-commerce": {
    title: "Bachelor of Commerce",
    code: "B.Com.",
    image: "/assets/Images/courses-banner.jpg",
    images: [
      "/assets/Images/bcom-1.jpg",
      "/assets/Images/bcom-2.jpg",
      "/assets/Images/bcom-3.jpg",
    ],
    paragraphs: [
      "The Bachelor of Commerce (B.Com.) programme provides students with a comprehensive understanding of business, commerce, finance and accounting. It introduces students to the principles and practices that support the functioning of modern business organisations.",
      "The programme develops practical knowledge in accounting, business management, financial systems and commercial operations. Students are encouraged to strengthen their numerical, analytical, communication and decision-making abilities through academic learning and practical assignments.",
      "Graduates can explore career opportunities in accounting, banking, finance, taxation, business administration and other commercial sectors. The programme also provides a foundation for higher studies and professional qualifications.",
    ],
  },

  "bachelor-of-computer-applications": {
    title: "Bachelor of Computer Applications",
    code: "BCA",
    image: "/assets/Images/courses-banner.jpg",
    images: [
      "/assets/Images/bca-1.jpg",
      "/assets/Images/bca-2.jpg",
      "/assets/Images/bca-3.jpg",
    ],
    paragraphs: [
      "The Bachelor of Computer Applications (BCA) programme introduces students to the fundamentals of computer science and information technology. It is designed for students interested in programming, software development and the growing digital technology sector.",
      "The curriculum focuses on programming concepts, computer applications, database management and software development. Through practical sessions and academic projects, students develop technical knowledge, logical thinking and problem-solving skills.",
      "Graduates can explore opportunities in software development, web technologies, IT support, application development and related technology fields. The programme also supports students who wish to pursue advanced studies in computer applications and information technology.",
    ],
  },
};

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = coursePages[slug];

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Course Banner */}
      <Banner image={course.image} />

      {/* Course Description */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <div className="mb-9">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-muted">
              {course.code} Programme
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          <div className="space-y-7">
            {course.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
           {course.images && (
                      <div className="mt-14">
                        <div className="mb-7">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
                            Inside Our Library
                          </span>
          
                          <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                            Library Gallery
                          </h2>
          
                          <div className="mt-4 h-1 w-14 rounded-full bg-secondary" />
                        </div>
          
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                          {course.images.map((image, index) => (
                            <div
                              key={image}
                              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary/20 bg-background-secondary shadow-sm"
                            >
                              <Image
                                src={image}
                                alt={`College library view ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
        </div>
      </section>
    </main>
  );
}
