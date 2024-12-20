import type { Metadata } from 'next'
import { ReactElement } from 'react'
import Footer from '../component/products/footer';


export const metadata: Metadata = {
  title: 'BOUTIQUE',
  description: 'Online Store',
}

/* type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement

const AdminLayout: LayoutProps = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
export default AdminLayout */

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p>Admin Layout</p>
        {children}
      </body>
    </html>

  );
}
