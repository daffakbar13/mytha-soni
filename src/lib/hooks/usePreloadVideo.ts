import React from "react";

export default function usePreloadVideo(src: string, callback: () => void) {
  React.useEffect(() => {
    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";
    video.load();

    video.addEventListener("canplaythrough", callback);

    return () => {
      video.removeEventListener("canplaythrough", callback);
    };
  }, []);
}
