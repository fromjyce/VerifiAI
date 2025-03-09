import Link from "next/link"
import { Shield, Download, Code } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-md">
            <Shield className="h-6 w-6 text-secondary" />
          </div>
          <span className="text-xl font-bold">
            <span className="text-primary">Verifi</span>
            <span className="text-secondary">AI</span>
          </span>
        </Link>
        <nav className="ml-8 hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/trending" className="text-sm font-medium hover:text-primary transition-colors">
            Trending Claims
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <Button variant="outline" size="sm" className="gap-1.5">
              <Link href="#extension" className="flex items-center gap-1.5">
                <Download className="h-4 w-4" />
                <span>Extension</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Link href="#extension" className="flex items-center gap-1.5">
                <Code className="h-4 w-4" />
                <span>API</span>
              </Link>
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

