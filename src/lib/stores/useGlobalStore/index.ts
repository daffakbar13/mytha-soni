import { create } from "zustand";
import toast from "react-hot-toast";
import dayjs from "@inv/lib/utils/dayjs";

import type UseGlobalStore from "./types";

const useGlobalStore = create<UseGlobalStore>((set, get) => ({
  isOpen: false,
  isVideoOpeningLoaded: false,
  isBacksoundLoaded: false,
  async openInvitation() {
    const { handleFullscreen } = get();

    set((s) => {
      if (!s.isOpen) {
        handleFullscreen();
      }
      return { isOpen: !s.isOpen };
    });
  },
  setIsVideoOpeningLoaded(value) {
    set({ isVideoOpeningLoaded: value });
  },
  setIsBacksoundLoaded(value) {
    set({ isBacksoundLoaded: value });
  },
  handleFullscreen() {
    const elem = document.body;
    if (!elem) return;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ("webkitRequestFullscreen" in elem) {
      (elem as any).webkitRequestFullscreen();
    } else if ("mozRequestFullScreen" in elem) {
      (elem as any).mozRequestFullScreen();
    } else if ("msRequestFullscreen" in elem) {
      (elem as any).msRequestFullscreen();
    }
  },
  normalizeGuestName(param) {
    return decodeURIComponent(String(param)).replace(/-/g, " ");
  },
  profile: {
    cpp: {
      fullName: "Soni Firmansah",
      shortName: "Soni",
      father: "Saman",
      mother: "Mimi Arimi",
    },
    cpw: {
      fullName: "Mytha Haryani",
      shortName: "Mytha",
      father: "Aip",
      mother: "Tita Herawati",
    },
  },
  weddingDate: dayjs("2025-06-18").toDate(),
  weddingAddress: `
    Dsn Lebakwangi RT 06/RW 02,\n
    Desa mekarwangi,\n
    Kecamatan sukamantri,\n
    Kabupaten Ciamis
  `,
  bankList: [
    {
      accountNumber: "082214111612",
      accountName: "Soni",
      bankName: "Dana",
      bankImage: "/images/dana.png",
      isBank: true,
    },
    {
      accountNumber: "081223162205",
      accountName: "Mytha",
      bankName: "Dana",
      bankImage: "/images/dana.png",
      isBank: true,
    },
    {
      accountNumber:
        "Dsn Lebakwangi RT 02/RW 03, Desa mekarwangi, kecamatan sukamantri, kabupaten Ciamis",
      accountName: "Mytha",
      bankName: "Kirim Kado",
      bankImage: "/images/gift.png",
      isBank: false,
    },
  ],
  loveStories: [
    {
      title: "First Meet",
      description: `
        Tidak ada yang kebetulan di dunia ini. Semua sudah tersusun rapih oleh
        sang maha kuasa. Kita tidak bisa memilih kepada siapa kita akan jatuh
        cinta. Kami pertama kali bertemu pada tahun 2024, tidak ada yang
        pernah menyangka bahwa pertemuan itu membawa kami pada suatu ikatan
        cinta yang suci hari ini.
      `,
    },
    {
      title: "Relationship",
      description: `
        9 Desember 2024 kami berkomitmen untuk menjalin hubungan sebagai
        pasangan.
      `,
    },
    {
      title: "Married",
      description: `
        Tahun 2025 merupakan akhir dari perjalanan pencarian cinta sekaligus
        menjadi awal dari kehidupan yang baru. Kami memutuskan untuk
        melangsungkan pernikahan pada tanggal 18 Juni 2025. Kami akan memulai
        lembaran baru menjadi sebuah keluarga dalam kehidupan bersama.
        Percayalah, bukan bertemu lalu berjodoh tapi karena berjodoh lah maka
        kami dipertemukan, sebagaimana yang pernah dikatakan oleh Sayyidina
        Ali bin Abi Thalib &quot;Apa yang menjadi takdirmu akan menemukan
        jalannya untuk menemukanmu&quot;.
      `,
    },
  ],
  copyToClipboard(text) {
    return async () => {
      try {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
      } catch {
        toast.error("Failed to copy!");
      }
    };
  },
  generateGoogleCalendarLink() {
    const { weddingDate, weddingAddress } = get();
    const from = dayjs(weddingDate).format("YYYYMMDD");
    const to = dayjs(weddingDate).add(1, "d").format("YYYYMMDD");
    const details = {
      text: "Mytha & Soni's Wedding 💍",
      details: "Join us to celebrate the wedding of Mytha and Soni!",
      location: weddingAddress,
      dates: [from, to].join("/"),
    };
    const params = new URLSearchParams(details);
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&${params.toString()}`;

    window.open(url, "__blank");
  },
}));

export default useGlobalStore;
