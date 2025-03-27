"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  Bot,
  AlertTriangle,
  ClipboardList,
  LayoutDashboard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BrandLogo } from "@/components/brand-logo"
import { useThemeConfig } from "@/components/theme-config-provider"
import { useState } from "react"
import { SimpleUserProfile } from "@/components/simple-user-profile"

export function Sidebar() {
  const pathname = usePathname()
  const { themeConfig } = useThemeConfig()
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const routes = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/client/dashboard",
    },
    {
      title: "Seguimiento de incidencias",
      icon: ClipboardList,
      href: "/client/seguimiento",
    },
    {
      title: "Abrir una incidencia",
      icon: AlertTriangle,
      href: "/client/incidencias",
    },
    {
      title: "Contacto soporte",
      icon: Bot,
      href: "/client/support",
    },
    {
      title: "Mis Datos",
      icon: FileText,
      href: "/client/datos",
    },
  ]

  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r bg-background flex-shrink-0">
      <div className="p-4 border-b flex-shrink-0">
        <Link href="/client/dashboard" className="flex items-center gap-2">
          <BrandLogo className="h-8 w-8" />
          <span className="text-xl font-bold">{themeConfig.brandName}</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="py-4 px-2 space-y-1">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start gap-2 font-normal min-h-[44px]",
                pathname === route.href && "bg-muted",
              )}
            >
              <Link href={route.href} className="flex items-center">
                <route.icon className="h-4 w-4 flex-shrink-0 mr-2" />
                <span className="truncate">{route.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t mt-auto">
        <SimpleUserProfile
          userName="Juan Pérez"
          userRole="Cliente"
          isOpen={isProfileOpen}
          onToggle={() => setIsProfileOpen(!isProfileOpen)}
          onClose={() => setIsProfileOpen(false)}
        />
      </div>
    </div>
  )
}


