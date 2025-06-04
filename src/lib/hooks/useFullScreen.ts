import React from "react";
import useGlobalStore from "../stores/useGlobalStore";

export default function useFullScreen() {
  const { openInvitation } = useGlobalStore();

  React.useEffect(() => {
    const handler = () => {
      const isFullScreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );

      if (!isFullScreen) {
        openInvitation();
      }
    };
    const listeners = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange",
    ];

    listeners.forEach((listener) => {
      document.addEventListener(listener, handler);
    });

    return () => {
      listeners.forEach((listener) => {
        document.removeEventListener(listener, handler);
      });
    };
  }, []);
}
