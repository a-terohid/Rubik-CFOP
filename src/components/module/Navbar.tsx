"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const openHandler = () => setOpen(prev => !prev);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <div className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-Crime py-3">
        <div className="container flex items-center justify-between">
          <Link href={"/"} className="font-bold text-2xl">Rubik CFOP</Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-x-4 items-center text-lg">
            <li className="hover:text-Orange hover:font-bold">
              <Link href="/F2L">F2L</Link>
            </li>
            <li className="hover:text-Orange hover:font-bold">
              <Link href="/OLL">OLL</Link>
            </li>
            <li className="hover:text-Orange hover:font-bold">
              <Link href="/PLL">PLL</Link>
            </li>
            <li className="hover:text-Orange hover:font-bold">
              <Link href="/fingering">Fingering</Link>
            </li>
            <li className="hover:text-Orange hover:font-bold">
              <Link href="/crose">Crose</Link>
            </li>
            <li className="hover:text-Orange hover:font-bold">
              <Link href="/movment">Movment</Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={openHandler}
            className="lg:hidden text-2xl"
            aria-label="Toggle menu"
          >
            {open ? <IoMdClose /> : <TfiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="h-screen">
          <div className="bg-Crime">
            <div className="container py-5">
              <ul className="flex flex-col items-center gap-y-3 text-lg">
                <li className="hover:text-Orange hover:font-bold">
                  <Link href="/F2L">F2L</Link>
                </li>
                <li className="hover:text-Orange hover:font-bold">
                  <Link href="/OLL">OLL</Link>
                </li>
                <li className="hover:text-Orange hover:font-bold">
                  <Link href="/PLL">PLL</Link>
                </li>
                <li className="hover:text-Orange hover:font-bold">
                  <Link href="/fingering">Fingering</Link>
                </li>
                <li className="hover:text-Orange hover:font-bold">
                  <Link href="/crose">Crose</Link>
                </li>
                <li className="hover:text-Orange hover:font-bold">
                  <Link href="/movment">Movment</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Overlay */}
          <div className="h-full bg-black/50" />
        </div>
      )}
    </div>
  );
};

export default Navbar;