interface BrideProfile {
  shortName: string;
  fullName: string;
  father: string;
  mother: string;
}

interface States {
  isOpen: boolean;
  isVideoOpeningLoaded: boolean;
  isBacksoundLoaded: boolean;
  profile: {
    cpw: BrideProfile;
    cpp: BrideProfile;
  };
  weddingDate: Date;
  weddingAddress: string;
  bankList: Array<{
    accountNumber: string;
    accountName: string;
    bankName: string;
    bankImage: string;
    isBank: boolean;
  }>;
  loveStories: Array<{
    title: string;
    description: string;
  }>;
}

interface Mutations {
  openInvitation(): void;
  setIsVideoOpeningLoaded(value: boolean): void;
  setIsBacksoundLoaded(value: boolean): void;
  handleFullscreen(): void;
  normalizeGuestName(param: string | string[]): string;
}

export default interface UseGlobalStore extends States, Mutations {}
