"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
const WishesScreen: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  const duration = 1.2;

  return (
    <section className="relative bg-[url('/images/couple-garden.jpg')] px-10 pb-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.42] bg-linen"></div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration }}
        className="absolute z-20 -top-2 -right-38 rotate-[326deg]"
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
        className="absolute z-20 top-2 -left-38 rotate-[26deg] scale-x-[-1]"
      >
        <Image
          src="/images/dera.png"
          alt="flower"
          width={210}
          height={0}
          className="h-auto"
        />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="w-[76%]"
        >
          <Image
            src="/images/logo-nama.png"
            alt="logo-nama"
            width={180}
            height={0}
            className="w-full h-auto mt-2"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
          className="font-vidaloka text-[35px] uppercase"
        >
          Best Wishes
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
          className="text-xs font-caudex"
        >
          Sampaikan doa dan ucapan terbaik Anda
        </motion.div>
        <motion.form
          initial={{ translateY: 70 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
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
        </motion.form>
      </div>
    </section>
  );
};

export default WishesScreen;
