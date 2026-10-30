import Image from "next/image";

const MonkeyBox = () => {
  return (
    <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-6 pb-16 pt-0 md:grid-cols-2 md:items-center md:gap-16 md:px-[3.5rem] md:pb-[4.5rem] md:pt-0">
      <div className="order-2 hidden min-w-0 md:order-1 md:block">
        <Image
          src={"/images/monkeybox.png"}
          alt="monkey box"
          width={4000}
          height={4000}
          className="h-auto w-full max-w-[42rem]"
        />
      </div>
      <div className="order-1 flex min-w-0 flex-col justify-center gap-7 md:order-2 md:gap-10">
        <h1 className="dk-prince-frog text-[clamp(4.5rem,8vw,6.75rem)] leading-[85%]">
          Monkey Box
        </h1>
        <Image
          src={"/images/monkeybox.png"}
          alt="monkey box"
          width={4000}
          height={4000}
          className="h-auto w-full md:hidden"
        />
        <p className="poppins text-[1.25rem] leading-relaxed md:text-[1.625rem]">
          Student developed videos to inspire and teach the world around us.
        </p>
        <a href="https://www.youtube.com/@LynbrookRobotics" 
        className="poppins flex w-full max-w-[16rem] flex-row items-center justify-center rounded-full bg-[#FFDA15] py-[0.875rem] text-[1.25rem] font-bold text-[#806D0B] decoration-none transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] md:text-[1.625rem]">
          Click here! 
        </a>

      </div>
    </section>
  );
};

export default MonkeyBox;
