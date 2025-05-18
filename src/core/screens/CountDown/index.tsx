"use client";

import React from "react";
import dayjs from "@inv/lib/utils/dayjs";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";

const CountDownScreen: React.FC = () => {
  const { weddingDate } = useGlobalStore();
  const [{ day, hour, minute, second }, setDate] = React.useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = dayjs(weddingDate);
      setDate({
        day: date.diff(now, "day"),
        hour: date.diff(now, "hour") % 24,
        minute: date.diff(now, "minute") % 60,
        second: date.diff(now, "second") % 60,
      });
    }, 1_000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-[570px] bg-[url('/images/gallery/2.jpg')] bg-cover">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.6] bg-[linear-gradient(180deg,_#ffffff00_20%,_#000000_100%)]"></div>
      <div className="relative h-full flex flex-col items-center justify-end pb-[70px] z-10 text-white">
        <div className="font-vidaloka text-[22px] uppercase font-medium">
          Counting The Days
        </div>
        <div className="flex items-center">
          {[
            [day, "Hari"],
            [hour, "Jam"],
            [minute, "Menit"],
            [second, "Detik"],
          ].map(([item, prefix], i) => (
            <div key={i} className="py-5 px-[26px] text-center">
              <div className="font-aboreto text-[30px]">{item}</div>
              <div className="font-aboreto text-[8px] uppercase">{prefix}</div>
            </div>
          ))}
        </div>
        <button className="px-5 py-[10px] uppercase rounded-full bg-khaki font-xiaowei text-[15px] leading-[1]">
          Save The Date
        </button>
      </div>
    </div>
  );
};

export default CountDownScreen;
