"use client";

import { TwistyPlayer } from "cubing/twisty";
import { useEffect, useRef } from "react";

type Props = {
  move?: string;
  solve?: string;
  scramble?: string;
  visualization ?: "2D" | "3D";
  replayKey?: number;
  playKey?: number;
};

export const CubeViewer = ({
  move,
  solve,
  scramble,
  replayKey,
  visualization,
  playKey,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<TwistyPlayer | null>(null);

  /* ---------- init / reset ---------- */
  useEffect(() => {
    if (!containerRef.current) return;

    const player = new TwistyPlayer({
      puzzle: "3x3x3",
      alg: "",
      visualization: visualization || "3D",
      background: "none",
      controlPanel: "none",
      experimentalSetupAlg: scramble || "x2", 
    });

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(player);
    playerRef.current = player;

    return () => {
      player.remove();
      playerRef.current = null;
    };
  }, [scramble, replayKey , visualization]);

  /* ---------- single move mode ---------- */
  useEffect(() => {
    if (!playerRef.current) return;
    if (!move) return;

    playerRef.current.alg = move;
    playerRef.current.play();
  }, [move, replayKey]);

  /* ---------- solve mode ---------- */
  useEffect(() => {
    if (!playerRef.current) return;
    if (!solve) return;
    if (!playKey || playKey === 0) return;

    playerRef.current.alg = solve;
    playerRef.current.play();
  }, [solve, playKey]);

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
        className="
  aspect-square w-full
  max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-full
  rounded-xl overflow-hidden
  border border-white/10
  bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60
  backdrop-blur-md
  flex items-center justify-center
"
      />
    </div>
  );
};