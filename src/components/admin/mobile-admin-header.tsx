"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Bot, Menu, AlertTriangle, ClipboardList, LayoutDashboard, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { BrandLogo } from "@/components/brand-logo"
import { useThemeConfig } from "@/components/theme-config-provider"
import { SimpleUserProfile } from "@/components/simple-user-profile"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function MobileAdminHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { themeConfig } = useThemeConfig()
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const routes = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      title: "Seguimiento de incidencias",
      icon: ClipboardList,
      href: "/admin/seguimiento",
    },
    {
      title: "Abrir una incidencia",
      icon: AlertTriangle,
      href: "/admin/incidencias",
    },
    {
      title: "Informes",
      icon: BarChart3,
      href: "/admin/informes",
    },
    {
      title: "Contacto soporte",
      icon: Bot,
      href: "/admin/support",
    },
    {
      title: "Mis Datos",
      icon: FileText,
      href: "/admin/datos",
    },
  ]

  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b">
      <Link href="/admin/dashboard" className="flex items-center gap-2">
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
            <SheetTitle className="sr-only">Admin Navigation Menu</SheetTitle>
            <div className="p-4 border-b flex items-center">
              <Link href="/admin/dashboard" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <BrandLogo className="h-8 w-8" />
                <span className="text-xl font-bold">{themeConfig.brandName}</span>
              </Link>
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
                              "w-full justify-start gap-2 font-normal min-h-[44px]",
                              pathname.startsWith(route.href) && "bg-muted",
                            )}
                          >
                            <route.icon className="h-5 w-5 flex-shrink-0" />
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
                                "w-full justify-start gap-2 font-normal min-h-[44px]",
                                pathname === submenu.href && "bg-muted",
                              )}
                              onClick={() => setOpen(false)}
                            >
                              <Link href={submenu.href}>
                                {submenu.icon ? <submenu.icon className="h-5 w-5 flex-shrink-0" /> : null}
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
                  )
                })}
              </div>
            </ScrollArea>
            <div className="border-t">
              <SimpleUserProfile
                userName="Admin User"
                userRole="Administrador"
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


