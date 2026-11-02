"use client";

import { useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Navigation,
} from "lucide-react";

/* Contact Details */
const CONTACT_CARDS = [
  {
    id: "address",
    icon: MapPin,
    label: "Our Location",
    lines: [
      "Main Road, Malikipuram – 533253",
      "Dr. B.R. Ambedkar Konaseema District",
      "Andhra Pradesh, India",
    ],
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone / Mobile",
    lines: [
      { text: "08862-294077", href: "tel:08862294077" },
      { text: "9396939655", href: "tel:9396939655" },
    ],
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    lines: [
      {
        text: "prinmvn@mvnjsrvrcollege.ac.in",
        href: "mailto:prinmvn@mvnjsrvrcollege.ac.in",
      },
      {
        text: "prinmvn@yahoo.com",
        href: "mailto:prinmvn@yahoo.com",
      },
      {
        text: "malikipuram.mvnrvr.jkc@gmail.com",
        href: "mailto:malikipuram.mvnrvr.jkc@gmail.com",
      },
    ],
  },
];

/* Google Maps */
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=MVN+JS+%26+RVR+College+of+Arts+and+Science+Malikipuram+Andhra+Pradesh+533253&output=embed&z=15";

const DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=MVN+JS+%26+RVR+College+of+Arts+and+Science,+Malikipuram,+Andhra+Pradesh+533253";

export default function ContactSection() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const mapRef = useRef(null);

  /* Scroll Animations */
  useEffect(() => {
    const observers = [];

    const observe = (element, visibleClasses) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibleClasses.split(" ").forEach((className) => {
            element.classList.toggle(
              className,
              entry.isIntersecting
            );
          });
        },
        {
          threshold: 0.15,
        }
      );

      observer.observe(element);
      observers.push(observer);
    };

    observe(headingRef.current, "opacity-100 translate-y-0");
    observe(mapRef.current, "opacity-100 translate-x-0");

    cardsRef.current.forEach((card) => {
      observe(card, "opacity-100 translate-y-0");
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div
          ref={headingRef}
          className="mx-auto mb-14 max-w-2xl translate-y-8 text-center opacity-0 transition-all duration-700"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold sm:text-sm">
            <span className="h-px w-7 bg-secondary" />
            Contact &amp; Location
            <span className="h-px w-7 bg-secondary" />
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Get in Touch
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            We're here to help. Reach us by phone, email or visit us on
            campus.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-secondary" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left Side - Contact Cards */}
          <div className="flex flex-col gap-5">

            {CONTACT_CARDS.map((card, idx) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  style={{
                    transitionDelay: `${idx * 120}ms`,
                  }}
                  className="group flex translate-y-8 gap-5 rounded-2xl border border-primary/10 bg-background-card p-5 opacity-0 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg sm:p-6"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  {/* Card Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-3 font-serif text-lg font-bold text-foreground">
                      {card.label}
                    </h3>

                    <div className="flex flex-col gap-2">
                      {card.lines.map((line, index) =>
                        typeof line === "string" ? (
                          <p
                            key={index}
                            className="break-words text-sm leading-6 text-muted"
                          >
                            {line}
                          </p>
                        ) : (
                          <a
                            key={index}
                            href={line.href}
                            className="w-fit break-all text-sm text-muted transition-colors duration-200 hover:text-primary hover:underline"
                          >
                            {line.text}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Official Website */}
           
          </div>

          {/* Right Side - Google Map */}
          <div
            ref={mapRef}
            className="translate-x-8 opacity-0 transition-all duration-700"
          >
            <div className="overflow-hidden rounded-2xl border border-primary/10 bg-background-card p-2 shadow-lg sm:p-3">

              {/* Map Header */}
              <div className="flex items-center gap-3 px-3 py-3 sm:px-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-primary">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-foreground">
                    Find Our Campus
                  </h3>

                  <p className="text-xs text-muted">
                    MVN JS &amp; RVR College of Arts and Science
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-[320px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[440px]">
                <iframe
                  title="MVN JS & RVR College Location"
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Get Directions */}
            <a
              href={DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-primary bg-background-card px-6 py-4 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-lg"
            >
              <Navigation
                size={18}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />

              Get Directions

              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}