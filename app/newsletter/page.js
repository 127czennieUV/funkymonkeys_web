"use client";

import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const newsletters = [
  {
    year: "2026-2027",
    season: "Fall 2026",
    title: " Volume 39: fill in later",
    description:
        "A look into our new year!",
    image: "/images/newsletters/26fall.png",
    pdf: "/newsletter-pdf/fall2627.pdf",
  },
  {
    year: "2025-2026",
    season: "Fall 2025",
    title: "Volume 38: fill in later",
    description:
      "Explore our latest robotics projects, competition season, community outreach, and the people behind Funky Monkeys.",
    image: "/images/newsletters/25fall.png",
    pdf: "/newsletter-pdf/fall2526.pdf",
  },
  {
    year: "2024-2025",
    season: "Fall 2024",
    title: "Volume 37: Note ",
    description:
      "A look into our competition season, new robot designs, engineering challenges, and accomplishments.",
    image: "/images/newsletters/24fall.png",
    pdf: "/newsletter-pdf/fall2425.pdf",
  },
  {
    year: "2023-2024",
    season: "Fall 2023",
    title: "Volume 36: Engineering Forward",
    description:
      "Discover the projects, competitions, and experiences that shaped another year of robotics.",
    image: "/images/newsletters/23fall.png",
    pdf: "/newsletter-pdf/fall2324.pdf",
  },
  {
    year: "2022-2023",
    season: "Spring 2023",
    title: "Volume 35: The Next Generation",
    description:
      "Highlighting our newest robots, student engineers, community involvement, and competition season.",
    image: "/images/newsletters/fall23.jpg",
    pdf: "/newsletter-pdf/spring2223.pdf",
  },
  {
    year: "2022-2023",
    season: "Winter 2022",
    title: "Volume 34: Back in Action",
    description:
      "A collection of our team's projects, events, outreach, and return to competition.",
    image: "/images/newsletters/winter22.png",
    pdf: "/newsletter-pdf/winter2223.pdf",
  },
  {
    year: "2020-2021",
    season: "Fall 2022",
    title: "Volume 33: Adapting & Creating",
    description:
      "Exploring how our team continued to build, learn, and innovate through a changing season.",
    image: "/images/newsletters/fall22.png",
    pdf: "/newsletter-pdf/fall2223.pdf",
  },
  {
    year: "2020-2021",
    season: "Spring 2021",
    title: "Volume 32: Driven by Innovation",
    description:
      "Take a look at our robot, team projects, outreach, and experiences throughout the season.",
    image: "/images/newsletters/21spring.png",
    pdf: "/newsletter-pdf/spring2021.pdf",
  },
  {
    year: "2020-2021",
    season: "Winter 2020",
    title: "Volume 31: Reaching New Heights",
    description:
      "Featuring our latest engineering projects, competition experiences, and community impact.",
    image: "/images/newsletters/20winter.png",
    pdf: "/newsletter-pdf/winter2021.pdf",
  },
  {
    year: "2020-2021",
    season: "Fall 2020",
    title: "Volume 30: Robotics & Innovation",
    description:
      "A look at the people, robots, and ideas that made this season memorable.",
    image: "/images/newsletters/20fall.png",
    pdf: "/newsletter-pdf/fall2021.pdf",
  },
  {
    year: "2019-2020",
    season: "Spring 2020",
    title: "Volume 29: Building Together",
    description:
      "Exploring teamwork, engineering, outreach, and our journey through another robotics season.",
    image: "/images/newsletters/20spring.png",
    pdf: "/newsletter-pdf/spring1920.pdf",
  },
  {
    year: "2019-2020",
    season: "Winter 2019",
    title: "Volume 28: Engineering in Action",
    description:
      "Featuring our competition robot, student projects, and the work happening throughout our team.",
    image: "/images/newsletters/19winter.png",
    pdf: "/newsletter-pdf/winter1920.pdf",
  },
  {
    year: "2019-2020",
    season: "Fall 2019",
    title: "Volume 27: The Road Ahead",
    description:
      "A collection of our team's engineering accomplishments, events, and community involvement.",
    image: "/images/newsletters/19fall.png",
    pdf: "/newsletter-pdf/fall1920.pdf",
  },
  {
    year: "2018-2019",
    season: "Spring 2019",
    title: "Volume 26: The Championship Push",
    description:
      "Exploring new drivetrain designs, our impact on the community, and our commitment to championship competition.",
    image: "/images/newsletters/19spring.jpg",
    pdf: "/newsletter-pdf/spring1819.pdf",
  },
  {
    year: "2018-2019",
    season: "Fall 2018",
    title: "Volume 25: The Championship Push",
    description:
      "Exploring new drivetrain designs, innovation, and the team's journey through another competition season.",
    image: "/images/newsletters/18fall.jpg",
    pdf: "/newsletter-pdf/fall1819.pdf",
  },
  {
    year: "2017-2018",
    season: "Fall Extra 2017",
    title: "Volume 24: Robotics & Innovation",
    description:
      "Highlights from another year of engineering, robotics, and community involvement.",
    image: "/images/newsletters/extra17fall.png",
    pdf: "/newsletter-pdf/fallextra1718.pdf",
  },
  {
    year: "2017-2018",
    season: "Fall 2017",
    title: "Volume 23: Robotics & Innovation",
    description:
      "A look at our team's projects, competitions, and innovations.",
    image: "/images/newsletters/17fall.png",
    pdf: "/newsletter-pdf/fall1718.pdf",
  },
  {
    year: "2016-2017",
    season: "Spring 2017",
    title: "Volume 22: Robotics & Innovation",
    description:
      "Exploring the team's early projects, competitions, and impact.",
    image: "/images/newsletters/17spring.jpg",
    pdf: "/newsletter-pdf/spring1617.pdf",
  },
  {
    year: "2016-2017",
    season: "Winter 2016",
    title: "Volume 11: The Beginning",
    description:
      "A look back at the early years of Funky Monkeys and the foundation of our robotics program.",
    image: "/images/newsletters/16winter.png",
    pdf: "/newsletter-pdf/winter1617.pdf",
  },
  {
    year: "2015-2016",
    season: "Spring 2016",
    title: "Volume 11: The Beginning",
    description:
      "A look back at the early years of Funky Monkeys and the foundation of our robotics program.",
    image: "/images/newsletters/16spring.png",
    pdf: "/newsletter-pdf/spring1516.pdf",
  },
  {
    year: "2015-2016",
    season: "Fall 2015",
    title: "Volume 11: The Beginning",
    description:
      "A look back at the early years of Funky Monkeys and the foundation of our robotics program.",
    image: "/images/newsletters/15fall.png",
    pdf: "/newsletter-pdf/fall1516.pdf",
  },
  {
    year: "2014-2015",
    season: "Winter 2014",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/images/newsletters/14winter.png",
    pdf: "newsletter-pdf/winter1415.pdf",
  },
  {
    year: "2014-2015",
    season: "Fall 2014",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/images/newsletters/14fall.png",
    pdf: "newsletter-pdf/fall1415.pdf",
  },
  {
    year: "2013-2014",
    season: "Spring 2014",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/images/newsletters/14spring.png",
    pdf: "newsletter-pdf/spring1314.pdf",
  },
  {
    year: "2013-2014",
    season: "Winter 2013",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/images/newsletters/13winter.png",
    pdf: "newsletter-pdf/winter1314.pdf",
  },
  {
    year: "2013-2014",
    season: "Fall 2013",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/images/newsletters/13fall.png",
    pdf: "newsletter-pdf/fall1314.pdf",
  },
  {
    year: "2012-2013",
    season: "Winter 2012",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/winter1213.pdf",
  },
  {
    year: "2012-2013",
    season: "Summer 2012",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/summer1213.pdf",
  },
  {
    year: "2011-2012",
    season: "Spring 2012",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/spring1112.pdf",
  },
  {
    year: "2011-2012",
    season: "Winter 2011",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/winter1112.pdf",
  },
  {
    year: "2011-2012",
    season: "Summer 2011",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/summer1112.pdf",
  },
  {
    year: "2010-2011",
    season: "Spring 2011",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/spring1011.pdf",
  },
  {
    year: "2010-2011",
    season: "Spring 2010",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/spring0910.pdf",
  },
  {
    year: "2009-2010",
    season: "Winter 2009",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/winter0910.pdf",
  },
  {
    year: "2008-2009",
    season: "Summer 2009",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/summer0809.pdf",
  },
  {
    year: "2008-2009",
    season: "Spring 2009",
    title: "Volume 11: The Beginning",
    description:
      "sdfljsdfjadsoi.",
    image: "/monkey.png",
    pdf: "newsletter-pdf/spring0809.pdf",
  },
];

