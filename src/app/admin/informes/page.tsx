"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Download, FileText, PieChart, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function InformesPage() {
  const [dateRange, setDateRange] = useState("month")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Informes</h1>
        <p className="text-muted-foreground">Acceda a informes detallados y estadísticas del sistema.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Panel de Informes</h2>
          <p className="text-sm text-muted-foreground">Visualice y exporte informes detallados</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="grid gap-2 flex-1 sm:flex-initial">
            <Label htmlFor="date-range" className="sr-only">
              Rango de fechas
            </Label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger id="date-range" className="w-full sm:w-[180px] h-12 md:h-10">
                <SelectValue placeholder="Seleccionar periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última semana</SelectItem>
                <SelectItem value="month">Último mes</SelectItem>
                <SelectItem value="quarter">Último trimestre</SelectItem>
                <SelectItem value="year">Último año</SelectItem>
                <SelectItem value="all">Todo el historial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="icon" className="h-12 w-12 md:h-10 md:w-10">
            <Download className="h-4 w-4" />
            <span className="sr-only">Descargar informe</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full md:inline-flex md:w-auto overflow-x-auto flex-nowrap justify-start pb-1 mb-1">
          <TabsTrigger value="overview" className="min-w-[100px]">
            Resumen
          </TabsTrigger>
          <TabsTrigger value="properties" className="min-w-[100px]">
            Propiedades
          </TabsTrigger>
          <TabsTrigger value="clients" className="min-w-[100px]">
            Clientes
          </TabsTrigger>
          <TabsTrigger value="incidents" className="min-w-[100px]">
            Incidencias
          </TabsTrigger>
          <TabsTrigger value="financial" className="min-w-[100px]">
            Financiero
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Propiedades</CardTitle>
                <div className="h-4 w-4 text-muted-foreground">24</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 desde el último periodo</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
                <div className="h-4 w-4 text-muted-foreground">18</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">+3 desde el último periodo</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Incidencias Activas</CardTitle>
                <div className="h-4 w-4 text-muted-foreground">7</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">-2 desde el último periodo</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
                <div className="h-4 w-4 text-muted-foreground">€</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€8,450.00</div>
                <p className="text-xs text-muted-foreground">+12% desde el último periodo</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Distribución de Incidencias</CardTitle>
                <CardDescription>Incidencias por estado y categoría</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <PieChart className="h-10 w-10" />
                  <p>Gráfico de distribución de incidencias</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tendencia de Ingresos</CardTitle>
                <CardDescription>Evolución de ingresos en el tiempo</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <TrendingUp className="h-10 w-10" />
                  <p>Gráfico de tendencia de ingresos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="properties" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Informe de Propiedades</CardTitle>
              </div>
              <CardDescription>Análisis detallado de todas las propiedades administradas</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-10 w-10" />
                <p>Contenido del informe de propiedades</p>
                <Button variant="outline" className="mt-4 h-12 md:h-10">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar a Excel
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>Informe de Clientes</CardTitle>
              </div>
              <CardDescription>Análisis detallado de todos los clientes y su actividad</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-10 w-10" />
                <p>Contenido del informe de clientes</p>
                <Button variant="outline" className="mt-4 h-12 md:h-10">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar a Excel
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Informe de Incidencias</CardTitle>
              </div>
              <CardDescription>Análisis detallado de todas las incidencias reportadas</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-10 w-10" />
                <p>Contenido del informe de incidencias</p>
                <Button variant="outline" className="mt-4 h-12 md:h-10">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar a Excel
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Informe Financiero</CardTitle>
              </div>
              <CardDescription>Análisis detallado de ingresos, gastos y balance</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-10 w-10" />
                <p>Contenido del informe financiero</p>
                <Button variant="outline" className="mt-4 h-12 md:h-10">
                  <Download className="mr-2 h-4 w-4" />
                  Exportar a Excel
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

