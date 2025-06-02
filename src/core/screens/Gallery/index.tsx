import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const GalleryScreen: React.FC = () => {
  const duration = 1.2;

  return (
    <section className="flex flex-col items-center bg-white bg-[linear-gradient(123deg,_#000000C2_0%,_#7C2527_100%)] py-8 px-5">
      <motion.p
        initial={{ translateY: -100 }}
        whileInView={{ translateY: 0 }}
        transition={{ duration }}
        className="font-vidaloka text-[45px] text-white"
      >
        Our Gallery
      </motion.p>
      <motion.p
        initial={{ translateX: 100 }}
        whileInView={{ translateX: 0 }}
        transition={{ duration }}
        className="font-vidaloka text-[12px] text-white"
      >
        Constantly, consistently, continually, You.
      </motion.p>
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-2.5 mt-6">
        {Array.from(
          { length: 12 },
          (_, i) => `/images/gallery/${i + 1}.jpg`
        ).map((src, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration }}
          >
            <Image
              src={src}
              alt={src}
              width={160}
              height={0}
              className="w-full h-auto rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GalleryScreen;
