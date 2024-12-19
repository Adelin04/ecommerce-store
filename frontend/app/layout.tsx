
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SetGlobalState from "./setGlobalState";
import NavBar from './component/products/navBar';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOUTIQUE",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SetGlobalState>
          <NavBar />
          {children}
        </SetGlobalState>
      </body>
    </html>
  );
}
