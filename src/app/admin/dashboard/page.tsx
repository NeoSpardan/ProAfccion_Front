import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Building2, CheckCircle, DollarSign, Users } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Panel de Administración</h1>
        <p className="text-muted-foreground">Bienvenido al panel de administración de Proafccion.</p>
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
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Propiedades</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Total de propiedades administradas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">Clientes activos</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Incidencias Activas</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">Pendientes de resolución</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ingresos Mensuales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€8,450.00</div>
                <p className="text-xs text-muted-foreground">Último mes</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-full lg:col-span-4">
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimas acciones en la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-md p-3 hover:bg-muted/60 transition-colors">
                    <div className="rounded-full p-2 bg-green-100 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <p className="text-sm font-medium leading-none">Nueva propiedad añadida</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Hace 1 hora</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 break-words">
                        Se ha registrado una nueva propiedad en Calle Serrano 45
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-md p-3 hover:bg-muted/60 transition-colors">
                    <div className="rounded-full p-2 bg-yellow-100 flex-shrink-0">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <p className="text-sm font-medium leading-none">Incidencia reportada</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Hace 3 horas</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 break-words">
                        Nueva incidencia en Avenida Principal 5 - Fuga de agua
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-md p-3 hover:bg-muted/60 transition-colors">
                    <div className="rounded-full p-2 bg-blue-100 flex-shrink-0">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <p className="text-sm font-medium leading-none">Nuevo cliente registrado</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Hace 1 día</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 break-words">
                        María González se ha registrado como nuevo cliente
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-full lg:col-span-3">
              <CardHeader>
                <CardTitle>Tareas Pendientes</CardTitle>
                <CardDescription>Acciones que requieren atención</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-md p-3 hover:bg-muted/60 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <p className="text-sm font-medium leading-none">Renovación de contrato</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Vence en 5 días</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Plaza Central 3</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-md p-3 hover:bg-muted/60 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <p className="text-sm font-medium leading-none">Inspección de propiedad</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Programada para mañana</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Calle Mayor 10</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-md p-3 hover:bg-muted/60 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <p className="text-sm font-medium leading-none">Actualización de documentos</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Pendiente</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Varios clientes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="properties" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Propiedades</CardTitle>
              <CardDescription>Resumen de propiedades administradas</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Building2 className="h-10 w-10" />
                <p>Contenido de gestión de propiedades</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Clientes</CardTitle>
              <CardDescription>Información de clientes y contratos</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Users className="h-10 w-10" />
                <p>Contenido de gestión de clientes</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="incidents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Incidencias</CardTitle>
              <CardDescription>Seguimiento y resolución de incidencias</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <AlertTriangle className="h-10 w-10" />
                <p>Contenido de gestión de incidencias</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

