"use client";

import { TwistyPlayer } from "cubing/twisty";
import { useEffect, useRef } from "react";

type Props = {
  move?: string;
  replayKey?: number;
};

export const CubeViewer = ({ move, replayKey }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<TwistyPlayer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new TwistyPlayer({
      puzzle: "3x3x3",
      alg: "",
      visualization: "3D",
      background: "none",
      controlPanel: "none",
      experimentalSetupAlg: "x2",
    });

    containerRef.current.appendChild(player);
    playerRef.current = player;

    return () => {
      player.remove();
    };
  }, []);

  useEffect(() => {
    if (playerRef.current && move) {
      playerRef.current.alg = move;
      playerRef.current.play();
    }
  }, [move, replayKey]);

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
             className="h-[300px] w-full rounded-xl overflow-hidden lg:max-w-full max-w-[320px] sm:max-w-[360px] 
border border-white/10
bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60
backdrop-blur-md
flex items-center justify-center"
      />
    </div>
  );
};
