

import OLLPage from "@/src/components/template/OLLPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OLL | Rubik CFOP",
  description: "Explore OLL (Orientation of the Last Layer) algorithms for solving the Rubik's Cube with the CFOP method. Organized, responsive, and easy to follow.",
  keywords: [
    "Rubik Cube",
    "CFOP",
    "OLL",
    "Rubik algorithms",
    "cube solving",
    "puzzle training"
  ],
  authors: [
    { name: "Ali Terohid", url: "https://a.terohid.com" }
  ],
  openGraph: {
    title: "OLL | Rubik CFOP",
    description: "Explore OLL (Orientation of the Last Layer) algorithms for solving the Rubik's Cube with the CFOP method.",
    url: "https://rubik-cfop.vercel.app/OLL",
    siteName: "Rubik CFOP",
    images: [
      {
        url: "https://rubik-cfop.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "OLL Rubik CFOP"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OLL | Rubik CFOP",
    description: "Explore OLL (Orientation of the Last Layer) algorithms for solving the Rubik's Cube with the CFOP method.",
    images: ["https://rubik-cfop.vercel.app/og-image.png"],
    creator: "@a.terohid",
  },
};

const page = () => {
    return(<OLLPage />)
};

export default page;