import F2LPage from '@/src/components/template/F2LPage';
import React from 'react';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "F2L | Rubik CFOP",
  description: "Learn and practice F2L (First Two Layers) algorithms for solving the Rubik's Cube with CFOP method. Organized, responsive, and ready for training.",
  keywords: [
    "Rubik Cube", 
    "CFOP", 
    "F2L", 
    "Rubik algorithms", 
    "cube solving", 
    "puzzle training"
  ],
  authors: [
    { name: "Ali Terohid", url: "https://a.terohid.com" }
  ],
  openGraph: {
    title: "F2L | Rubik CFOP",
    description: "Learn and practice F2L (First Two Layers) algorithms for solving the Rubik's Cube with CFOP method.",
    url: "https://rubik-cfop.vercel.app/F2L",
    siteName: "Rubik CFOP",
    images: [
      {
        url: "https://rubik-cfop.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "F2L Rubik CFOP"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "F2L | Rubik CFOP",
    description: "Learn and practice F2L (First Two Layers) algorithms for solving the Rubik's Cube with CFOP method.",
    images: ["https://rubik-cfop.vercel.app/og-image.png"],
    creator: "@a.terohid",
  },
};

const page = () => {
    return ( <F2LPage/>);
};

export default page;