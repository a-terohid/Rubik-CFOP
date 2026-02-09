"use client";

import { useEffect, useRef, useState } from "react";
import { CubeViewer } from "../elements/CubeViewer";
import { rubikScramble } from "@/src/utils/rubikScramble";

// ---------------- types ----------------
type Record = {
  time: number;
  scramble: string;
  date: number;
};

const STORAGE_KEY = "rubik_records_v1";

const ScramblePage = () => {
  const [scramble, setScramble] = useState(rubikScramble(20));
  const [view, setView] = useState<"3D" | "2D">("3D");

  // timer
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // records
  const [records, setRecords] = useState<Record[]>([]);

  /* ---------- load records ---------- */
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setRecords(JSON.parse(raw));
  }, []);

  /* ---------- timer loop ---------- */
  const loop = (t: number) => {
    if (!startRef.current) startRef.current = t;
    setTime(t - startRef.current);
    rafRef.current = requestAnimationFrame(loop);
  };

  const start = () => {
    if (running) return;
    setRunning(true);
    startRef.current = null;
    rafRef.current = requestAnimationFrame(loop);
  };

  const stop = () => {
    if (!running) return;
    setRunning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const rec: Record = { time, scramble, date: Date.now() };
    const newRecords = [rec, ...records];

    setRecords(newRecords);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecords));
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
    setRecords([]);
  };

  /* ---------- keyboard ---------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        running ? stop() : start();
      }
      if (e.code === "KeyR") reset();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [running, time, scramble, records]);

  /* ---------- stats ---------- */
  const times = records.map(r => r.time);
  const best = times.length ? Math.min(...times) : 0;
  const worst = times.length ? Math.max(...times) : 0;
  const avg = times.length
    ? Math.floor(times.reduce((a, b) => a + b, 0) / times.length)
    : 0;

  return (
    <div className="min-h-screen text-slate-100 px-6 py-24 relative">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-6xl font-bold">Rubik Scramble</h1>
        <p className="text-slate-400 mt-3">Training & Timer System</p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* LEFT PANEL */}
        <div className="space-y-6">

          {/* Scramble */}
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-4">
            <div className="font-mono text-lg text-sky-400 break-all text-center">
              {scramble}
            </div>

            <div className="flex justify-between mt-3 text-xs">
              <button
                onClick={() => setScramble(rubikScramble(20))}
                className="text-slate-400 hover:text-white"
              >
                New Scramble
              </button>

              <div className="flex gap-3">
                <button onClick={() => setView("3D")} className={view==="3D"?"text-sky-400":"text-slate-400"}>3D</button>
                <button onClick={() => setView("2D")} className={view==="2D"?"text-sky-400":"text-slate-400"}>2D</button>
              </div>
            </div>
          </div>

          {/* Timer */}
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-6xl font-mono">
              {(time / 1000).toFixed(2)}
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button onClick={start} className="px-4 py-1 border border-white/10 rounded">Start</button>
              <button onClick={stop} className="px-4 py-1 border border-white/10 rounded">Stop</button>
              <button onClick={reset} className="px-4 py-1 border border-white/10 rounded">Reset</button>
            </div>

            <p className="text-xs text-slate-500 mt-2">Space = Start/Stop | R = Reset</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="bg-slate-900/60 p-3 rounded-lg">Best<br/>{(best/1000).toFixed(2)}</div>
            <div className="bg-slate-900/60 p-3 rounded-lg">Avg<br/>{(avg/1000).toFixed(2)}</div>
            <div className="bg-slate-900/60 p-3 rounded-lg">Worst<br/>{(worst/1000).toFixed(2)}</div>
          </div>

          {/* Controls */}
          <div className="flex justify-between text-xs text-slate-400">
            <span>{records.length} Records</span>
            <button onClick={clearStorage} className="hover:text-red-400">Clear History</button>
          </div>

          {/* History */}
          <div className="max-h-[260px] overflow-y-auto space-y-2 pr-1">
            {records.map((r, i) => (
              <div key={i} className="flex justify-between text-xs text-slate-400 border-b border-white/5 py-1">
                <span>{(r.time/1000).toFixed(2)}s</span>
                <span className="font-mono truncate max-w-[60%]">{r.scramble}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="flex justify-center items-start ">
          {view === "3D" ? (
            <CubeViewer scramble={`x2 ${scramble}`} visualization="3D" />
          ) : (
            <CubeViewer scramble={`x2 ${scramble}`} visualization="2D" />
          )}
        </div>

      </div>
    </div>
  );
};

export default ScramblePage;