const Newsletter = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="flex flex-row items-center justify-start gap-4">
        <header className="px-[3.5rem] pb-6 pt-[6rem]">
          <h1 className="text-[9vw] dk-prince-frog loading-[85%]">
            NewsIetters
          </h1>
        </header>

        <Image
          src="/monkey.png"
          width={4000}
          height={4000}
          alt="funky monkey image"
          className="ml-[-1vw] max-w-[8rem] w-[33vw] h-auto"
        />
      </div>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Our Legacy in Print
          </h2>

          <p className="mt-2 max-w-2xl text-gray-600">
            Explore the history of Funky Monkeys through our collection
            of newsletters, covering our team's projects, competitions,
            and community.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {newsletters.map((newsletter) => (
            <article
              key={newsletter.year}
              className="flex min-h-[260px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative w-[42%] shrink-0 overflow-hidden">
                <Image
                  src={newsletter.image}
                  alt={`${newsletter.year} newsletter`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <p className="mb-2 inline-block rounded-md bg-[#FFDA15] px-3 py-1 text-sm font-semibold">
                    {newsletter.season}
                  </p>

                  <h3 className="text-xl font-bold leading-tight">
                    {newsletter.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {newsletter.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={newsletter.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#FFD700] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-80"
                  >
                    Read Article
                  </a>

                  <a
                    href={newsletter.pdf}
                    download
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100"
                  > 
                    Download PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Newsletter;