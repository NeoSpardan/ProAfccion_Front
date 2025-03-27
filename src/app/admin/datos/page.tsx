"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Lock, Settings, Shield } from "lucide-react"

export default function AdminDatosPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [personalData, setPersonalData] = useState({
    name: "Admin User",
    email: "admin@proafccion.com",
    phone: "+34 612 345 678",
    role: "Administrador",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handlePersonalDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePersonalDataSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log({
        title: "Datos actualizados",
        description: "Sus datos personales han sido actualizados correctamente.",
      })
    } catch {
      console.log({
        title: "Error",
        description: "No se pudieron guardar los cambios.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate passwords
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        console.log({
          title: "Error",
          description: "Las contraseñas no coinciden.",
          variant: "destructive",
        })
        return
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log({
        title: "Contraseña actualizada",
        description: "Su contraseña ha sido actualizada correctamente.",
      })

      // Reset form
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    } catch {
      console.log({
        title: "Error",
        description: "No se pudieron guardar los cambios.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Get initials from user name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mi Perfil</h1>
        <p className="text-muted-foreground">Gestione su información personal y de seguridad.</p>
      </div>

      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="w-full md:inline-flex md:w-auto overflow-x-auto flex-nowrap justify-start pb-1 mb-1">
          <TabsTrigger value="personal" className="min-w-[100px]">
            Datos Personales
          </TabsTrigger>
          <TabsTrigger value="security" className="min-w-[100px]">
            Seguridad
          </TabsTrigger>
          <TabsTrigger value="settings" className="min-w-[100px]">
            Configuración
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <form onSubmit={handlePersonalDataSubmit}>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>Actualice sus datos personales.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      {getInitials(personalData.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{personalData.name}</p>
                    <p className="text-sm text-muted-foreground">{personalData.role}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={personalData.name}
                    onChange={handlePersonalDataChange}
                    className="h-12 md:h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={personalData.email}
                    onChange={handlePersonalDataChange}
                    className="h-12 md:h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={personalData.phone}
                    onChange={handlePersonalDataChange}
                    className="h-12 md:h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Rol</Label>
                  <Input id="role" name="role" value={personalData.role} disabled className="h-12 md:h-10" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full md:w-auto h-12 md:h-10">
                  {isLoading ? "Guardando..." : "Guardar cambios"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <form onSubmit={handlePasswordSubmit}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle>Seguridad</CardTitle>
                </div>
                <CardDescription>Gestione su contraseña y seguridad de la cuenta.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Contraseña actual</Label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    required
                    className="h-12 md:h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nueva contraseña</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    required
                    className="h-12 md:h-10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                    className="h-12 md:h-10"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full md:w-auto h-12 md:h-10">
                  {isLoading ? "Actualizando..." : "Cambiar contraseña"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <CardTitle>Configuración del Sistema</CardTitle>
              </div>
              <CardDescription>Configuración general del sistema y permisos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">Permisos de administrador</h3>
                        <p className="text-sm text-muted-foreground">Gestionar permisos de usuarios</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-10 md:h-9">
                      Configurar
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">Configuración de informes</h3>
                        <p className="text-sm text-muted-foreground">Personalizar informes y exportaciones</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-10 md:h-9">
                      Configurar
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">Configuración general</h3>
                        <p className="text-sm text-muted-foreground">Ajustes generales del sistema</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-10 md:h-9">
                      Configurar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

