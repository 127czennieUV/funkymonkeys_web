import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

const TestimonialCard = ({ quote, author, showRightDecorator }) => (
  <motion.div className="flex gap-2" variants={itemVariants}>
    <motion.div variants={itemVariants}>
      <Image
        className="h-8 w-8 shrink-0 md:h-[2.875rem] md:w-[2.75rem]"
        src="/images/quote.png"
        alt="quote"
        width={10}
        height={10}
      />
    </motion.div>
    <motion.div className="flex flex-col" variants={itemVariants}>
      <motion.p
        className="max-w-[43.25rem] poppins text-[1.125rem] leading-[150%] md:text-[1.625rem]"
        variants={itemVariants}
      >
        {quote}
      </motion.p>
      <motion.p className="text-[1.125rem]" variants={itemVariants}>
        - {author}
      </motion.p>
    </motion.div>
    {showRightDecorator && (
      <motion.div className="hidden md:block" variants={itemVariants}>
        <Image
          className="w-[9rem] h-auto"
          src="/funky_svgs/from_students_right.svg"
          alt="quote"
          width={10}
          height={10}
        />
      </motion.div>
    )}
  </motion.div>
);

const FromStudents = () => {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-6 pb-16 pt-0 md:flex-row md:gap-12 md:px-[3.5rem] md:pb-[4.5rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex min-w-0 flex-1 flex-col gap-8 md:gap-[2.75rem]"
        variants={itemVariants}
      >
        <motion.div className="flex items-center gap-5 md:gap-[2.75rem]" variants={itemVariants}>
          <motion.div className="hidden md:block" variants={itemVariants}>
            <Image
              className="h-auto md:w-[13.5rem]"
              src="/funky_svgs/from_students_left.svg"
              alt="quote"
              width={4000}
              height={4000}
            />
          </motion.div>
          <motion.h1
            className="dk-prince-frog text-[clamp(3.75rem,8vw,6.75rem)] leading-[85%]"
            variants={itemVariants}
          >
            From Students
          </motion.h1>
        </motion.div>

        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            showRightDecorator={index === testimonials.length - 1}
          />
        ))}
      </motion.div>
      <motion.div className="w-full shrink-0 md:w-[min(30vw,29rem)] md:self-center" variants={itemVariants}>
        <Image
          className="h-auto w-full"
          src="/images/fromstudents.png"
          alt="quote"
          width={4000}
          height={4000}
        />
      </motion.div>
    </motion.div>
  );
};

export default FromStudents;
