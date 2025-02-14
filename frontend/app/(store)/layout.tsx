
import type { Metadata } from "next";
import NavBar from "../component/navBar";
import Footer from "../component/footer";
import SetGlobalState from "../setGlobalState";
import React from "react";
import navBarMenu from '../component/navBarMenu'

export let linksNavBar = [
  {
    to: "/men",
    name: "MEN",
  },
  {
    to: "/women",
    name: "WOMEN",
  },
]

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
    <React.Fragment>
      <NavBar navBarMenu={linksNavBar} />
      <div style={{ paddingTop: '100px',width: '100%' }}>
        {children}
      </div>

      <Footer />
    </React.Fragment>
  );
}
