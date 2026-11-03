import Image from "next/image";
import { notFound } from "next/navigation";
import { Banner } from "@/components";

const organizationData = {
    chairman: {
        title: "Chairman",
        subtitle: "College Governing Leadership",
        paragraphs: [
            "The Chairman provides leadership and guidance to the College Governing Body of MVN JS & RVR College of Arts & Science.",
            "The role supports the institution's overall vision, development and administrative direction in coordination with the governing members.",
            "The Chairman contributes to the institution's long-term growth and its commitment to providing quality education.",
        ],
        images: [
            "/assets/Images/chairman-1.jpg",
            "/assets/Images/chairman-2.jpg",
            "/assets/Images/chairman-3.jpg",
        ],
    },

    "vice-chairman": {
        title: "Vice Chairman",
        subtitle: "Institutional Governance",
        paragraphs: [
            "The Vice Chairman supports the leadership and governance of MVN JS & RVR College of Arts & Science.",
            "The role involves supporting the Chairman and contributing to important institutional discussions and administrative decisions.",
            "The Vice Chairman works with the governing body to support the continued development and effective functioning of the college.",
        ],
        images: [
            "/assets/Images/vice-chairman-1.jpg",
            "/assets/Images/vice-chairman-2.jpg",
            "/assets/Images/vice-chairman-3.jpg",
        ],
    },

    "secretary-correspondent": {
        title: "Secretary & Correspondent",
        subtitle: "Institutional Administration",
        paragraphs: [
            "The Secretary & Correspondent plays an important role in coordinating institutional administration and communication.",
            "The position supports the implementation of institutional decisions and coordination between the management and college administration.",
            "The role contributes to the smooth functioning and development of the institution.",
        ],
        images: [
            "/assets/Images/secretary-1.jpg",
            "/assets/Images/secretary-2.jpg",
            "/assets/Images/secretary-3.jpg",
        ],
    },

    "joint-secretary": {
        title: "Joint Secretary",
        subtitle: "Administrative Coordination",
        paragraphs: [
            "The Joint Secretary supports the administrative responsibilities of the institution.",
            "The role assists in coordinating activities and supporting the implementation of decisions taken by the governing body.",
            "The Joint Secretary contributes to effective communication and institutional administration.",
        ],
        images: [
            "/assets/Images/joint-secretary-1.jpg",
            "/assets/Images/joint-secretary-2.jpg",
            "/assets/Images/joint-secretary-3.jpg",
        ],
    },

    treasurer: {
        title: "Treasurer",
        subtitle: "Financial Administration",
        paragraphs: [
            "The Treasurer is associated with the financial administration and financial oversight of the institution.",
            "The role supports financial coordination and responsible management of institutional resources.",
            "The Treasurer contributes to the financial planning and smooth administration of the college.",
        ],
        images: [
            "/assets/Images/treasurer-1.jpg",
            "/assets/Images/treasurer-2.jpg",
            "/assets/Images/treasurer-3.jpg",
        ],
    },

    members: {
        title: "Governing Body Members",
        subtitle: "Institutional Governance",
        paragraphs: [
            "The members of the College Governing Body contribute to the administration and development of MVN JS & RVR College of Arts & Science.",
            "They participate in institutional discussions and support decisions related to the college's growth and functioning.",
            "Their collective involvement supports the institution's academic and administrative objectives.",
        ],
        images: [
            "/assets/Images/members-1.jpg",
            "/assets/Images/members-2.jpg",
            "/assets/Images/members-3.jpg",
        ],
    },

    principal: {
        title: "Principal",
        subtitle: "Academic and Institutional Leadership",
        paragraphs: [
            "The Principal is responsible for providing academic and administrative leadership to MVN JS & RVR College of Arts & Science.",
            "The role involves coordinating academic activities, supporting faculty members, monitoring institutional processes and promoting a positive learning environment.",
            "The Principal works with the management, academic council and department heads to support the college's educational objectives.",
        ],
        images: [
            "/assets/Images/principal-1.jpg",
            "/assets/Images/principal-2.jpg",
            "/assets/Images/principal-3.jpg",
        ],
    },

    "vice-principal": {
        title: "Vice Principal",
        subtitle: "Academic Administration",
        paragraphs: [
            "The Vice Principal supports the Principal in the academic and administrative functioning of the college.",
            "The role includes coordinating academic activities, supporting faculty and assisting in the effective implementation of institutional plans.",
            "The Vice Principal contributes to maintaining an organized academic environment for students and staff.",
        ],
        images: [
            "/assets/Images/vice-principal-1.jpg",
            "/assets/Images/vice-principal-2.jpg",
            "/assets/Images/vice-principal-3.jpg",
        ],
    },

    hods: {
        title: "Heads of Departments (HODs)",
        subtitle: "Departmental Academic Leadership",
        paragraphs: [
            "The Heads of Departments guide and coordinate the academic activities within their respective departments.",
            "They support faculty members, coordinate departmental planning and contribute to teaching and learning activities.",
            "The HODs work with the college administration to support academic standards and student development.",
        ],
        images: [
            "/assets/Images/hods-1.jpg",
            "/assets/Images/hods-2.jpg",
            "/assets/Images/hods-3.jpg",
        ],
    },

    "incharge-principal": {
        title: "Incharge Principal",
        subtitle: "Academic and Administrative Support",
        paragraphs: [
            "The Incharge Principal supports the day-to-day academic and administrative responsibilities of the college.",
            "The role involves coordinating institutional activities and supporting the continuity of academic and administrative operations.",
            "The Incharge Principal works with department heads and faculty members to support the smooth functioning of the institution.",
        ],
        images: [
            "/assets/Images/incharge-principal-1.jpg",
            "/assets/Images/incharge-principal-2.jpg",
            "/assets/Images/incharge-principal-3.jpg",
        ],
    },

    "assistant-professors": {
        title: "Assistant Professors",
        subtitle: "Teaching and Student Development",
        paragraphs: [
            "Assistant Professors play an important role in delivering academic instruction and supporting student learning.",
            "They engage in classroom teaching, academic guidance, assessments and other departmental activities.",
            "Their contribution supports students in developing subject knowledge, practical skills and academic confidence.",
        ],
        images: [
            "/assets/Images/assistant-professors-1.jpg",
            "/assets/Images/assistant-professors-2.jpg",
            "/assets/Images/assistant-professors-3.jpg",
        ],
    },

    librarian: {
        title: "Librarian",
        subtitle: "Library and Learning Resources",
        paragraphs: [
            "The Librarian manages and supports the library services of MVN JS & RVR College of Arts & Science.",
            "The role includes organizing learning resources, assisting library users and supporting access to academic materials.",
            "The library contributes to reading habits, independent learning and academic development among students.",
        ],
        images: [
            "/assets/Images/librarian-1.jpg",
            "/assets/Images/librarian-2.jpg",
            "/assets/Images/librarian-3.jpg",
        ],
    },

    subordinates: {
        title: "Library Support Staff",
        subtitle: "Library Operations and Assistance",
        paragraphs: [
            "Library support staff assist in the daily functioning of the college library.",
            "Their responsibilities may include organizing resources, maintaining library materials and assisting students and faculty.",
            "Their support helps maintain an accessible and organized library environment.",
        ],
        images: [
            "/assets/Images/subordinates-1.jpg",
            "/assets/Images/subordinates-2.jpg",
            "/assets/Images/subordinates-3.jpg",
        ],
    },

    "physical-director": {
        title: "Physical Director",
        subtitle: "Sports and Physical Education",
        paragraphs: [
            "The Physical Director supports sports, games and physical education activities at the college.",
            "The role encourages students to participate in physical activities and develop teamwork, discipline and sportsmanship.",
            "The Physical Director contributes to a balanced campus experience through sports and fitness activities.",
        ],
        images: [
            "/assets/Images/physical-director-1.jpg",
            "/assets/Images/physical-director-2.jpg",
            "/assets/Images/physical-director-3.jpg",
        ],
    },

    "students-council": {
        title: "Students Council",
        subtitle: "Student Representation and Participation",
        paragraphs: [
            "The Students Council provides a platform for students to participate in college activities and student representation.",
            "It encourages student involvement, leadership, teamwork and communication within the campus community.",
            "The council supports student participation in academic, cultural and institutional activities.",
        ],
        images: [
            "/assets/Images/students-council-1.jpg",
            "/assets/Images/students-council-2.jpg",
            "/assets/Images/students-council-3.jpg",
        ],
    },

    "student-union-leaders": {
        title: "Student Union Leaders",
        subtitle: "Student Leadership",
        paragraphs: [
            "Student Union Leaders represent student interests and encourage active participation in campus activities.",
            "They support communication between students and the college administration and contribute to student initiatives.",
            "Their involvement encourages leadership, responsibility and cooperation among students.",
        ],
        images: [
            "/assets/Images/student-leaders-1.jpg",
            "/assets/Images/student-leaders-2.jpg",
            "/assets/Images/student-leaders-3.jpg",
        ],
    },

    "staff-council": {
        title: "Staff Council",
        subtitle: "Staff Coordination and Participation",
        paragraphs: [
            "The Staff Council provides a structure for staff participation and coordination within the institution.",
            "It supports communication and collaboration among staff members and contributes to institutional activities.",
            "The council encourages shared responsibility and cooperation in the college community.",
        ],
        images: [
            "/assets/Images/staff-council-1.jpg",
            "/assets/Images/staff-council-2.jpg",
            "/assets/Images/staff-council-3.jpg",
        ],
    },

    "office-bearers": {
        title: "Office Bearers",
        subtitle: "Staff Council Administration",
        paragraphs: [
            "Office Bearers support the coordination and administration of the Staff Council.",
            "They help organize council activities and support communication among staff members.",
            "Their contribution helps the council carry out its responsibilities effectively.",
        ],
        images: [
            "/assets/Images/office-bearers-1.jpg",
            "/assets/Images/office-bearers-2.jpg",
            "/assets/Images/office-bearers-3.jpg",
        ],
    },

    "executive-members": {
        title: "Executive Members",
        subtitle: "Staff Council Coordination",
        paragraphs: [
            "Executive Members contribute to the activities and coordination of the Staff Council.",
            "They participate in discussions, support planned activities and work with other council representatives.",
            "Their involvement helps promote cooperation and effective staff participation.",
        ],
        images: [
            "/assets/Images/executive-members-1.jpg",
            "/assets/Images/executive-members-2.jpg",
            "/assets/Images/executive-members-3.jpg",
        ],
    },

    "office-incharge": {
        title: "Office Incharge",
        subtitle: "Office Administration",
        paragraphs: [
            "The Office Incharge coordinates the day-to-day activities of the college office.",
            "The role supports administrative processes, office coordination and communication with students, staff and visitors.",
            "The Office Incharge contributes to organized and efficient institutional administration.",
        ],
        images: [
            "/assets/Images/office-incharge-1.jpg",
            "/assets/Images/office-incharge-2.jpg",
            "/assets/Images/office-incharge-3.jpg",
        ],
    },

    "office-staff": {
        title: "Office Staff",
        subtitle: "Administrative Support Services",
        paragraphs: [
            "The office staff support the daily administrative operations of the college.",
            "Their work may include maintaining records, assisting students and faculty, handling documentation and supporting office activities.",
            "Their contribution helps ensure smooth communication and efficient administrative services.",
        ],
        images: [
            "/assets/Images/office-staff-1.jpg",
            "/assets/Images/office-staff-2.jpg",
            "/assets/Images/office-staff-3.jpg",
        ],
    },

    "class-iv-employees": {
        title: "Class IV Employees",
        subtitle: "Campus Support Services",
        paragraphs: [
            "Class IV employees provide essential support services for the day-to-day functioning of the college.",
            "Their duties help maintain campus facilities and support the operational needs of the institution.",
            "Their contribution is important in maintaining a clean, organized and welcoming campus environment.",
        ],
        images: [
            "/assets/Images/class-iv-1.jpg",
            "/assets/Images/class-iv-2.jpg",
            "/assets/Images/class-iv-3.jpg",
        ],
    },

    security: {
        title: "Security",
        subtitle: "Campus Safety and Security Services",
        paragraphs: [
            "The security team supports the safety and security of the college campus.",
            "Security personnel help monitor campus access and support a safe environment for students, faculty, staff and visitors.",
            "Their presence contributes to an orderly and secure campus environment.",
        ],
        images: [
            "/assets/Images/security-1.jpg",
            "/assets/Images/security-2.jpg",
            "/assets/Images/security-3.jpg",
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(organizationData).map((slug) => ({ slug }));
}

export default async function OrganizationDetailPage({ params }) {
    const { slug } = await params;
    const page = organizationData[slug];

    if (!page) notFound();

    return (
        <main className="min-h-screen bg-background">
            <Banner />

 <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

          {/* Page Heading */}
          <div className="mb-9">
            <span className="inline-flex rounded-sm bg-secondary/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">
              College Administration
            </span>

            <h1 className="mt-5 font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {page.title}
            </h1>

            <h2 className="mt-4 font-serif text-lg font-semibold text-primary sm:text-xl">
              {page.subtitle}
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-secondary" />
          </div>

          {/* Three Description Paragraphs */}
          <div className="space-y-6">
            {page.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-justify text-sm leading-8 text-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Image Gallery */}
          {page.images?.length > 0 && (
            <div className="mt-14">
              <div className="mb-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">
                  College Administration
                </span>

                <h2 className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
                  {page.title} Gallery
                </h2>

                <div className="mt-4 h-1 w-14 rounded-full bg-secondary" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {page.images.map((image, index) => (
                  <div
                    key={image}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary/20 bg-background-secondary shadow-sm"
                  >
                    <Image
                      src={image}
                      alt={`${page.title} image ${index + 1}`}
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