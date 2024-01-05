"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import blogPosts from "../blogPosts";
import ThemeContext from "../components/ThemeContext";

export default function Blog() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  return (
    <main
      className={`flex flex-col justify-between w-screen h-screen overflow-hidden overflow-y-hidden px-3 xs:px-10 py-6 ${
        theme === "light"
          ? "bg-slate-100 text-black"
          : "bg-neutral-950 text-white"
      }`}
    >
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <div className="flex py-16 xs:py-40 overflow-auto w-full h-full">
        {blogPosts.length === 0 ? (
          <h2 className="text-3xl font-medium">No blog posts</h2>
        ) : (
          <ul>
            {blogPosts.map((post, index) => (
              <li key={index}>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-medium p-2">{post.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
