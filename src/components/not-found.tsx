"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";
import ShinyButton from "@/components/magicui/shiny-button";

export default function NotFound() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <main className="relative flex flex-col min-w-full min-h-[100dvh] items-center justify-center overflow-hidden">
        <Meteors number={40}/>
        <Particles
          className="absolute inset-0"
          quantity={180}
          ease={80}
          color={color}
          refresh
        />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Oops, Wizard !
        </span>
        <Link href="/" className="mt-10">
          <ShinyButton text="Go home boy!" className="" />
        </Link>
      </main> 
  )
}

