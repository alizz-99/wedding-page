import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
  mobile?: boolean;
}

function getTimeLeft(targetDate: string) {
  const distance = new Date(targetDate).getTime() - Date.now();

  if (distance < 0) {
    return { days: "0", hours: "00", minutes: "00", seconds: "00", isDone: true };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString(),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0"),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0"),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0"),
    isDone: false,
  };
}

export function Countdown({ targetDate, mobile = false }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = getTimeLeft(targetDate);
      setTimeLeft(updatedTime);

      if (updatedTime.isDone) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const googleCalendarUrl = new URL("https://calendar.google.com/calendar/render");
  googleCalendarUrl.search = new URLSearchParams({
    action: "TEMPLATE",
    text: "Maddalen eta Ainhoa ezkontza",
    dates: "20270709T160000Z/20270710T000000Z",
    details: "Zure zain gaude!",
    location: "Hika txakolindegia, Billabona",
  }).toString();

  return (
    <section className="countdown-card px-6 py-8 bg-[#FAF8F3] sketch-border mx-4 sketch-shadow text-center relative">
      <div className="mb-4">
        <svg
          className="w-full h-8 text-[#4A5D4E]/40 mx-auto max-w-[200px]"
          viewBox="0 0 200 30"
          fill="none"
          stroke="currentColor"
        >
          <path d="M10 5 Q50 25 100 5 Q150 25 190 5" strokeDasharray="2 2" />
          <circle cx="50" cy="16" r="2" fill="currentColor" />
          <circle cx="100" cy="5" r="2" fill="currentColor" />
          <circle cx="150" cy="16" r="2" fill="currentColor" />
        </svg>
        <h2
          className="font-serif text-3xl text-[#4A5D4E] italic"
          style={mobile ? { fontFamily: '"Alex Brush", "Snell Roundhand", "Apple Chancery", cursive' } : undefined}
        >
          Atzera kontatzen
        </h2>
        <p className="text-[11px] uppercase tracking-widest text-stone-500 mt-1">
          EGUN HANDIRARTE
        </p>
      </div>

      {timeLeft.isDone ? (
        <div className="text-[#4A5D4E] font-serif text-xl py-6">
          ¡Iritsi daaaaa!
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 my-6">
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]">
              {timeLeft.days}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Egun
            </span>
          </div>
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Ordu
            </span>
          </div>
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Minutu
            </span>
          </div>
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Segundu
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
        <a
          href={googleCalendarUrl.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#4A5D4E] text-white text-xs font-medium uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-[#38483B] transition shadow-sm cursor-pointer"
        >
          <i className="fa-regular fa-calendar-plus"></i>
          <span>Gehitu egutegian</span>
        </a>
      </div>
    </section>
  );
}