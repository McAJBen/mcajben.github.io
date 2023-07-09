import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "McAJBen",
  description: "Ben McAllister's personal website",
  authors: [{ name: "Ben McAllister" }],
  openGraph: {
    description: "Ben McAllister's personal website",
    images: "/ben.jpg",
    type: "website",
    siteName: "McAJBen",
    title: "McAJBen",
    url: "www.McAJBen.com",
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
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
