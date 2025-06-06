import { create } from "zustand";

import type UseGalleryStore from "./types";

const useGalleryStore = create<UseGalleryStore>((set) => ({
  images: Array.from({ length: 12 }, (_, i) => `/images/gallery/${i + 1}.jpg`),
  previewIndex: 0,
  isModalPreviewOpen: false,
  nextPreview() {
    set((s) => {
      let next = 0;
      if (s.previewIndex < s.images.length - 1) {
        next = s.previewIndex + 1;
      }
      return { previewIndex: next };
    });
  },
  prevPreview() {
    set((s) => {
      let prev = s.images.length - 1;
      if (s.previewIndex > 0) {
        prev = s.previewIndex - 1;
      }
      return { previewIndex: prev };
    });
  },
  toggleModalPreview(index) {
    set((s) => ({
      isModalPreviewOpen: !s.isModalPreviewOpen,
      ...(typeof index == "number" && {
        previewIndex: index,
      }),
    }));
  },
}));

export default useGalleryStore;
