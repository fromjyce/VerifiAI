import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Database, Search, Zap, FileText } from "lucide-react"

export function ProcessingScreen({ claim }: { claim: string }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-center">Verifying Claim</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2 font-medium">"{claim}"</p>
            <p>Our AI is analyzing this claim against multiple trusted sources...</p>
          </div>

          <div className="relative flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-12 w-12 text-primary animate-pulse" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-primary/30 pulse-ring"></div>
          </div>

          <div className="relative h-40 border rounded-lg overflow-hidden">
            <div className="scanning-line"></div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="space-y-2">
                <div className="h-6 bg-muted/50 rounded animate-pulse"></div>
                <div className="h-4 bg-muted/30 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-muted/30 rounded w-1/2 animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="h-6 bg-muted/50 rounded animate-pulse"></div>
                <div className="h-4 bg-muted/30 rounded w-2/3 animate-pulse"></div>
                <div className="h-4 bg-muted/30 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
              <div className="text-xs text-center text-muted-foreground">
                Scanning knowledge base and trusted sources
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ProcessingStep
              icon={<Search className="h-5 w-5" />}
              title="Analyzing Claim"
              description="Breaking down the claim into verifiable components"
              active={true}
              completed={true}
            />
            <ProcessingStep
              icon={<Database className="h-5 w-5" />}
              title="Retrieving Evidence"
              description="Searching our database for relevant information"
              active={true}
              completed={true}
            />
            <ProcessingStep
              icon={<Zap className="h-5 w-5" />}
              title="Cross-Referencing"
              description="Comparing data from multiple trusted sources"
              active={true}
              completed={false}
            />
            <ProcessingStep
              icon={<FileText className="h-5 w-5" />}
              title="Generating Report"
              description="Compiling evidence and calculating trust score"
              active={false}
              completed={false}
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Data Sources Being Checked</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DataSource name="News Articles" count={42} />
          <DataSource name="Academic Papers" count={18} />
          <DataSource name="Government Data" count={23} />
          <DataSource name="Fact-Check Archives" count={56} />
        </div>
      </div>
    </div>
  )
}

function ProcessingStep({
  icon,
  title,
  description,
  active,
  completed,
}: {
  icon: React.ReactNode
  title: string
  description: string
  active: boolean
  completed: boolean
}) {
  let statusClass = "bg-card border-muted text-muted-foreground"

  if (active && completed) {
    statusClass = "bg-success/10 border-success/30 text-success"
  } else if (active && !completed) {
    statusClass = "bg-primary/10 border-primary/30 text-primary"
  }

  return (
    <div className={`flex flex-col items-center gap-2 p-4 rounded-lg border text-center ${statusClass}`}>
      <div className="mt-0.5">{icon}</div>
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}

function DataSource({ name, count }: { name: string; count: number }) {
  return (
    <div className="p-3 rounded-lg border bg-card/50 flex flex-col items-center justify-center text-center">
      <div className="text-sm font-medium">{name}</div>
      <div className="text-2xl font-bold text-primary">{count}</div>
      <div className="text-xs text-muted-foreground">sources</div>
    </div>
  )
}

