import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export function UsersOverview() {
  return (
    <Card className="border-none bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <CardTitle className="text-lg font-bold">Users Overview</CardTitle>
          </div>
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
            View all →
          </a>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-muted-foreground text-xs mb-1">Total</p>
            <p className="text-2xl font-bold">20.7k</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Riders</p>
            <p className="text-2xl font-bold">8.5k</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Subscribers</p>
            <p className="text-2xl font-bold">7.5k</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
