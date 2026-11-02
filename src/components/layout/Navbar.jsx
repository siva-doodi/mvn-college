"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Building2,
  Users,
  MessageSquare,
  Headset,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "Administration",
    href: "/administration",
    icon: ShieldCheck,
    children: [
      { label: "Principal", href: "/administration/principal" },
      { label: "Governing Body", href: "/administration/governing-body" },
      { label: "Office Staff", href: "/administration/staff" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    icon: GraduationCap,
    children: [
      { label: "Departments", href: "/academics/departments" },
      { label: "Courses", href: "/academics/courses" },
      { label: "Calendar", href: "/academics/calendar" },
    ],
  },
  {
    label: "Support Services",
    href: "/support-services",
    icon: BookOpen,
    children: [
      { label: "Library", href: "/support-services/library" },
      { label: "Hostel", href: "/support-services/hostel" },
      { label: "Sports", href: "/support-services/sports" },
    ],
  },
  { label: "NAAC/IQAC", href: "/naac-iqac", icon: Building2 },
  { label: "Alumni", href: "/alumni", icon: Users },
  { label: "Schemes", href: "/schemes", icon: BookOpen },
   { label: "About", href: "/about", icon: MessageSquare },
  { label: "Contact Us", href: "/contact", icon: Headset },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-t-[3px] border-[#c3a365] bg-[#00645f] shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-4 lg:px-6"
      >
        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="text-sm font-bold uppercase tracking-wide text-white lg:hidden">
          Menu
        </span>

        {/* Desktop menu */}
        <ul className="hidden w-full items-center justify-between lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <li key={item.label} className="group relative h-[64px]">
                <Link
                  href={item.href}
                  className={`relative flex h-full items-center gap-1.5 whitespace-nowrap px-2 text-[12px] font-semibold uppercase tracking-wide transition-colors duration-200 xl:px-3 xl:text-[13px]
                    ${active ? "text-[#e6c477]" : "text-white hover:text-[#e6c477]"}`}
                >
                  <Icon size={18} strokeWidth={2} className="shrink-0" />
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className="shrink-0 text-[#e6c477] transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}

                  {/* Animated underline */}
                  <span
                    className={`absolute inset-x-2 bottom-2 h-[2px] origin-left rounded bg-[#e6c477] transition-transform duration-300 xl:inset-x-3
                      ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-[220px] translate-y-2 overflow-hidden rounded-b-md border-t-2 border-[#c3a365] bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-3 text-sm font-medium text-[#00645f] transition-colors hover:bg-[#00645f] hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-67px)] overflow-y-auto border-t border-white/10 bg-[#00574f] lg:hidden">
          <ul className="divide-y divide-white/10">
            {navItems.map((item) => {
              const Icon = item.icon;
              const open = mobileSub === item.label;

              return (
                <li key={item.label}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex flex-1 items-center gap-3 px-5 py-3.5 text-sm font-semibold uppercase
                        ${isActive(item.href) ? "text-[#e6c477]" : "text-white"}`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </Link>

                    {item.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label}`}
                        onClick={() => setMobileSub(open ? null : item.label)}
                        className="px-5 py-3.5 text-[#e6c477]"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${open ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {item.children && open && (
                    <ul className="bg-black/15">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 pl-14 pr-5 text-sm text-white/90 hover:text-[#e6c477]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}