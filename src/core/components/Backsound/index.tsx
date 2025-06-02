import React from "react";

const Backsound: React.FC = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.error("Autoplay failed because browser's restriction:", err);
        });
      }
    }
  }, []);

  return <audio ref={audioRef} src="/audios/backsound.mp3" loop />;
};

export default Backsound;
