"use client";

import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import dayjs from "@inv/lib/utils/dayjs";
import Image from "next/image";

const OpeningScreen: React.FC = () => {
  const { profile, weddingDate } = useGlobalStore();

  return (
    <div className="bg-[url('/images/opening.jpg')] flex flex-col items-center py-[30px] px-[20px] w-full h-screen bg-cover bg-center">
      <Image
        src="/images/logo-nama.png"
        alt="logo-nama"
        width={190}
        height={0}
        priority
        className="w-[72%] h-auto mt-[90px]"
      />
      <div className="text-xs font-cinzel tracking-[2px] font-medium mt-6">
        THE WEDDING OF
      </div>
      <div className="font-vidaloka text-[28px] leading-[0.6em] uppercase font-medium mt-6">
        {profile.cpw.shortName} & {profile.cpp.shortName}
      </div>
      <div className="text-xs font-cinzel tracking-[3px] font-medium mt-5">
        {dayjs(weddingDate).format("DD . MM . YYYY")}
      </div>
    </div>
  );
};

export default OpeningScreen;
