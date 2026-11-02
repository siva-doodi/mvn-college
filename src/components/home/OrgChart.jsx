"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ---------------------------------------------
   Reusable Organization Chart Node
--------------------------------------------- */

function Node({
  title,
  color = "gray",
  className = "",
  small = false,
  onClick,
  visible = false,
}) {
  const colors = {
    gray: "bg-[#c0c0c0] text-gray-900",
    white: "bg-white text-gray-900",
    primary: "bg-[#075e59] text-white border-[#064b47]",
    green: "bg-[#c1e1c1] text-gray-900",
    blue: "bg-[#a0c4ff] text-gray-900",
    orange: "bg-[#ffc080] text-gray-900",
    cyan: "bg-[#a0e0e0] text-gray-900",
    pink: "bg-[#ffb3ba] text-gray-900",
    olive: "bg-[#d4e0b0] text-gray-900",
    tan: "bg-[#ffe4b5] text-gray-900",
    purple: "bg-[#c8a2c8] text-gray-900",
  };

  return (
    <button
      type="button"
      onClick={() => onClick?.(title)}
      className={`
        relative z-10 flex items-center justify-center
        border border-black/70 text-center font-sans font-bold
        shadow-sm transition-all duration-500 ease-out
        hover:z-20 hover:-translate-y-1 hover:scale-[1.02]
        hover:shadow-lg active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#075e59] focus-visible:ring-offset-2
        ${colors[color]}
        ${small
          ? "min-h-[54px] w-full px-2 py-2 text-[11px] leading-4 sm:text-xs"
          : "min-h-[48px] px-4 py-3 text-xs sm:text-sm"
        }
        ${visible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
        }
        ${className}
      `}
    >
      {title}
    </button>
  );
}

/* ---------------------------------------------
   Reusable Connector Components
--------------------------------------------- */

function VerticalLine({ height = 20, arrow = true }) {
  return (
    <div
      className="relative mx-auto w-px shrink-0 bg-black"
      style={{ height }}
    >
      {arrow && (
        <span className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-black" />
      )}
    </div>
  );
}

function GridArrow() {
  return (
    <div className="relative h-5 w-px bg-black">
      <span className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-black" />
    </div>
  );
}

function HorizontalLine({ className = "" }) {
  return <div className={`h-px bg-black ${className}`} />;
}

/* ---------------------------------------------
   Main Organizational Chart
--------------------------------------------- */

