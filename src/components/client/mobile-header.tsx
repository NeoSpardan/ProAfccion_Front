"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Bot, Menu, AlertTriangle, ClipboardList, X, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BrandLogo } from "@/components/brand-logo"
import { useThemeConfig } from "@/components/theme-config-provider"
import { SimpleUserProfile } from "@/components/simple-user-profile"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

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
        <span className="text-xl font-bold">{themeConfig.brandName}</span>
      </Link>
      <div className="flex items-center gap-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="p-4 border-b flex items-center justify-between">
              <Link href="/client/dashboard" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <BrandLogo className="h-8 w-8" />
                <span className="text-xl font-bold">{themeConfig.brandName}</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <div className="py-4 px-2 space-y-1">
                {routes.map((route) => {
                  if (route.submenu) {
                    return (
                      <Collapsible key={route.href} className="w-full">
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start gap-2 font-normal",
                              pathname.startsWith(route.href) && "bg-muted",
                            )}
                          >
                            <route.icon className="h-4 w-4" />
                            {route.title}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-6 space-y-1 pt-1">
                          {route.submenu.map((submenu) => (
                            <Button
                              key={submenu.href}
                              variant="ghost"
                              asChild
                              className={cn(
                                "w-full justify-start gap-2 font-normal",
                                pathname === submenu.href && "bg-muted",
                              )}
                              onClick={() => setOpen(false)}
                            >
                              <Link href={submenu.href}>
                                {submenu.icon ? <submenu.icon className="h-4 w-4" /> : null}
                                {submenu.title}
                              </Link>
                            </Button>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    )
                  }

                  return (
                    <Button
                      key={route.href}
                      variant="ghost"
                      asChild
                      className={cn("w-full justify-start gap-2 font-normal", pathname === route.href && "bg-muted")}
                      onClick={() => setOpen(false)}
                    >
                      <Link href={route.href}>
                        <route.icon className="h-4 w-4" />
                        {route.title}
                      </Link>
                    </Button>
                  )
                })}
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

