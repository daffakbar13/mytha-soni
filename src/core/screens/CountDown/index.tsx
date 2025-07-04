"use client";

import React from "react";
import dayjs from "@inv/lib/utils/dayjs";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";

import { motion } from "framer-motion";

const CountDownScreen: React.FC = () => {
  const { weddingDate, generateGoogleCalendarLink } = useGlobalStore();
  const [{ day, hour, minute, second }, setDate] = React.useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const duration = 1.2;

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
    <section className="relative w-full h-[570px] bg-[url('/images/gallery/1.jpg')] bg-cover">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.6] bg-[linear-gradient(180deg,_#ffffff00_20%,_#000000_100%)]"></div>
      <div className="relative h-full flex flex-col items-center justify-end pb-[70px] z-10 text-white">
        <motion.p
          initial={{ translateY: -100 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-vidaloka text-[22px] uppercase font-medium"
        >
          Counting The Days
        </motion.p>
        <div className="flex items-center">
          {[
            [day, "Hari"],
            [hour, "Jam"],
            [minute, "Menit"],
            [second, "Detik"],
          ].map(([item, prefix], i) => (
            <div key={i} className="py-5 px-[26px] text-center">
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration }}
                className="font-aboreto text-[30px]"
              >
                {item}
              </motion.p>
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration }}
                className="font-aboreto text-[8px] uppercase"
              >
                {prefix}
              </motion.p>
            </div>
          ))}
        </div>
        <motion.button
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="px-5 py-[10px] uppercase rounded-full bg-khaki font-xiaowei text-[15px] leading-[1]"
          onClick={generateGoogleCalendarLink}
        >
          Save The Date
        </motion.button>
      </div>
    </section>
  );
};

export default CountDownScreen;
