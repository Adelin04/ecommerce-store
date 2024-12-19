import type { Metadata } from 'next'
import { ReactElement } from 'react'


export const metadata: Metadata = {
  title: 'BOUTIQUE',
  description: 'Online Store',
}

type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement

const AdminLayout: LayoutProps = ({ children }) => {
  return (
    <div >
      {children}
    </div>
  )
}
export default AdminLayout