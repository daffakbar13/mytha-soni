"use client";

import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import Image from "next/image";

import { motion } from "framer-motion";

const ProfileScreen: React.FC = () => {
  const { profile } = useGlobalStore();
  const duration = 1.2;

  return (
    <section className="items-center w-full px-5 py-10">
      <div className="bg-[#FFF0E5F0] flex flex-col items-center rounded-[30px] border-bronze border-4 pt-[30px] pb-10 px-[10px]">
        <motion.p
          initial={{ translateX: 50 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="font-vidaloka text-[29px] leading-[1.1em] uppercase font-medium"
        >
          Bride & Groom
        </motion.p>
        <motion.p
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="mt-6 text-xs text-center font-caudex"
        >
          Assalamualaikum Wr. Wb.
          <br />
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri
          kami:
        </motion.p>

        {/* START::CPW */}
        <motion.div
          initial={{ translateX: -200 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="w-[60%]"
        >
          <Image
            src="/images/gallery/biru-cpw.png"
            alt="biru-cpw"
            width={260}
            height={0}
            className="w-full h-auto my-6 border-4 rounded-full border-chocolate"
          />
        </motion.div>
        <motion.p
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="font-imperial-script text-[49px] leading-[1em]"
        >
          {profile.cpw.shortName}
        </motion.p>
        <motion.p
          initial={{ translateX: -100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="font-zen-antique text-[20px]"
        >
          {profile.cpw.fullName}
        </motion.p>
        <motion.p
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="mt-4 text-xs text-center font-caudex"
        >
          Putri pertama dari
          <br />
          Bapak {profile.cpw.father} &amp; Ibu {profile.cpw.mother}
        </motion.p>
        {/* END::CPW */}

        <div className="mt-6 font-vidaloka text-[69px] leading-[0.9em] font-medium">
          &
        </div>

        {/* START::CPP */}
        <motion.div
          initial={{ translateX: -200 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="w-[60%]"
        >
          <Image
            src="/images/gallery/biru-cpp.png"
            alt="biru-cpp"
            width={260}
            height={0}
            className="w-full h-auto my-6 border-4 rounded-full border-chocolate"
          />
        </motion.div>
        <motion.p
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="font-imperial-script text-[49px] leading-[1em]"
        >
          {profile.cpp.shortName}
        </motion.p>
        <motion.p
          initial={{ translateX: -100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="font-zen-antique text-[20px]"
        >
          {profile.cpp.fullName}
        </motion.p>
        <motion.p
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="mt-4 text-xs text-center font-caudex"
        >
          Putra kedua dari
          <br />
          Bapak {profile.cpp.father} &amp; Ibu {profile.cpp.mother}
        </motion.p>
        {/* END::CPP */}
      </div>
    </section>
  );
};

export default ProfileScreen;
