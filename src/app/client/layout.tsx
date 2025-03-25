import type React from "react"
import { Sidebar } from "@/components/client/sidebar"
import { MobileHeader } from "@/components/client/mobile-header"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <MobileHeader />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

