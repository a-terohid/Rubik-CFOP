"use client"

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {

    const [ open , setOpen] = useState(false)

    const openHandler  = () => setOpen(!open)
 
    return (
        <div className="fixed w-full z-50">
            <div className="bg-Crime py-3">
                <div className="container flex item-center justify-between ">
                <h1 className=" font-bold text-2xl">Rubik CFOP</h1>
                <ul className="gap-x-4 item-center text-lg hidden lg:flex ">
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
                        <Link href="/movment">Movment</Link>
                    </li>
                </ul>
                <p onClick={openHandler} className="lg:hidden text-2xl">{open ? <IoMdClose /> : <TfiMenu />}</p>
            </div>
            </div>
            {
                open ? <div className="h-screen">
                    <div className="bg-Crime">
                        <div className="container py-5">
                            <ul className="gap-y-3 flex flex-col item-center text-lg ">
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
                                    <Link href="/movment">Movment</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-full bg-black/50"></div>
                </div> : null
            }
        </div>
    );
};

export default Navbar;