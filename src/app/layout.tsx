import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Chapa AI",
  description: "Unlocking the Mysteries of Tomorrow's AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Chapa AI, unlocking the mysteries of tomorrow's AI"
        />
      </head>
      <body className={`${ptSans.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mt-[88px] flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
