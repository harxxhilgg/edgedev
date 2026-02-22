import "./globals.css";
import { geist } from "../components/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Harshil - A Full Stack web developer.",
  description: "Portfolio website made using nextjs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem>
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
