"use client";

import React from "react";
import Image from "next/image";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";

import { motion } from "framer-motion";

const ClosingScreen: React.FC = () => {
  const { profile } = useGlobalStore();
  const duration = 1.2;

  return (
    <section className="relative bg-[url('/images/cover.jpg')] bg-cover px-10 pb-20 h-screen overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.82] bg-[linear-gradient(180deg,_#EBE5D700_0%,_#FFF0E5_53%)]"></div>
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
        >
          <Image
            src="/images/gallery/7.jpg"
            alt="logo-nama"
            width={200}
            height={340}
            className="w-auto h-[340px] mt-10 rounded-t-full border-5 border-maroon"
          />
        </motion.div>
        <motion.p
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="mt-6 text-sm text-center font-xiaowei"
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda
          berkenan hadir dan memberikan doa restunya untuk pernikahan kami.
        </motion.p>
        <motion.p
          initial={{ translateY: -100 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="mt-6 text-sm text-center font-xiaowei"
        >
          Atas doa &amp; restunya,kami ucapkan terima kasih.
        </motion.p>
        <motion.p
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="text-sm text-center font-vidaloka text-[31px] mt-4"
        >
          {profile.cpw.shortName} &amp; {profile.cpp.shortName}
        </motion.p>
      </div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration }}
        className="absolute z-20 -bottom-48 -right-22"
      >
        <Image
          src="/images/dera.png"
          alt="flower"
          width={210}
          height={0}
          className="h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration }}
        className="absolute z-20 -bottom-48 -left-22 scale-x-[-1]"
      >
        <Image
          src="/images/dera.png"
          alt="flower"
          width={210}
          height={0}
          className="h-auto"
        />
      </motion.div>
    </section>
  );
};

export default ClosingScreen;
