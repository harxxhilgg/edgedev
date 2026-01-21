import "./globals.css";
import { geist } from "./ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harshil - A Full Stack web developer.",
  description: "Portfolio website made using nextjs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
