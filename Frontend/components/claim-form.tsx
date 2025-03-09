"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Upload, Mic, Info, X } from "lucide-react"

export function ClaimForm() {
  const [claim, setClaim] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showWarning, setShowWarning] = useState(true)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!claim.trim()) return

    setIsLoading(true)

    // Simulate processing time before redirecting
    setTimeout(() => {
      // Simulate a random verification result for prototyping
      const statuses = ["true", "false", "partially true", "unverifiable"]
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
      const randomTrustScore = Math.floor(Math.random() * 100) + 1
      const result = {
        status: randomStatus,
        trustScore: randomTrustScore,
        explanation: "This is a simulated explanation for prototyping purposes.",
        sources: [
          {
            name: "Source 1",
            reliability: "High",
            excerpt: "This is a simulated source excerpt.",
            url: "https://example.com/source1",
            type: "Article",
          },
          {
            name: "Source 2",
            reliability: "Medium",
            excerpt: "This is another simulated source excerpt.",
            url: "https://example.com/source2",
            type: "Research Paper",
          },
        ],
        lastUpdated: new Date().toISOString(),
      }

      // Encode the result in the URL for the verification results page
      const encodedResult = encodeURIComponent(JSON.stringify(result))
      router.push(`/verify?claim=${encodeURIComponent(claim)}&result=${encodedResult}`)
    }, 1000)
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="pt-6">
        {/* ✅ Added Warning Banner */}
        {showWarning && (
          <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-sm flex items-start gap-3">
            <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-amber-800">
                ⚠️ This page is currently a demonstration and is <strong>not connected to a backend</strong>. The
                fact-checking results shown are for <strong>experience purposes only</strong> and
                <strong> should not be considered accurate or verified</strong>. Please use discretion while
                interpreting the information.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-amber-500 hover:text-amber-700 hover:bg-amber-100"
              onClick={() => setShowWarning(false)}
              aria-label="Dismiss warning"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Enter a claim to verify (e.g., 'COVID-19 vaccines cause infertility.')"
              className="min-h-[120px] resize-none"
              value={claim}
              onChange={(e) => setClaim(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1" disabled={!claim.trim() || isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Verify Claim
                </span>
              )}
            </Button>
            <Button type="button" variant="outline" size="icon" title="Upload image or document">
              <Upload className="h-4 w-4" />
            </Button>
            <Button type="button" variant="outline" size="icon" title="Voice input">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
