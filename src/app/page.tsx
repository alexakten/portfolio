"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [viewportHeight, setViewportHeight] = useState(0);

  const [theme, setTheme] = useState<"dark" | "light">("dark"); // Default theme is dark

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const setVH = () => {
      setViewportHeight(window.innerHeight);
    };

    setVH();

    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => e.preventDefault();

    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  return (
    <main
      style={{ userSelect: "none", height: `${viewportHeight}px` }}
      className={`flex flex-col justify-between w-screen h-screen overflow-hidden overflow-y-hidden px-3 xs:px-10 py-6 ${
        theme === "light"
          ? "bg-slate-100 text-black"
          : "bg-neutral-950 text-white"
      }`}
    >
      {/* ——————————————————————————————————————————————————————————————————— */}
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      {/* ——————————————————————————————————————————————————————————————————— */}
      <div className="px-4 font-medium text-3xl w-full xs:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1>
          hey. i’m alex.
          <br />
          <span style={{ paddingLeft: 105 }}>i’m a (designer)</span>
          <br /> &amp; &lt;/developer/&gt; based <br />
          in <br />
          stockholm, sweden.
        </h1>
      </div>
      {/* ——————————————————————————————————————————————————————————————————— */}
      <div className="font-medium flex justify-between items-end">
        <div>
          <ul className="grid gap-8 md:flex md:gap-8 md:flex-row md:grid-cols-1 items-end grid-cols-3">
            <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
              <li>/ projects</li>
              <li>
                <a
                  href="https://kindredlab.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kindred lab
                </a>
              </li>
              <li>
                <a
                  href="https://solarity-alexakten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  solarity
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
              <li>
                <a
                  href="https://strom-alexakten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  strōm
                </a>
              </li>
              <li>
                <a
                  href="https://mendly.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mendly
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
              <li>
                <a
                  href="https://airbon.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  airbon
                </a>
              </li>
              <li>
                <a
                  href="https://tasktree.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tasktree
                </a>
              </li>
            </div>
          </ul>
        </div>
        <p className="hidden sm:block">© 2024</p>
      </div>
      {/* ——————————————————————————————————————————————————————————————————— */}
      {/* <div className="absolute left-0">
        <Cube />
      </div> */}
    </main>
  );
}
