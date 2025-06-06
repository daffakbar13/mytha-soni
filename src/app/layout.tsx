import "./globals.css";
import RootLayout from "@inv/core/layout/RootLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mytha & Soni",
  description: "The Wedding of Mytha & Soni",
  keywords: [
    "wedding",
    "Mytha and Soni",
    "wedding invitation",
    "wedding website",
    "Mytha",
    "Soni",
  ],
  authors: [
    { name: "Daffa Akbar", url: "https://linkedin.com/in/daffa-raihan-akbar" },
  ],
  creator: "Daffa Akbar",
  openGraph: {
    title: "Mytha & Soni - Wedding Invitation",
    description:
      "You're invited to our special day! Tap to view the details ❤️",
    url: "https://your-wedding-site.com",
    siteName: "Mytha & Soni Wedding",
    images: [
      {
        url: "https://mytha-soni.vercel.app/images/gallery/1.jpg",
        width: 1200,
        height: 630,
        alt: "Mytha & Soni Wedding Invitation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mytha & Soni - Wedding Invitation",
    description:
      "You're invited to our special day! Tap to view the details ❤️",
    images: ["https://mytha-soni.vercel.app/images/gallery/1.jpg"],
  },
  icons: {
    icon: "/images/gallery/1.jpg",
    shortcut: "/images/gallery/1.jpg",
    apple: "/images/gallery/1.jpg",
  },
};

export default RootLayout;
