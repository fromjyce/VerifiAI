"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Copy } from "lucide-react"
import { useState } from "react"

export function ApiInterface() {
  const [apiKey, setApiKey] = useState("YOUR_DUMMY_API_KEY");

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey).then(() => {
      alert("API Key copied to clipboard!");
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <CardTitle>Developer API</CardTitle>
        </div>
        <CardDescription>Integrate fact-checking into your applications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-md bg-muted p-4 font-mono text-sm overflow-x-auto">
          <pre>
            {`// Example API request
fetch('https://api.verifiai.com/v1/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    claim: "COVID-19 vaccines cause infertility"
  })
})`}
          </pre>
        </div>

        <div className="rounded-md bg-muted p-4 font-mono text-sm overflow-x-auto">
          <pre>
            {`// Example response
{
  "status": "false",
  "trustScore": 12,
  "explanation": "This claim is false...",
  "sources": [...]
}`}
          </pre>
        </div>

        <Button className="w-full" onClick={handleCopy}>
          <Copy className="h-4 w-4 mr-2" />
          Get API Key
        </Button>
      </CardContent>
    </Card>
  )
}

