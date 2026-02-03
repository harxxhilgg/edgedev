import { Geist, Lato, Inter, Geist_Mono } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});

export const inter = Inter({
  subsets: ["latin"],
});
