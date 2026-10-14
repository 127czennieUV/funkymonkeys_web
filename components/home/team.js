import Image from "next/image";

const Team = () => {
  return (
    <section className="px-6 pb-20 pt-32 md:px-[8vw] md:pt-[10rem]">
      <header className="mx-auto max-w-5xl text-center">
        <p className="poppins text-[1.125rem] font-medium uppercase tracking-[0.18em] text-[#666666] md:text-[1.375rem]">
          Lynbrook Robotics, FIRST 846
        </p>
        <h1 className="dk-prince-frog mt-4 text-[clamp(4rem,9vw,8.5rem)] leading-[85%]">
          The Funky Monkeys
        </h1>
      </header>

      <figure className="mx-auto mt-16 max-w-6xl">
        <Image
          src="/images/finalteamphoto.jpg"
          alt="Lynbrook Robotics students working on their robot"
          width={2797}
          height={4032}
          className="h-[22rem] w-full object-cover object-center md:h-[34rem]"
        />
      </figure>

      <div className="mx-auto mt-24 grid max-w-6xl gap-10 md:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] md:gap-20">
        <div>
          <h2 className="dk-prince-frog mt-3 text-[clamp(3.5rem,6vw,6rem)] leading-[85%]">
            Our Mission
          </h2>
          <div className="mt-8 h-3 w-32 bg-[#FFDA15]" />
          <Image
            src="/images/finalteam.jpg"
            alt="photo"
            width={200}
            height={200}
            className = "h-[6rem] w-full object-cover object-center md:h-[20rem] md:pt-12"
          />
        </div>
        <div className="poppins space-y-6 text-[1.2rem] leading-[160%] md:pt-30 md:text-[1.4rem]">
          <p>
            “To build competitive robots and teach students the science behind the machine.”
          </p>
          <p>
            Our mission is to provide high school students with an opportunity to apply science, technology, engineering, and mathematics (STEM) in both introductory and advanced levels of robotics. We accomplish this goal by participating in the FIRST Robotics Competition (FRC), where students work with adult mentors each year to build competitive robots suited for a specific theme.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
