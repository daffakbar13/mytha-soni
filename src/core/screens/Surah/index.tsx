import Image from "next/image";

import { motion } from "framer-motion";

const SurahScreen: React.FC = () => {
  return (
    <section className="w-full bg-linen">
      <div className="flex flex-col items-center px-[20px] pb-[46px]">
        <motion.div
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <Image
            src="/images/gallery/2.jpg"
            alt="gallery-1"
            width={320}
            height={0}
            className="w-full h-auto mt-[60px] rounded-[10px]"
          />
          <Image
            src="/images/dera.png"
            alt="flower"
            width={180}
            height={0}
            className="absolute z-20 h-auto -top-2 -right-20"
          />
          <Image
            src="/images/dera.png"
            alt="flower"
            width={180}
            height={0}
            className="absolute z-20 h-auto -bottom-20 -left-20 scale-x-[-1]"
          />
        </motion.div>
        <motion.p
          initial={{ translateX: 100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[25px] font-cinzel uppercase font-medium mt-6"
        >
          We Found Love
        </motion.p>
        <motion.article
          initial={{ translateX: -100 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xs text-center font-gilda"
        >
          “Dan diantara tanda-tanda kekuasaanNya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikanNya diantaramu rasa kasih dan sayang.
          <br />
          Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
          bagi kaum yang berpikir.”
          <br />
          <br />
          (Qs. Ar. Rum (30) : 21)
        </motion.article>
      </div>
    </section>
  );
};

export default SurahScreen;
