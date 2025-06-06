"use client";

import React from "react";
import Card from "@inv/core/components/Card";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import Image from "next/image";

import { motion } from "framer-motion";

const WeddingGiftScreen: React.FC = () => {
  const { bankList } = useGlobalStore();
  const duration = 1.2;

  return (
    <section className="flex flex-col items-center bg-white bg-[radial-gradient(at_center_center,_#BF7F81_0%,_#7C2527_100%)] py-8 px-5">
      <Card className="px-3 py-8 pb-10 rounded-4xl">
        <motion.p
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="font-vidaloka text-[26px] text-center"
        >
          Wedding Gift
        </motion.p>
        <motion.p
          initial={{ translateX: -50 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration }}
          className="mt-4 text-xs text-center font-caudex"
        >
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          secara cashless.
        </motion.p>
        <div className="px-3 bg-white border-[1px] rounded-2xl mt-4">
          {bankList.map((b, i) => (
            <React.Fragment key={i}>
              {!!i && <hr />}
              <div className="py-3">
                <motion.div
                  initial={{ translateX: 50 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ duration }}
                  className="flex justify-end"
                >
                  <Image
                    src={b.bankImage}
                    alt={b.bankName}
                    width={90}
                    height={35}
                    className="w-auto h-6"
                  />
                </motion.div>
                <motion.p
                  initial={{ translateX: -40 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ duration }}
                  className="text-xs"
                >
                  {b.bankName}
                </motion.p>
                <motion.p
                  initial={{ translateX: -30 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ duration }}
                  className="text-xs"
                >
                  {b.accountNumber}
                </motion.p>
                <motion.p
                  initial={{ translateX: -20 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ duration }}
                >
                  <strong className="text-xs">{b.accountName}</strong>
                </motion.p>
                <motion.button
                  initial={{ translateX: -20 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ duration }}
                  className="button"
                >
                  <span>Salin {b.isBank ? "Nomor" : "Alamat"}</span>
                  <Image
                    src="/images/copy.png"
                    alt="copy"
                    width={12}
                    height={12}
                  />
                </motion.button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default WeddingGiftScreen;
