"use client";

// YouTube Icon
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

// Instagram Icon
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Facebook Icon
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.69V3.14C15.96 3.05 15.13 3 14.29 3c-2.49 0-4.19 1.52-4.19 4.31V9.6H7.28v3.2h2.82V21h3.4Z" />
    </svg>
  );
}

// Student Icon
function StudentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

// Staff Icon
function StaffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// Arrow Icon
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "YouTube",
    icon: YouTubeIcon,
    href: "https://www.youtube.com/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/",
  },
];

export default function TopHeader() {
  return (
    <header className="w-full bg-primary text-white ">
     <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 sm:flex">

        {/* Left Side - Social Media */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-primary-dark"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Right Side - Login Buttons */}
        <div className="flex w-full items-center justify-center gap-3 sm:w-auto">

          {/* Student Login */}
          <a
            href="/student-login"
            className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-xs font-bold text-primary-dark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg sm:flex-none sm:px-6 sm:text-sm"
          >
            <StudentIcon />

            <span>Student Login</span>

            <ArrowIcon />
          </a>

          {/* Staff Login */}
          <a
            href="/staff-login"
            className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/70 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-primary-dark sm:flex-none sm:px-6 sm:text-sm"
          >
            <StaffIcon />

            <span>Staff Login</span>

            <ArrowIcon />
          </a>

        </div>
      </div>
    </header>
  );
}