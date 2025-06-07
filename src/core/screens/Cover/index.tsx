"use client";

import React from "react";
import Spinner from "@inv/core/components/Spinner";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import { useParams } from "next/navigation";

const CoverScreen: React.FC = () => {
  const { guestName, isOpen, profile, openInvitation, setGuestName } =
    useGlobalStore();
  const { name = "Tamu-Undangan" } = useParams();

  React.useEffect(() => {
    setGuestName(name);
  }, [name]);

  return (
    <section className="bg-[url('/images/cover.jpg')] w-full bg-cover bg-center flex flex-col items-center">
      <div className="mt-20 bg-[url('/images/gallery/11.jpg')] w-[50%] h-[280px] bg-cover rounded-full border-1 border-chocolate"></div>
      <div className="mt-3 font-cinzel uppercase tracking-[2px] leading-[3.2em] text-[12px]">
        Wedding Invitation
      </div>
      <div className="font-vidaloka text-[37px] leading-[1em]">
        {profile.cpw.shortName} & {profile.cpp.shortName}
      </div>
      <div className="mt-[30px] text-[13px]">Kepada Yth.</div>
      <div className="font-belleza text-[18px]">{guestName}</div>
      <button
        className="mt-[10px] px-6 py-3 flex items-center gap-2 uppercase rounded-full bg-maroon font-xiaowei text-khaki text-[12px] leading-[1]"
        onClick={openInvitation}
      >
        Buka Undangan {isOpen && <Spinner />}
      </button>
    </section>
  );
};

export default CoverScreen;
