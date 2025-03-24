import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SeguimientoPage() {
  const incidents = [
    {
      id: 1,
      title: "Fuga de agua en baño principal",
      reportDate: "15/03/2023",
      status: "En proceso",
      statusColor: "yellow",
    },
    {
      id: 2,
      title: "Problema con la calefacción",
      reportDate: "10/02/2023",
      status: "Resuelta",
      statusColor: "green",
    },
    {
      id: 3,
      title: "Cerradura de puerta principal defectuosa",
      reportDate: "05/01/2023",
      status: "Pendiente",
      statusColor: "red",
    },
  ]

  const getStatusClass = (status: string) => {
    switch (status) {
      case "green":
        return "bg-green-100 text-green-800 border-green-200"
      case "yellow":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "red":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Seguimiento de Incidencias</h1>
        <p className="text-muted-foreground">Consulte el estado de sus incidencias reportadas.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <ClipboardList className="h-8 w-8 text-primary" />
          <div>
            <CardTitle>Estado de Incidencias</CardTitle>
            <CardDescription>Visualice todas sus incidencias y su estado actual</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="space-y-1 mb-2 md:mb-0">
                  <h3 className="font-medium">{incident.title}</h3>
                  <p className="text-sm text-muted-foreground">Reportado: {incident.reportDate}</p>
                </div>
                <Badge variant="outline" className={getStatusClass(incident.statusColor)}>
                  {incident.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

