"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { VerificationResults } from "@/components/verification-results"
import { ProcessingScreen } from "@/components/processing-screen"
import { generateMockVerificationResult, mockRecentClaims, type VerificationResult } from "@/lib/utils"

export default function VerifyPage() {
  const searchParams = useSearchParams()
  const encodedClaim = searchParams.get("claim")
  const claimId = searchParams.get("id")
  const claim = encodedClaim ? decodeURIComponent(encodedClaim) : ""

  const [isProcessing, setIsProcessing] = useState(true)
  const [verificationData, setVerificationData] = useState<VerificationResult | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!claim) return

    // If we have a claim ID, try to find it in the mock data
    if (claimId) {
      const existingClaim = mockRecentClaims.find((c) => c.id === claimId)
      if (existingClaim) {
        setVerificationData(existingClaim)
        setIsProcessing(false)
        return
      }
    }

    // Call the backend API to verify the claim
    fetch('http://localhost:3001/verify-claim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ claim }),
    })
      .then((response) => response.json())
      .then((data) => {
        setVerificationData(data);
        setIsProcessing(false);
      })
      .catch((error) => {
        console.error('Error verifying claim:', error);
        setIsProcessing(false);
      });

  }, [claim, claimId])

  if (!isClient) {
    return null
  }

  if (!claim) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">No claim provided</h1>
            <p className="text-muted-foreground mb-6">Please return to the home page and submit a claim to verify.</p>
            <a href="/" className="text-primary hover:underline">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container py-8">
        {isProcessing ? (
          <ProcessingScreen claim={claim} />
        ) : (
          verificationData && <VerificationResults claim={claim} result={verificationData} />
        )}
      </div>
    </main>
  )
}

