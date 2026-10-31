import Image from "next/image";

const FILES = [
  "2025.png",
  "aaron-morgan.png",
  "tiffany-harish.png",
  "tuff.png",
  "amogh.png",
  "team2019.png",
  "judges.png",
  "2018award.png",
  "2015award.png",
];

const BASE = FILES.map((file, i) => ({
  src: `/images/homeanimate/${file}`,
  alt: `Team 846 photo ${i + 1}`,
}));

const REPEATS = 3;
const IMAGES = Array.from({ length: REPEATS }, () => BASE).flat();

export default function ImageMarquee() {
  return (
    <div
      className="absolute inset-0 overflow-hidden
        [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]
        xl:[mask-image:linear-gradient(to_bottom,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div
        className="absolute left-0 top-0 flex h-full w-max flex-row
          animate-[marquee-x-rev_120s_linear_infinite]
          motion-reduce:animate-none
          xl:h-max xl:w-full xl:flex-col xl:animate-[marquee-y_120s_linear_infinite]"
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex h-full shrink-0 flex-row gap-4 pr-4 xl:h-auto xl:flex-col xl:pr-0 xl:pb-4"
          >
            {IMAGES.map((img, i) => (
              <li
                key={`${img.src}-${i}`}
                className="h-full shrink-0 xl:h-auto xl:w-full"
              >
                <Image
                  src={img.src}
                  alt={copy === 0 && i < BASE.length ? img.alt : ""}
                  width={1200}
                  height={1200}
                  loading="eager"
                  sizes="(min-width: 1280px) 16rem, 20rem"
                  className="block h-full w-auto rounded-2xl xl:h-auto xl:w-full"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}