import type { Metadata } from "next";
import { Inter } from "next/font/google";import "./globals.css";
import { ConvexClientProvider } from "./provider";

const inter = Inter({subsets : ["latin"]});

export const metadata: Metadata = {
  title: "Todovex.ai",
  description: "TodoVex seamlessly organizes your task and predicts what's nextusing AI.",

}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className} >
        {children}
      </body>
    </html>
  );
}
