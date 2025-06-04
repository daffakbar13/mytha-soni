"use client";

import Image from "next/image";
import dayjs from "@inv/lib/utils/dayjs";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";

import { motion } from "framer-motion";

const OpeningScreen: React.FC = () => {
  const { profile, weddingDate } = useGlobalStore();
  const delay = 11;
  const duration = 1.2;
  const scaleFrom = { scale: 0.3 };
  const scaleTo = { scale: 1 };

  return (
    <section className="relative bg-[url('/images/opening.jpg')] py-[30px] px-[20px] w-full aspect-[9/16] bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          initial={scaleFrom}
          whileInView={scaleTo}
          transition={{ duration }}
          className="w-[72%]"
        >
          <Image
            src="/images/logo-nama.png"
            alt="logo-nama"
            width={190}
            height={0}
            priority
            className="w-full h-auto mt-[90px]"
          />
        </motion.div>
        <motion.p
          initial={scaleFrom}
          whileInView={scaleTo}
          transition={{ duration }}
          className="text-xs font-cinzel tracking-[2px] font-medium mt-6"
        >
          THE WEDDING OF
        </motion.p>
        <motion.p
          initial={scaleFrom}
          whileInView={scaleTo}
          transition={{ duration }}
          className="font-vidaloka text-[28px] leading-[0.6em] uppercase font-medium mt-6"
        >
          {profile.cpw.shortName} & {profile.cpp.shortName}
        </motion.p>
        <motion.p
          initial={scaleFrom}
          whileInView={scaleTo}
          transition={{ duration }}
          className="text-xs font-cinzel tracking-[3px] font-medium mt-5"
        >
          {dayjs(weddingDate).format("DD . MM . YYYY")}
        </motion.p>
      </motion.div>
      <video
        autoPlay
        muted
        playsInline
        width="600"
        className="absolute top-0 bottom-0 left-0 right-0 rounded-md shadow-md"
      >
        <source src="/videos/opening.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default OpeningScreen;
