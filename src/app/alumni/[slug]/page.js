import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";

const alumniPages = {
  "alumni-association": {
    title: "Alumni Association",
    subtitle: "A Lifelong Connection with MVN",
    paragraphs: [
      "The Alumni Association of MVN JS & RVR College of Arts & Science brings together graduates from different batches and academic backgrounds. It provides a platform for former students to remain connected with their institution, faculty members and fellow alumni.",

      "The association encourages alumni participation in academic activities, student mentoring, knowledge sharing and institutional development. Through their professional experiences and achievements, alumni can provide valuable guidance and inspiration to current students.",

      "The alumni community represents the lasting relationship between graduates and their college. By maintaining these connections, the association helps strengthen institutional relationships and encourages former students to contribute to the continued growth of MVN JS & RVR College."
    ],
    images: [
      "/assets/Images/alumni-association-1.jpg",
      "/assets/Images/alumni-association-2.jpg",
      "/assets/Images/alumni-association-3.jpg"
    ]
  },

  "alumni-meet": {
    title: "Alumni Meet",
    subtitle: "Reconnecting Memories and Celebrating Relationships",
    paragraphs: [
      "Alumni meets at MVN JS & RVR College provide opportunities for former students to return to their institution and reconnect with classmates, teachers and the college community. These gatherings celebrate the shared experiences and memories created during their academic years.",

      "The gatherings encourage interaction between alumni, faculty members and current students. They provide opportunities to share professional experiences, discuss career journeys and exchange ideas that can support the development of future graduates.",

      "Alumni meets strengthen the bond between the institution and its graduates. They create meaningful opportunities to celebrate achievements, maintain friendships and encourage continued involvement in college activities."
    ],
    images: [
      "/assets/Images/alumni-meet-1.jpg",
      "/assets/Images/alumni-meet-2.jpg",
      "/assets/Images/alumni-meet-3.jpg"
    ]
  },

  "distinguished-alumni": {
    title: "Distinguished Alumni",
    subtitle: "Celebrating the Achievements of Our Graduates",
    paragraphs: [
      "MVN JS & RVR College takes pride in its alumni who have progressed into different professional fields and contributed to their communities. Graduates carry the knowledge and experiences gained during their education into their professional and personal lives.",

      "Alumni achievements across areas such as education, public service, business and other professional sectors serve as a source of encouragement for current students. Their journeys demonstrate the different opportunities that can follow a strong educational foundation.",

      "Recognising distinguished alumni helps celebrate their contributions and inspires future generations of students. The college values the achievements of its graduates and the continued relationship they maintain with their institution."
    ],
    images: [
      "/assets/Images/distinguished-alumni-1.jpg",
      "/assets/Images/distinguished-alumni-2.jpg",
      "/assets/Images/distinguished-alumni-3.jpg"
    ]
  },

  "alumni-activities": {
    title: "Alumni Activities",
    subtitle: "Engagement, Mentorship and Community Participation",
    paragraphs: [
      "Alumni activities at MVN JS & RVR College provide opportunities for graduates to remain actively connected with the institution. These activities encourage former students to participate in college programmes and contribute their experiences and knowledge to the academic community.",

      "Alumni can engage through guest lectures, student mentoring, academic interactions and community-oriented initiatives. Their participation helps current students gain insights into different career paths, professional experiences and opportunities for personal development.",

      "These activities strengthen the relationship between alumni and the college while encouraging knowledge sharing and community engagement. They help create a connected academic community where graduates and current students can learn from one another."
    ],
    images: [
      "/assets/Images/alumni-activities-1.jpg",
      "/assets/Images/alumni-activities-2.jpg",
      "/assets/Images/alumni-activities-3.jpg"
    ]
  }
};

export default async function AlumniDetailsPage({ params }) {
  const { slug } = await params;
  const alumni = alumniPages[slug];

  if (!alumni) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Static Banner */}
      <Banner />

      {/* Alumni Content */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="mb-9">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-muted">
              Alumni &amp; Community
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {alumni.title}
            </h1>

            <p className="mt-3 text-base font-medium text-muted sm:text-lg">
              {alumni.subtitle}
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Three Paragraphs */}
          <div className="space-y-7">
            {alumni.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Alumni Image Gallery */}
          <div className="mt-14">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
                Our Alumni Community
              </span>

              <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                {alumni.title} Gallery
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-secondary" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {alumni.images.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary/20 bg-background-secondary shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${alumni.title} image ${index + 1}`}
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