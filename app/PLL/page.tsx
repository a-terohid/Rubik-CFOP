import PLLPage from "@/src/components/template/PLLPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PLL | Rubik CFOP",
  description: "Explore PLL (Permutation of the Last Layer) algorithms for solving the Rubik's Cube with the CFOP method. Organized and responsive for training.",
  keywords: [
    "Rubik Cube", 
    "CFOP", 
    "PLL", 
    "Rubik algorithms", 
    "cube solving", 
    "puzzle training"
  ],
  authors: [
    { name: "Ali Terohid", url: "https://a.terohid.com" }
  ],
  openGraph: {
    title: "PLL | Rubik CFOP",
    description: "Explore PLL (Permutation of the Last Layer) algorithms for solving the Rubik's Cube with the CFOP method.",
    url: "https://rubik-cfop.vercel.app/PLL",
    siteName: "Rubik CFOP",
    images: [
      {
        url: "https://rubik-cfop.vercel.app/og-image.png", // بعداً تصویر مناسب بذار
        width: 1200,
        height: 630,
        alt: "PLL Rubik CFOP"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLL | Rubik CFOP",
    description: "Explore PLL (Permutation of the Last Layer) algorithms for solving the Rubik's Cube with the CFOP method.",
    images: ["https://rubik-cfop.vercel.app/og-image.png"],
    creator: "@a.terohid",
  },
};

const page = () => {
    
    
    return (<PLLPage />);
};

export default page;