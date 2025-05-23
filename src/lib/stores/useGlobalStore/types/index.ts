interface BrideProfile {
  shortName: string;
  fullName: string;
  father: string;
  mother: string;
}

interface States {
  isOpen: boolean;
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
}

export default interface UseGlobalStore extends States, Mutations {}
