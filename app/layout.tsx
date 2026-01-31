import type { Metadata } from "next";
import { Geist,  } from "@/src/constants/font";
import "./globals.css";
import Footer from "@/src/components/module/Fotter"
import Navbar from "@/src/components/module/Navbar";


export const metadata: Metadata = {
  title: "Rubik CFOP",
  description: "Modern CFOP algorithm learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body className={`${Geist.className} antialiased bg-black text-slate-100`}>
        <Navbar />

        {/* Global background layer */}
        <div className="relative min-h-screen overflow-hidden
          bg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#020617_60%,_#020617_100%)]">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.06),transparent_45%)] pointer-events-none" />

          <div className="relative z-10 pt-12 min-h-[80vh]">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
