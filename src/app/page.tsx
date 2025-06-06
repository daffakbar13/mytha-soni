"use client";

import React from "react";
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
import Backsound from "@inv/core/components/Backsound";
import usePreloadVideo from "@inv/lib/hooks/usePreloadVideo";
import useFullScreen from "@inv/lib/hooks/useFullScreen";
import usePreloadAudio from "@inv/lib/hooks/usePreloadAudio";

const Page: NextPage = () => {
  const {
    isOpen,
    isVideoOpeningLoaded,
    isBacksoundLoaded,
    setIsVideoOpeningLoaded,
    setIsBacksoundLoaded,
  } = useGlobalStore();
  const isOpenAndReady = isOpen && isVideoOpeningLoaded && isBacksoundLoaded;

  useFullScreen();
  usePreloadVideo("/videos/opening.mp4", () => setIsVideoOpeningLoaded(true));
  usePreloadAudio("/audios/backsound.mp3", () => setIsBacksoundLoaded(true));

  return (
    <>
      {!isOpenAndReady && (
        <>
          <CoverScreen />
          <video
            src="/videos/opening.mp4"
            preload="auto"
            playsInline
            muted
            className="hidden"
          />
        </>
      )}
      {isOpenAndReady && (
        <main className="bg-[url('/images/parallax.jpg')] bg-cover w-full overflow-y-scroll overflow-x-hidden scrollbar-hide">
          <Backsound />
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
        </main>
      )}
    </>
  );
};

export default Page;
