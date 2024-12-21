
import type { Metadata } from "next";
import SetGlobalState from "./setGlobalState";

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
            <body >
                <SetGlobalState>
                        {children}
                </SetGlobalState>
            </body>
        </html>

    );
}
