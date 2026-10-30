import Image from "next/image";

const RobotSlide = ({ robot_name, image, year, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="relative flex min-h-[25rem] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-8 border-[#FFDA15] bg-white p-6 text-left shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#FFDA15]/50 sm:min-h-[30rem] sm:p-8"
      aria-label={`View details for ${robot_name}`}
    >
      <div className="relative mb-6 flex items-center justify-center">
        <div className="absolute h-[13rem] w-[13rem] rounded-full bg-[#FFDA15] sm:h-[16.25rem] sm:w-[16.25rem]" />

        <Image
          src={image}
          width={300}
          height={300}
          alt={robot_name}
          className="z-10 h-[11rem] w-[11rem] object-contain sm:h-[13.75rem] sm:w-[13.75rem]"
        />
      </div>

      <h1 className="dk-prince-frog mt-4 text-center text-5xl">{robot_name}</h1>
      <span className="poppins absolute bottom-5 right-6 text-lg font-bold text-[#333122]">
        {year}
      </span>
    </button>
  );
};

export default RobotSlide;
