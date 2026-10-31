"use client"
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SponsorWall from "@/components/sponsors/SponsorWall";
import { sponsorsByYear } from "@/data/sponsors";

const years = Object.keys(sponsorsByYear).map(Number).sort((a, b) => a - b);

const ChevronIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const arrowClass =
  "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#FFDA15] text-[#806D0B] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] disabled:cursor-default disabled:opacity-30 disabled:hover:translate-y-0 disabled:hover:shadow-none md:h-14 md:w-14";

const Sponsors = () => {
  const [yearIndex, setYearIndex] = useState(years.length - 1);
  const year = years[yearIndex];

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

      <section className="flex w-full flex-col items-center gap-6 mt-16 px-6 pb-24">
        <div className="flex items-center gap-6 md:gap-10">
          <button
            type="button"
            onClick={() => setYearIndex(yearIndex - 1)}
            disabled={yearIndex === 0}
            aria-label="Previous year"
            className={arrowClass}
          >
            <ChevronIcon className="h-6 w-6" />
          </button>
          <h2
            className="dk-prince-frog w-[4ch] text-center text-[clamp(2rem,5vw,4rem)] leading-none"
            aria-live="polite"
          >
            {year}
          </h2>
          <button
            type="button"
            onClick={() => setYearIndex(yearIndex + 1)}
            disabled={yearIndex === years.length - 1}
            aria-label="Next year"
            className={arrowClass}
          >
            <ChevronIcon className="h-6 w-6 rotate-180" />
          </button>
        </div>
        <SponsorWall sponsors={sponsorsByYear[year]} />
      </section>

      <Footer />
    </div>
  );
};
export default Sponsors;
