"use client";

import React from "react";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import dayjs from "@inv/lib/utils/dayjs";
import Image from "next/image";
import Card from "@inv/core/components/Card";

import { motion } from "framer-motion";

const WeddingEventScreen: React.FC = () => {
  const { weddingDate, weddingAddress } = useGlobalStore();
  const duration = 1.2;

  return (
    <section className="w-full bg-[radial-gradient(at_center_center,_#BF7F81_0%,_#7C2527_100%)] py-10 px-5">
      <Card
        className="bg-[url('/images/parallax.jpg')] bg-cover pb-[90px]"
        bodyClassName="flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
          className="w-[76%] mt-2"
        >
          <Image
            src="/images/logo-nama.png"
            alt="logo-nama"
            width={180}
            height={0}
            className="w-full h-auto"
          />
        </motion.div>
        <motion.p
          initial={{ translateY: -70 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-vidaloka text-[25px] leading-[1.1em] uppercase"
        >
          Wedding Event
        </motion.p>
        <motion.p
          initial={{ translateX: -50 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="font-caudex text-[12px] leading-[1.6em] mt-4"
        >
          InsyaAllah akan dilaksanakan pada:
        </motion.p>
        <motion.p
          initial={{ translateX: 50 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="font-imperial-script text-[49px]"
        >
          {dayjs(weddingDate).format("dddd")}
        </motion.p>
        <motion.p
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
          className="font-aboreto text-[32px] text-bronze"
        >
          {dayjs(weddingDate).format("DD . MM . YYYY")}
        </motion.p>
        <motion.p
          initial={{ translateY: -25 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-vidaloka text-[25px] text-bronze uppercase mt-8"
        >
          Akad Nikah
        </motion.p>
        <motion.p
          initial={{ translateY: 25 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-caudex text-[15px]"
        >
          Pukul 08.00 WIB - 10.00 WIB
        </motion.p>
        <div className="flex items-center w-[70%] gap-2 my-8">
          <motion.hr
            initial={{ translateX: -50 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration }}
            className="grow"
          />
          <motion.i
            initial={{ scale: 2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration }}
            className="simple-line-icons icon-diamond"
          />
          <motion.hr
            initial={{ translateX: 50 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration }}
            className="grow"
          />
        </div>
        <motion.p
          initial={{ translateY: -25 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-vidaloka text-[25px] text-bronze uppercase"
        >
          Resepsi Nikah
        </motion.p>
        <motion.p
          initial={{ translateY: 25 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-caudex text-[15px]"
        >
          Pukul 10.00 WIB - Selesai
        </motion.p>
        <motion.i
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
          aria-hidden="true"
          className="my-8 text-4xl simple-line-icons icon-location-pin"
        />
        <motion.p
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-xiaowei text-[14px] text-center w-[70%]"
        >
          Bertempat di:
          <br />
          <strong>Kediaman Mempelai Wanita</strong>
          <br />
          {weddingAddress}
        </motion.p>
      </Card>
    </section>
  );
};

export default WeddingEventScreen;
