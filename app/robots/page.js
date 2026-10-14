"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";


import RobotSlide from "@/components/robot/RobotSlide";
import Footer from "@/components/layout/Footer";


import robotsData from "@/data/robots";

const robots = robotsData.map((robot) => ({
  ...robot,
  year: robot.image.match(/Render(\d+)/)
    ? "20" + robot.image.match(/Render(\d+)/)[1]
    : "Unknown",
}));

const LazyRobotSlide = ({ robot, index, onSelect }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <motion.div
      className="min-w-0"
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.4,
          delay: (index % 4) * 0.1,
        },
      }}
      viewport={{ once: true, margin: "200px" }}
      onViewportEnter={() => setHasLoaded(true)}
    >
      {hasLoaded ? (
        <RobotSlide
          robot_name={robot.name}
          image={robot.image}
          year={robot.year}
          stats={robot.stats}
          onSelect={() => onSelect(robot)}
        />
      ) : (
        <div className="min-h-[25rem] w-full animate-pulse rounded-3xl border-8 border-gray-200 bg-gray-100/50 sm:min-h-[30rem]" />
      )}
    </motion.div>
  );
};

const RobotDetailModal = ({ robot, onClose }) => {
  if (!robot) {
    return null;
  }

  const detail = robot.details;
  const detailImages = detail?.images || [];
  const detailBullets = detail?.bullets || [];
  const hasDetailText = Boolean(detail?.description && detailBullets.length > 0);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative grid max-h-[92vh] w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[380px_1fr]"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-gray-500 shadow hover:text-black"
          aria-label="Close robot details"
        >
          x
        </button>

        <div className="flex items-center justify-center bg-[#FFDA15] p-10">
          <Image
            src={robot.image}
            width={440}
            height={440}
            alt={robot.name}
            className="max-h-[380px] w-auto object-contain"
          />
        </div>

        <div
          className="max-h-[92vh] overflow-y-auto overscroll-contain p-10"
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-400">
            {robot.year}
          </p>
          <h2 className="dk-prince-frog mt-2 text-7xl leading-none text-gray-950">
            {robot.name}
          </h2>

          {hasDetailText && (
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-lg leading-8 text-gray-700">
                {detail.description}
              </p>
              <div className="mt-5 space-y-3 border-t border-gray-200 pt-5 text-base leading-7 text-gray-700">
                {detailBullets.map((section) => (
                  <p key={section} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFDA15]" />
                    <span>{section}</span>
                  </p>
                ))}
              </div>
            </div>
          )}

          {detailImages.length > 0 && (
            <div className="mt-8 flex flex-col gap-5">
              {detailImages.map((image) => (
                <div
                  key={image}
                  className="w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                >
                  <Image
                    src={image}
                    width={800}
                    height={600}
                    alt={`${robot.name} detail`}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>
  );
};

const Robot = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedRobot(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!selectedRobot) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedRobot]);


  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-2xl mt-[6vw] ml-[4vw]">Meet Our</h1>
          <div className="w-[9vw] h-[2px] bg-[#666666] mt-[0.5vw] ml-[4vw] font-medium"></div>
          <h1 className="text-[11vw] dk-prince-frog mt-[-1vw] ml-[4vw]">
            Robots
          </h1>
        </div>
        {/* titles */}
        <Image
          src={"/funky_svgs/hero_right.svg"}
          alt="hero right image"
          width={4000}
          height={4000}
          className="w-[11vw] h-auto mt-[2.5vw] ml-[4vw] unselectable"
        />
        <Navbar />
      </div>

      <section className="grid grid-cols-1 gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {robots.map((robot, index) => (
          <LazyRobotSlide
            key={robot.name}
            robot={robot}
            index={index}
            onSelect={setSelectedRobot}
          />
        ))}
      </section>

      <AnimatePresence>
        {selectedRobot && (
          <RobotDetailModal
            robot={selectedRobot}
            onClose={() => setSelectedRobot(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Robot;
