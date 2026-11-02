import Image from "next/image";

import {
    Text,
    Container,
} from "@/components";

export default function CollegeHeader() {
    return (
        <header className="w-full border-y-2 border-[#c3a365] bg-[#fffdf8]">
            <Container size="wide">
                <div className="
                    grid grid-cols-1
                    md:grid-cols-[110px_minmax(0,1fr)_110px]
                    lg:grid-cols-[160px_minmax(0,1fr)_160px]
                    xl:grid-cols-[190px_minmax(0,1fr)_190px]
                    items-center
                    py-6 md:py-8 lg:py-7
                    ">
                    <div className="flex justify-center order-1">
                        <Image
                            src="/images/Mvn_logo-Bg.png"
                            alt="College Logo"
                            width={190}
                            height={190}
                            priority
                            className="
                            
                            sm:w-[110px] sm:h-[110px]
                            md:w-[105px] md:h-[120px]
                            lg:w-[145px] lg:h-[155px]
                            xl:w-[180px] xl:h-[190px]
                            object-contain
                        "
                        />
                    </div>

                    {/* CENTER CONTENT */}
                    <div className="
            order-3 md:order-2
            min-w-0 w-full
            flex flex-col items-center
            text-center
          ">

                        {/* COLLEGE NAME */}
                        <Text
                            variant="h1"
                            color="goldPrimary"
                            align="center"
                            className="w-full text-[18px] md:text-[28px]"
                        >
                            MVN JS & RVR COLLEGE OF ARTS & SCIENCE
                        </Text>

                        {/* TELUGU NAME */}
                        {/* TELUGU NAME */}
                        <Text
                            as="h2"
                            variant="h2"
                            color="primary"
                            align="center"
                            className="
    mt-2
    w-full
    
    leading-normal
    font-bold
    text-[12px]
    sm:text-[14px]
    md:text-[16px]
    lg:text-[19px]
    xl:text-[22px]
    2xl:text-[26px]
  "
                        >
                            మంగెన వెంకట నరసింహం, జాన శంకరయ్య & రుద్రరాజు వెంకట రామరాజు డిగ్రీ కళాశాల
                        </Text>

                        {/* DECORATIVE DIVIDER */}
                        <div className="
              flex items-center justify-center
              gap-5 my-5 md:my-6 lg:my-7
            ">
                            <span className="w-12 sm:w-16 lg:w-20 h-[1.5px] bg-[#c3a365]" />

                            <span className="w-2.5 h-2.5 rotate-45 bg-[#c3a365]" />

                            <span className="w-12 sm:w-16 lg:w-20 h-[1.5px] bg-[#c3a365]" />
                        </div>

                        {/* AFFILIATION DETAILS */}
                        <div className="
              flex flex-col items-center
              gap-1
              font-serif font-bold
            ">
                            <Text variant="h4" className="text-[13px]" color="affiliation" align="center">
                                Affiliated to Adikavi Nannaya University, Rajamahendravaram
                            </Text>

                            <Text variant="h4" className="text-[13px]" color="primary" align="center">
                                Accredited by NAAC with Grade B (Score 2.78)
                            </Text>

                            <Text variant="h4" className="text-[13px]" color="primary" align="center">
                                Recognised by UGC under sections 2(f) & 12(B)
                            </Text>

                            <Text variant="h4" className="text-[13px]" color="primary" align="center">
                                Identified as CoE by Government of Andhra Pradesh
                            </Text>

                            <Text variant="h4" className="text-[13px]" color="address" align="center">
                                Malikipuram – 533253, E.G. Dt., Andhra Pradesh
                            </Text>

                        </div>

                    </div>

                    {/* RIGHT UNIVERSITY LOGO */}
                    <div className="
            order-2 md:order-3
            flex justify-center items-center
          ">
                        <Image
                            src="/images/Adikavi_Nannaya_University_logo-Bg.png"
                            alt="Adikavi Nannaya University Logo"
                            width={190}
                            height={190}
                            priority
                            className="
                w-[90px] h-[90px]
                sm:w-[110px] sm:h-[110px]
                md:w-[105px] md:h-[120px]
                lg:w-[125px] lg:h-[125px]
                xl:w-[150px] xl:h-[150px]
                object-contain
              "
                        />
                    </div>
                </div>
            </Container>

        </header>
    );
}