export default function OrgChart() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Center chart horizontally on mobile */
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (container && container.scrollWidth > container.clientWidth) {
      container.scrollLeft =
        (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  /* Scroll animation */
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  /* Node click handler */
  const handleNodeClick = (title) => {
    // Add your routing or interaction logic here.
    console.log(`Selected: ${title}`);
  };

  const renderNode = (title, color, className = "", small = false) => (
    <Node
      title={title}
      color={color}
      className={className}
      small={small}
      visible={visible}
      onClick={handleNodeClick}
    />
  );

  const governingMembers = [
    "CHAIRMAN",
    "VICE CHAIRMAN",
    "SECRETARY & CORRESPONDENT",
    "JOINT SECRETARY",
    "TREASURER",
    "MEMBERS",
  ];

  const academicMembers = [
    "PRINCIPAL",
    "VICE PRINCIPAL",
    "HODs",
  ];

  const departments = [
    {
      title: "PRINCIPAL",
      color: "orange",
      members: [
        "Incharge Principal",
        "HODs",
        "Asst. Professors",
      ],
    },
    {
      title: "Librarian",
      color: "cyan",
      members: ["Subordinates"],
    },
    {
      title: "Physical director",
      color: "pink",
      members: ["Subordinates"],
    },
    {
      title: "Students Council",
      color: "olive",
      members: [
        "Student Unions Leaders",
        "Members",
      ],
    },
    {
      title: "Staff Council",
      color: "tan",
      members: [
        "Office Bearers",
        "Executive Members",
        "Members",
      ],
    },
    {
      title: "Office Incharge",
      color: "purple",
      members: [
        "Office-staff",
        "Class IV Employees",
        "Security",
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full overflow-x-auto bg-white px-4 py-12 antialiased sm:px-6 sm:py-16"
    >
      <div className="mx-auto flex min-w-[1100px] max-w-[1400px] flex-col items-center px-4 py-5">

        {/* ---------------------------------
            Heading
        --------------------------------- */}

        <div className="mb-10 text-center">
          <h1
            className={`
              font-serif text-2xl font-bold leading-tight
              text-[#064b47] sm:text-3xl lg:text-4xl
              transition-all duration-700
              ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
            `}
          >
            MVN JS &amp; RVR College of Arts &amp; Science
          </h1>

          <h2
            className={`
              mt-3 font-serif text-xl font-bold text-[#064b47]
              sm:text-2xl lg:text-3xl
              transition-all delay-150 duration-700
              ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
            `}
          >
            Organizational Chart
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#c3a365]" />
        </div>

        {/* ---------------------------------
            Top Level
        --------------------------------- */}

        <div className="flex w-full flex-col items-center">

          {renderNode(
            "A F D TRUST",
            "gray",
            "min-w-[220px] px-10 py-4 text-base"
          )}

          <VerticalLine height={25} />

          {renderNode(
            "MVN JS & RVR COLLEGE",
            "white",
            "min-w-[260px] px-8 py-4 text-sm"
          )}

          <VerticalLine height={40} />
        </div>

        {/* ---------------------------------
            Governing Body & Academic Council
        --------------------------------- */}

        <div className="relative flex w-full items-start gap-5">

          {/* Main horizontal connector */}
          <div className="absolute left-[15%] right-[15%] top-0 h-px bg-black" />

          {/* Governing Body */}
          <div className="relative flex min-w-0 flex-[6] flex-col items-center pt-0">

            <div className="absolute -top-[30px] left-1/2 h-[30px] w-px -translate-x-1/2 bg-black">
              <span className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-black" />
            </div>

            {renderNode(
              "COLLEGE GOVERNING BODY",
              "primary",
              "w-full py-4 text-sm"
            )}

            <VerticalLine height={20} />

            <HorizontalLine className="w-[80%]" />

            <div className="mt-5 grid w-full grid-cols-6 gap-2">
              {governingMembers.map((member) => (
                <div
                  key={member}
                  className="flex flex-col items-center"
                >
                  <GridArrow />

                  {renderNode(
                    member,
                    "green",
                    "w-full",
                    true
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Council */}
          <div className="relative flex min-w-0 flex-[3] flex-col items-center">

            <div className="absolute -top-[30px] left-1/2 h-[30px] w-px -translate-x-1/2 bg-black">
              <span className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-black" />
            </div>

            {renderNode(
              "COLLEGE ACADEMIC COUNCIL",
              "primary",
              "w-full py-4 text-sm"
            )}

            <VerticalLine height={20} />

            <HorizontalLine className="w-[80%]" />

            <div className="mt-5 grid w-full grid-cols-3 gap-2">
              {academicMembers.map((member) => (
                <div
                  key={member}
                  className="flex flex-col items-center"
                >
                  <GridArrow />

                  {renderNode(
                    member,
                    "blue",
                    "w-full",
                    true
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------
            Bottom Department Structure
        --------------------------------- */}

        <div className="relative mt-[60px] w-full pt-[30px]">

          {/* Main Bus Line */}
          <div className="absolute left-[4.5%] right-[4.5%] top-0 z-0 h-px bg-black" />

          {/* Chairman Connection */}
          <div className="absolute left-[4.5%] top-[-30px] h-[30px] w-px bg-black">
            <span className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-black" />
          </div>

          {/* Middle Member Connections */}
          {[20.5, 35, 49.5, 64, 78.5].map((position) => (
            <div
              key={position}
              className="absolute top-[-25px] h-[25px] w-px bg-black"
              style={{ left: `${position}%` }}
            >
              <span className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-black" />
            </div>
          ))}

          {/* HODs Connection */}
          <div className="absolute right-[4.5%] top-[-30px] h-[30px] w-px bg-black">
            <span className="absolute -top-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-b-[6px] border-b-black" />
          </div>

          {/* Department Columns */}
          <div className="grid w-full grid-cols-6 gap-2.5">

            {departments.map((department) => (
              <div
                key={department.title}
                className="relative flex flex-col items-center"
              >
                {/* Connection from bus line */}
                <div className="absolute -top-[30px] h-[30px] w-px bg-black">
                  <span className="absolute -bottom-[6px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[6px] border-t-black" />
                </div>

                {/* Department Head */}
                {renderNode(
                  department.title,
                  department.color,
                  "w-full"
                )}

                {/* Department Members */}
                {department.members.map((member) => (
                  <div
                    key={member}
                    className="flex w-full flex-col items-center"
                  >
                    <VerticalLine height={20} />

                    {renderNode(
                      member,
                      department.color,
                      "w-full"
                    )}
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}