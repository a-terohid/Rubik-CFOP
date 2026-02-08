"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { CubeViewer } from "../elements/CubeViewer";

interface Props {
  algoritmData: any;
  setIsModuleOpen: (show: boolean) => void;
}

const AlgoritmDetails = ({ algoritmData, setIsModuleOpen }: Props) => {

  const completeMoves: string[] = algoritmData.algo.toComplete;
  const makeMoves: string[] = algoritmData.algo.toMake;

  const completeSeq = completeMoves.join(" ");
  const makeSeq = makeMoves.join(" ");

  const [replayKey, setReplayKey] = useState(0);
  const [playKey, setPlayKey] = useState(0);

  const reset = () => {
    setReplayKey(k => k + 1); 
  };

  const playAll = () => {
    setPlayKey(k => k + 1); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70 p-4">
      <div className="relative w-full max-w-6xl
        bg-gradient-to-br from-slate-900/95 to-slate-950/95
        border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-sky-400">{algoritmData.name}</h2>
            <p className="text-slate-400">{algoritmData.title}</p>
          </div>
          <button
            onClick={() => setIsModuleOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center"
          >
            <IoClose />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 p-6">

          {/* Info Panel */}
          <div className="space-y-4">

            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                <p className="text-xs text-slate-400 mb-1">Shape</p>
                <Image
                  src={algoritmData?.imgages?.shape || algoritmData?.img}
                  alt="shape"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              {algoritmData?.imgages?.forAlgo && (
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <p className="text-xs text-slate-400 mb-1">Algorithm Form</p>
                  <Image
                    src={algoritmData?.imgages?.forAlgo || algoritmData?.img}
                    alt="forAlgo"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Algorithms */}
            <div className="bg-slate-900/60 rounded-xl p-4 text-sm">
              <p className="text-slate-400 mb-1">To Make Shape (Scramble)</p>
              <p className="font-mono text-amber-400 break-words">{makeSeq}</p>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-4 text-sm">
              <p className="text-slate-400 mb-1">To Complete (Solve)</p>
              <p className="font-mono text-emerald-400 break-words">{completeSeq}</p>
            </div>
          </div>

          {/* Cube + Controls */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

            {/* Viewer Card */}
            <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5 flex items-center justify-center">
              <CubeViewer
                scramble={`x2 ${makeSeq}`}    
                solve={completeSeq}    
                replayKey={replayKey}
                playKey={playKey}
              />
            </div>

            {/* Controls Card */}
            <div className="bg-slate-900/30 rounded-xl p-4 border border-white/5 flex flex-col justify-center">

              <div className="text-center mb-4">
                <p className="text-slate-500 text-xs tracking-wide uppercase">Controls</p>
              </div>

              <div className="flex items-center justify-center gap-3">

                {/* Reset */}
                <button
                  onClick={reset}
                  className="
                    px-4 py-2 rounded-lg
                    text-slate-300 text-sm
                    border border-white/10
                    hover:border-white/20
                    hover:text-white
                    transition-all
                    backdrop-blur-md
                    bg-white/5
                  "
                >
                  Reset
                </button>

                {/* Play */}
                <button
                  onClick={playAll}
                  className="
                    px-4 py-2 rounded-lg
                    text-slate-300 text-sm
                    border border-white/10
                    hover:border-sky-400/40
                    hover:text-sky-400
                    transition-all
                    backdrop-blur-md
                    bg-white/5
                  "
                >
                  Play
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AlgoritmDetails;