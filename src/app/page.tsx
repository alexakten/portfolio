"use client";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <main
      className={`flex flex-col justify-between w-screen h-screen px-10 py-8 ${
        theme === "light"
          ? "bg-slate-100 text-black"
          : "bg-neutral-950 text-white"
      }`}
    >
      <nav className="flex justify-between relative">
        <svg
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
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.86863 21.9631C12.2144 21.9631 15.7373 18.4402 15.7373 14.0945C15.7373 9.74874 12.2144 6.22583 7.86863 6.22583C3.52291 6.22583 0 9.74874 0 14.0945C0 18.4402 3.52291 21.9631 7.86863 21.9631ZM7.86947 16.9868C9.46685 16.9868 10.7618 15.6919 10.7618 14.0945C10.7618 12.4971 9.46685 11.2022 7.86947 11.2022C6.27209 11.2022 4.97716 12.4971 4.97716 14.0945C4.97716 15.6919 6.27209 16.9868 7.86947 16.9868Z"
            fill={theme === "light" ? "black" : "white"}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.2026 15.7373C40.5483 15.7373 44.0712 12.2144 44.0712 7.86863C44.0712 3.52291 40.5483 0 36.2026 0C31.8569 0 28.334 3.52291 28.334 7.86863C28.334 12.2144 31.8569 15.7373 36.2026 15.7373ZM36.348 10.7611C37.9454 10.7611 39.2403 9.46616 39.2403 7.86878C39.2403 6.2714 37.9454 4.97647 36.348 4.97647C34.7506 4.97647 33.4557 6.2714 33.4557 7.86878C33.4557 9.46616 34.7506 10.7611 36.348 10.7611Z"
            fill={theme === "light" ? "black" : "white"}
          />
        </svg>
        <div className="flex flex-row gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button type="button" onClick={toggleTheme}>
            {theme === "light" ? "[ light ]" : "[ dark ]"}
          </button>
          {/* <button type="button" onClick={toggleTheme}>
            {theme === "dark" ? "[dark]" : " dark "}
          </button> */}
        </div>

        <div className="flex flex-row items-center gap-8">
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
      <div className="text-3xl max-w-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          <ul className="flex flex-row gap-8">
            / projects /
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
            <li>
              <a href="#blixt">blixt</a>
            </li>
            <li>
              <a href="#airspace">airspace</a>
            </li>
          </ul>
        </div>
        <p>© 2023</p>
      </div>
    </main>
  );
}
