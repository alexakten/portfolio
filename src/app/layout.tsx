import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });
import { GeistSans } from "geist/font/sans";



export const metadata = {
  title: "Alex Aktén",
  description: "Designer & developer based in Stockholm, Sweden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>

      <ThemeProvider>
        <body>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
