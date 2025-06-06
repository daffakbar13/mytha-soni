"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import PhotoGalleryModal from "@inv/core/components/PhotoGalleryModal";
import useGalleryStore from "@inv/lib/stores/useGalleryStore";

const GalleryScreen: React.FC = () => {
  const {
    images,
    previewIndex,
    isModalPreviewOpen,
    nextPreview,
    prevPreview,
    toggleModalPreview,
  } = useGalleryStore();
  const duration = 1.2;

  React.useEffect(() => {
    useGalleryStore.setState(useGalleryStore.getInitialState());

    return () => {
      useGalleryStore.setState(useGalleryStore.getInitialState());
    };
  }, []);

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
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration }}
            onClick={() => toggleModalPreview(i)}
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
      <PhotoGalleryModal
        images={images}
        isOpen={isModalPreviewOpen}
        currentIndex={previewIndex}
        onClose={toggleModalPreview}
        onNext={nextPreview}
        onPrev={prevPreview}
      />
    </section>
  );
};

export default GalleryScreen;
