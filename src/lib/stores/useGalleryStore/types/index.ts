interface States {
  images: string[];
  isModalPreviewOpen: boolean;
  previewIndex: number;
}

interface Mutations {
  toggleModalPreview(index?: number): void;
  nextPreview(): void;
  prevPreview(): void;
}

export default interface UseGalleryStore extends States, Mutations {}
