import Image from "next/image";

const RobotSlide = ({ robot_name, image, year, onSelect }) => {
  const imagePosition = {
    "2003": "scale-[0.82]",
    Wes: "scale-[0.82]",
    "Punk Monkey": "scale-[1.5] translate-y-8",
  }[robot_name] || "";

  return (
    <button
      type="button"
      onClick={onSelect}
      className="relative flex min-h-[25rem] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-8 border-[#FFDA15] bg-[#F8F4E8] p-6 text-left shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#FFDA15]/50 sm:min-h-[30rem] sm:p-8"
      aria-label={`View details for ${robot_name}`}
    >
      <div className="mb-6 flex h-[13rem] w-[13rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFDA15] p-5 sm:h-[16.25rem] sm:w-[16.25rem] sm:p-7">
        <Image
          src={image}
          width={300}
          height={300}
          alt={robot_name}
          className={`h-full w-full object-contain ${imagePosition}`}
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
