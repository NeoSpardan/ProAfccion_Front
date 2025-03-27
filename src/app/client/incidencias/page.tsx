"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Upload } from "lucide-react"

export default function IncidenciasPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    property: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log({
        title: "Incidencia reportada",
        description: "Su incidencia ha sido reportada correctamente. Le notificaremos cuando sea atendida.",
      })

      // Reset form
      setFormData({
        title: "",
        description: "",
        priority: "",
        property: "",
      })
    } catch {
      console.log({
        title: "Error",
        description: "No se pudieron cargar las incidencias.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reportar Incidencia</h1>
        <p className="text-muted-foreground">Complete el formulario para reportar una nueva incidencia.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-primary" />
          <div>
            <CardTitle>Nueva Incidencia</CardTitle>
            <CardDescription>Proporcione los detalles de la incidencia que desea reportar</CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="property">Propiedad</Label>
              <Select
                value={formData.property}
                onValueChange={(value) => handleSelectChange("property", value)}
                required
              >
                <SelectTrigger className="h-12 md:h-10">
                  <SelectValue placeholder="Seleccione una propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="property1">Calle Mayor 10, 2ºA</SelectItem>
                  <SelectItem value="property2">Avenida Principal 5, 1ºB</SelectItem>
                  <SelectItem value="property3">Plaza Central 3, 3ºC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Título de la incidencia</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ej: Fuga de agua en baño"
                required
                className="h-12 md:h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción detallada</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describa el problema con el mayor detalle posible..."
                rows={5}
                required
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Prioridad</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => handleSelectChange("priority", value)}
                required
              >
                <SelectTrigger className="h-12 md:h-10">
                  <SelectValue placeholder="Seleccione la prioridad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Baja - No urgente</SelectItem>
                  <SelectItem value="medium">Media - Atención en los próximos días</SelectItem>
                  <SelectItem value="high">Alta - Requiere atención inmediata</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachments">Adjuntar imágenes (opcional)</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Haga clic para cargar</span> o arrastre y suelte
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG o JPEG (MAX. 5MB)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" multiple accept="image/*" />
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto h-12 md:h-10">
              {isLoading ? "Enviando..." : "Reportar incidencia"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

