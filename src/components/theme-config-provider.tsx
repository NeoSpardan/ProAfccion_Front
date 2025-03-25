"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type ThemeConfig = {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  logoType: "building" | "home" | "office"
  brandName: string
}

const defaultThemeConfig: ThemeConfig = {
  primaryColor: "201 96% 32%", // Default blue from login page
  secondaryColor: "210 40% 96.1%",
  accentColor: "210 40% 96.1%",
  logoType: "building",
  brandName: "Proafccion",
}

const ThemeConfigContext = createContext<{
  themeConfig: ThemeConfig
  updateThemeConfig: (config: Partial<ThemeConfig>) => void
}>({
  themeConfig: defaultThemeConfig,
  updateThemeConfig: () => {},
})

export function ThemeConfigProvider({
  children,
  initialConfig = {},
}: {
  children: React.ReactNode
  initialConfig?: Partial<ThemeConfig>
}) {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    ...defaultThemeConfig,
    ...initialConfig,
  })

  const updateThemeConfig = (config: Partial<ThemeConfig>) => {
    setThemeConfig((prev) => ({ ...prev, ...config }))
  }

  // Update CSS variables when theme config changes
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--primary", themeConfig.primaryColor)
    root.style.setProperty("--secondary", themeConfig.secondaryColor)
    root.style.setProperty("--accent", themeConfig.accentColor)
  }, [themeConfig])

  return (
    <ThemeConfigContext.Provider value={{ themeConfig, updateThemeConfig }}>{children}</ThemeConfigContext.Provider>
  )
}

export const useThemeConfig = () => useContext(ThemeConfigContext)

