"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import blogPosts from "@/app/blogPosts";
import ThemeContext from "@/app/components/ThemeContext";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  slug: string;
  // Add other fields as needed
}

export default function Post() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [post, setPost] = useState<BlogPost | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Extract the slug from the pathname
    const slug = pathname.split("/").pop(); // Assumes the last part of the pathname is the slug

    if (slug) {
      const foundPost = blogPosts.find((p) => p.slug === slug);
      setPost(foundPost || null);
    }
  }, [pathname]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  if (!post) {
    return;
  }

  // Function to render content with line breaks
  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((line: string, index: number, array: string[]) => (
        <React.Fragment key={index}>
          {line}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));
  };

  return (
    <main
      className={`flex flex-col justify-between w-screen h-screen overflow-hidden px-3 xs:px-10 py-6 ${
        theme === "light"
          ? "bg-slate-100 text-black"
          : "bg-neutral-950 text-white"
      }`}
    >
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <div className="flex py-16 xs:py-40 overflow-auto justify-center w-full h-full">
        <article className="flex w-full flex-col max-w-2xl gap-4">
          <Link href="/blog">
            <button className="font-medium">← Back</button>
          </Link>
          <h1 className="text-3xl font-medium">{post.title}</h1>
          <p>{post.date}</p>
          <div>{renderContent(post.content)}</div>
        </article>
      </div>
    </main>
  );
}
