import { Inter } from "next/font/google";
import "./globals.css";

import {
  CollegeHeader,
  FlashNews,
  Footer, TopHeader,
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
        <div className="grid grid-cols-1">
          <div className="">
            <TopHeader />
          </div>

          <div className="order-2 md:order-2">
            <CollegeHeader />
          </div>

          <div className="order-1 md:order-3">
            <Navbar />
          </div>

          <div className="order-3">
            <FlashNews />
          </div>
        </div>

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>

  );
}