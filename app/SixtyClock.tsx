"use client";

import { useEffect, useMemo, useState } from "react";

type SecondMode = "tick" | "off";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function map00toMax(v: number, max: number) {
  // 00 -> max, 01.. -> itself
  return v === 0 ? max : v;
}

export default function SixtyClock() {
  const [now, setNow] = useState(() => new Date());
  const [secondMode, setSecondMode] = useState<SecondMode>("tick");

  useEffect(() => {
    // 250ms: keeps second underline “snappy” and avoids visible drift.
    const id = window.setInterval(() => setNow(new Date()), 250);
    return () => window.clearInterval(id);
  }, []);

  const hours24 = now.getHours(); // 0..23
  const minutes = now.getMinutes(); // 0..59
  const seconds = now.getSeconds(); // 0..59

  const hourMark = map00toMax(hours24, 24); // 24-hour, 0 -> 24
  const minuteMark = map00toMax(minutes, 60); // 0 -> 60
  const secondMark = seconds; // 0 -> 59

  const cells = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="relative">
        <div className="relative w-55 sm:w-65 md:w-75 aspect-9/16">
          <div className="flex h-full w-full flex-col items-center justify-center px-6 py-8">
            <div className="grid grid-cols-5 gap-x-1 gap-y-2">
              {cells.map((v) => {
                const isHour = v === hourMark;
                const isMinute = v === minuteMark;
                const isSecond = secondMode === "tick" && v === secondMark;

                const text = isHour ? `[${pad2(v)}]` : pad2(v);

                return (
                  <span
                    key={v}
                    className={[
                      "inline-flex w-[4ch] justify-center font-mono italic text-[12px] sm:text-[14px] md:text-[16px] leading-none tabular-nums select-none",
                      "text-amber-700/70",
                      isMinute ? "text-yellow-300 font-semibold" : "",
                      isSecond
                        ? "underline decoration-amber-300/90 underline-offset-[6px]"
                        : "",
                      isHour ? "text-yellow-300 font-semibold" : "",
                    ].join(" ")}
                    aria-label={`${v}`}
                  >
                    {text}
                  </span>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


