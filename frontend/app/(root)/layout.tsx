
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SetGlobalState from "../setGlobalState";
import NavBar from "../component/products/navBar";
import Footer from "../component/products/footer";


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

export default function SetupLayout({
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
          <Footer />
        </SetGlobalState>
      </body>
    </html>

  );
}
