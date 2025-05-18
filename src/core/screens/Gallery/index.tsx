import React from "react";
import Image from "next/image";

const GalleryScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white bg-[linear-gradient(123deg,_#000000C2_0%,_#7C2527_100%)] py-8 px-5">
      <p className="font-vidaloka text-[45px] text-white">Our Gallery</p>
      <p className="font-vidaloka text-[12px] text-white">
        Constantly, consistently, continually, You.
      </p>
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-2.5 mt-6">
        {Array.from(
          { length: 12 },
          (_, i) => `/images/gallery/${i + 1}.jpg`
        ).map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={src}
            width={160}
            height={0}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryScreen;
