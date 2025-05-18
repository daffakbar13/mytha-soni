"use client";

import React from "react";
import Image from "next/image";

const WishesScreen: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative bg-[url('/images/couple-garden.jpg')] px-10 pb-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.42] bg-linen"></div>
      <Image
        src="/images/dera.png"
        alt="flower"
        width={210}
        height={0}
        className="absolute z-20 h-auto -top-2 -right-38 rotate-[326deg]"
      />
      <Image
        src="/images/dera.png"
        alt="flower"
        width={210}
        height={0}
        className="absolute z-20 h-auto top-2 -left-38 rotate-[26deg] scale-x-[-1]"
      />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/logo-nama.png"
          alt="logo-nama"
          width={180}
          height={0}
          className="w-[76%] h-auto mt-2"
        />
        <p className="font-vidaloka text-[35px] uppercase">Best Wishes</p>
        <p className="text-xs font-caudex">
          Sampaikan doa dan ucapan terbaik Anda
        </p>
        <form
          className="w-full mt-6 bg-white rounded-lg"
          onSubmit={handleSubmit}
        >
          <p className="py-3 text-sm text-center">0 Comment</p>
          <hr />
          <div className="flex flex-col p-4 gap-3">
            <input type="text" name="name" id="name" placeholder="Nama" />
            <textarea
              name="description"
              id="description"
              placeholder="Ucapan"
            ></textarea>
            <button className="button">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishesScreen;
