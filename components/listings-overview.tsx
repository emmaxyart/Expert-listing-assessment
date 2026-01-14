import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home } from "lucide-react"

export function ListingsOverview() {
  return (
    <Card className="border-none bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-blue-600" />
            <CardTitle className="text-lg font-bold">Listings Overview</CardTitle>
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
            <p className="text-2xl font-bold">1.8k</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Active</p>
            <p className="text-2xl font-bold">80</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Archived</p>
            <p className="text-2xl font-bold">1k</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
