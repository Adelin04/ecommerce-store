
import type { Metadata } from "next";
import NavBar from "../component/navBar";
import Footer from "../component/footer";
import SetGlobalState from "../setGlobalState";
import React from "react";



export const metadata: Metadata = {
    title: "BOUTIQUE",
    description: "Ecommerce Store",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <React.Fragment>
            <NavBar navBarMenu={null} />
            {children}
            <Footer />
        </React.Fragment>
    );
}
