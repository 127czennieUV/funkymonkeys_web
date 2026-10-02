import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="flex flex-row min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative flex w-[35vw] shrink-0 flex-col items-end justify-start bg-[#FFDA15] px-5"
        variants={itemVariants}
      >
        <motion.h1
          className="dk-prince-frog text-[9.375rem] max-w-[28.75rem] leading-[85%] text-[#FFF48E] py-[5vw]"
          variants={itemVariants}
        >
          Lynbrook Robotics
        </motion.h1>
        <motion.div variants={itemVariants}>
          <Image
            src={"/monkey.png"}
            width={4000}
            height={4000}
            alt="funky monkey image"
            className="-mt-[5vw] mb-[1vw] ml-[1.5vw] max-w-[26.8125rem] w-[33vw] h-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex w-[65vw] shrink-0 flex-col gap-[2vw] justify-between"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col ml-[4vw] gap-[2vw]"
          variants={itemVariants}
        >
          <motion.div
            className="flex w-full flex-row items-start justify-between"
            variants={itemVariants}
          >
            <motion.div className="flex flex-col" variants={itemVariants}>
              <div className="flex flex-col w-fit">
                <motion.p
                  className="poppins text-[1.5rem] text-[#666666] mt-[6vw]"
                  variants={itemVariants}
                >
                  Team 846
                </motion.p>
                {/* line */}
                <motion.div
                  className="w-full h-[2px] bg-[#666666] mb-[1rem] font-medium"
                  variants={itemVariants}
                ></motion.div>
              </div>
              <motion.h1
                className="dk-prince-frog text-[11rem] max-w-[40rem] leading-[85%] mt-[1vw]"
                variants={itemVariants}
              >
                The Funky Monkeys
              </motion.h1>
            </motion.div>
            <motion.div
              className="mt-[6vw] mr-[10vw] flex items-center"
              variants={itemVariants}
            >
              <Image
                src={"/funky_svgs/hero_right.svg"}
                alt="hero right image"
                width={4000}
                height={4000}
                className="w-[8rem] h-auto unselectable"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-row gap-[2vw]"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-col gap-[1.875vw] align-top justify-start"
              variants={itemVariants}
            >
              <motion.div className="flex flex-col items-start gap-3" variants={itemVariants}>
                <motion.p
                  className="poppins text-[1.2rem] font-small text-[#333122]"
                  variants={itemVariants}
                >
                  Empowering the next generation of engineers since 2002
                </motion.p>
                <motion.div className="flex flex-row items-center gap-3"
                  variants={itemVariants}
                >
                <Link
                  href="/about"
                  className="poppins rounded-full bg-[#FFDA15] px-[3.25rem] py-[1rem] text-[1.5rem] font-bold leading-[106%] text-[#806D0B] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                >
                  About Us 
                </Link>
                
                <Link
                  href="/contact"
                  className="poppins rounded-full bg-[#FFDA15] px-[3.25rem] py-[1rem] text-[1.5rem] font-bold leading-[106%] text-[#806D0B] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                >
                  Contact Us
                </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-auto flex min-h-[12rem] w-full flex-col bg-[#FFF7AB] px-[4vw] py-8 lg:flex-row lg:items-center lg:justify-between"
          variants={itemVariants}
        >
          <motion.div className="mt-3 flex flex-col items-start gap-4" variants={itemVariants}>
            <p className="poppins max-w-md text-[1.1rem] leading-[120%] text-[#333122]">
              Based in San Jose — Build. Learn. Inspire.
            </p>
            <div className="border-b-2 border-[#333122] pb-1">
              <h2 className="poppins text-[1.5rem] font-semibold text-[#333122]">Follow Us</h2>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/team846"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Team 846 on GitHub"
                className="transition-transform hover:scale-110"
              >
                <Image src="/icons/social4.svg" alt="" width={52} height={52} className="h-12 w-12" />
              </Link>
              <Link
                href="https://www.instagram.com/firstteam846/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Team 846 on Instagram"
                className="transition-transform hover:scale-110"
              >
                <Image src="/icons/social3.svg" alt="" width={52} height={52} className="h-12 w-12" />
              </Link>
              <Link
                href="https://www.youtube.com/@LynbrookRobotics"
                target="_blank"
                rel="noreferrer"
                aria-label="Watch Team 846 on YouTube"
                className="transition-transform hover:scale-110"
              >
                <Image src="/icons/social1.svg" alt="" width={52} height={52} className="h-12 w-12" />
              </Link>
            </div>
          </motion.div>
          <motion.nav className="mt-12 flex flex-col items-start gap-4" aria-label="Footer navigation" variants={itemVariants}>
            <div className="border-b-2 border-[#333122] pb-1">
              <h2 className="poppins text-[1.5rem] font-semibold text-[#333122]">Quick Links</h2>
            </div>
            <div className="flex flex-nowrap items-center gap-[3vw]">
              <Link href="/calendar" className="poppins whitespace-nowrap text-[1.25rem] font-medium transition-colors hover:text-[#806D0B]">
                Calendar
              </Link>
              <Link href="/robots" className="poppins text-[1.25rem] font-medium transition-colors hover:text-[#806D0B]">
                Robots
              </Link>
              <Link href="/officers" className="poppins text-[1.25rem] font-medium transition-colors hover:text-[#806D0B]">
                Officers
              </Link>
              <Link href="/sponsors" className="poppins text-[1.25rem] font-medium transition-colors hover:text-[#806D0B]">
                Sponsors
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
