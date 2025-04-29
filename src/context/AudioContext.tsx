import React, { createContext, useContext, useRef, ReactNode } from "react";

const AudioContext = createContext<HTMLAudioElement | null>(null);

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio("/Strawberry.mp3"));

  const audio = audioRef.current;
  audio.loop = true;
  audio.volume = 0.3;

  return (
    <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>
  );
};

export const useAudio = (): HTMLAudioElement => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
