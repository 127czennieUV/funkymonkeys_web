"use client";

import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const newsletters = [
  {
    year: "2026-2027",
    season: "Fall 2026",
    volume: " Volume 39",
    description:
        "Highlights the new robotics building, team picnic, sponsor appreciation, community involvement, small improvements that make a difference, senior reflections, and the 2026–27 workshop schedule.",
    image: "/images/newsletters/fall2627.png",
    pdf: "/newsletter-pdf/fall2627.pdf",
  },
  {
    year:"2025-2026",
    season: "Winter 2025",
    volume: "Volume 38",
    description: "Features a rookie’s first time in the robotics workshop, field-reset volunteering, an introduction to machining, upcoming competitions, and reflections on learning practical skills through Team 846.",
    image: "/images/newsletters/winter2526.png",
    pdf: "/newsletter-pdf/winter2526.pdf",
  },
  {
    year: "2025-2026",
    season: "Fall 2025",
    volume: "Volume 37",
    description:
      "EFeatures the Western Region Robotics Forum, driver experiences at the Capital City Classic, Miller Robotics outreach, fall workshops, senior reflections, and perspectives on different roles within the team.",
    image: "/images/newsletters/fall2526.png",
    pdf: "/newsletter-pdf/fall2526.pdf",
  },
  {
    year: "2024-2025",
    season: "Fall 2024",
    volume: "Volume 36",
    description:
      "Introduces the 2024–25 team with stories about Sunset Showdown, connections between basketball and robotics, senior reflections, and the year’s leadership and workshop opportunities.",
    image: "/images/newsletters/fall2425.png",
    pdf: "/newsletter-pdf/fall2425.pdf",
  },
  {
    year: "2023-2024",
    season: "Spring 2024",
    volume: "Volume 35",
    description:"Covers the new season through presidents’ welcomes, dance and robotics, the importance of mentors, a summer experience at Noah Medical, and the fall workshop schedule.",
    image:"/images/newsletters/spring2324.png",
    pdf:"/newsletter-pdf/spring2324.pdf",
  },
  {
    year: "2023-2024",
    season: "Fall 2023",
    volume: "Volume 34",
    description:
      "Discover the projects, competitions, and experiences that shaped another year of robotics.",
    image: "/images/newsletters/fall2324.png",
    pdf: "/newsletter-pdf/fall2324.pdf",
  },
  
  {
    year: "2022-2023",
    season: "Spring 2023",
    volume: "Volume 33",
    description:
      "Explores prototyping through robot gripper development, student experiences and emotions, regional competition, outreach demonstrations, future plans, and how technical work connects with community engagement.",
    image: "/images/newsletters/fall2223.png",
    pdf: "/newsletter-pdf/spring2223.pdf",
  },
  {
    year: "2022-2023",
    season: "Winter 2022",
    volume: "Volume 32",
    description:
      "Explores the role of passion in robotics, confidence gained through technical experiences, the Monkey Moonshot, behind-the-scenes workshop life, OMIO, and ways members develop beyond competition.",
    image: "/images/newsletters/winter2223.png",
    pdf: "/newsletter-pdf/winter2223.pdf",
  },
  {
    year: "2020-2021",
    season: "Fall 2022",
    volume: "Volume 31",
    description:
      "Highlights the presidents’ welcome, underclassmen experiences, a Dean’s List Award, the 2022 season, outreach activities, graduating seniors, and ways new members can participate in Team 846.",
    image: "/images/newsletters/fall2021.png",
    pdf: "/newsletter-pdf/fall2223.pdf",
  },
  {
    year: "2020-2021",
    season: "Spring 2021",
    volume: "Volume 30",
    description:
      "Centers on adapting robotics to a remote pandemic year, featuring the “Big Switch,” virtual activities, Infinite Recharge 2.0, games, interviews, and creative ways Team 846 stayed connected.",
    image: "/images/newsletters/spring2021.png",
    pdf: "/newsletter-pdf/spring2021.pdf",
  },
  {
    year: "2020-2021",
    season: "Winter 2020",
    volume: "Volume 29",
    description:
      "Combines robotics with creativity through WRRF workshops, Arduino projects, student initiatives, and the intersection of science, engineering, art, and performance within Team 846.",
    image: "/images/newsletters/winter2021.png",
    pdf: "/newsletter-pdf/winter2021.pdf",
  },
  {
    year: "2020-2021",
    season: "Fall 2020",
    volume: "Volume 28",
    description:
      "Covers robotics during the pandemic, including KLA RoboGames, the development of Monkey Bars, summer activities, Stanford experiences, and how students adapted their technical work and teamwork remotely.",
    image: "/images/newsletters/fall2021.png",
    pdf: "/newsletter-pdf/fall2021.pdf",
  },
  {
    year: "2019-2020",
    season: "Spring 2020",
    volume: "Volume 27",
    description:
      "Documents the 2020 season and the disruption caused by the pandemic, focusing on the team’s robot, competition experiences, remote adaptation, and ways members continued participating.",
    image: "/images/newsletters/spring1920.png",
    pdf: "/newsletter-pdf/spring1920.pdf",
  },
  {
    year: "2019-2020",
    season: "Winter 2019",
    volume: "Volume 26",
    description:
      "Covers successful workshops, an ILM/Lucasfilm visit, exploring competition pits, offseason competitions, and the Monkey Box project while highlighting technical learning and experiences beyond regular build season.",
    image: "/images/newsletters/winter1920.png",
    pdf: "/newsletter-pdf/winter1920.pdf",
  },
  {
    year: "2019-2020",
    season: "Fall 2019",
    volume: "Volume 25",
    description:
      "Introduces the 2019–20 team through presidents’ welcomes, a KLA demonstration, student internships, Mr. Xie’s retirement, and opportunities for members to explore different interests during high school.",
    image: "/images/newsletters/fall1920.png",
    pdf: "/newsletter-pdf/fall1920.pdf",
  },
  {
    year: "2018-2019",
    season: "Spring 2019",
    volume: "Volume 24",
    description:
      "Highlights the team’s season and competition experiences alongside technical projects, outreach, student perspectives, and reflections on how robotics shaped members’ skills and interests.",
    image: "/images/newsletters/spring1819.png",
    pdf: "/newsletter-pdf/spring1819.pdf",
  },
  {
    year: "2018-2019",
    season: "Fall 2018",
    volume: "Volume 23",
    description:
      "Features presidents’ welcomes, the team’s FIRST Championships experience, personal reflections on robotics, mentor Mr. G’s fifteen years with the team, Kotlin programming, and the new officer team.",
    image: "/images/newsletters/fall1819.png",
    pdf: "/newsletter-pdf/fall1819.pdf",
  },
  {
    year: "2017-2018",
    season: "Fall Extra 2017",
    volume: "Volume 22",
    description:
      "An additional Fall 2017 issue introducing the new season, welcoming members, discussing becoming a mentor, previewing upcoming events, and presenting the 2017–18 officer team.",
    image: "/images/newsletters/fallextra1718.png",
    pdf: "/newsletter-pdf/fallextra1718.pdf",
  },
  {
    year: "2017-2018",
    season: "Fall 2017",
    volume: "Volume 21",
    description:
      "Focuses on the upcoming build season, the team’s mascot Anna, strategy and robot development, upgrading a second robot, and reflections from an FLL mentor about supporting younger students.",
    image: "/images/newsletters/fall1718.png",
    pdf: "/newsletter-pdf/fall1718.pdf",
  },
  {
    year: "2016-2017",
    season: "Spring 2017",
    volume: "Volume 20",
    description:
      "Covers competition and build-season experiences, technical projects, outreach, team traditions, and student reflections on the lessons, challenges, and relationships developed during the robotics season.",
    image: "/images/newsletters/spring1617.png",
    pdf: "/newsletter-pdf/spring1617.pdf",
  },
  {
    year: "2016-2017",
    season: "Winter 2016",
    volume: "Volume 19",
    description:
      "Features returning alumni, the Monkey Box YouTube channel, educational robotics videos, and ways Team 846 shares technical knowledge with rookie teams and the wider FRC community.",
    image: "/images/newsletters/winter1617.png",
    pdf: "/newsletter-pdf/winter1617.pdf",
  },
  {
    year: "2015-2016",
    season: "Spring 2016",
    volume: "Volume 18",
    description:
      "Focuses on the team’s competition experiences, robot development, student projects, outreach, and reflections on the 2015–16 season and the skills members gained through robotics.",
    image: "/images/newsletters/spring1516.png",
    pdf: "/newsletter-pdf/spring1516.pdf",
  },
  {
    year: "2015-2016",
    season: "Fall 2015",
    volume: "Volume 17",
    description:
      "Welcomes new members and highlights opportunities to get involved, including offseason competitions, Fleet Week, workshops, and team activities while reflecting on the friendships and experiences robotics creates.",
    image: "/images/newsletters/fall1516.png",
    pdf: "/newsletter-pdf/fall1516.pdf",
  },
  {
    year: "2014-2015",
    season: "Winter 2014",
    volume: "Volume 16",
    description:
      "Focuses on the 2014 robot and offseason CalGames, especially the development of new hexagonal bumpers that improved performance and helped the team reach later competition rounds.",
    image: "/images/newsletters/winter1415.png",
    pdf: "newsletter-pdf/winter1415.pdf",
  },
  {
    year: "2014-2015",
    season: "Fall 2014",
    volume: "Volume 15",
    description:
      "Introduces the new robotics season with presidents’ welcomes, Chezy Champs, California funding changes, summer internships and projects, mentor opinions on driveteam participation, and the 2014 World Championships.",
    image: "/images/newsletters/fall1415.png",
    pdf: "newsletter-pdf/fall1415.pdf",
  },
  {
    year: "2013-2014",
    season: "Spring 2014",
    volume: "Volume 14",
    description:
      "Highlights the 2014 competition season, robot development and regional competitions, team outreach, member experiences, and reflections on the year’s technical and community accomplishments.",
    image: "/images/newsletters/spring1314.png",
    pdf: "newsletter-pdf/spring1314.pdf",
  },
  {
    year: "2013-2014",
    season: "Winter 2013",
    volume: "Volume 13",
    description:
      "sdfljsdfjadsoi.",
    image: "/images/newsletters/winter1314.png",
    pdf: "newsletter-pdf/winter1314.pdf",
  },
  {
    year: "2013-2014",
    season: "Fall 2013",
    volume: "Volume 12",
    description:
      "Covers the presidents’ welcome, the team’s Imagery Award and Boston regional experience, summer projects, senior reflections, and a mentor profile highlighting machining and student development.",
    image: "/images/newsletters/fall1314.png",
    pdf: "newsletter-pdf/fall1314.pdf",
  },
  {
    year: "2012-2013",
    season: "Winter 2012",
    volume: "Volume 11",
    description:
      "Covers the team’s new “Build. Learn. Inspire.” motto, offseason highlights, RoboCup, rookie workshops, a Saratoga workshop visit, team trivia, and preparations for the upcoming competition season.",
    image: "/images/newsletters/winter1213.png",
    pdf: "newsletter-pdf/winter1213.pdf",
  },
  {
    year: "2011-2012",
    season: "Summer 2012",
    volume: "Volume 10",
    description:
      "sdfljsdfjadsoi.",
    image: "/images/newsletters/summer1112.png",
    pdf: "newsletter-pdf/summer1213.pdf",
  },
  {
    year: "2011-2012",
    season: "Spring 2012",
    volume: "Volume 9",
    description:
      "Covers the 2012 competition season, robot development, outreach, team activities, senior reflections, and lessons learned from building and competing as Team 846.",
    image: "/images/newsletters/spring1112.png",
    pdf: "newsletter-pdf/spring1112.pdf",
  },
  {
    year: "2011-2012",
    season: "Winter 2011",
    volume: "Volume 8",
    description:
      "Details the 2011 FRC season, including the Chesapeake and Silicon Valley Regionals, drivetrain and robot design, build-season memories, and perspectives from newer members joining the team.",
    image: "/images/newsletters/winter1112.png",
    pdf: "newsletter-pdf/winter1112.pdf",
  },
  {
    year: "2010-2011",
    season: "Summer 2011",
    volume: "Volume 7",
    description:
      "Introduces a new robotics year through the Anaheim Championships, summer projects, Botball, historical team memories, alumni perspectives, and a look at Lynbrook Robotics’ ten-year history.",
    image: "/images/newsletters/summer1011.png",
    pdf: "newsletter-pdf/summer1112.pdf",
  },
  {
    year: "2010-2011",
    season: "Spring 2011",
    volume: "Volume 6",
    description:
      "Features competition experiences, robot development, outreach and education, student projects, and reflections on the team’s activities and accomplishments throughout the 2010–11 season.",
    image: "/images/newsletters/spring1011.png",
    pdf: "newsletter-pdf/spring1011.pdf",
  },
  {
    year:"2009-2010",
    season: "Summer 2010",
    volume: "Volume 5",
    description: "Welcomes new members and introduces Lynbrook Robotics’ diverse technical and creative community, while covering Botball Championships, student projects, engineering ideas, and unusual summer activities.",
    image: "/images/newsletters/summer0910.png",
    pdf: "newsletter-pdf/summer0910.pdf",
  },
  {
    year: "2009-2010",
    season: "Spring 2010",
    volume: "Volume 4",
    description:
      "Highlights the team’s competition season, major robotics events, student projects, outreach efforts, and reflections on the growth of Lynbrook Robotics during the 2009–10 school year.",
    image: "/images/newsletters/spring0910.png",
    pdf: "newsletter-pdf/spring0910.pdf",
  },
  {
    year: "2009-2010",
    season: "Winter 2009",
    volume: "Volume 3",
    description: 
    "Covers FRC build season, student engineering projects, robotics in college, global robotics outreach, and team accomplishments, alongside congratulations and reflections from Lynbrook Robotics members.",
    image: "/images/newsletters/winter0910.png",
    pdf: "newsletter-pdf/winter0910.pdf",
  },
  {
    year: "2008-2009",
    season: "Summer 2009",
    volume: "Volume 2",
    description:
      "Welcomes new members while previewing CalGames, describing the team’s Botball Championships experience in Washington, student projects, model aviation, and efforts to spread science and technology.",
    image: "/images/newsletters/summer0809.png",
    pdf: "newsletter-pdf/summer0809.pdf",
  },
  {
    year: "2008-2009",
    season: "Spring 2009",
    volume: "Volume 1",
    description:
      "Covers the team’s Atlanta Championships experience, Botball success, creative robot projects including an armed Roomba, senior transitions, new officers, and efforts to promote robotics and technology.",
    image: "/images/newsletters/spring0809.png",
    pdf: "newsletter-pdf/spring0809.pdf",
  },
];

const Newsletter = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
    
      <div className="flex flex-row items-center justify-start gap-4">
        <header className="px-[3.5rem] pb-6 pt-[6rem]">
          <h1 className="text-[clamp(2rem,9vw,6rem)] dk-prince-frog loading-[85%]">
            NewsIetters
          </h1>
        </header>

        <Image
          src="/monkey.png"
          width={500}
          height={500}
          alt="funky monkey image"
          className="mr-[1vw] max-w-[8rem] w-[33vw] h-auto"
        />
      </div>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10">
        <div className="mb-8">

          <p className="max-w-2xl text-gray-600">
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
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center gap-3">
                  <p className="inline-block whitespace-nowrap rounded-md bg-[#FFDA15] px-3 py-1 text-md font-semibold">
                    {newsletter.season}
                  </p>

                  <h3 className="text-sm font-bold leading-tight">
                    {newsletter.volume}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
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