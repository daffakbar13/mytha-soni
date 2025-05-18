"use client";

import React from "react";
import Image from "next/image";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";

const LoveStoryScreen: React.FC = () => {
  const { loveStories } = useGlobalStore();

  return (
    <div className="relative bg-[url('/images/couple-garden.jpg')] px-10 py-10 pb-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.42] bg-linen"></div>
      <Image
        src="/images/dera.png"
        alt="flower"
        width={200}
        height={0}
        className="absolute z-20 h-auto -top-2 -right-20"
      />
      <div className="relative z-10">
        <p className="font-vidaloka text-[42px]">Love Story</p>
        <p className="font-vidaloka text-[12px]">
          Every Love Story Is Beautiful,
          <br />
          But Ours Is My Favorite.
        </p>
        <Image
          src={"/images/gallery/12.jpg"}
          alt={"gallery-1"}
          width={200}
          height={0}
          className="w-full h-auto mt-4 rounded-bl-none rounded-4xl"
        />
        {loveStories.map((l, i) => (
          <React.Fragment key={i}>
            <p className="font-xiaowei text-[35px] mt-6">{l.title}</p>
            <p className="mt-2 text-xs text-black font-caudex">
              {l.description}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LoveStoryScreen;
