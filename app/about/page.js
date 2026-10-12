"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FromStudents from "@/components/home/FromStudents";
import MonkeyBox from "@/components/home/MonkeyBox";
import Team from "@/components/home/team";


const About = () => {
  return (
    <main>
      <Navbar />
      <Team />
      <FromStudents />
      <MonkeyBox />
      <Footer />
    </main>
  );
};

export default About;
