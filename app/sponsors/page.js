"use client"
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Sponsors = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row items-center gap-4 pt-24 px-[4vw] md:pt-0">
        <Image
          src="/monkey.png"
          alt="monkey image"
          width={800}
          height={800}
          className="mt-12 h-[clamp(4rem,9vw,8rem)] w-auto shrink-0 object-contain"
        />
        <div className="flex flex-col">
          <h1 className="text-[clamp(4rem,9vw,9rem)] dk-prince-frog mt-[4vw]">Sponsors</h1>
        </div>
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
