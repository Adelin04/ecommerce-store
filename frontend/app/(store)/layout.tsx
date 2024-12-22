
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
    img: [{ path: "./slides/img_subLink_Jewellery.jpg" }],
  },
  {
    to: "/women",
    name: "WOMEN",
    img: [{ path: "./slides/img_subLink_Jewellery.jpg" }],
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
      {children}
      <Footer />
    </React.Fragment>
  );
}
