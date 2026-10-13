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
    <section
      className="countdown-card px-6 py-8 bg-[#FAF8F3] sketch-border mx-4 sketch-shadow text-center relative"
      data-countdown-target={targetDate}
    >
      <div className="mb-4">
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

      <div
        className="text-[#4A5D4E] font-serif text-xl py-6"
        data-countdown-done
        style={{ display: timeLeft.isDone ? undefined : "none" }}
      >
          ¡Iritsi daaaaa!
      </div>
      <div
        className="grid grid-cols-4 gap-2 my-6"
        data-countdown-grid
        style={{ display: timeLeft.isDone ? "none" : undefined }}
      >
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]" data-countdown-days>
              {timeLeft.days}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Egun
            </span>
          </div>
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]" data-countdown-hours>
              {timeLeft.hours}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Ordu
            </span>
          </div>
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]" data-countdown-minutes>
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Minutu
            </span>
          </div>
          <div className="bg-[#F7F4EE] p-3 rounded-2xl border border-[#4A5D4E]/10">
            <span className="block font-serif text-2xl font-bold text-[#4A5D4E]" data-countdown-seconds>
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500">
              Segundu
            </span>
          </div>
      </div>

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
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const countdown = document.currentScript?.parentElement;
            if (countdown) {
              const target = new Date(countdown.dataset.countdownTarget ?? "").getTime();
              const grid = countdown.querySelector("[data-countdown-grid]");
              const doneMessage = countdown.querySelector("[data-countdown-done]");
              const units = {
                days: countdown.querySelector("[data-countdown-days]"),
                hours: countdown.querySelector("[data-countdown-hours]"),
                minutes: countdown.querySelector("[data-countdown-minutes]"),
                seconds: countdown.querySelector("[data-countdown-seconds]"),
              };

              if (Number.isNaN(target)) {
                console.error("Invalid countdown target date.");
              } else {
                const updateCountdown = () => {
                  const distance = target - Date.now();

                  if (distance <= 0) {
                    if (grid) grid.style.display = "none";
                    if (doneMessage) doneMessage.style.display = "";
                    clearInterval(interval);
                    return;
                  }

                  if (grid) grid.style.display = "";
                  if (doneMessage) doneMessage.style.display = "none";
                  if (units.days) units.days.textContent = String(Math.floor(distance / 86400000));
                  if (units.hours) units.hours.textContent = String(Math.floor(distance / 3600000) % 24).padStart(2, "0");
                  if (units.minutes) units.minutes.textContent = String(Math.floor(distance / 60000) % 60).padStart(2, "0");
                  if (units.seconds) units.seconds.textContent = String(Math.floor(distance / 1000) % 60).padStart(2, "0");
                };

                const interval = setInterval(updateCountdown, 1000);
                updateCountdown();
              }
            }
          `,
        }}
      />
    </section>
  );
}