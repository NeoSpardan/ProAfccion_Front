"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  Bot,
  Menu,
  AlertTriangle,
  ClipboardList,
  LayoutDashboard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { BrandLogo } from "@/components/brand-logo"
import { useThemeConfig } from "@/components/theme-config-provider"
import { SimpleUserProfile } from "@/components/simple-user-profile"

export function MobileHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
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
    <div className="md:hidden flex items-center justify-between p-4 border-b">
      <Link href="/client/dashboard" className="flex items-center gap-2">
        <BrandLogo className="h-8 w-8" />
        <span className="text-xl font-bold truncate">{themeConfig.brandName}</span>
      </Link>
      <div className="flex items-center gap-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[80%] sm:w-[350px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="p-4 border-b flex items-center">
              <Link href="/client/dashboard" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <BrandLogo className="h-8 w-8" />
                <span className="text-xl font-bold">{themeConfig.brandName}</span>
              </Link>
            </div>
            <ScrollArea className="h-[calc(100vh-10rem)]">
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
                    onClick={() => setOpen(false)}
                  >
                    <Link href={route.href} className="flex items-center">
                      <route.icon className="h-5 w-5 flex-shrink-0 mr-2" />
                      <span>{route.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t">
              <SimpleUserProfile
                userName="Juan Pérez"
                userRole="Cliente"
                isOpen={isProfileOpen}
                onToggle={() => setIsProfileOpen(!isProfileOpen)}
                onClose={() => setIsProfileOpen(false)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

