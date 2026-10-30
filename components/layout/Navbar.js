"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamDocsOpen, setTeamDocsOpen] = useState(false);
  return (
    <>
    <nav
      className="absolute inset-x-0 top-0 z-50 hidden h-16 border-b border-black/15 bg-white xl:flex"
      aria-label="Desktop navigation"
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center gap-6 px-8 2xl:gap-10">
        
          <Image
            src="/monkey.png"
            alt="monkey! hehe"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="dk-prince-frog shrink-0 whitespace-nowrap text-4xl leading-none">The Funky Monkeys</span>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-6 whitespace-nowrap text-s font-medium 2xl:gap-10">
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
      <div className="xl:hidden absolute top-0 left-0 right-0 z-50">
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
          <div className="border-t border-black/15 bg-white px-5 pb-5 pt-2">
            <div className="mx-auto flex max-w-sm flex-col text-center text-sm tracking-[0.12em] text-[#21596A]">
              <Link href="/" onClick={() => setMenuOpen(false)} className="border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]">
                Home
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]">
                About
              </Link>
              <Link href="/newsletter" onClick={() => setMenuOpen(false)} className="border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]">
                Newsletters
              </Link>
              <Link href="/robots" onClick={() => setMenuOpen(false)} className="border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]">
                Robots
              </Link>
              <Link href="/officers" onClick={() => setMenuOpen(false)} className="border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]">
                Our Team
              </Link>

              <button
                onClick={() => setTeamDocsOpen(!teamDocsOpen)}
                className="flex w-full items-center justify-center gap-3 border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]"
                aria-expanded={teamDocsOpen}
              >
                <span>TeamDocs</span>
                <span aria-hidden="true" className="text-base leading-none">
                  {teamDocsOpen ? "−" : "+"}
                </span>
              </button>
              {teamDocsOpen && (
                <div className="flex flex-col bg-white text-xs tracking-[0.1em] text-black">
                  <Link href="/calendar" onClick={() => setMenuOpen(false)} className="py-2 hover:bg-[#FFF7AB]">Calendar</Link>
                  <Link href="https://fsm846.vercel.app/" onClick={() => setMenuOpen(false)} className="py-2 hover:bg-[#FFF7AB]">FunkyStats</Link>
                  <Link href="https://monkeyscout.vercel.app/" onClick={() => setMenuOpen(false)} className="py-2 hover:bg-[#FFF7AB]">Scouting</Link>
                  <Link href="https://github.com/team846" onClick={() => setMenuOpen(false)} className="py-2 hover:bg-[#FFF7AB]">GitHub</Link>
                </div>
              )}

              <Link href="/sponsors" onClick={() => setMenuOpen(false)} className="border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]">
                Sponsors
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="border-b border-[#21596A]/60 py-3 transition-colors hover:text-[#806D0B]">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
      </>
  );
};

export default Navbar;
