import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./global-components/Header";
import Footer from "./global-components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "An example store by Saad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
