import React, { useRef, useState } from "react";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayback = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
      audioRef.current.volume = 0.1;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className=" absolute z-20 w-full flex">
      {!isPlaying && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-[120px] mx-auto"
          onClick={startPlayback}
        >
          Start Music
        </button>
      )}
      {isPlaying && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-[120px] mx-auto"
          onClick={toggleMute}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      )}
      <audio ref={audioRef} loop>
        <source src="/backgroundAudio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
