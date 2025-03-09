import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockRecentClaims, getStatusBadge } from "@/lib/utils"
import Link from "next/link"

export function RecentClaims() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Recent Fact-Checks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockRecentClaims.map((claim) => (
          <Link
            key={claim.id}
            href={`/verify?claim=${encodeURIComponent(claim.claim)}&id=${claim.id}`}
            className="block"
          >
            <div className="p-4 rounded-md border hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium line-clamp-2">{claim.claim}</p>
                <Badge variant={getStatusBadge(claim.status)} className="ml-2 whitespace-nowrap">
                  {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                </Badge>
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>Trust Score: {claim.trustScore}%</span>
                <span>Category: {claim.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}

