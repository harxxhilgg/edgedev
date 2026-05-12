import "./globals.css";
import { hanken } from "../components/fonts";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from '@vercel/analytics/next';
import { Metadata } from "next";

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
      <body className={`${hanken.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem>
          <TooltipProvider>
            {children}
            <Analytics />
          </TooltipProvider>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
