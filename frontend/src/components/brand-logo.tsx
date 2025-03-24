"use client"

import Image from "next/image"

export function BrandLogo({ className }: { className?: string }) {
  // Simple placeholder logo that can be replaced with a real image later
  return (
    <div className={`relative ${className || "h-10 w-10"}`}>
      <Image src="/placeholder.svg?height=40&width=40" alt="Proafccion Logo" fill className="object-contain" priority />
    </div>
  )
}

