"use client";

import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import Image from "next/image";

const ProfileScreen: React.FC = () => {
  const { profile } = useGlobalStore();

  return (
    <div className="items-center w-full px-5 py-10">
      <div className="bg-[#FFF0E5F0] flex flex-col items-center rounded-[30px] border-bronze border-4 pt-[30px] pb-10 px-[10px]">
        <div className="font-vidaloka text-[29px] leading-[1.1em] uppercase font-medium">
          Bride & Groom
        </div>
        <div className="mt-6 text-xs text-center font-caudex">
          Assalamualaikum Wr. Wb.
          <br />
          Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri
          kami:
        </div>

        {/* START::CPW */}
        <Image
          src="/images/gallery/biru-cpw.png"
          alt="biru-cpw"
          width={260}
          height={0}
          className="w-[60%] h-auto rounded-full my-6 border-4 border-chocolate"
        />
        <div className="font-imperial-script text-[49px] leading-[1em]">
          {profile.cpw.shortName}
        </div>
        <div className="font-zen-antique text-[20px]">
          {profile.cpw.fullName}
        </div>
        <p className="mt-4 text-xs text-center font-caudex">
          Putri kedua dari
          <br />
          Bapak {profile.cpw.father} &amp; Ibu {profile.cpw.mother}
        </p>
        {/* END::CPW */}

        <div className="mt-6 font-vidaloka text-[69px] leading-[0.9em] font-medium">
          &
        </div>

        {/* START::CPP */}
        <Image
          src="/images/gallery/biru-cpp.png"
          alt="biru-cpp"
          width={260}
          height={0}
          className="w-[60%] h-auto rounded-full my-6 border-4 border-chocolate"
        />
        <div className="font-imperial-script text-[49px] leading-[1em]">
          {profile.cpp.shortName}
        </div>
        <div className="font-zen-antique text-[20px]">
          {profile.cpp.fullName}
        </div>
        <p className="mt-4 text-xs text-center font-caudex">
          Putra kedua dari
          <br />
          Bapak {profile.cpp.father} &amp; Ibu {profile.cpp.mother}
        </p>
        {/* END::CPP */}
      </div>
    </div>
  );
};

export default ProfileScreen;
