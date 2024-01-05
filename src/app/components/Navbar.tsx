import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

interface NavbarProps {
  onThemeToggle: () => void;
  theme: "dark" | "light"; // Add theme prop
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, theme }) => {
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

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between relative">
      <Link href={"/"}>
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
      </Link>

      <div className="font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button type="button" onClick={onThemeToggle}>
          {theme === "light" ? "◖ dark" : "● light"}
        </button>
      </div>

      <button
        aria-label="menu"
        onClick={handleClick}
        className="flex flex-col justify-center items-center lg:hidden z-50" // Keep the button in its place
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${
      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
    }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
    h-0.5 w-6 rounded-sm ${
      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
    }`}
        ></span>
      </button>

      {/* Menu items container */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } gap-4 absolute font-medium flex-col items-end py-2 rounded-md z-40`}
        style={{ top: "100%", right: "0" }} // Position the menu below the button
      >
        <a
          href="https://www.instagram.com/alexakten/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="hover:-translate-x-1">
            instagram
          </button>
        </a>
        <a
          href="https://www.threads.net/@alexakten"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="hover:-translate-x-1">
            threads
          </button>
        </a>
        <a
          href="https://twitter.com/alexakten"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="hover:-translate-x-1">
            twitter
          </button>
        </a>
        <Link href="/blog">
          <button type="button" className="hover:-translate-x-1">
            blog
          </button>
        </Link>
        <a href="mailto:alex.akten@outlook.com">
          <button type="button" className="hover:-translate-x-1">
            mail
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
