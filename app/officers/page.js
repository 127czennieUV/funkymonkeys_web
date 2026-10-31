"use client";

import Image from "next/image";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { officers as officers2027} from "@/data/officers/2027";
import { officers as officers2026 } from "@/data/officers/2026";
import { officers as officers2025 } from "@/data/officers/2025";
import { officers as officers2024 } from "@/data/officers/2024";
import { officers as officers2023 } from "@/data/officers/2023";
import { officers as officers2022} from "@/data/officers/2022";
import { officers as officers2021} from "@/data/officers/2021";

const Officers = () => {
  const [selectedYear, setSelectedYear] = useState(2027);

  const officersData = {
    2027: officers2027,
    2026: officers2026,
    2025: officers2025,
    2024: officers2024,
    2023: officers2023,
    2022: officers2022,
    2021: officers2021,
  };

  const currentOfficers = officersData[selectedYear] || [];

  return (
    <div className="flex flex-col">
      <Navbar/>
      <div className="flex items-center gap-[0.25em] px-[4vw] pb-2 pt-28 text-[clamp(2.5rem,9vw,9rem)] xl:pt-24">
        <Image
          src="/monkey.png"
          alt="monkey image"
          width={800}
          height={800}
          className="h-[0.9em] w-auto shrink-0 object-contain"
        />
        <h1 className="dk-prince-frog min-w-0 text-[1em] leading-none">Officers</h1>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 px-5 sm:grid-cols-4 md:mt-[2vw] md:grid-cols-7 md:px-[5vw]">
        {[2027, 2026, 2025, 2024, 2023, 2022, 2021].map((year) => (
          <button
            type="button"
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`flex min-w-0 items-center justify-center rounded-full px-4 py-2 text-lg font-medium duration-200 hover:-translate-y-1 sm:text-xl ${
              selectedYear === year
                ? "bg-[#FFDA15]"
                : "border-[#FFDA15] border-4 hover:scale-105"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="mt-[4vw] px-[5vw] mb-[5vw] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
        {[0, 1].map((columnIndex) => {
          const half = Math.ceil(currentOfficers.length / 2);
          const columnOfficers = columnIndex === 0
            ? currentOfficers.slice(0, half)
            : currentOfficers.slice(half);

          return (
            <table key={columnIndex} className="w-full border-collapse max-md:table-fixed">
              <thead className={columnIndex === 1 ? "hidden md:table-header-group" : undefined}>
                <tr className="border-b-2 border-[#FFDA15]">
                  <th className="text-left py-3 px-4 font-semibold text-lg">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-lg">Position</th>
                </tr>
              </thead>
              <tbody>
                {columnOfficers.map((officer, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-[#FFDA15]/10 transition-colors"
                  >
                    <td className="py-3 px-4">{officer.name}</td>
                    <td className="py-3 px-4 text-gray-600">{officer.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Officers;
