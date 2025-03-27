"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useThemeConfig } from "@/components/theme-config-provider"
import { BrandLogo } from "@/components/brand-logo"

export default function ForgotPasswordPage() {
  const { themeConfig } = useThemeConfig()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call with reduced timeout
      await new Promise((resolve) => setTimeout(resolve, 300))

      if (email) {
        setIsSuccess(true)
        console.log({
          title: "Solicitud enviada",
          description: "Se ha enviado un correo electrónico con instrucciones para restablecer su contraseña.",
        })
      } else {
        console.log({
          title: "Error",
          description: "Por favor, ingrese su dirección de correo electrónico.",
          variant: "destructive",
        })
      }
    } catch {
      console.log({
        title: "Error",
        description: "Ha ocurrido un error. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Add viewport meta tag for mobile optimization
  useEffect(() => {
    // Check if document is defined (client-side)
    if (typeof document !== "undefined") {
      // Get existing viewport meta tag or create a new one
      let viewportMeta = document.querySelector('meta[name="viewport"]')
      if (!viewportMeta) {
        viewportMeta = document.createElement("meta")
        viewportMeta.setAttribute("name", "viewport")
        document.head.appendChild(viewportMeta)
      }

      // Set viewport content for optimal mobile experience
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0")
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Branding Section */}
      <div className="bg-primary text-primary-foreground md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <BrandLogo className="h-8 w-8" />
          <span className="text-2xl font-bold">{themeConfig.brandName}</span>
        </div>

        <div className="my-auto py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">Recover Your Access</h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-md">
            We&apos;ll help you reset your password and get back to managing your properties.
          </p>
        </div>

        <div className="hidden md:block">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} {themeConfig.brandName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Forgot Password Form Section */}
      <div className="md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Recuperar contraseña</CardTitle>
              <CardDescription>
                Ingrese su dirección de correo electrónico y le enviaremos instrucciones para restablecer su contraseña.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isSuccess ? (
                <Alert className="bg-green-50 border-green-200">
                  <AlertTitle className="text-green-800">Solicitud enviada</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Hemos enviado un correo electrónico a <strong>{email}</strong> con instrucciones para restablecer su
                    contraseña. Por favor, revise su bandeja de entrada.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      className="pl-10 h-12 md:h-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              {isSuccess ? (
                <Button className="w-full h-12 md:h-10" variant="outline" asChild>
                  <Link href="/" className="flex items-center justify-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al inicio de sesión
                  </Link>
                </Button>
              ) : (
                <>
                  <Button className="w-full h-12 md:h-10" type="submit" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar instrucciones"}
                  </Button>
                  <Button className="w-full h-12 md:h-10" variant="outline" asChild>
                    <Link href="/" className="flex items-center justify-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Volver al inicio de sesión
                    </Link>
                  </Button>
                </>
              )}
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

