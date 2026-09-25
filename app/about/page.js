"use client";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FromStudents from "@/components/home/FromStudents";
import MonkeyBox from "@/components/home/MonkeyBox";


const About = () => {
  return (
    <main>
      <Navbar />
      <header className="px-[3.5rem] pb-8 pt-[9rem]">
        <h1 className="dk-prince-frog text-[clamp(5rem,11vw,10rem)] leading-[85%]">
          About Us
        </h1>
      </header>
      <FromStudents />
      <Image
        src="/funky_svgs/zigzag.svg"
        alt=""
        width={4000}
        height={4000}
        className="mt-[1vw] h-auto w-[100vw]"
      />
      <MonkeyBox />
      <Footer />
    </main>
  );
};

export default About;
