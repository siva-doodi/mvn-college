import { Inter } from "next/font/google";
import "./globals.css";

import {
  CollegeHeader,
  FlashNews,
  Footer,TopHeader,
  Navbar,
} from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MVN JS & RVR College of Arts & Science",
  description:
    "Official website of MVN JS & RVR College of Arts & Science, Malikipuram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col font-sans">
        <TopHeader />
        <CollegeHeader />
        <Navbar />
        <FlashNews />

        {children}
        <Footer />
      </body>
    </html>
  );
}