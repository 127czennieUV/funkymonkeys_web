import { sponsors as sponsors2005 } from "./2005";
import { sponsors as sponsors2006 } from "./2006";
import { sponsors as sponsors2007 } from "./2007";
import { sponsors as sponsors2008 } from "./2008";
import { sponsors as sponsors2009 } from "./2009";
import { sponsors as sponsors2010 } from "./2010";
import { sponsors as sponsors2011 } from "./2011";
import { sponsors as sponsors2012 } from "./2012";
import { sponsors as sponsors2013 } from "./2013";
import { sponsors as sponsors2014 } from "./2014";
import { sponsors as sponsors2015 } from "./2015";
import { sponsors as sponsors2016 } from "./2016";
import { sponsors as sponsors2017 } from "./2017";
import { sponsors as sponsors2018 } from "./2018";
import { sponsors as sponsors2019 } from "./2019";
import { sponsors as sponsors2020 } from "./2020";
import { sponsors as sponsors2021 } from "./2021";
import { sponsors as sponsors2022 } from "./2022";
import { sponsors as sponsors2023 } from "./2023";
import { sponsors as sponsors2024 } from "./2024";
import { sponsors as sponsors2025 } from "./2025";
import { sponsors as sponsors2026 } from "./2026";
import { sponsors as sponsors2027 } from "./2027";
import { sponsorTotals } from "./totals";

export const logoFor = (name) =>
  `/sponsors/${name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")}.png`;

const rawSponsorsByYear = {
  2005: sponsors2005,
  2006: sponsors2006,
  2007: sponsors2007,
  2008: sponsors2008,
  2009: sponsors2009,
  2010: sponsors2010,
  2011: sponsors2011,
  2012: sponsors2012,
  2013: sponsors2013,
  2014: sponsors2014,
  2015: sponsors2015,
  2016: sponsors2016,
  2017: sponsors2017,
  2018: sponsors2018,
  2019: sponsors2019,
  2020: sponsors2020,
  2021: sponsors2021,
  2022: sponsors2022,
  2023: sponsors2023,
  2024: sponsors2024,
  2025: sponsors2025,
  2026: sponsors2026,
  2027: sponsors2027,
};

export const sponsorsByYear = Object.fromEntries(
  Object.entries(rawSponsorsByYear).map(([year, sponsors]) => [
    year,
    sponsors.map((sponsor) => ({
      ...sponsor,
      logo: logoFor(sponsor.name),
      total: sponsorTotals[sponsor.name] ?? sponsor.amount,
    })),
  ])
);
