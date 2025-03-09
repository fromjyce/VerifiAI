import type React from "react"
import { Navbar } from "@/components/navbar"
import { ClaimForm } from "@/components/claim-form"
import { RecentClaims } from "@/components/recent-claims"
import { ChatbotInterface } from "@/components/chatbot-interface"
import { BrowserExtension } from "@/components/browser-extension"
import { ApiInterface } from "@/components/api-interface"
import { Shield, Database, Zap, Lock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary p-2 rounded-md">
              <Shield className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-primary">Verifi</span>
            <span className="text-secondary">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground">The AI-Powered Guardian of Truth</p>
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Enter any claim below and our advanced AI will verify its accuracy using multiple trusted sources. Get
              instant results with confidence scores and supporting evidence.
            </p>
          </div>
        </div>

        <ClaimForm />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <RecentClaims />
          <ChatbotInterface />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Database className="h-6 w-6 text-primary" />}
              title="Data Collection"
              description="Our system continuously collects and indexes data from trusted sources including news outlets, academic journals, and government databases."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="AI Analysis"
              description="Advanced natural language processing breaks down claims and cross-references them with our extensive knowledge base."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-primary" />}
              title="Verification"
              description="Claims are verified against multiple sources to ensure accuracy, with each source weighted by reliability and relevance."
            />
            <FeatureCard
              icon={<Lock className="h-6 w-6 text-primary" />}
              title="Trust Score"
              description="A comprehensive trust score is calculated based on evidence quality, source reliability, and consensus among trusted sources."
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Integrate VerifiAI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BrowserExtension />
            <ApiInterface />
          </div>
        </div>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">© 2025 VerifiAI. All rights reserved.</p>
          <div className="text-sm text-muted-foreground">
            <span>Database last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

