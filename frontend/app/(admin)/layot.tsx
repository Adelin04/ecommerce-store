import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Footer from '../component/footer';
import NavBar from '../component/navBar';


export const metadata: Metadata = {
  title: 'BOUTIQUE',
  description: 'Online Store',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <p>Admin Layout</p>
      </body>
    </html>

  );
}
