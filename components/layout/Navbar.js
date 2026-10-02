"use client";

import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [monkeyOpen, setMonkeyOpen] = useState(false);
  const [funkyOpen, setFunkyOpen] = useState(false);
  return (
    <>
    <div className="flex flex-row justify-between items-center absolute right-[3.5rem] top-[2.5rem] z-50">
      <div></div>
      <div className="flex flex-row space-x-4 transition-all duration-300 ease-in-out text-[1.125rem] items-start">
        <div className="relative group">
          <Link href="#" className="hover:underline text-[1.375rem]">
            MONKEY HUB
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2 pt-4 hidden group-hover:block w-max">
            <div className="flex flex-col bg-black/5 backdrop-blur-lg rounded-2xl p-4 space-y-3 text-black shadow-2xl border border-white/10">
              <Link
                href="/"
                className="hover:text-gray-800 transition-colors px-2 text-center tracking-wide"
              >
                HOME
              </Link>
              <Link
                href="/officers"
                className="hover:text-gray-800 transition-colors px-2 text-center  tracking-wide"
              >
                OUR TEAM
              </Link>
              <Link
                href="/robots"
                className="hover:text-gray-800 transition-colors px-2 text-center  tracking-wide"
              >
                ROBOTS
              </Link>
              <Link
                href="/calendar"
                className="hover:text-gray-800  transition-colors px-2 text-center  tracking-wide"
              >
                CALENDAR
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link href="#" className="hover:underline text-[1.375rem]">
            FUNKY CORNER
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2 pt-4 hidden group-hover:block w-max">
            <div className="flex flex-col bg-black/5 backdrop-blur-lg rounded-2xl p-4 space-y-3 text-black shadow-2xl border border-white/10">
              <Link
                href="https://fsm846.vercel.app/"
                className="hover:text-black transition-colors px-2 text-center tracking-wide"
                >
                  FUNKYSTATS
                </Link>
              <Link
                href="/newsletter"
                className="hover:text-gray-800 transition-colors px-2 text-center tracking-wide"
              >
                NEWSLETTERS
              </Link>
              <Link
                href="/monkeybox"
                className="hover:text-gray-800 transition-colors px-2 text-center tracking-wide"
              >
                MONKEYBOX
              </Link>
              <Link
                href = "https://monkeyscout.vercel.app/"
                className = "hover: text-gray-800 transition-colors px-2 text-center tracking-wide"
                >
                  SCOUTING
                </Link>
            </div>
          </div>
        </div>
        <Link
            href="/sponsors"
            className="hover:underline text-[1.375rem]"
          >
            SPONSORS
          </Link>
        </div>
      </div>
      <div className="md:hidden absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-5 py-4 bg-white">
          <Link href="/">
            <img
              src="/monkey.png"
              alt="Funky Monkeys"
              className="w-12 h-12 object-contain"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-sm tracking-wide"
          >
            <div className="flex flex-col gap-[4px]">
              <span className="w-4 h-[1.5px] bg-black"></span>
              <span className="w-4 h-[1.5px] bg-black"></span>
              <span className="w-4 h-[1.5px] bg-black"></span>
            </div>
            <span>MENU</span>
          </button>
        </div>
        {menuOpen && (
          <div className="bg-white border-t border-gray-200">
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMonkeyOpen(!monkeyOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-[11px] tracking-wider"
              >
                <span>MONKEY HUB</span>

                <span className="text-lg font-light leading-none">
                  {monkeyOpen ? "−" : "+"}
                </span>
              </button>

              {monkeyOpen && (
                <div className="flex flex-col px-8 pb-3 text-[11px] text-gray-500">
                  <Link href="/" className="py-2">
                    HOME
                  </Link>

                  <Link href="/officers" className="py-2">
                    OUR TEAM
                  </Link>

                  <Link href="/robots" className="py-2">
                    ROBOTS
                  </Link>

                  <Link href="/calendar" className="py-2">
                    CALENDAR
                  </Link>
                </div>
              )}
            </div>
            <div className="border-b border-gray-100">

              <button
                onClick={() => setFunkyOpen(!funkyOpen)}
                className="w-full flex items-center justify-between px-5 py-4 text-[11px] tracking-wider"
              >
                <span>FUNKY CORNER</span>

                <span className="text-lg font-light leading-none">
                  {funkyOpen ? "−" : "+"}
                </span>
              </button>

              {funkyOpen && (
                <div className="flex flex-col px-8 pb-3 text-[11px] text-gray-500">
                  <Link
                    href="https://fsm846.vercel.app/"
                    className="py-2"
                  >
                    FUNKYSTATS
                  </Link>

                  <Link
                    href="/newsletter"
                    className="py-2"
                  >
                    NEWSLETTERS
                  </Link>

                  <Link
                    href="/monkeybox"
                    className="py-2"
                  >
                    MONKEYBOX
                  </Link>

                  <Link
                    href="https://monkeyscout.vercel.app/"
                    className="py-2"
                  >
                    SCOUTING
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/sponsors"
              className="block px-5 py-4 text-[11px] tracking-wider"
            >
              SPONSORS
            </Link>

          </div>
        )}
      </div>
      </>
  );
};

export default Navbar;
