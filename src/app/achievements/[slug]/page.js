import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";

const achievements = {
  "naac-accreditation": {
    label: "NAAC Accreditation",
    title: "Accredited by NAAC",
    badge: "NAAC – B Grade",
    paragraphs: [
      "MVN JS & RVR College of Arts & Science has a history of assessment and accreditation by the National Assessment and Accreditation Council (NAAC). The accreditation process reflects the institution's efforts towards maintaining academic standards and improving the quality of higher education.",

      "The college was accredited by NAAC with a B grade and a score of 2.78 in 2016. This recognition represents an important milestone in the institution's academic journey and its commitment to providing educational opportunities to students in the region.",

      "The institution continues to focus on academic development, student support and institutional improvement. Its commitment to quality education remains an important part of its educational mission."
    ],
    images: [
      "/assets/Images/naac-1.jpg",
      "/assets/Images/naac-2.jpg",
      "/assets/Images/naac-3.jpg"
    ]
  },

  "ugc-recognition": {
    label: "UGC Recognition",
    title: "UGC Recognised Institution",
    badge: "UGC Recognised",
    paragraphs: [
      "MVN JS & RVR College of Arts & Science has a longstanding history of recognition under the University Grants Commission (UGC). The institution's recognition reflects its place within the higher education system and its commitment to providing academic opportunities.",

      "The college has a UGC recognition history, including recognition under Section 12(B) in 1979 and Section 2(f) in 1981. These recognitions form an important part of the institution's development and academic history.",

      "The institution continues to focus on providing undergraduate education and supporting students through its academic programmes. Students can contact the college administration for current information about recognition, affiliation and approved programmes."
    ],
    images: [
      "/assets/Images/ugc-1.jpg",
      "/assets/Images/ugc-2.jpg",
      "/assets/Images/ugc-3.jpg"
    ]
  },

  "centre-of-excellence": {
    label: "Centre of Excellence",
    title: "Centre of Excellence",
    badge: "Recognised — Higher Education",
    paragraphs: [
      "MVN JS & RVR College of Arts & Science is committed to providing quality higher education to students, particularly those from rural communities. The institution aims to create an academic environment that supports knowledge, personal development and educational opportunities.",

      "Its educational approach emphasises accessible learning, academic development and value-based education. The college strives to support students through its academic programmes and institutional activities.",

      "The institution continues to work towards strengthening its educational environment and supporting the aspirations of students from the surrounding communities."
    ],
    images: [
      "/assets/Images/excellence-1.jpg",
      "/assets/Images/excellence-2.jpg",
      "/assets/Images/excellence-3.jpg"
    ]
  },

  "academic-milestones": {
    label: "Academic Milestones",
    title: "Five Decades of Service",
    badge: "Established 1972",
    paragraphs: [
      "Established in 1972 by the Antervedipalem Firka Development Trust, MVN JS & RVR College of Arts & Science has served the educational needs of the Konaseema region for more than five decades. The institution has contributed to higher education opportunities for students from surrounding rural communities.",

      "Over the years, the college has developed its academic programmes and educational activities. Its journey reflects a continued commitment to learning, student development and providing access to higher education.",

      "The college also participates in initiatives such as Unnat Bharat Abhiyan and Andhra Pradesh State Skill Development Corporation programmes. These initiatives support community engagement, student development and opportunities to strengthen practical skills."
    ],
    images: [
      "/assets/Images/milestones-1.jpg",
      "/assets/Images/milestones-2.jpg",
      "/assets/Images/milestones-3.jpg"
    ]
  }
};

export default async function AchievementDetailsPage({ params }) {
  const { slug } = await params;
  const achievement = achievements[slug];

  if (!achievement) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Static Banner */}
      <Banner />

      {/* Achievement Content */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="mb-9">
            <span className="inline-flex rounded-sm bg-secondary/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">
              {achievement.label}
            </span>

            <h1 className="mt-5 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {achievement.title}
            </h1>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Three Paragraphs */}
          <div className="space-y-7">
            {achievement.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Recognition Badge */}
          <div className="mt-8">
            <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-5 py-3 text-sm font-bold text-gold-muted">
              {achievement.badge}
            </span>
          </div>

          {/* Three Image Gallery */}
          <div className="mt-14">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
                Recognition & Milestones
              </span>

              <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                {achievement.title} Gallery
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-secondary" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {achievement.images.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary/20 bg-background-secondary shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${achievement.title} image ${index + 1}`}
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