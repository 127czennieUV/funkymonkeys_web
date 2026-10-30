"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [monkeyOpen, setMonkeyOpen] = useState(false);
  const [funkyOpen, setFunkyOpen] = useState(false);
  return (
    <>
    <nav
      className="absolute inset-x-0 top-0 z-50 hidden h-16 border-b border-black/15 bg-white md:flex"
      aria-label="Desktop navigation"
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center gap-6 px-8 lg:gap-10">
        
          <Image
            src="/monkey.png"
            alt="monkey! hehe"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
          />
          <span className="dk-prince-frog text-4xl leading-none">The Funky Monkeys</span>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 whitespace-nowrap text-xs font-medium lg:gap-5">
          <Link href="/" className="transition-colors hover:text-[#F0C14B]">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#F0C14B]">
            About
          </Link>
          <Link href="/newsletter" className="transition-colors hover:text-[#F0C14B]">
            Newsletters
          </Link>
          <Link href="/robots" className="transition-colors hover:text-[#F0C14B]">
          Robots
            </Link>
          <Link href="/officers" className="transition-colors hover:text-[#F0C14B]">Our Team</Link>

          <div className="group relative">
            <button type="button" className="flex items-center gap-1 transition-colors hover:text-[#F0C14B]">
              TeamDocs <span aria-hidden="true" className="text-[10px]">▾</span>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-36 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="border border-black/10 bg-white p-2 shadow-lg">
                <Link href="/calendar" className="block px-3 py-2 text-xs text-black hover:bg-[#FFF7AB]">
                  Calendar
                </Link>
                <Link href="https://fsm846.vercel.app/" className="block px-3 py-2 text-xs text-black hover:bg-[#FFF7AB]">
                  FunkyStats
                </Link>
                <Link href="https://monkeyscout.vercel.app/" className="block px-3 py-2 text-xs text-black hover:bg-[#FFF7AB]">
                  Scouting
                </Link>
                <Link href="https://github.com/team846" className="block px-3 py-2 text-xs text-black hover:bg-[#FFF7AB]">
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          <Link href="/sponsors" className="transition-colors hover:text-[#806D0B]">Sponsors</Link>
          <Link href="/contact" className="transition-colors hover:text-[#806D0B]">Contact Us</Link>
        </div>
      </div>
    </nav>
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
