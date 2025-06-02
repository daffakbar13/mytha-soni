"use client";

import React from "react";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import dayjs from "@inv/lib/utils/dayjs";
import Image from "next/image";
import Card from "@inv/core/components/Card";

const WeddingEventScreen: React.FC = () => {
  const { weddingDate, weddingAddress } = useGlobalStore();

  return (
    <div className="w-full bg-[radial-gradient(at_center_center,_#BF7F81_0%,_#7C2527_100%)] py-10 px-5">
      <Card
        className="bg-[url('/images/parallax.jpg')] bg-cover pb-[90px]"
        bodyClassName="flex flex-col items-center"
      >
        <Image
          src="/images/logo-nama.png"
          alt="logo-nama"
          width={180}
          height={0}
          className="w-[76%] h-auto mt-2"
        />
        <p className="font-vidaloka text-[25px] leading-[1.1em] uppercase">
          Wedding Event
        </p>
        <p className="font-caudex text-[12px] leading-[1.6em] mt-4">
          InsyaAllah akan dilaksanakan pada:
        </p>
        <p className="font-imperial-script text-[49px]">
          {dayjs(weddingDate).format("dddd")}
        </p>
        <p className="font-aboreto text-[32px] text-bronze">
          {dayjs(weddingDate).format("DD . MM . YYYY")}
        </p>
        <p className="font-vidaloka text-[25px] text-bronze uppercase mt-8">
          Akad Nikah
        </p>
        <p className="font-caudex text-[15px]">Pukul 08.00 WIB - 10.00 WIB</p>
        <div className="flex items-center w-[70%] gap-2 my-8">
          <hr className="grow" />
          <i aria-hidden="true" className="simple-line-icons icon-diamond"></i>
          <hr className="grow" />
        </div>
        <p className="font-vidaloka text-[25px] text-bronze uppercase">
          Resepsi Nikah
        </p>
        <p className="font-caudex text-[15px]">Pukul 10.00 WIB - Selesai</p>
        <i
          aria-hidden="true"
          className="my-8 text-4xl simple-line-icons icon-location-pin"
        ></i>
        <p className="font-xiaowei text-[14px] text-center w-[70%]">
          Bertempat di:
          <br />
          <strong>Kediaman Mempelai Wanita</strong>
          <br />
          {weddingAddress}
        </p>
      </Card>
    </div>
  );
};

export default WeddingEventScreen;
