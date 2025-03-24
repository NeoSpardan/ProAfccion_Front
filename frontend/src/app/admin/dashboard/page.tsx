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
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="properties">Propiedades</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="incidents">Incidencias</TabsTrigger>
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
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimas acciones en la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-md p-2 hover:bg-muted">
                    <div className="rounded-full p-1 bg-green-100">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Nueva propiedad añadida</p>
                      <p className="text-sm text-muted-foreground">
                        Se ha registrado una nueva propiedad en Calle Serrano 45
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Hace 1 hora</div>
                  </div>
                  <div className="flex items-center gap-4 rounded-md p-2 hover:bg-muted">
                    <div className="rounded-full p-1 bg-yellow-100">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Incidencia reportada</p>
                      <p className="text-sm text-muted-foreground">
                        Nueva incidencia en Avenida Principal 5 - Fuga de agua
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Hace 3 horas</div>
                  </div>
                  <div className="flex items-center gap-4 rounded-md p-2 hover:bg-muted">
                    <div className="rounded-full p-1 bg-blue-100">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Nuevo cliente registrado</p>
                      <p className="text-sm text-muted-foreground">
                        María González se ha registrado como nuevo cliente
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Hace 1 día</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Tareas Pendientes</CardTitle>
                <CardDescription>Acciones que requieren atención</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Renovación de contrato</p>
                      <p className="text-sm text-muted-foreground">Plaza Central 3</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Vence en 5 días</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Inspección de propiedad</p>
                      <p className="text-sm text-muted-foreground">Calle Mayor 10</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Programada para mañana</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Actualización de documentos</p>
                      <p className="text-sm text-muted-foreground">Varios clientes</p>
                    </div>
                    <div className="text-sm text-muted-foreground">Pendiente</div>
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

