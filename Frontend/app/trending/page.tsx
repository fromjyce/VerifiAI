import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { mockRecentClaims, getStatusBadge, formatDate } from "@/lib/utils"
import Link from "next/link"

export default function TrendingPage() {
  // Group claims by category
  const categories = [...new Set(mockRecentClaims.map((claim) => claim.category))]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Trending Fact-Checks</h1>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-6">
                {mockRecentClaims.map((claim) => (
                  <ClaimCard key={claim.id} claim={claim} />
                ))}
              </div>
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category} value={category.toLowerCase()}>
                <div className="space-y-6">
                  {mockRecentClaims
                    .filter((claim) => claim.category === category)
                    .map((claim) => (
                      <ClaimCard key={claim.id} claim={claim} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  )
}

function ClaimCard({ claim }: { claim: any }) {
  return (
    <Link href={`/verify?claim=${encodeURIComponent(claim.claim)}&id=${claim.id}`} className="block">
      <Card className="hover:bg-muted/10 transition-colors">
        <CardContent className="p-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-xl font-medium mb-2">{claim.claim}</h2>
              <p className="text-muted-foreground line-clamp-2 mb-4">{claim.explanation}</p>

              <div className="flex flex-wrap gap-2 items-center text-sm">
                <Badge variant={getStatusBadge(claim.status)}>
                  {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                </Badge>
                <span className="text-muted-foreground">Trust Score: {claim.trustScore}%</span>
                <span className="text-muted-foreground">Category: {claim.category}</span>
                <span className="text-muted-foreground">Verified: {formatDate(claim.lastUpdated)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

