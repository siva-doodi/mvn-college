import Image from "next/image";
import { Text, Container } from "@/components";

// One shared size for BOTH logos at every breakpoint
const logoSize =
  "h-[85px] w-[85px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[140px] lg:w-[140px] xl:h-[170px] xl:w-[170px] object-contain";

export default function CollegeHeader() {
  return (
    <header className="w-full border-y-2 border-[#c3a365] bg-[#fffdf8]">
      <Container size="wide">
        <div
          className="
            grid grid-cols-2 items-center gap-x-4 gap-y-4
            py-5 md:py-8 lg:py-7
            md:grid-cols-[110px_minmax(0,1fr)_110px] md:gap-x-4
            lg:grid-cols-[140px_minmax(0,1fr)_140px]
            xl:grid-cols-[170px_minmax(0,1fr)_170px]
          "
        >
          {/* LEFT: COLLEGE LOGO */}
          <div className="order-1 flex items-center justify-start md:justify-center">
            <Image
              src="/images/Mvn_logo-Bg.png"
              alt="College Logo"
              width={190}
              height={190}
              priority
              className={logoSize}
            />
          </div>

          {/* RIGHT: UNIVERSITY LOGO */}
          <div className="order-2 flex items-center justify-end md:order-3 md:justify-center">
            <Image
              src="/images/Adikavi_Nannaya_University_logo-Bg.png"
              alt="Adikavi Nannaya University Logo"
              width={190}
              height={190}
              priority
              className={logoSize}
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="order-3 col-span-2 flex w-full min-w-0 flex-col items-center text-center md:order-2 md:col-span-1">
            <Text
              variant="h1"
              color="goldPrimary"
              align="center"
              className="w-full text-[18px] leading-snug sm:text-[22px] md:text-[26px] lg:text-[28px]"
            >
              MVN JS &amp; RVR COLLEGE OF ARTS &amp; SCIENCE
            </Text>

            <Text
              as="h2"
              variant="h2"
              color="primary"
              align="center"
              className="
                mt-2 w-full font-bold leading-normal
                text-[13px] sm:text-[14px] md:text-[16px]
                lg:text-[19px] xl:text-[22px] 2xl:text-[26px]
              "
            >
              మంగెన వెంకట నరసింహం, జాన శంకరయ్య &amp; రుద్రరాజు వెంకట రామరాజు డిగ్రీ కళాశాల
            </Text>

            <div className="my-4 flex items-center justify-center gap-4 md:my-6 lg:my-7">
              <span className="h-[1.5px] w-12 bg-[#c3a365] sm:w-16 lg:w-20" />
              <span className="h-2.5 w-2.5 rotate-45 bg-[#c3a365]" />
              <span className="h-[1.5px] w-12 bg-[#c3a365] sm:w-16 lg:w-20" />
            </div>

            <div className="flex flex-col items-center gap-1 font-serif font-bold">
              <Text variant="h4" className="text-[12px] sm:text-[13px]" color="affiliation" align="center">
                Affiliated to Adikavi Nannaya University, Rajamahendravaram
              </Text>
              <Text variant="h4" className="text-[12px] sm:text-[13px]" color="primary" align="center">
                Accredited by NAAC with Grade B (Score 2.78)
              </Text>
              <Text variant="h4" className="text-[12px] sm:text-[13px]" color="primary" align="center">
                Recognised by UGC under sections 2(f) &amp; 12(B)
              </Text>
              <Text variant="h4" className="text-[12px] sm:text-[13px]" color="primary" align="center">
                Identified as CoE by Government of Andhra Pradesh
              </Text>
              <Text variant="h4" className="text-[12px] sm:text-[13px]" color="address" align="center">
                Malikipuram – 533253, E.G. Dt., Andhra Pradesh
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}