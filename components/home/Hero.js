import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import DarkModeToggle from "@/components/layout/DarkModeToggle";
import ImageMarquee from "@/components/home/ImageMarquee";

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
      className="flex min-h-screen flex-col md:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative flex w-full shrink-0 flex-row items-center justify-between bg-[#FFDA15] px-6 py-6 mt-20 xl:mt-15 md:w-[min(35vw,42rem)] md:flex-col md:items-end md:justify-start md:px-5 md:py-0"
        variants={itemVariants}
      >
        <motion.h1
          className="dk-prince-frog w-min text-[clamp(2.5rem,13vw,3.5rem)] leading-[85%] text-[#FFF48E] py-4 md:w-auto md:max-w-full md:self-center md:py-[min(5vw,6rem)] md:text-center md:text-[clamp(3rem,8.5vw,8rem)]"
          variants={itemVariants}
        >
          Lynbrook Robotics
        </motion.h1>
        <motion.div className="md:self-center" variants={itemVariants}>
          <Image
            src={"/monkey.png"}
            width={4000}
            height={4000}
            alt="funky monkey image"
            className="keep-logo-dark m-0 w-[32vw] max-w-[8rem] justify-center h-auto md:-mt-[min(5vw,6rem)] md:mb-[min(1vw,1.2rem)] md:w-[min(28vw,26.8125rem)] md:max-w-[26.8125rem]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex w-full shrink-0 flex-col justify-between md:w-auto md:min-w-0 md:flex-1 md:gap-[min(2vw,2.4rem)]"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col gap-8 px-6 py-10 md:ml-[min(4vw,4.8rem)] md:gap-[min(2vw,2.4rem)] md:px-0 md:py-0"
          variants={itemVariants}
        >
          <motion.div
          className="flex w-full flex-col gap-6 xl:flex-row xl:items-stretch xl:justify-between"
            variants={itemVariants}
          >
            <motion.div className="flex flex-col" variants={itemVariants}>
              <div className="flex flex-col w-fit">
                <motion.p
                  className="poppins mt-0 text-[1.125rem] text-[#666666] md:mt-24 md:text-[1.5rem] xl:mt-[min(6vw,7.2rem)]"
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
                className="dk-prince-frog mt-4 max-w-full text-[3.75rem] leading-[85%] md:mt-[min(1vw,1.2rem)] md:max-w-[40rem] md:text-[min(9.375rem,11vw)]"
                variants={itemVariants}
              >
                The Funky Monkeys
              </motion.h1>
            </motion.div>
            
            <motion.div
              className="relative -mx-6 h-40 w-[calc(100%+3rem)] md:mx-0 xl:-mb-40 md:h-44 md:w-full relative hidden xl:mt-[min(6vw,7.2rem)] xl:mr-[min(4vw,4.8rem)] xl:-mb-40 xl:block xl:h-auto xl:min-h-[22rem] xl:w-[clamp(7rem,15vw,16rem)] xl:shrink-0 xl:self-stretch"
              variants={itemVariants}
            >
              <ImageMarquee />
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-[min(2vw,2.4rem)]"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-col gap-[min(1.875vw,2.25rem)] align-top justify-start"
              variants={itemVariants}
            >
              <motion.div className="flex w-full flex-col items-start gap-4" variants={itemVariants}>
                <motion.p
                  className="poppins max-w-[20rem] text-[1.2rem] leading-[130%] text-[#333122] xl:max-w-[calc(100%_-_clamp(7rem,15vw,16rem)_-_min(4vw,4.8rem)_-_1.5rem)]"
                  variants={itemVariants}
                >
                  Empowering the next generation of engineers since 2002
                </motion.p>
                <motion.div className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:flex-wrap md:items-center"
                  variants={itemVariants}
                >
                <Link
                  href="/about"
                  className="poppins rounded-full bg-[#FFDA15] px-[3.25rem] py-[1rem] text-center text-[1.25rem] font-bold leading-[106%] text-[#806D0B] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] md:text-[1.5rem]"
                >
                  About Us 
                </Link>
                
                <Link
                  href="/contact"
                  className="poppins rounded-full bg-[#FFDA15] px-[3.25rem] py-[1rem] text-center text-[1.25rem] font-bold leading-[106%] text-[#806D0B] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] md:text-[1.5rem]"
                >
                  Contact Us
                </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative -mx-6 h-44 w-[calc(100%+3rem)] md:mx-0 md:w-full xl:hidden"
          variants={itemVariants}
        >
          <ImageMarquee />
        </motion.div>
        <motion.div
          className="hero-footer mt-auto flex w-full flex-col bg-[#FFF7AB] px-6 py-10 md:min-h-[12rem] md:px-[min(4vw,4.8rem)] md:py-8 xl:grid xl:grid-cols-[auto_auto] xl:grid-rows-[repeat(3,auto)] xl:content-center xl:justify-between xl:gap-x-12 xl:gap-y-4"
          variants={itemVariants}
        >
          <motion.div className="flex flex-col items-start gap-4 md:mt-3 xl:row-span-3 xl:grid xl:grid-rows-subgrid xl:items-center xl:justify-items-start" variants={itemVariants}>
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
          <motion.nav className="mt-10 flex flex-col items-start gap-4 md:mt-12 xl:row-span-3 xl:mt-3 xl:grid xl:grid-rows-subgrid xl:items-center xl:justify-items-start" aria-label="Footer navigation" variants={itemVariants}>
            <DarkModeToggle className="text-[1.25rem] text-[#333122]" />
            <div className="border-b-2 border-[#333122] pb-1">
              <h2 className="poppins text-[1.5rem] font-semibold text-[#333122]">Quick Links</h2>
            </div>
            <div className="flex flex-col items-start gap-3 md:flex-row md:flex-nowrap md:items-center md:gap-[min(3vw,3.6rem)]">
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
