import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";

const newsItems = {
  "annual-college-day": {
    tag: "Event",
    date: "Annual College Event",
    title: "Annual College Day Celebration",
    paragraphs: [
      "MVN JS & RVR College celebrates its Annual College Day as an important occasion to recognise student achievements and celebrate the academic and extracurricular activities of the institution. The event brings together students, faculty members and guests in a spirit of enthusiasm and togetherness.",

      "The celebration provides an opportunity to recognise students for their achievements in academics, sports and cultural activities. Various performances and programmes create an engaging atmosphere and encourage students to showcase their talents, creativity and confidence.",

      "Annual College Day reflects the institution's commitment to student development and campus engagement. It creates memorable experiences for students while encouraging participation, teamwork and a strong sense of belonging to the college community."
    ],
    images: [
      "/assets/Images/news-annual-day.jpg",
      "/assets/Images/news-annual-day-2.jpg",
      "/assets/Images/news-annual-day-3.jpg"
    ]
  },

  "admissions-2026-27": {
    tag: "Notice",
    date: "Admissions – 2026–27",
    title: "Admissions Open – Academic Year 2026–27",
    paragraphs: [
      "MVN JS & RVR College of Arts & Science welcomes applications from students interested in pursuing undergraduate education for the academic year 2026–27. The institution offers academic programmes in Arts, Science and Commerce.",

      "Students interested in joining the college can explore the available programmes and obtain information about admission requirements, eligibility and the application process through the college administration. The college encourages applicants to understand the programme options before making their academic choices.",

      "For further information about admissions, course availability and application procedures, students and parents are encouraged to contact the college office directly."
    ],
    images: [
      "/assets/Images/news-admissions.jpg",
      "/assets/Images/news-admissions-2.jpg",
      "/assets/Images/news-admissions-3.jpg"
    ]
  },

  "skill-development-workshop": {
    tag: "Workshop",
    date: "Seminar & Workshop",
    title: "Skill Development Workshop",
    paragraphs: [
      "Skill development workshops provide students with opportunities to strengthen their knowledge and develop abilities that support their academic and professional growth. These programmes complement classroom education through interactive learning experiences.",

      "Workshop sessions can include expert discussions, practical activities, career guidance and opportunities to understand current developments in different fields. Students are encouraged to participate actively, exchange ideas and learn from the experiences shared during these programmes.",

      "Such activities support communication, teamwork, confidence and problem-solving abilities. They help students explore their interests and prepare for future academic and career opportunities."
    ],
    images: [
      "/assets/Images/news-workshop.jpg",
      "/assets/Images/news-workshop-2.jpg",
      "/assets/Images/news-workshop-3.jpg"
    ]
  }
};

export default async function NewsDetailsPage({ params }) {
  const { slug } = await params;
  const news = newsItems[slug];

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Static Banner */}
      <Banner />

      {/* News Content */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

          {/* News Heading */}
          <div className="mb-9">
            <span className="inline-flex rounded-sm bg-secondary/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">
              {news.tag}
            </span>

            <p className="mt-5 text-sm font-semibold text-gold-muted">
              {news.date}
            </p>

            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {news.title}
            </h1>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Three Paragraphs */}
          <div className="space-y-7">
            {news.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* News Image Gallery */}
          <div className="mt-14">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
                News & Events
              </span>

              <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                {news.title} Gallery
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-secondary" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {news.images.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary/20 bg-background-secondary shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${news.title} image ${index + 1}`}
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