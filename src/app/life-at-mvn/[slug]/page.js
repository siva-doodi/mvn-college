import { notFound } from "next/navigation";
import Image from "next/image";
import { Banner } from "@/components";

const activities = {
  "nss-community-service": {
    title: "NSS & Community Service",
    subtitle: "Serving Society Through Student Participation",
     images: [
      "/assets/Images/Nss.jpeg",
      "/assets/Images/Nss.jpeg",
      "/assets/Images/Nss.jpeg",
    ],
    paragraphs: [
      "The National Service Scheme (NSS) at MVN JS & RVR College encourages students to participate in community-oriented activities and social service initiatives. It provides opportunities for students to understand social responsibilities and contribute positively to the communities around them.",

      "Through NSS activities, students take part in community awareness programmes, social initiatives, cleanliness drives and activities that promote public welfare. These experiences help students develop leadership qualities, teamwork, discipline and a sense of responsibility towards society.",

      "Community service activities provide students with valuable experiences beyond the classroom. They encourage social awareness, cooperation and active participation in community development while helping students become responsible and socially conscious citizens."
    ]
  },

  "sports-games": {
    title: "Sports & Games",
    subtitle: "Building Fitness, Teamwork and Sportsmanship",
     images: [
      "/assets/Images/Nss.jpeg",
      "/assets/Images/Nss.jpeg",
      "/assets/Images/Nss.jpeg",
    ],
    paragraphs: [
      "Sports and physical activities form an important part of student life at MVN JS & RVR College. The college encourages students to participate in games and sporting activities as part of their overall personality development.",

      "Participation in sports helps students develop physical fitness, discipline, teamwork and confidence. It also provides opportunities to understand the importance of dedication, healthy competition and cooperation with fellow students.",

      "Through sports activities and participation in competitions, students can discover their interests and abilities while developing a balanced approach to academics and physical well-being."
    ]
  },

  "cultural-activities": {
    title: "Cultural Activities",
    subtitle: "Celebrating Creativity, Talent and Togetherness",
     images: [
      "/assets/Images/Nss.jpeg",
      "/assets/Images/Nss.jpeg",
      "/assets/Images/Nss.jpeg",
    ],
    paragraphs: [
      "Cultural activities at MVN JS & RVR College provide students with opportunities to express their creativity and showcase their individual talents. These activities form an important part of campus life and encourage students to participate beyond regular academic programmes.",

      "Students can engage in cultural programmes, performances, celebrations and other creative activities. Such experiences encourage artistic expression, confidence, communication and teamwork while providing opportunities to appreciate different cultural interests.",

      "Cultural events and college celebrations help create memorable experiences and strengthen the sense of community among students. They contribute to a vibrant campus environment where students can explore their interests and develop their personalities."
    ]
  },

  "seminars-workshops": {
    title: "Seminars & Workshops",
    subtitle: "Learning Beyond the Classroom",
    image: "/assets/Images/Seminars.jpeg",
    paragraphs: [
      "Seminars and workshops at MVN JS & RVR College provide students with opportunities to explore academic subjects and develop knowledge beyond their regular classroom lessons. These activities encourage active learning and interaction with different areas of study.",

      "Through seminars, workshops and guest lectures, students can gain exposure to subject-related discussions, career guidance and skill-development activities. These programmes encourage students to ask questions, exchange ideas and understand practical applications of their academic knowledge.",

      "Such learning experiences help students strengthen communication, presentation, critical thinking and professional development skills. They also encourage students to remain curious, informed and prepared for future academic and career opportunities."
    ]
  }
};

export default async function LifeAtMVNPage({ params }) {
  const { slug } = await params;
  const activity = activities[slug];

  if (!activity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Static Banner */}
      <Banner />

      {/* Activity Content */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="mb-9">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-muted">
              Student Life • MVN
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {activity.title}
            </h1>

            <p className="mt-3 text-base font-medium text-muted sm:text-lg">
              {activity.subtitle}
            </p>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Three Paragraphs */}
          <div className="space-y-7">
            {activity.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Activity Image */}
          {/* Activity Image Gallery */}
          <div className="mt-14">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
                Campus Moments
              </span>

              <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                {activity.title} Gallery
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-secondary" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {activity.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary/20 bg-background-secondary shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${activity.title} gallery image ${index + 1}`}
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