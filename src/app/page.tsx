"use client";
import dynamic from "next/dynamic";
import ThemeContext from "./components/ThemeContext";
import { useEffect, useContext } from "react";
import Navbar from "./components/Navbar";

const Scene = dynamic(() => import("@/app/components/Scene"), {
  ssr: false,
});

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => e.preventDefault();

    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  return (
    <main
      style={{ userSelect: "none", height: "100svh" }}
      className={`flex relative flex-col justify-between w-screen h-screen overflow-hidden overflow-y-hidden px-3 xs:px-10 py-6 ${
        theme === "light" ? "bg-slate-100 text-black" : "bg-black text-slate-100"
      }`}
    >
      {/* ——————————————————————————————————————————————————————————————————— */}
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      {/* ——————————————————————————————————————————————————————————————————— */}
      <Scene />

      {/* <div className="px-4 font-medium text-3xl w-full xs:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1>
          hey. i’m alex.
          <br />
          <span style={{ paddingLeft: 105 }}>i’m a (designer)</span>
          <br /> &amp; &lt;/developer/&gt; based <br />
          in <br />
          stockholm, sweden.
        </h1>
      </div> */}
      {/* ——————————————————————————————————————————————————————————————————— */}
      <div className="font-medium flex justify-between items-end">
        <div className="grid gap-8 md:flex md:gap-8 md:flex-row md:grid-cols-1 items-end grid-cols-3">
          <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
            <div className="font-medium">/ projects</div>
            <div>
              <a
                href="https://www.kindredlab.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:translate-y-1"
              >
                kindred lab
              </a>
            </div>
            <div>
              <a
                href="https://solarity-alexakten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                solarity
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
            <div>
              <a
                href="https://www.mendly.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                mendly
              </a>
            </div>
            <div>
              <a
                href="https://tasktree.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tasktree
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
            <div>
              <a
                href="https://airbon.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                airbon
              </a>
            </div>
          </div>
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
