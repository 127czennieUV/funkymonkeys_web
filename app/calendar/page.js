'use client'

import { useState, useMemo, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";


const groupEventsByDate = (events) => {
  return events.reduce((acc, event) => {
    const [year, month] = event.date.split('-').map(Number);
    const monthIndex = month - 1;

    if (!acc[year]) acc[year] = {};
    if (!acc[year][monthIndex]) acc[year][monthIndex] = {};
    if (!acc[year][monthIndex][event.date]) acc[year][monthIndex][event.date] = [];

    acc[year][monthIndex][event.date].push(event);
    return acc;
  }, {});
};

const fillMissingDays = (year, month, eventsMap) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const filledDays = {};

  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    filledDays[dateString] = eventsMap[dateString] || [];
  }

  return filledDays;
};

const getDateKey = (date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(date.getDate()).padStart(2, "0")}`;
};

const isToday = (dateString) => {
  return dateString === getDateKey(new Date());
};

const formatDisplayDate = (dateString) => {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Day = ({ day_number, tasks, date, onClick, isSelected }) => {
  const today = isToday(date);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`relative flex aspect-square flex-col rounded-xl border-2 p-3 text-left shadow-md transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5
      ${
        isSelected
          ? "border-[#FFDA15] bg-[#FFDA15] text-[#806D0B] shadow-lg ring-4 ring-[#FFF7AB]"
          : today
          ? "border-[#FFDA15] bg-[#FFFDF0] shadow-[inset_0_0_0_2px_#FFDA15]"
          : "border-amber-300 bg-[#FFFDF0] hover:border-[#FFDA15] hover:bg-[#FFF7AB]"
      }
    `}
    >
      {today && !isSelected && (
        <span className="absolute bottom-2 left-2 z-10 max-w-[calc(100%-1rem)] truncate rounded-full bg-[#333122] px-2 py-0.5 text-[0.5625rem] font-bold uppercase leading-none tracking-wide text-[#FFDA15] shadow-sm">
          Today
        </span>
      )}
      <div className="font-bold text-lg mb-2">
        {day_number}
      </div>

      <div
        className={`max-h-24 space-y-1 overflow-y-auto text-xs ${
          isSelected ? "text-[#806D0B]" : "text-gray-700"
        }`}
      >
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={`${task.id || task.title}-${index}`}>
              {formatTimeRange(task.start, task.end)} {task.title}
            </div>
          ))
        ) : (
          <div className="text-gray-400">No events</div>
        )}
      </div>
    </button>
  );
};
const formatTimeRange = (start,end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const options = {
    hour: "numeric", 
    minute: "2-digit",
    hour12: true,
  };
  const startStr = startDate.toLocaleTimeString("en-US", options);
  const endStr = endDate.toLocaleTimeString("en-US", options);
  return `${startStr} - ${endStr}`
}

const SelectedDaySchedule = ({ date, events, onClose, isClosing }) => {
  if (!date) return null;

  return (
    <aside
      className={`flex max-h-[72vh] min-h-[24rem] flex-col rounded-2xl border-4 border-[#FFDA15] bg-white p-5 shadow-xl transition-[opacity,transform] duration-500 ease-out lg:sticky lg:top-8 ${
        isClosing
          ? "translate-x-8 scale-[0.98] opacity-0"
          : "translate-x-0 scale-100 opacity-100"
      }`}
    >
      <div key={date} className="flex min-h-0 flex-1 flex-col animate-[scheduleContentIn_220ms_ease-out]">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Schedule
            </p>
            <h2 className="mt-1 text-2xl font-bold text-[#333122]">
              {formatDisplayDate(date)}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFDA15] text-xl font-bold text-[#806D0B] transition hover:-translate-y-0.5"
            aria-label="Close schedule"
          >
            x
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={`${event.id || event.title}-${index}`}
                className="border-l-4 border-[#FFDA15] bg-yellow-50 p-4"
              >
                <p className="text-sm font-semibold text-[#806D0B]">
                  {formatTimeRange(event.start, event.end)}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#333122]">
                  {event.title}
                </h3>
                {event.location && (
                  <p className="mt-1 text-sm text-gray-600">
                    {event.location}
                  </p>
                )}
                {event.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {event.description}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="rounded-xl bg-gray-50 p-4 text-gray-500">
              No events scheduled.
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes scheduleContentIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </aside>
  );
};

const CalendarGrid = ({ currEvents, selectedDate, onSelectDate }) => {
  return (
    <div className="relative min-h-0">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-10 bg-gradient-to-t from-white to-transparent" />

      <div className="max-h-[72vh] overflow-y-auto pr-1 scroll-smooth [scrollbar-gutter:stable]">
        <div className="sticky top-0 z-20 mb-3 hidden bg-white pb-3 lg:grid lg:grid-cols-7 lg:gap-3">
          {weekDays.map((day) => (
            <div
              key={day}
              className="truncate rounded-full bg-[#333122] px-2 py-2 text-center text-xs font-bold uppercase tracking-wide text-[#FFDA15] sm:text-sm"
              title={day}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 pb-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {Object.entries(currEvents).map(([date, events]) => {
            const dayNumber = parseInt(date.split('-')[2], 10);

            return (
              <Day
                key={date}
                day_number={dayNumber}
                tasks={events}
                date={date}
                isSelected={selectedDate === date}
                onClick={() => onSelectDate(date)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Calender = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduleDate, setScheduleDate] = useState(null);
  const [isScheduleExpanded, setIsScheduleExpanded] = useState(false);
  const [isScheduleClosing, setIsScheduleClosing] = useState(false);
  const closeTimerRef = useRef(null);
  const openFrameRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const year = currDate.getFullYear();
        const month = currDate.getMonth();

        const timeMin = new Date(year, month, 1).toISOString();
        const timeMax = new Date(year, month + 1, 0, 23, 59, 59).toISOString();

        const response = await fetch(
          `/api/calendar?timeMin=${timeMin}&timeMax=${timeMax}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        setEvents(data.events);
        setError(null);

      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currDate]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (openFrameRef.current) {
        cancelAnimationFrame(openFrameRef.current);
      }
    };
  }, []);

  const groupedEvents = useMemo(() => groupEventsByDate(events), [events]);

  const currEvents = useMemo(() => {
    const year = currDate.getFullYear();
    const month = currDate.getMonth();
    const monthEvents = groupedEvents[year]?.[month] || {};
    return fillMissingDays(year, month, monthEvents);
  }, [currDate, groupedEvents]);

  const selectedEvents = scheduleDate ? currEvents[scheduleDate] || [] : [];

  const openSchedule = (date) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    if (openFrameRef.current) {
      cancelAnimationFrame(openFrameRef.current);
    }

    const isOpeningFromClosed = !scheduleDate || isScheduleClosing;

    setIsScheduleClosing(false);
    setSelectedDate(date);
    setScheduleDate(date);

    if (isOpeningFromClosed) {
      setIsScheduleExpanded(false);
      openFrameRef.current = requestAnimationFrame(() => {
        setIsScheduleExpanded(true);
      });
    } else {
      setIsScheduleExpanded(true);
    }
  };

  const closeSchedule = ({ immediate = false } = {}) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    if (openFrameRef.current) {
      cancelAnimationFrame(openFrameRef.current);
    }

    setSelectedDate(null);
    setIsScheduleExpanded(false);

    if (immediate) {
      setIsScheduleClosing(false);
      setScheduleDate(null);
      return;
    }

    setIsScheduleClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setScheduleDate(null);
      setIsScheduleClosing(false);
    }, 500);
  };

  const CalenderNav = () => {
    const changeMonth = (offset) => {
      const newDate = new Date(currDate);
      newDate.setMonth(newDate.getMonth() + offset);
      setCurrDate(newDate);
      closeSchedule({ immediate: true });
    };

    return (
      <div className="flex items-center justify-end gap-3 py-4">

        <button
          onClick={() => changeMonth(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &lt;
        </button>

        <div className="text-sm sm:text-base bg-[#F5F5F5] px-4 py-1 rounded-lg font-medium">
          {`${currDate.toLocaleString('en-US', { month: 'long' })} ${currDate.getFullYear()}`}
        </div>

        <button
          onClick={() => changeMonth(1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
        &gt;
        </button>

      </div>
    );
  };

  

  return (
    <div>
      <Navbar />

      <div className="flex flex-col px-4 sm:px-8 py-8">
      <div className="flex flex-row items-center justify-start gap-4">
        <h1 className="text-[11vw] dk-prince-frog mt-[-1vw] ml-[4vw]">
          Calendar
        </h1>
        <Image
          src={"/images/CalendarRight.svg"}
          alt="hero right image"
          width={4000}
          height={4000}
          className="w-[10vw] h-auto mt-[0vw] unselectable"
        />
      </div>
        <CalenderNav />

        {loading && <div className="text-center py-4">Loading events...</div>}
        {error && <div className="text-center py-4 text-red-500">Error: {error}</div>}

        {!loading && !error && (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div
              className={`min-w-0 flex-1 transition-[width,flex-basis] duration-500 ease-out ${
                isScheduleExpanded && !isScheduleClosing
                  ? "lg:basis-[calc(100%-25.5rem)]"
                  : "lg:basis-full"
              }`}
            >
              <CalendarGrid
                currEvents={currEvents}
                selectedDate={selectedDate}
                onSelectDate={openSchedule}
              />
            </div>

            {scheduleDate && (
              <div
                className={`w-full overflow-hidden transition-[width,opacity,transform] duration-500 ease-out lg:shrink-0 ${
                  isScheduleExpanded && !isScheduleClosing
                    ? "translate-x-0 opacity-100 lg:w-96"
                    : "translate-x-4 opacity-0 lg:w-0"
                }`}
              >
                <SelectedDaySchedule
                  date={scheduleDate}
                  events={selectedEvents}
                  onClose={() => closeSchedule()}
                  isClosing={isScheduleClosing}
                />
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Calender;
