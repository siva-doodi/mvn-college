import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";

const facilities = {
  library: {
    title: "College Library",
    subtitle: "A Space for Knowledge, Reading and Research",
    paragraphs: [
      "The library at MVN JS & RVR College of Arts & Science serves as an important academic resource for students and faculty members. It provides a learning environment where students can access books, reference materials and other educational resources to support their academic development.",

      "The library offers a collection of textbooks, reference books, journals and periodicals covering different academic disciplines. Students can use these resources to prepare for examinations, complete assignments, improve their subject knowledge and develop independent reading habits.",

      "The college library encourages a culture of reading, continuous learning and intellectual development. It supports students in their academic journey by providing access to learning materials and a peaceful environment for reading and study."
    ],
    images: [
      "/assets/Images/library-1.jpg",
      "/assets/Images/library-2.jpg",
      "/assets/Images/library-3.jpg"
    ]
  },

  "science-laboratories": {
    title: "Science Laboratories",
    subtitle: "Practical Learning and Scientific Exploration",
    paragraphs: [
      "The science laboratories at MVN JS & RVR College provide students with opportunities to understand scientific concepts through practical learning. Laboratory activities complement classroom instruction and help students develop a deeper understanding of their subjects.",

      "Dedicated laboratory facilities support practical sessions in Physics, Chemistry, Botany and Zoology. Students gain experience in using laboratory equipment, conducting experiments and observing scientific processes under academic guidance.",

      "These facilities encourage scientific curiosity, observation, analytical thinking and problem-solving skills. Practical learning helps students connect theoretical knowledge with real-world applications."
    ]
  },

  classrooms: {
    title: "Classrooms",
    subtitle: "A Comfortable Environment for Learning",
    paragraphs: [
      "The classrooms at MVN JS & RVR College provide an academic environment designed to support effective teaching and learning. They serve as spaces where students and faculty members engage in lectures, discussions and other educational activities.",

      "The college focuses on providing spacious and well-ventilated classrooms that support a comfortable learning atmosphere. The classroom environment encourages student participation, interaction and the development of subject knowledge.",

      "Through regular classroom instruction and academic engagement, students are encouraged to develop communication skills, confidence and a strong foundation in their chosen subjects."
    ]
  },

  "computer-labs": {
    title: "Computer Laboratories",
    subtitle: "Technology and Digital Learning",
    paragraphs: [
      "The computer laboratories at MVN JS & RVR College support students in developing essential computer knowledge and practical information technology skills. They provide an environment for students to gain hands-on experience with computing resources.",

      "Students use computer facilities as part of their academic learning, programming exercises and practical coursework. These activities help them understand computer applications and strengthen their technical knowledge.",

      "The laboratories support technology-oriented education and help students build digital skills that are useful for higher studies and future career opportunities."
    ]
  },

  transportation: {
    title: "Transportation",
    subtitle: "Convenient Campus Connectivity",
    paragraphs: [
      "Transportation facilities help students travel to and from MVN JS & RVR College from surrounding areas. These facilities support students who commute from nearby villages and communities.",

      "College transportation is intended to make daily commuting more convenient and accessible for students. It helps students manage their travel requirements while attending regular academic activities.",

      "The availability and routes of transportation can be confirmed through the college administration. Students and parents can contact the college office for relevant transportation information."
    ]
  },

  "digital-learning": {
    title: "Digital Learning",
    subtitle: "Supporting Modern Education",
    paragraphs: [
      "Digital learning supports the academic environment at MVN JS & RVR College by introducing technology-aided approaches to education. It helps students engage with learning resources beyond traditional classroom instruction.",

      "Technology-based educational resources can support presentations, access to digital materials and interactive learning activities. These approaches help students become familiar with modern learning methods.",

      "Digital learning encourages students to strengthen their technology skills and engage with information in different formats, supporting their academic development and preparation for a technology-driven world."
    ]
  }
};

export default async function FacilityDetailsPage({ params }) {
  const { slug } = await params;
  const facility = facilities[slug];

  if (!facility) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Static Banner */}
      <Banner />
      {/* Facility Content */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="mb-9">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-muted">
              Campus Facilities
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {facility.title}
            </h1>

            <p className="mt-3 text-base font-medium text-muted sm:text-lg">
              {facility.subtitle}
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Three Paragraphs */}
          <div className="space-y-7">
            {facility.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Library Image Gallery */}
          {facility.images && (
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
                {facility.images.map((image, index) => (
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