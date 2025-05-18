"use client";

import React from "react";
import Card from "@inv/core/components/Card";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";
import Image from "next/image";

const WeddingGiftScreen: React.FC = () => {
  const { bankList } = useGlobalStore();

  return (
    <div className="flex flex-col items-center bg-white bg-[radial-gradient(at_center_center,_#BF7F81_0%,_#7C2527_100%)] py-8 px-5">
      <Card className="px-3 py-8 pb-10 rounded-4xl">
        <p className="font-vidaloka text-[26px] text-center">Wedding Gift</p>
        <p className="mt-4 text-xs text-center font-caudex">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
          jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
          secara cashless.
        </p>
        <div className="px-3 bg-white border-[1px] rounded-2xl mt-4">
          {bankList.map((b, i) => (
            <React.Fragment key={i}>
              {!!i && <hr />}
              <div className="py-3">
                <div className="flex justify-end">
                  <Image
                    src={b.bankImage}
                    alt={b.bankName}
                    width={90}
                    height={35}
                    className="w-auto h-6"
                  />
                </div>
                <p className="text-xs">{b.bankName}</p>
                <p className="text-xs">{b.accountNumber}</p>
                <p>
                  <strong className="text-xs">{b.accountName}</strong>
                </p>
                <button className="button">
                  <span>Salin {b.isBank ? "Nomor" : "Alamat"}</span>
                  <Image
                    src="/images/copy.png"
                    alt="copy"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default WeddingGiftScreen;
