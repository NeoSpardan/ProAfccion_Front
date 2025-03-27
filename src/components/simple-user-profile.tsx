"use client"

import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { LogOut, Settings, FileText, ExternalLink, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface SimpleUserProfileProps {
  userName: string
  userRole?: string
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export function SimpleUserProfile({
  userName,
  userRole = "Cliente",
  isOpen,
  onToggle,
  onClose,
}: SimpleUserProfileProps) {
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Get initials from user name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/")
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-muted/60 transition-colors focus:outline-none min-h-[44px]"
      >
        <Avatar className="h-9 w-9 flex-shrink-0">
          <AvatarFallback className="bg-primary text-primary-foreground">{getInitials(userName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center items-start">
          <span className="text-sm font-medium leading-none">{userName}</span>
          <span className="text-xs text-muted-foreground mt-1">{userRole}</span>
        </div>
        <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-full mb-1 w-64 rounded-md border bg-popover shadow-lg animate-in fade-in-0 zoom-in-95 z-50">
          {/* User info section */}
          <div className="p-3 flex items-center gap-3">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarFallback className="bg-primary text-primary-foreground">{getInitials(userName)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <span className="font-medium">{userName}</span>
              <span className="text-sm text-muted-foreground">{userRole}</span>
            </div>
          </div>

          <div className="h-px bg-border mx-1 my-1"></div>

          {/* Menu items */}
          <div className="p-1">
            <Link
              href={userRole === "Administrador" ? "/admin/datos" : "/client/datos"}
              className={cn(
                "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm w-full min-h-[44px]",
                "hover:bg-muted transition-colors",
              )}
              onClick={onClose}
            >
              <Settings className="h-4 w-4" />
              <span>Ajustes</span>
            </Link>

            <Link
              href="/terms"
              className={cn(
                "flex items-center justify-between gap-3 rounded-sm px-3 py-2.5 text-sm w-full min-h-[44px]",
                "hover:bg-muted transition-colors",
              )}
              onClick={onClose}
            >
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4" />
                <span>Términos y políticas</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>

            <button
              onClick={handleLogout}
              className={cn(
                "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm w-full text-left min-h-[44px]",
                "hover:bg-muted transition-colors text-destructive",
              )}
            >
              <LogOut className="h-4 w-4" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

