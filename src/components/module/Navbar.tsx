"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const openHandler = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <div className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="relative
        bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950
        border-b border-white/5 backdrop-blur-md">

        {/* glow line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-wide text-white">
            Rubik CFOP
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-x-6 items-center text-sm">
            {[
              { href: "/F2L", label: "F2L" },
              { href: "/OLL", label: "OLL" },
              { href: "/PLL", label: "PLL" },
              { href: "/fingering", label: "Fingering" },
              { href: "/crose", label: "Cross" },
              { href: "/movement", label: "Movement" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-all duration-300 hover:text-sky-400 ${
                    pathname === item.href ? "text-sky-400" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={openHandler}
            className="lg:hidden text-2xl text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <IoMdClose /> : <TfiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={openHandler} />

          <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black
            border-b border-white/5">

            <div className="max-w-7xl mx-auto px-6 py-8">
              <ul className="flex flex-col items-center gap-y-5 text-lg">
                {[
                  { href: "/F2L", label: "F2L" },
                  { href: "/OLL", label: "OLL" },
                  { href: "/PLL", label: "PLL" },
                  { href: "/fingering", label: "Fingering" },
                  { href: "/crose", label: "Cross" },
                  { href: "/movement", label: "Movement" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`transition-all duration-300 hover:text-sky-400 ${
                        pathname === item.href ? "text-sky-400" : "text-slate-200"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;