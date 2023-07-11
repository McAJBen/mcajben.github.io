import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.McAJBen.com"),
  title: "McAJBen",
  description: "Ben McAllister's personal website",
  authors: [{ name: "Ben McAllister" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    description: "Ben McAllister's personal website",
    images: "/ben.webp",
    type: "website",
    siteName: "McAJBen",
    title: "McAJBen",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#800050" />
      </head>
      <body className={classNames(inter.className, "relative min-h-screen")}>
        <Header />
        <div className="pb-8 pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
