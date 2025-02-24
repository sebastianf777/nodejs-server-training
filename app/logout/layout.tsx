import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="layout-logout">{children}</div>
}
