import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  BarChart3,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Users,
  ShoppingBag,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido a su panel de administración de propiedades.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="analytics">Análisis</TabsTrigger>
          <TabsTrigger value="reports">Informes</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Propiedades</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Propiedades administradas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recibos Pendientes</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Pendientes de pago</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Incidencias Activas</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">En proceso de resolución</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pagos Recientes</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€1,250.00</div>
                <p className="text-xs text-muted-foreground">Último mes</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Resumen de Actividad</CardTitle>
                <CardDescription>Actividad reciente en sus propiedades</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-md p-2 hover:bg-muted">
                    <div className="rounded-full p-1 bg-green-100">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Pago recibido</p>
                      <p className="text-sm text-muted-foreground">
                        Se ha registrado un pago de €450.00 para la propiedad Calle Mayor 10
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Hace 2 días</div>
                  </div>
                  <div className="flex items-center gap-4 rounded-md p-2 hover:bg-muted">
                    <div className="rounded-full p-1 bg-yellow-100">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Nueva incidencia</p>
                      <p className="text-sm text-muted-foreground">
                        Se ha reportado una incidencia en la propiedad Avenida Principal 5
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Hace 5 días</div>
                  </div>
                  <div className="flex items-center gap-4 rounded-md p-2 hover:bg-muted">
                    <div className="rounded-full p-1 bg-blue-100">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Documento actualizado</p>
                      <p className="text-sm text-muted-foreground">
                        Se ha actualizado la documentación de la propiedad Plaza Central 3
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">Hace 1 semana</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Próximos Vencimientos</CardTitle>
                <CardDescription>Pagos y renovaciones próximas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Recibo mensual</p>
                      <p className="text-sm text-muted-foreground">Calle Mayor 10</p>
                    </div>
                    <div className="text-sm font-medium">€450.00</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Derrama extraordinaria</p>
                      <p className="text-sm text-muted-foreground">Avenida Principal 5</p>
                    </div>
                    <div className="text-sm font-medium">€200.00</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Renovación contrato</p>
                      <p className="text-sm text-muted-foreground">Plaza Central 3</p>
                    </div>
                    <div className="text-sm text-muted-foreground">15/06/2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Gastos</CardTitle>
              <CardDescription>Distribución de gastos por categoría</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-10 w-10" />
                <p>Gráfico de análisis de gastos</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informes Disponibles</CardTitle>
              <CardDescription>Acceda a los informes detallados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Proveedores</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Informe de proveedores y servicios contratados</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Inquilinos</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Informe de inquilinos y estado de contratos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Incidencias</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Informe de incidencias y resoluciones</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Últimas notificaciones y alertas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-md p-2 hover:bg-muted">
                  <div className="rounded-full p-1 bg-yellow-100">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Recordatorio de pago</p>
                    <p className="text-sm text-muted-foreground">
                      Tiene un recibo pendiente de pago que vence en 5 días
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">Hace 1 día</div>
                </div>
                <div className="flex items-start gap-4 rounded-md p-2 hover:bg-muted">
                  <div className="rounded-full p-1 bg-blue-100">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Nuevo documento</p>
                    <p className="text-sm text-muted-foreground">Se ha añadido un nuevo documento a su propiedad</p>
                  </div>
                  <div className="text-sm text-muted-foreground">Hace 3 días</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

