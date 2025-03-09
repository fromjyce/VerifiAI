# VerifiAI - The AI-Powered Guardian of Truth

![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Python%20%7C%20FastAPI%20%7C%20Next.js%20%7C%20Neo4j%20%7C%20Blockchain%20%7C%20LLM%20%20%7C%20TailwindCSS-blue)

VerifiAI is an advanced AI-driven fact-checking system that leverages multiple layers of verification to ensure accuracy and reliability. It continuously collects and processes data from trusted sources, performs claim analysis, and calculates a trust score based on consensus and credibility.

## Key Features
- ✅ **Improved Accuracy** in detecting AI-generated misinformation (**LLM + RAG + Neo4j**)

- ✅ **Real-Time Fact-Checking** with an average response time of **<1.5 sec**

- ✅ **Tamper-proof Verification** via **Blockchain Integration**

- ✅ **Scalable API** processing **millions of claims/min**

- ✅ **Seamless Frontend** (**Next.js, Browser Extensions, Chatbots**)

---

## How VerifiAI Works

### 1. Data Collection & Processing
VerifiAI continuously gathers data from **trusted sources**, including:
- **News articles** from reputable publications
- **Academic journals** and **research papers**
- **Government databases** and **official statements**
- **Fact-checking organizations** and **verified social media posts**

**How it works:**
- **Natural Language Processing (NLP)** extracts claims and context
- **Entity Recognition** identifies key people, places, and concepts
- **Temporal Analysis** determines timeframes and chronology
- **Contextual Analysis** understands implied meanings and relationships

---

### 2. Claim Analysis & Verification Process
- **Core Assertions** identified using NLP
- **Named Entity Recognition (NER)** extracts key elements
- **Contextual Analysis** ensures deeper understanding
- **Knowledge Base Matching** compares against verified facts
- **Source Retrieval & Cross-Referencing** verifies claims across independent sources
- **Consensus Analysis** ensures multiple sources agree
- **Temporal Relevance** checks claim validity over time

---

### 3. Trust Score Calculation
The **Trust Score** is computed using an algorithm that evaluates:
- **Source Reliability Ratings** (historical accuracy of sources)
- **Consensus Level** (agreement among multiple sources)
- **Recency & Relevance** (how recent and relevant the evidence is)
- **Consistency with Established Knowledge**
- **Contradictory Evidence** (whether opposing evidence exists)

---

### 4. Results & Explanation
VerifiAI provides **detailed fact-checking results**, including:

✅ **Final Verdict**: True, False, Partially True, or Unverifiable

📊 **Trust Score**: A numerical representation of confidence level

📑 **Supporting Evidence**: Multiple sources backing the claim

🔍 **Detailed Explanation**: Step-by-step breakdown of verification

🔗 **Source Links**: Direct references for further research

---

## Security & Privacy
- **End-to-End Encryption** for all data transmissions
- **No Permanent Storage** of user queries without consent
- **Regular Security Audits** and **penetration testing**
- **Compliance** with **GDPR & global privacy regulations**
- **Transparent Data Usage Policies** for ethical AI implementation

---

## Getting Started

### **1️. Installation**
Clone the repository:
```sh
 git clone https://github.com/fromjyce/VerifiAI.git
 cd VerifiAI
```
Install dependencies:
```sh
 pip install -r requirements.txt  # Backend dependencies
 npm install  # Frontend dependencies
```

### **2️. Run Backend API**
```sh
 uvicorn app.main:app --reload
```

### **3️. Run Frontend**
```sh
 npm run dev
```

### **4️. Access the Application**
Open your browser and navigate to:
```
http://localhost:3000
```

---

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/verify` | POST | Submit a claim for fact-checking |
| `/sources` | GET | Retrieve trusted sources |
| `/trust-score` | GET | Get Trust Score for a claim |
| `/explanation` | GET | Get detailed verification analysis |


---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


If you find this project useful, give it a ⭐ on GitHub! 

