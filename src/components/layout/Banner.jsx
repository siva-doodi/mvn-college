import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative h-[220px] w-full overflow-hidden sm:h-[320px] lg:h-[420px]">
      <Image
        src="/images/mvn-college-camp.jpeg"
        alt="MVN JS & RVR College"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}