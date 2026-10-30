"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const MoonIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const DarkModeToggle = ({ className = "" }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      className={`poppins flex w-fit cursor-pointer items-center gap-3 transition-transform hover:scale-105 ${className}`}
    >
      <MoonIcon className="h-6 w-6" />
      <span className="font-medium">Dark Mode</span>
      <span
        aria-hidden="true"
        className={`relative h-5 w-9 rounded-full border-2 border-current transition-colors ${
          isDark ? "bg-[#FFDA15]" : "bg-transparent"
        }`}
      >
        <span
          className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-current transition-all ${
            isDark ? "left-[1.125rem]" : "left-0.5"
          }`}
        />
      </span>
    </button>
  );
};

export default DarkModeToggle;
