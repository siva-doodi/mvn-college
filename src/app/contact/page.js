import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Globe,
  MessageCircle,
  Building2,
} from "lucide-react";

import { Text, Container } from "@/components";

const contactDetails = [
  {
    Icon: MapPin,
    title: "Our Address",
    value: "MVN JS & RVR College of Arts & Science",
    description: "Malikipuram, Konaseema, Andhra Pradesh – 533253",
  },
  {
    Icon: Phone,
    title: "Phone Number",
    value: "Contact the College Office",
    description: "Please contact the college for enquiries.",
  },
  {
    Icon: Mail,
    title: "Email Address",
    value: "College Administration",
    description: "Contact the college office for email enquiries.",
  },
  {
    Icon: Clock,
    title: "Office Hours",
    value: "College Working Hours",
    description: "Contact the college office for current timings.",
  },
];

const departments = [
  {
    title: "Admissions Enquiry",
    description:
      "Get information about undergraduate programmes, eligibility and admission procedures.",
  },
  {
    title: "Academic Enquiry",
    description:
      "For questions regarding courses, examinations and academic activities.",
  },
  {
    title: "General Enquiry",
    description:
      "For general information about the college, facilities and administration.",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden bg-[#fffdf8]">
      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}
      <section className="bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="mb-10 text-center sm:mb-12">
            <Text
              variant="eyebrow"
              color="goldMuted"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              GET IN TOUCH
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="primary"
              className="text-[27px] sm:text-[32px] lg:text-[36px]"
            >
              Contact Information
            </Text>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#c5a267]" />

            <Text
              color="muted"
              className="mx-auto mt-4 max-w-xl text-[13px] leading-7 sm:text-[15px]"
            >
              Find the information you need to connect with our
              college administration.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map(({ Icon, title, value, description }) => (
              <div
                key={title}
                className="group rounded-xl border border-[#eadcc3] bg-[#fffdf8] p-6 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf0ec] text-[#00645d] transition-colors duration-300 group-hover:bg-[#075e58] group-hover:text-white">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <Text
                  as="h3"
                  variant="h4"
                  color="primary"
                  className="mb-3 text-[17px]"
                >
                  {title}
                </Text>

                <Text
                  color="heading"
                  className="mb-2 text-[13px] font-semibold leading-relaxed"
                >
                  {value}
                </Text>

                <Text
                  color="muted"
                  className="text-[12px] leading-[1.8]"
                >
                  {description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT FORM AND MAP
      ===================================================== */}
      <section className="bg-[#f5f1e7] py-14 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

            {/* CONTACT FORM */}
            <div className="rounded-2xl border border-[#e7d8bd] bg-[#fffdf8] p-5 shadow-[0_8px_25px_rgba(0,0,0,0.05)] sm:p-8 lg:p-9">

              <div className="mb-7">
                <Text
                  variant="eyebrow"
                  color="goldMuted"
                  className="mb-3 text-[11px] tracking-[2.5px]"
                >
                  SEND US A MESSAGE
                </Text>

                <Text
                  as="h2"
                  variant="h2"
                  color="primary"
                  className="text-[25px] sm:text-[30px]"
                >
                  Get in Touch
                </Text>

                <Text
                  color="muted"
                  className="mt-3 text-[13px] leading-[1.8]"
                >
                  Have a question? Fill out the form below and
                  contact our college administration.
                </Text>
              </div>

              <form className="space-y-5">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-semibold text-[#174e49]"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-lg border border-[#e5d8c1] bg-[#fffdf8] px-4 py-3 text-[13px] text-[#344b48] outline-none transition-all placeholder:text-[#a6aaa5] focus:border-[#075e58] focus:ring-2 focus:ring-[#075e58]/10"
                  />
                </div>

                {/* EMAIL AND PHONE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[13px] font-semibold text-[#174e49]"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-lg border border-[#e5d8c1] bg-[#fffdf8] px-4 py-3 text-[13px] text-[#344b48] outline-none transition-all placeholder:text-[#a6aaa5] focus:border-[#075e58] focus:ring-2 focus:ring-[#075e58]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[13px] font-semibold text-[#174e49]"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      className="w-full rounded-lg border border-[#e5d8c1] bg-[#fffdf8] px-4 py-3 text-[13px] text-[#344b48] outline-none transition-all placeholder:text-[#a6aaa5] focus:border-[#075e58] focus:ring-2 focus:ring-[#075e58]/10"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[13px] font-semibold text-[#174e49]"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-[#e5d8c1] bg-[#fffdf8] px-4 py-3 text-[13px] text-[#344b48] outline-none transition-all focus:border-[#075e58] focus:ring-2 focus:ring-[#075e58]/10"
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>
                    <option value="admissions">Admissions Enquiry</option>
                    <option value="academic">Academic Enquiry</option>
                    <option value="examination">Examination Enquiry</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[13px] font-semibold text-[#174e49]"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-none rounded-lg border border-[#e5d8c1] bg-[#fffdf8] px-4 py-3 text-[13px] text-[#344b48] outline-none transition-all placeholder:text-[#a6aaa5] focus:border-[#075e58] focus:ring-2 focus:ring-[#075e58]/10"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#075e58] px-6 py-3.5 text-[13px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#034b46] hover:shadow-lg sm:w-auto"
                >
                  Send Message
                  <Send size={16} />
                </button>

              </form>
            </div>

            {/* LOCATION AND MAP */}
            <div className="flex flex-col gap-6">

              {/* LOCATION CARD */}
              <div className="rounded-2xl border border-[#e7d8bd] bg-[#fffdf8] p-6 shadow-sm sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf0ec] text-[#00645d]">
                  <MapPin size={24} />
                </div>

                <Text
                  as="h3"
                  variant="h3"
                  color="primary"
                  className="mb-3 text-[22px]"
                >
                  Visit Our Campus
                </Text>

                <Text
                  color="body"
                  className="text-[14px] leading-[1.9]"
                >
                  MVN JS & RVR College of Arts & Science,
                  Malikipuram, Konaseema District,
                  Andhra Pradesh – 533253.
                </Text>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=MVN+JS+RVR+College+Malikipuram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#075e58] transition-colors hover:text-[#b18a48]"
                >
                  Get Directions
                  <Globe size={15} />
                </a>
              </div>

              {/* MAP */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-[#e7d8bd] shadow-sm sm:h-[340px] lg:h-[380px]">
                <iframe
                  title="MVN JS & RVR College Location"
                  src="https://maps.google.com/maps?q=MVN%20JS%20RVR%20College%20Malikipuram&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 border-0"
                />
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          ENQUIRY TYPES
      ===================================================== */}
      <section className="bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
        <Container size="wide">

          <div className="mb-10 text-center">
            <Text
              variant="eyebrow"
              color="goldMuted"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              HOW CAN WE HELP?
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="primary"
              className="text-[27px] sm:text-[32px]"
            >
              Enquiry & Assistance
            </Text>

            <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#c5a267]" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {departments.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e7d8bd] bg-[#f5f1e7] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#075e58] text-white">
                  <MessageCircle size={21} />
                </div>

                <Text
                  as="h3"
                  variant="h4"
                  color="primary"
                  className="mb-3 text-[18px]"
                >
                  {item.title}
                </Text>

                <Text
                  color="body"
                  className="text-[13px] leading-[1.8]"
                >
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="bg-[#075e58] py-14 sm:py-16">
        <Container size="wide">
          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
              <Building2 size={28} />
            </div>

            <Text
              variant="eyebrow"
              color="white"
              className="mb-3 text-[11px] tracking-[2.5px]"
            >
              MVN JS & RVR COLLEGE
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="white"
              className="text-[26px] leading-tight sm:text-[34px]"
            >
              We Are Happy to Help You
            </Text>

            <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-[#c5a267]" />

            <Text
              color="white"
              className="mt-5 text-[13px] leading-[1.8] sm:text-[15px]"
            >
              Connect with our college for information about
              admissions, academics and other institutional activities.
            </Text>

          </div>
        </Container>
      </section>

    </main>
  );
}