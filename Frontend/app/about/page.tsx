import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Zap, Lock, Search, FileText, BarChart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">How VerifiAI Works</h1>
          <p className="text-muted-foreground mb-8">
            Our advanced AI-powered fact-checking system uses multiple layers of verification to ensure accuracy and
            reliability.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                Data Collection & Processing
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>
                      VerifiAI continuously collects and processes data from thousands of trusted sources, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>News articles from reputable publications</li>
                      <li>Academic journals and research papers</li>
                      <li>Government databases and official statements</li>
                      <li>Fact-checking organizations and verified social media</li>
                    </ul>
                    <p>
                      Our system uses advanced natural language processing to understand context, identify claims, and
                      extract relevant information from these sources.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Search className="h-6 w-6 text-primary" />
                Claim Analysis
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>
                      When a claim is submitted, our AI breaks it down into verifiable components and analyzes each
                      part:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Natural language understanding identifies the core assertions</li>
                      <li>Entity recognition extracts people, places, organizations, and concepts</li>
                      <li>Temporal analysis determines timeframes and chronology</li>
                      <li>Contextual analysis understands implied meanings and relationships</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Verification Process
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>Our multi-layered verification process ensures thorough fact-checking:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Knowledge base matching compares claims against established facts</li>
                      <li>Source retrieval finds relevant information from trusted sources</li>
                      <li>Cross-referencing verifies information across multiple independent sources</li>
                      <li>Consensus analysis determines the level of agreement among experts</li>
                      <li>Temporal relevance ensures information is up-to-date</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BarChart className="h-6 w-6 text-primary" />
                Trust Score Calculation
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>The Trust Score is calculated using a sophisticated algorithm that considers:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Source reliability ratings based on historical accuracy</li>
                      <li>Consensus level among multiple trusted sources</li>
                      <li>Recency and relevance of supporting evidence</li>
                      <li>Consistency with established knowledge</li>
                      <li>Presence of contradictory evidence</li>
                    </ul>
                    <p>
                      The final score represents our confidence in the claim's accuracy, with higher scores indicating
                      greater reliability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Results & Explanation
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>VerifiAI provides comprehensive results that include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>A clear verdict (True, False, Partially True, or Unverifiable)</li>
                      <li>A numerical Trust Score indicating confidence level</li>
                      <li>Supporting evidence from multiple sources</li>
                      <li>Detailed explanation of the verification process</li>
                      <li>Links to original sources for further research</li>
                    </ul>
                    <p>Our explainable AI approach ensures transparency in how conclusions are reached.</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                Security & Privacy
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>VerifiAI is built with security and privacy as core principles:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>End-to-end encryption for all data transmission</li>
                      <li>No permanent storage of user queries without explicit consent</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Compliance with global privacy regulations</li>
                      <li>Transparent data usage policies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

