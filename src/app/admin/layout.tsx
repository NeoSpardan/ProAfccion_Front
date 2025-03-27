import type React from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { MobileAdminHeader } from "@/components/admin/mobile-admin-header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen">
        <MobileAdminHeader />
        <main className="flex-1 overflow-auto -webkit-overflow-scrolling: touch">
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

