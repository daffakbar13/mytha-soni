"use client";

import React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import type PhotoGalleryModalProps from "./types";

const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = (props) => {
  const { images, currentIndex, isOpen, onClose, onPrev, onNext } = props;

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-gray-300"
        aria-label="Previous"
      >
        <ChevronLeft size={48} />
      </button>

      <Image
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt={`Preview ${currentIndex + 1}`}
        width={600}
        height={0}
        className="w-full h-auto rounded-lg shadow-lg"
      />

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300"
        aria-label="Next"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default PhotoGalleryModal;
