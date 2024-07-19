import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Profile from "@/Components/Profile"
import Navbar from "@/Components/Navbar";

export const metadata: Metadata = {
  title: "Ryan's Portfolio",
  description: "Ryan Miguel M. Espineda's Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="h-screen w-screen px-[3rem] py-[1.5rem] bg-[#111]">
        <div className="flex justify-between 2xl:gap-6 xl:gap-3 h-full w-full p-[3rem] overflow-auto">
          <Profile />
          <div className='relative shadow-md border border-[#2a2a2a] rounded-3xl min-h-full w-[80%] self-start bg-[#1e1e1e] p-[2rem]'>
            <Navbar />
            { children }
          </div>
        </div>
      </div>
      </body>
    </html>
  );
}
