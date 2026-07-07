import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konoba Kojo — Sveti Filip i Jakov | Grill na rivi, zalazak nad morem",
  description:
    "Konoba Kojo na rivi u Svetom Filipu i Jakovu — tuna i orada s grila, hobotnica, plodovi mora i terasa s pogledom na zalazak. Bez pizze, bez kompromisa. Rezervirajte stol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${instrument.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
