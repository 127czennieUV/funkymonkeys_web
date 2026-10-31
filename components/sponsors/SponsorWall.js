"use client";

import { useEffect, useMemo, useState } from "react";

const MAX_AREA = 220;
const MAX_WIDTH = 34;
const MAX_HEIGHT = 13;
const MIN_SCALE = 0.35;
const MIN_AMOUNT = 1000;
const PADDING = 2.5;
const GOLDEN_ANGLE = 2.39996;
const WIDE_STRETCH = 1.9;
const NARROW_STRETCH = 0.9;
const TEXT_CHAR_ASPECT = 0.55;

const logoSize = (scale, aspect) => {
  const width = Math.sqrt(MAX_AREA * aspect);
  const height = width / aspect;
  const fit = Math.min(1, MAX_WIDTH / width, MAX_HEIGHT / height);
  return { w: width * fit * scale, h: height * fit * scale };
};

const overlaps = (a, b) =>
  a.x < b.x + b.w + PADDING &&
  b.x < a.x + a.w + PADDING &&
  a.y < b.y + b.h + PADDING &&
  b.y < a.y + a.h + PADDING;

const packLogos = (items, stretch) => {
  const placed = [];

  items.forEach((item, index) => {
    const offset = index * GOLDEN_ANGLE;
    for (let t = 0; ; ) {
      const radius = t * 0.6;
      const rect = {
        ...item,
        x: radius * stretch * Math.cos(t + offset) - item.w / 2,
        y: radius * Math.sin(t + offset) - item.h / 2,
      };
      if (!placed.some((other) => overlaps(rect, other))) {
        placed.push(rect);
        break;
      }
      t += Math.min(0.35, 1.5 / Math.max(radius, 1));
    }
  });

  const minX = Math.min(...placed.map((r) => r.x));
  const minY = Math.min(...placed.map((r) => r.y));
  const maxX = Math.max(...placed.map((r) => r.x + r.w));
  const maxY = Math.max(...placed.map((r) => r.y + r.h));

  return {
    width: maxX - minX,
    height: maxY - minY,
    rects: placed.map((r) => ({ ...r, x: r.x - minX, y: r.y - minY })),
  };
};

const aspectCache = new Map();

const cachedAspects = (sponsors) =>
  sponsors.every((sponsor) => !sponsor.logo || aspectCache.has(sponsor.logo))
    ? sponsors.map((sponsor) => aspectCache.get(sponsor.logo) ?? null)
    : null;

const loadAspect = (src) =>
  new Promise((resolve) => {
    if (!src) return resolve(null);
    if (aspectCache.has(src)) return resolve(aspectCache.get(src));
    const img = new window.Image();
    const finish = (aspect) => {
      aspectCache.set(src, aspect);
      resolve(aspect);
    };
    img.onload = () => finish(img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : null);
    img.onerror = () => finish(null);
    img.src = src;
  });

const useIsNarrow = () => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsNarrow(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isNarrow;
};

const percent = (value, total) => `${(value / total) * 100}%`;

const SponsorWall = ({ sponsors }) => {
  const isNarrow = useIsNarrow();

  const sorted = useMemo(
    () =>
      sponsors
        .filter((sponsor) => sponsor.amount >= MIN_AMOUNT)
        .sort((a, b) => b.amount - a.amount),
    [sponsors]
  );

  const [loaded, setLoaded] = useState({ sorted: null, aspects: null });
  const aspects = loaded.sorted === sorted ? loaded.aspects : cachedAspects(sorted);

  useEffect(() => {
    let cancelled = false;
    Promise.all(sorted.map((sponsor) => loadAspect(sponsor.logo))).then((results) => {
      if (!cancelled) setLoaded({ sorted, aspects: results });
    });
    return () => {
      cancelled = true;
    };
  }, [sorted]);

  const layout = useMemo(() => {
    if (!aspects || sorted.length === 0) return null;
    const maxAmount = sorted[0].amount;

    const items = sorted.map((sponsor, index) => {
      const scale = Math.max(MIN_SCALE, Math.sqrt(sponsor.amount / maxAmount));
      const aspect = aspects[index];
      const showText = aspect === null;
      const size = logoSize(scale, showText ? sponsor.name.length * TEXT_CHAR_ASPECT : aspect);
      return { ...sponsor, ...size, showText };
    });

    return packLogos(items, isNarrow ? NARROW_STRETCH : WIDE_STRETCH);
  }, [aspects, sorted, isNarrow]);

  return (
    <div className="sponsor-wall w-[80vw] max-w-[1200px] rounded-3xl border border-black/10 bg-[#F8F4E8] p-[clamp(1.5rem,4vw,3.5rem)]">
      {layout ? (
        <div
          className="relative w-full"
          style={{ aspectRatio: `${layout.width} / ${layout.height}`, containerType: "inline-size" }}
        >
          {layout.rects.map((rect) => (
            <div
              key={rect.name}
              className="absolute flex items-center justify-center"
              style={{
                left: percent(rect.x, layout.width),
                top: percent(rect.y, layout.height),
                width: percent(rect.w, layout.width),
                height: percent(rect.h, layout.height),
              }}
            >
              {rect.showText ? (
                <span
                  className="poppins whitespace-nowrap font-semibold leading-none text-[#1A1A1A]"
                  style={{ fontSize: `${((rect.h * 0.7) / layout.width) * 100}cqw` }}
                >
                  {rect.name}
                </span>
              ) : (
                <img
                  src={rect.logo}
                  alt={rect.name}
                  title={rect.name}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      ) : sorted.length === 0 ? (
        <p className="poppins py-16 text-center text-lg text-[#666666]">No sponsors listed for this year.</p>
      ) : (
        <div className="min-h-[20rem]" />
      )}
    </div>
  );
};

export default SponsorWall;
