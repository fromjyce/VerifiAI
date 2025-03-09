import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Chrome, ChromeIcon as Firefox, Shield, Globe } from "lucide-react"

export function BrowserExtension() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <CardTitle>Browser Extension</CardTitle>
        </div>
        <CardDescription>Verify claims in real-time as you browse the web</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted p-2 border-b flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <div className="text-xs text-muted-foreground">example.com</div>
          </div>
          <div className="p-4 bg-background">
            <div className="mb-4 text-sm">
              <p className="font-medium mb-2">Breaking News: Scientists discover revolutionary treatment</p>
              <p className="text-muted-foreground">
                A new study claims that a common household item can cure multiple diseases...
              </p>
            </div>
            <div className="p-3 bg-card border rounded-md flex items-start gap-3">
              <Shield className="h-5 w-5 text-error mt-0.5" />
              <div>
                <p className="text-sm font-medium">VerifiAI Alert: Potentially Misleading</p>
                <p className="text-xs text-muted-foreground">
                  This claim has been fact-checked and found to be false. Click for details.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button className="w-full">
            <Chrome className="h-4 w-4 mr-2" />
            Chrome
          </Button>
          <Button className="w-full">
            <Firefox className="h-4 w-4 mr-2" />
            Firefox
          </Button>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>
            Our browser extension scans web pages in real-time to identify potentially misleading claims and provides
            instant verification.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

