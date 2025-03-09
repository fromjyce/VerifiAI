"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Upload, Mic } from "lucide-react"

export function ClaimForm() {
  const [claim, setClaim] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!claim.trim()) return

    setIsLoading(true)

    // Simulate processing time before redirecting
    setTimeout(() => {
      // In a real app, you'd send the claim to your backend
      // For demo purposes, we'll encode the claim in the URL
      const encodedClaim = encodeURIComponent(claim)
      router.push(`/verify?claim=${encodedClaim}`)
    }, 1000)
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="pt-6">
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

