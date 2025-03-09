import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ClaimStatus = "true" | "false" | "partially true" | "unverifiable"

export type VerificationResult = {
  id: string
  claim: string
  status: ClaimStatus
  trustScore: number
  sources: Source[]
  explanation: string
  lastUpdated: string
  category: string
}

export type Source = {
  id: string
  name: string
  url: string
  excerpt: string
  reliability: "high" | "medium" | "low"
  type: "news" | "academic" | "social" | "government" | "other"
}

export const mockRecentClaims: VerificationResult[] = [
  {
    id: "1",
    claim: "COVID-19 vaccines cause infertility.",
    status: "false",
    trustScore: 12,
    sources: [
      {
        id: "s1",
        name: "Centers for Disease Control and Prevention",
        url: "https://www.cdc.gov",
        excerpt:
          "There is currently no evidence that any vaccines, including COVID-19 vaccines, cause fertility problems in women or men.",
        reliability: "high",
        type: "government",
      },
      {
        id: "s2",
        name: "World Health Organization",
        url: "https://www.who.int",
        excerpt: "The COVID-19 vaccines do not cause infertility. This claim is false.",
        reliability: "high",
        type: "government",
      },
    ],
    explanation:
      "Multiple scientific studies and health organizations have confirmed that COVID-19 vaccines do not affect fertility. This claim has been thoroughly debunked.",
    lastUpdated: "2023-12-15T14:30:00Z",
    category: "Health",
  },
  {
    id: "2",
    claim: "Drinking water with lemon in the morning boosts your metabolism.",
    status: "partially true",
    trustScore: 65,
    sources: [
      {
        id: "s3",
        name: "National Institutes of Health",
        url: "https://www.nih.gov",
        excerpt:
          "While lemons contain vitamin C and antioxidants that are beneficial to health, there is limited scientific evidence that drinking lemon water specifically boosts metabolism significantly.",
        reliability: "high",
        type: "government",
      },
    ],
    explanation:
      "Lemons do contain beneficial nutrients, but the claim about significantly boosting metabolism is exaggerated. Staying hydrated in general is good for metabolic health.",
    lastUpdated: "2023-11-20T09:15:00Z",
    category: "Health",
  },
  {
    id: "3",
    claim: "The Great Wall of China is visible from space with the naked eye.",
    status: "false",
    trustScore: 20,
    sources: [
      {
        id: "s4",
        name: "NASA",
        url: "https://www.nasa.gov",
        excerpt:
          "Contrary to popular belief, the Great Wall of China is not visible from space with the naked eye. Many astronauts have confirmed this.",
        reliability: "high",
        type: "government",
      },
    ],
    explanation:
      "Astronauts have repeatedly confirmed that the Great Wall is not visible from space with the naked eye. This is a common misconception.",
    lastUpdated: "2023-10-05T11:45:00Z",
    category: "Science",
  },
]

export function getStatusColor(status: ClaimStatus): string {
  switch (status) {
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

export function getStatusBadge(status: ClaimStatus): string {
  switch (status) {
    case "true":
      return "success"
    case "partially true":
      return "warning"
    case "false":
      return "error"
    default:
      return "outline"
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleString()
}

export function generateMockVerificationResult(claim: string): VerificationResult {
  // This is just for demo purposes - in a real app, this would come from your AI backend

  // Randomly determine if the claim is true, false, or partially true
  const statusOptions: ClaimStatus[] = ["true", "false", "partially true", "unverifiable"]
  const randomIndex = Math.floor(Math.random() * 4)
  const status = statusOptions[randomIndex]

  // Generate a trust score based on the status
  let trustScore

  switch (status) {
    case "true":
      trustScore = Math.floor(Math.random() * 15) + 85 // 85-100%
      break
    case "partially true":
      trustScore = Math.floor(Math.random() * 20) + 60 // 60-80%
      break
    case "false":
      trustScore = Math.floor(Math.random() * 30) + 10 // 10-40%
      break
    default: // unverifiable
      trustScore = Math.floor(Math.random() * 20) + 40 // 40-60%
  }

  // Generate mock sources
  const sourceTypes: ("news" | "academic" | "social" | "government" | "other")[] = ["news", "academic", "government"]
  const sourceNames = [
    { name: "Reuters", type: "news" },
    { name: "Associated Press", type: "news" },
    { name: "National Institutes of Health", type: "government" },
    { name: "Harvard University Research", type: "academic" },
    { name: "World Health Organization", type: "government" },
  ]

  const numSources = Math.floor(Math.random() * 3) + 2 // 2-4 sources
  const sources: Source[] = []

  for (let i = 0; i < numSources; i++) {
    const sourceIndex = Math.floor(Math.random() * sourceNames.length)
    const source = sourceNames[sourceIndex]

    sources.push({
      id: `s${i + 1}`,
      name: source.name,
      url: `https://www.example.com/${source.name.toLowerCase().replace(/\s/g, "")}`,
      excerpt: `According to our analysis, this claim appears to be ${status}. ${Math.random() > 0.5 ? "Further research supports this conclusion." : "Multiple sources confirm this finding."}`,
      reliability: "high",
      type: source.type as any,
    })
  }

  // Generate explanation
  let explanation = ""
  switch (status) {
    case "true":
      explanation = `Our AI analysis confirms this claim is accurate. Multiple reliable sources have verified this information, and the evidence strongly supports its validity.`
      break
    case "partially true":
      explanation = `This claim contains some accurate elements but also includes misleading or inaccurate information. The overall context is important to understand the full picture.`
      break
    case "false":
      explanation = `Our analysis has determined this claim is false. The information contradicts well-established facts from reliable sources, and no credible evidence supports this claim.`
      break
    default:
      explanation = `We cannot definitively verify or debunk this claim with the available information. There is insufficient evidence from reliable sources to make a determination.`
  }

  // Generate categories
  const categories = ["Politics", "Health", "Science", "Technology", "Environment", "Economy"]
  const category = categories[Math.floor(Math.random() * categories.length)]

  return {
    id: Math.random().toString(36).substring(2, 9),
    claim,
    status,
    trustScore,
    sources,
    explanation,
    lastUpdated: new Date().toISOString(),
    category,
  }
}

