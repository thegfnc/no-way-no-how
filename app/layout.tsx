import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { cn } from "./lib/utils";
import "./styles/globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "no way no how",
  description: "Listen to they music of no way no how on Spotify, Apple Music, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(outfit.className, 'bg-blue-300')}>{children}</body>
    </html>
  );
}
