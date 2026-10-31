"use client"
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Sponsors = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex items-center gap-[0.25em] px-[4vw] pb-2 pt-28 text-[clamp(2.5rem,9vw,9rem)] xl:pt-24">
        <Image
          src="/monkey.png"
          alt="monkey image"
          width={800}
          height={800}
          className="h-[0.9em] w-auto shrink-0 object-contain"
        />
        <h1 className="dk-prince-frog min-w-0 text-[1em] leading-none">Sponsors</h1>
      </div>

      <div className="flex justify-center items-center w-full mt-16 px-6 pb-24">
        <Image
          src="/funky_svgs/Sponsors.svg" 
          alt="Sponsors"
          width={2000}
          height={2000}
          className="w-[80vw] max-w-[1200px] h-auto"
          
        />
      </div>

      <Footer />
    </div>
  );
};
export default Sponsors;
