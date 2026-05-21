import type { Metadata } from "next";

import "./globals.css";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "ThumbExp",
  description:
    "ThumbExp is the AI Selection Thumbnail creation platform if you feel that creating thumbnails consume a lot of time so just use Thumbnail add your video and see the magic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full dark`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
