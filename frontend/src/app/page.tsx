"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useThemeConfig } from "@/components/theme-config-provider"
import { BrandLogo } from "@/components/brand-logo"

export default function LoginPage() {
  const router = useRouter()
  const { themeConfig } = useThemeConfig()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call with reduced timeout (300ms instead of 1000ms)
      await new Promise((resolve) => setTimeout(resolve, 300))

      // In a real app, you would validate credentials here
      if (formData.email && formData.password) {
        console.log("Inicio de sesión exitoso. Redirigiendo al dashboard...")

        // Redirect based on email
        if (formData.email === "admin@admin.com") {
          router.push("/admin/dashboard")
        } else {
          router.push("/client/dashboard")
        }
      } else {
        console.log("Error de inicio de sesión: Por favor, complete todos los campos requeridos.")
      }
    } catch (error) {
      console.log("Error de inicio de sesión: Ha ocurrido un error. Por favor, inténtelo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Branding Section */}
      <div className="bg-primary text-primary-foreground md:w-1/2 p-8 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <BrandLogo className="h-10 w-10" />
          <span className="text-2xl font-bold">{themeConfig.brandName}</span>
        </div>

        <div className="my-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Property Management Simplified</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-md">
            Streamline your property administration with our comprehensive solution.
          </p>
        </div>

        <div className="hidden md:block">
          <p className="text-sm opacity-75">
            © 2025 {themeConfig.brandName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="pl-10"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, remember: checked as boolean }))}
                />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me for 30 days
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Sign in"}
              </Button>
              <div className="flex justify-between items-center w-full text-sm text-muted-foreground">
                <Link href="/register" className="text-primary hover:underline">
                  Create an account
                </Link>
                <Link href="/forgot-password" className="text-primary hover:underline">
                  ¿Has olvidado la contraseña?
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden p-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {themeConfig.brandName}. All rights reserved.
        </p>
      </div>
    </div>
  )
}

