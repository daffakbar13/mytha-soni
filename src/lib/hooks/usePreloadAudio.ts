import React from "react";

export default function usePreloadAudio(src: string, callback: () => void) {
  React.useEffect(() => {
    const audio = new Audio(src);
    audio.preload = "auto";

    audio.addEventListener("canplaythrough", callback);
    audio.load();

    return () => {
      audio.removeEventListener("canplaythrough", callback);
    };
  }, []);
}
