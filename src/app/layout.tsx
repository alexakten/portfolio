import "./globals.css";
import { ThemeProvider } from './components/ThemeContext';

export const metadata = {
  title: "alex aktén",
  description: "designer & developer based in stockholm, sweden.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
