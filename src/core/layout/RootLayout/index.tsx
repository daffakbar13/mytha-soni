"use client";

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
      <body>
        <ReactQueryProvider>
          <MainLayout>{children}</MainLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
