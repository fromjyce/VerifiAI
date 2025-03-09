"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm VerifiAI's fact-checking assistant. Ask me to verify any claim or help you find reliable information.",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const userInputLower = userInput.toLowerCase()

    if (userInputLower.includes("covid") || userInputLower.includes("vaccine")) {
      return "Based on verified medical sources, COVID-19 vaccines have been thoroughly tested and are safe for most people. They do not cause infertility or alter your DNA. Would you like me to provide specific sources for this information?"
    }

    if (userInputLower.includes("climate") || userInputLower.includes("global warming")) {
      return "Climate change is supported by overwhelming scientific evidence. Over 97% of climate scientists agree that human activities are causing global warming. Would you like me to verify a specific claim about climate change?"
    }

    if (userInputLower.includes("fact") || userInputLower.includes("check") || userInputLower.includes("verify")) {
      return "I'd be happy to help verify that claim. Please provide the specific statement you'd like me to fact-check, and I'll analyze it against our trusted sources."
    }

    return "I can help verify claims and provide reliable information. Could you provide a specific claim or topic you'd like me to check?"
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          Fact-Checking Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="chatbot-container pb-4">
          {messages.map((message) => (
            <div key={message.id} className={`chatbot-message ${message.sender}`}>
              <div>{message.content}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chatbot-message bot">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Input
            placeholder="Ask me to verify a claim..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

