"use client";

import { useState } from "react";
import data from "@/src/data/movementData.json";
import { CubeViewer } from "../elements/CubeViewer";

const MovementPage = () => {
  const [replayKey, setReplayKey] = useState(0);
  const [active, setActive] = useState<any>(null);
  const MOVES_DATA = data.MOVES_DATA;

  const groupedMoves = MOVES_DATA.reduce((acc: any, move: any) => {
    acc[move.type] = acc[move.type] || [];
    acc[move.type].push(move);
    return acc;
  }, {});

  return (
    <div className="min-h-screen text-slate-100 px-4 py-16 bg-[#020617]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Cube Movement System
          </h1>
          <p className="text-slate-400 mt-3">
            Interactive cube notation & algorithm reading
          </p>
        </div>

        {/* Layout */}
        <div
          className="
            grid gap-10
            lg:grid-cols-[420px_1fr]
            lg:h-[calc(100vh-220px)]
          "
        >
          {/* MOVE LIST */}
          <div
            className="
              space-y-10
              lg:overflow-y-auto
              lg:pr-3
              scrollbar-thin
              scrollbar-thumb-slate-700
              scrollbar-track-transparent
            "
          >
            {Object.entries(groupedMoves).map(([type, moves]: any) => (
              <div key={type}>
                <h3 className="text-lg font-bold text-sky-400 mb-4 uppercase">
                  {type}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {moves.map((move: any, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActive(move)}
                      className={`font-mono rounded-lg py-3 transition
                        ${
                          active?.symbol === move.symbol
                            ? "bg-sky-400 text-black"
                            : "bg-slate-800 hover:bg-slate-700"
                        }`}
                    >
                      {move.symbol}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DETAIL (Fixed on Desktop) */}
          <div className="lg:sticky lg:top-6 h-fit">
            {active ? (
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="text-4xl font-bold text-sky-400 font-mono">
                    {active.symbol}
                  </h2>

                  <button
                    onClick={() => setReplayKey((k) => k + 1)}
                    className="px-4 py-2 rounded-lg text-sm
                      bg-sky-500/10 text-sky-400
                      border border-sky-500/20 hover:bg-sky-500/20"
                  >
                    🔁 Repeat
                  </button>
                </div>

                <p className="text-lg mt-4">{active.name}</p>
                <p className="text-slate-400 mt-3">
                  {active.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    Axis: {active.axis}
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    Type: {active.type}
                  </div>
                </div>

                <div className="mt-8">
                  <CubeViewer move={active.move} replayKey={replayKey} />
                </div>
              </div>
            ) : (
              <div className="h-[260px] flex items-center justify-center text-slate-500 border border-dashed border-white/10 rounded-xl">
                Select a move
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovementPage;
