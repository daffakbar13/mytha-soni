"use client";

import { NextPage } from "next";
import ClosingScreen from "@inv/core/screens/ClosingScreen";
import CountDownScreen from "@inv/core/screens/CountDown";
import CoverScreen from "@inv/core/screens/Cover";
import GalleryScreen from "@inv/core/screens/Gallery";
import LoveStoryScreen from "@inv/core/screens/LoveStory";
import OpeningScreen from "@inv/core/screens/Opening";
import ProfileScreen from "@inv/core/screens/Profile";
import SurahScreen from "@inv/core/screens/Surah";
import WeddingEventScreen from "@inv/core/screens/WeddingEvent";
import WeddingGiftScreen from "@inv/core/screens/WeddingGift";
import WishesScreen from "@inv/core/screens/Wishes";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";

const Page: NextPage = () => {
  const { isOpen } = useGlobalStore();
  return (
    <>
      {!isOpen && <CoverScreen />}
      {isOpen && (
        <div className="bg-[url('/images/parallax.jpg')] bg-cover w-full overflow-y-scroll overflow-x-hidden">
          <OpeningScreen />
          <SurahScreen />
          <ProfileScreen />
          <CountDownScreen />
          <WeddingEventScreen />
          <GalleryScreen />
          <LoveStoryScreen />
          <WeddingGiftScreen />
          <WishesScreen />
          <ClosingScreen />
        </div>
      )}
    </>
  );
};

export default Page;
