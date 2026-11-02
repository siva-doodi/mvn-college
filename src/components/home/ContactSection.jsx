"use client";

import { useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Navigation,
} from "lucide-react";

import Text from "@/components/ui/Text";
import Container from "@/components/ui/Container";

const contactDetails = [
  {
    Icon: MapPin,
    label: "OUR LOCATION",
    content: (
      <>
        <p>Main Road, Malikipuram – 533253</p>
        <p>Dr. B.R. Ambedkar Konaseema District</p>
        <p>Andhra Pradesh, India</p>
      </>
    ),
  },
  {
    Icon: Phone,
    label: "PHONE / MOBILE",
    content: (
      <>
        <a href="tel:08862-294077">08862-294077</a>
        <a href="tel:9396939655">9396939655</a>
      </>
    ),
  },
  {
    Icon: Mail,
    label: "EMAIL",
    content: (
      <>
        <a href="mailto:primnvm@mvnjsrvcollege.ac.in">
          primnvm@mvnjsrvcollege.ac.in
        </a>

        <a href="mailto:primnvm@yahoo.com">
          primnvm@yahoo.com
        </a>

        <a href="mailto:malikipuram.mvnrvjrc@gmail.com">
          malikipuram.mvnrvjrc@gmail.com
        </a>
      </>
    ),
  },
];

export default function ContactSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const websiteRef = useRef(null);
  const mapRef = useRef(null);
  const directionsRef = useRef(null);

  useEffect(() => {
    const elements = [
      headingRef.current,
      ...cardsRef.current,
      websiteRef.current,
      mapRef.current,
      directionsRef.current,
    ].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-10"
            );

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );
          } else {
            entry.target.classList.remove(
              "opacity-100",
              "translate-y-0"
            );

            entry.target.classList.add(
              "opacity-0",
              "translate-y-10"
            );
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const mapLocation =
    "MVN JS & RVR College of Arts and Science, Malikipuram, Andhra Pradesh 533253";

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    mapLocation
  )}`;

  return (
    <section
      id="contact"
      className="
        w-full
        bg-[#fffdf9]
        py-14
        sm:py-16
        lg:py-[68px]
      "
    >
      <Container size="wide">

        {/* SECTION HEADING */}
        <div
          ref={headingRef}
          className="
            mx-auto
            mb-9
            flex
            max-w-[600px]
            flex-col
            items-center
            text-center

            opacity-0
            translate-y-10
            transition-all
            duration-700
            ease-out

            sm:mb-10
          "
        >
          <Text
            variant="eyebrow"
            color="goldMuted"
            className="
              mb-2
              text-[10px]
              font-bold
              tracking-[2px]
              sm:text-[11px]
            "
          >
            CONTACT & LOCATION
          </Text>

          <Text
            as="h2"
            variant="h2"
            color="primary"
            className="
              text-[26px]
              font-bold
              leading-tight
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Get in Touch
          </Text>

          <Text
            variant="small"
            color="body"
            align="center"
            className="
              mt-3
              text-[12px]
              leading-relaxed
              sm:text-[13px]
            "
          >
            We&apos;re here to help. Reach us by phone, email or visit us
            on campus.
          </Text>

          {/* GOLD DIVIDER */}
          <span className="mt-4 h-[2px] w-12 bg-[#c3a365]" />
        </div>

        {/* CONTACT CONTENT */}
        <div
          className="
            mx-auto
            grid
            max-w-[1020px]
            grid-cols-1
            gap-6

            lg:grid-cols-[315px_1fr]
            lg:gap-[30px]
          "
        >
          {/* LEFT CONTACT DETAILS */}
          <div className="flex flex-col">

            {/* CONTACT CARDS */}
            <div className="flex flex-col gap-[14px]">
              {contactDetails.map(
                ({ Icon, label, content }, index) => (
                  <div
                    key={label}
                    ref={(element) => {
                      cardsRef.current[index] = element;
                    }}
                    style={{
                      transitionDelay: `${index * 120}ms`,
                    }}
                    className="
                      group
                      flex
                      min-h-[76px]
                      items-start
                      gap-[13px]
                      rounded-[12px]
                      border
                      border-[#e2eae6]
                      bg-[#fff]
                      px-[18px]
                      py-[17px]

                      shadow-[0_4px_14px_rgba(0,0,0,0.04)]

                      opacity-0
                      translate-y-10
                      transition-all
                      duration-700
                      ease-out

                      hover:-translate-y-1
                      hover:border-[#c3a365]
                      hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)]
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-[36px]
                        w-[36px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[9px]
                        bg-[#eaf0ec]
                        text-[#006b63]

                        transition-all
                        duration-300

                        group-hover:bg-[#006b63]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="min-w-0 flex-1">

                      <p
                        className="
                          mb-1
                          text-[9px]
                          font-bold
                          tracking-[1px]
                          text-[#c3a365]
                        "
                      >
                        {label}
                      </p>

                      <div
                        className="
                          flex
                          flex-col
                          text-[10px]
                          font-medium
                          leading-[1.9]
                          text-[#263c39]

                          [&_a]:break-words
                          [&_a]:transition-colors
                          [&_a:hover]:text-[#006b63]
                        "
                      >
                        {content}
                      </div>

                    </div>
                  </div>
                )
              )}
            </div>

            {/* OFFICIAL WEBSITE BUTTON */}
            <div
              ref={websiteRef}
              className="
                mt-4
                opacity-0
                translate-y-10
                transition-all
                duration-700
                ease-out
              "
              style={{
                transitionDelay: "360ms",
              }}
            >
              <a
                href="https://mvnjsrvrcollege.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#006b63]
                  bg-transparent
                  px-5
                  py-[9px]
                  text-[10px]
                  font-bold
                  text-[#006b63]

                  transition-all
                  duration-300

                  hover:bg-[#006b63]
                  hover:text-white
                "
              >
                <ExternalLink size={12} />

                Visit Official Website
              </a>
            </div>
          </div>

          {/* RIGHT MAP SECTION */}
          <div className="flex min-w-0 flex-col">

            {/* GOOGLE MAP */}
            <div
              ref={mapRef}
              className="
                relative
                h-[280px]
                w-full
                overflow-hidden
                rounded-[12px]
                border
                border-[#dce8e1]
                bg-[#eaf0ec]

                shadow-[0_6px_20px_rgba(0,0,0,0.07)]

                opacity-0
                translate-y-10
                transition-all
                duration-700
                ease-out

                sm:h-[300px]
                lg:h-[300px]
              "
              style={{
                transitionDelay: "180ms",
              }}
            >
              <iframe
                title="MVN JS & RVR College Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  mapLocation
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* GET DIRECTIONS BUTTON */}
            <div
              ref={directionsRef}
              className="
                mt-3
                flex
                justify-center
                sm:justify-start
                lg:justify-start

                opacity-0
                translate-y-10
                transition-all
                duration-700
                ease-out
              "
              style={{
                transitionDelay: "360ms",
              }}
            >
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#08776e]
                  px-6
                  py-[10px]
                  text-[11px]
                  font-bold
                  text-white

                  shadow-[0_6px_16px_rgba(0,107,99,0.20)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#006b63]
                  hover:shadow-[0_10px_22px_rgba(0,107,99,0.25)]
                "
              >
                <Navigation
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                Get Directions

                <span className="sr-only">
                  to MVN JS & RVR College
                </span>
              </a>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}