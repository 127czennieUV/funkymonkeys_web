export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

// Add as many .ics URLs as you need to this array
const CALENDAR_ICS_URLS = [
  "https://calendar.google.com/calendar/ical/4c5pd4rohvk9v7lu9edtau2pko%40group.calendar.google.com/public/basic.ics",
];

export async function GET() {
  try {

    const fetchPromises = CALENDAR_ICS_URLS.map((url) =>
      fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
        cache: "no-store",
      }).then((res) => (res.ok ? res.text() : ""))
    );

    const icsTexts = await Promise.all(fetchPromises);


    const combinedIcsText = icsTexts.join("\n");

    return new Response(combinedIcsText, {
      status: 200,
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Error fetching ICS feeds:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}