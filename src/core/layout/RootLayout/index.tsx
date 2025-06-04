"use client";

import Head from "next/head";
import dynamic from "next/dynamic";

import type RootLayoutProps from "./types";

const ReactQueryProvider = dynamic(
  () => import("@inv/core/providers/ReactQueryProvider")
);
const MainLayout = dynamic(() => import("../MainLayout"));

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;
  return (
    <html lang={"id"}>
      <Head>
        <link
          rel="preload"
          href="/videos/opening.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/audios/backsound.mp3"
          as="audio"
          type="audio/mp3"
        />
      </Head>

      <body>
        <ReactQueryProvider>
          <MainLayout>{children}</MainLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
