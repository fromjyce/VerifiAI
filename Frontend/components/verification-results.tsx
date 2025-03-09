"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Share2,
  Download,
  Flag,
} from "lucide-react"
import { type VerificationResult, getStatusColor, formatDate } from "@/lib/utils"
import { useState } from "react"

export function VerificationResults({
  claim,
  result,
}: {
  claim: string
  result: VerificationResult
}) {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const getVerdictIcon = () => {
    switch (result.status) {
      case "true":
        return <CheckCircle className="h-6 w-6 text-success" />
      case "false":
        return <XCircle className="h-6 w-6 text-error" />
      case "partially true":
        return <AlertTriangle className="h-6 w-6 text-warning" />
      default:
        return <HelpCircle className="h-6 w-6 text-muted-foreground" />
    }
  }

  const getVerdictBadge = () => {
    switch (result.status) {
      case "true":
        return <Badge variant="success">True</Badge>
      case "false":
        return <Badge variant="error">False</Badge>
      case "partially true":
        return <Badge variant="warning">Partially True</Badge>
      default:
        return <Badge variant="outline">Unverifiable</Badge>
    }
  }

  const getProgressColor = () => {
    switch (result.status) {
      case "true":
        return "bg-success"
      case "partially true":
        return "bg-warning"
      case "false":
        return "bg-error"
      default:
        return "bg-muted"
    }
  }

  const handleFeedback = (isHelpful: boolean) => {
    // In a real app, you would send this feedback to your backend
    console.log(`User feedback: ${isHelpful ? "Helpful" : "Not helpful"}`)
    setFeedbackSubmitted(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Verification Results</CardTitle>
              {getVerdictBadge()}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/50 border">
              <p className="font-medium">"{claim}"</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="trust-score-meter">
                <div
                  className={`trust-score-fill ${getStatusColor(result.status)}`}
                  style={{ height: `${result.trustScore}%` }}
                ></div>
                <div className="text-center">
                  <div className="trust-score-value">{result.trustScore}%</div>
                  <div className="trust-score-label">Trust Score</div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getVerdictIcon()}</div>
                  <div>
                    <p className="font-medium capitalize">{result.status}</p>
                    <p className="text-sm text-muted-foreground mt-1">{result.explanation}</p>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="evidence">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="explanation">Explanation</TabsTrigger>
                <TabsTrigger value="sources">Sources</TabsTrigger>
              </TabsList>

              <TabsContent value="evidence" className="space-y-4 pt-4">
                {result.sources.map((source, index) => (
                  <div key={index} className="p-4 rounded-lg bg-card border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{source.name}</h4>
                      <Badge variant="outline">{source.reliability} reliability</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{source.excerpt}</p>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Source
                    </a>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="explanation" className="pt-4">
                <div className="p-4 rounded-lg bg-card border">
                  <h4 className="font-medium mb-2">AI Analysis</h4>
                  <p className="text-sm mb-4">{result.explanation}</p>

                  <h5 className="text-sm font-medium mb-2">Verification Method</h5>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs">1</span>
                      </div>
                      <span>Claim was broken down into verifiable components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs">2</span>
                      </div>
                      <span>Each component was cross-referenced with our knowledge base</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs">3</span>
                      </div>
                      <span>Multiple trusted sources were consulted for verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs">4</span>
                      </div>
                      <span>Trust score was calculated based on source reliability and consensus</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="sources" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.sources.map((source, index) => (
                    <div key={index} className="p-4 rounded-lg bg-card border">
                      <h4 className="font-medium mb-1">{source.name}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {source.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">Reliability: {source.reliability}</span>
                      </div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Full Source
                      </a>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-xs text-muted-foreground">
              <p>Database last updated: {formatDate(result.lastUpdated)}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <div className="text-sm">Was this verification helpful?</div>
            <div className="flex gap-2">
              {feedbackSubmitted ? (
                <span className="text-sm text-muted-foreground">Thank you for your feedback!</span>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => handleFeedback(true)}>
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Yes
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleFeedback(false)}>
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    No
                  </Button>
                </>
              )}
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="h-4 w-4 mr-2" />
                Share Result
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Flag className="h-4 w-4 mr-2" />
                Report Issue
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Similar Claims</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-md border hover:bg-muted/50 transition-colors">
                <p className="text-sm font-medium line-clamp-2">
                  COVID-19 vaccines are experimental and not properly tested.
                </p>
                <div className="flex justify-between items-center mt-1">
                  <Badge variant="error" className="text-xs">
                    False
                  </Badge>
                  <span className="text-xs text-muted-foreground">Trust: 15%</span>
                </div>
              </div>
              <div className="p-3 rounded-md border hover:bg-muted/50 transition-colors">
                <p className="text-sm font-medium line-clamp-2">
                  COVID-19 vaccines were developed using standard protocols.
                </p>
                <div className="flex justify-between items-center mt-1">
                  <Badge variant="success" className="text-xs">
                    True
                  </Badge>
                  <span className="text-xs text-muted-foreground">Trust: 92%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Verify Another Claim
        </Button>
      </div>
    </div>
  )
}

