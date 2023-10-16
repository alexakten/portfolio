"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark"); // Default theme is dark
  const [viewportHeight, setViewportHeight] = useState(0);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const svgRef = useRef<SVGSVGElement | null>(null); // Added type for ref

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // get mouse position
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      moveIrisToMouse(mouseX, mouseY);
    };

    // Attach the event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Detach the event listener from the window
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const setVH = () => {
      setViewportHeight(window.innerHeight);
    };

    setVH();

    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  const moveIrisToMouse = (mouseX: number, mouseY: number) => {
    const leftIris = document.getElementById("leftIris");
    const rightIris = document.getElementById("rightIris");

    const moveIris = (
      iris: any,
      centerX: number,
      centerY: number,
      maxMove: number
    ) => {
      const dx = mouseX - centerX;
      const dy = mouseY - centerY;

      const distance = Math.min(maxMove, Math.sqrt(dx * dx + dy * dy));
      const angle = Math.atan2(dy, dx);

      const newX = centerX + distance * Math.cos(angle);
      const newY = centerY + distance * Math.sin(angle);

      iris.setAttribute("cx", newX);
      iris.setAttribute("cy", newY);
    };

    moveIris(leftIris, 7.86985, 14.0945, 4.97632); // (iris, centerX, centerY, max movement)
    moveIris(rightIris, 36.3484, 7.86875, 4.97632);
  };

  return (
    <main
      style={{ userSelect: "none", height: `${viewportHeight}px` }}
      className={`flex flex-col justify-between w-screen h-screen overflow-hidden overflow-y-hidden px-4 xs:px-10 py-6 ${
        theme === "light"
          ? "bg-slate-100 text-black"
          : "bg-neutral-950 text-white"
      }`}
    >
      <nav className="flex justify-between relative">
        <svg
          ref={svgRef}
          width="45"
          height="63"
          viewBox="0 0 45 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.0915 13.209L27.5708 15.8281L18.3576 31.5846L27.3952 36.8691L25.1458 40.7161L11.6289 32.8124L23.0915 13.209Z"
            fill={theme === "light" ? "black" : "white"}
          />
          <path
            d="M35.8738 40.5294L36.8704 45.6216L18.9579 49.1276L20.9688 59.4018L16.5955 60.2578L13.5879 44.8913L35.8738 40.5294Z"
            fill={theme === "light" ? "black" : "white"}
          />

          <circle
            cx="7.86863"
            cy="14.0945"
            r="7.86863"
            fill={theme === "light" ? "black" : "white"}
          />
          <circle
            id="leftIris"
            cx="7.86985"
            cy="14.0945"
            r="2.89231"
            fill={theme === "light" ? "white" : "black"}
          />
          <circle
            cx="36.2026"
            cy="7.86863"
            r="7.86863"
            fill={theme === "light" ? "black" : "white"}
          />
          <circle
            id="rightIris"
            cx="36.3484"
            cy="7.86875"
            r="2.89231"
            fill={theme === "light" ? "white" : "black"}
          />
        </svg>
        <div className="absolute md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2">
          <button type="button" onClick={toggleTheme}>
            {theme === "light" ? "[ ◖ dark ]" : "[ ● light ]"}
          </button>
          {/* <button type="button" onClick={toggleTheme}>
            {theme === "dark" ? "[dark]" : " dark "}
          </button> */}
        </div>

        <div className="flex flex-col md:flex-row items-end md:items-center md:justify-end gap-2 md:gap-8">
          <a
            href="https://www.instagram.com/alexakten/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button">instagram</button>
          </a>
          <a href="mailto:alex.akten@outlook.com">
            <button type="button">mail</button>
          </a>
          <a href="tel:+46709136514">
            <button type="button">phone</button>
          </a>
        </div>
      </nav>
      <div className="px-4 text-3xl w-full xs:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1>
          hey. i’m alex.
          <br />
          <span style={{ paddingLeft: 105 }}>i’m a (designer)</span>
          <br /> &amp; &lt;/developer/&gt; based <br />
          in <br />
          stockholm, sweden.
        </h1>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <ul className="grid gap-12 md:flex md:gap-8 md:flex-row md:grid-cols-1 items-end grid-cols-2">
            <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
              <li>/ projects /</li>
              <li>
                <a
                  href="https://www.kindredlab.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kindred lab
                </a>
              </li>
              <li>
                <a
                  href="https://planetary-alexakten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  solarity
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-2 md:gap-8 md:flex md:flex-row">
              <li>
                <a href="#blixt">blixt</a>
              </li>
              <li>
                <a href="#airspace">airspace</a>
              </li>
            </div>
          </ul>
        </div>
        <p>© 2023</p>
      </div>
    </main>
  );
}
