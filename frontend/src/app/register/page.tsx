"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Lock, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useThemeConfig } from "@/components/theme-config-provider"
import { BrandLogo } from "@/components/brand-logo"

export default function RegisterPage() {
  const router = useRouter()
  const { themeConfig } = useThemeConfig()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
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
      // Validate form
      if (!formData.name || !formData.email || !formData.password) {
        console.log({
          title: "Error de registro",
          description: "Por favor, complete todos los campos requeridos.",
          variant: "destructive",
        })
        return
      }

      if (formData.password !== formData.confirmPassword) {
        console.log({
          title: "Error de registro",
          description: "Las contraseñas no coinciden.",
          variant: "destructive",
        })
        return
      }

      if (!formData.terms) {
        console.log({
          title: "Error de registro",
          description: "Debe aceptar los términos y condiciones.",
          variant: "destructive",
        })
        return
      }

      // Simulate API call with reduced timeout
      await new Promise((resolve) => setTimeout(resolve, 300))

      console.log({
        title: "Registro exitoso",
        description: "Su cuenta ha sido creada. Redirigiendo al dashboard...",
      })

      // Redirect based on email
      if (formData.email === "admin@admin.com") {
        router.push("/admin/dashboard")
      } else {
        router.push("/client/dashboard")
      }
    } catch (error) {
      console.log({
        title: "Error de registro",
        description: "Ha ocurrido un error. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Branding Section */}
      <div className="bg-primary text-primary-foreground md:w-1/2 p-8 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <BrandLogo className="h-8 w-8" />
          <span className="text-2xl font-bold">{themeConfig.brandName}</span>
        </div>

        <div className="my-auto py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Platform</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-md">
            Create an account to start managing your properties efficiently.
          </p>
        </div>

        <div className="hidden md:block">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} {themeConfig.brandName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Register Form Section */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
              <CardDescription>Enter your information to create an account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="pl-10"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="pl-10"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: checked as boolean }))}
                  required
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Creando cuenta..." : "Create account"}
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link href="/" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
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

