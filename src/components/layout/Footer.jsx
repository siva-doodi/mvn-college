"use client";

import {
    ArrowUp,
    ChevronRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";

import Image from "next/image";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Alumni", href: "#alumni" },
    { name: "Contact Us", href: "#contact" },
];

const usefulLinks = [
    { name: "NAAC / IQAC", href: "#naac-iqac" },
    { name: "NSS", href: "#nss" },
    { name: "Library", href: "#library" },
    { name: "Student Support", href: "#student-support" },
    { name: "News & Events", href: "#news-events" },
];

const socialLinks = [
    {
        Icon: FaFacebookF,
        href: "#",
        label: "Facebook",
    },
    {
        Icon: FaYoutube,
        href: "#",
        label: "YouTube",
    },
    {
        Icon: FaInstagram,
        href: "#",
        label: "Instagram",
    },
];

export default function Footer() {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className="
        relative
        w-full
        overflow-hidden
        border-t-[3px]
        border-[#c3a365]
        bg-[#064e49]
        text-white
      "
        >
            {/* MAIN FOOTER */}
            <div
                className="
          mx-auto
          max-w-[1440px]
          px-5
          py-12

          sm:px-8
          sm:py-14

          lg:px-12
          lg:py-[60px]
        "
            >
                <div
                    className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2
            sm:gap-10

            lg:grid-cols-[1.5fr_0.8fr_0.9fr]
            lg:gap-16

            xl:gap-24
          "
                >
                    {/* COLLEGE BRAND */}
                    <div
                        className="
              flex
              flex-col
              items-center
              text-center

              sm:col-span-2

              lg:col-span-1
              lg:items-start
              lg:text-left
            "
                    >
                        {/* LOGO */}
                        <a
                            href="#home"
                            className="
                inline-flex
                items-center
                justify-center
                transition-transform
                duration-300
                hover:scale-105
              "
                        >
                            <Image
                                src="/images/college-logo.png"
                                alt="MVN JS & RVR College Logo"
                                width={100}
                                height={100}
                                className="
                  h-[85px]
                  w-[85px]
                  object-contain

                  sm:h-[95px]
                  sm:w-[95px]
                "
                            />
                        </a>

                        {/* COLLEGE NAME */}
                        <div className="mt-4">
                            <h2
                                className="
                  text-[22px]
                  font-bold
                  leading-tight
                  tracking-[0.3px]
                  text-[#c3a365]

                  sm:text-[24px]
                "
                            >
                                MVN JS & RVR College
                            </h2>

                            <p
                                className="
                  mt-1
                  text-[14px]
                  font-medium
                  tracking-[0.5px]
                  text-[#d3ded8]
                "
                            >
                                of Arts & Science
                            </p>
                        </div>

                        {/* TAGLINE */}
                        <p
                            className="
                mt-5
                text-[13px]
                italic
                leading-relaxed
                text-[#cbd8d3]

                sm:text-[14px]
              "
                        >
                            &quot;Empowering Education, Inspiring Excellence.&quot;
                        </p>

                        {/* SOCIAL LINKS */}
                        <div
                            className="
                mt-6
                flex
                items-center
                gap-3
              "
                        >
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c3a365]/30
                    bg-white/[0.07]
                    text-[#d3ded8]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#c3a365]
                    hover:bg-[#c3a365]
                    hover:text-[#064e49]
                  "
                                >
                                    <Icon size={19} strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3
                            className="
                mb-5
                text-[14px]
                font-bold
                tracking-[2px]
                text-[#c3a365]
              "
                        >
                            QUICK LINKS
                        </h3>

                        <span className="mb-5 block h-px w-16 bg-[#c3a365]/40" />

                        <ul className="flex flex-col gap-[13px]">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[14px]
                      font-medium
                      text-[#cbd8d3]

                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-[#c3a365]
                    "
                                    >
                                        <ChevronRight
                                            size={15}
                                            className="
                        shrink-0
                        text-[#c3a365]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                                        />

                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* USEFUL LINKS */}
                    <div>
                        <h3
                            className="
                mb-5
                text-[14px]
                font-bold
                tracking-[2px]
                text-[#c3a365]
              "
                        >
                            USEFUL LINKS
                        </h3>

                        <span className="mb-5 block h-px w-16 bg-[#c3a365]/40" />

                        <ul className="flex flex-col gap-[13px]">
                            {usefulLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[14px]
                      font-medium
                      text-[#cbd8d3]

                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-[#c3a365]
                    "
                                    >
                                        <ChevronRight
                                            size={15}
                                            className="
                        shrink-0
                        text-[#c3a365]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                                        />

                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM FOOTER */}
                <div
                    className="
            mt-12
            border-t
            border-[#c3a365]/25
            pt-6

            lg:mt-14
            lg:pt-7
          "
                >
                    <div
                        className="
              flex
              flex-col
              items-center
              gap-5
              text-center

              lg:flex-row
              lg:justify-between
              lg:text-left
            "
                    >
                        {/* COPYRIGHT */}
                        <p
                            className="
                text-[11px]
                leading-relaxed
                text-[#a9c1b9]

                sm:text-[12px]
                md:text-[13px]
              "
                        >
                            © {new Date().getFullYear()} MVN JS & RVR College of Arts &
                            Science. All Rights Reserved.

                            <span className="mx-1 hidden sm:inline">|</span>

                            <br className="sm:hidden" />

                            Designed & Developed by{" "}
                            <a
                                href="https://krionatech.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  font-bold
                  text-[#c3a365]
                  transition-colors
                  duration-300
                  hover:text-white
                "
                            >
                                Kriona Tech
                            </a>
                        </p>

                        {/* BACK TO TOP */}
                        <button
                            onClick={handleBackToTop}
                            className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-[#c3a365]/40
                bg-white/[0.06]
                px-5
                py-[10px]
                text-[12px]
                font-bold
                text-[#c3a365]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#c3a365]
                hover:bg-[#c3a365]
                hover:text-[#064e49]
              "
                        >
                            <ArrowUp
                                size={17}
                                strokeWidth={2}
                                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
                            />

                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}