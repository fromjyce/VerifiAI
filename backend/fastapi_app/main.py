from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import random

app = FastAPI()

class ClaimRequest(BaseModel):
    claim: str

predefined_results = {
    "the earth is flat": {
        "claim": "The Earth is flat",
        "isFake": True,
        "trustScore": 10,
        "sources": [
            {"name": "Snopes", "url": "https://www.snopes.com"},
            {"name": "FactCheck.org", "url": "https://www.factcheck.org"}
        ]
    },
    "vaccines cause autism": {
        "claim": "Vaccines cause autism",
        "isFake": True,
        "trustScore": 15,
        "sources": [
            {"name": "PolitiFact", "url": "https://www.politifact.com"},
            {"name": "Reuters Fact Check", "url": "https://www.reuters.com/fact-check"}
        ]
    },
    "climate change is a hoax": {
        "claim": "Climate change is a hoax",
        "isFake": True,
        "trustScore": 5,
        "sources": [
            {"name": "BBC News", "url": "https://www.bbc.com/news"},
            {"name": "The New York Times", "url": "https://www.nytimes.com"}
        ]
    },
    "the earth revolves around the sun": {
        "claim": "The Earth revolves around the Sun",
        "isFake": False,
        "trustScore": 95,
        "sources": [
            {"name": "NASA", "url": "https://www.nasa.gov"},
            {"name": "European Space Agency", "url": "https://www.esa.int"}
        ]
    },
    "water boils at 100°c at sea level": {
        "claim": "Water boils at 100°C at sea level",
        "isFake": False,
        "trustScore": 98,
        "sources": [
            {"name": "NIST", "url": "https://www.nist.gov"},
            {"name": "BBC Science", "url": "https://www.bbc.co.uk/science"}
        ]
    },
    "humans have 23 pairs of chromosomes": {
        "claim": "Humans have 23 pairs of chromosomes",
        "isFake": False,
        "trustScore": 97,
        "sources": [
            {"name": "National Human Genome Research Institute", "url": "https://www.genomeweb.com"},
            {"name": "Nature Genetics", "url": "https://www.nature.com/ng/"}
        ]
    }
}


@app.post("/verify-claim")
async def verify_claim(request: ClaimRequest):
    claim = request.claim.strip().lower()
    if not claim:
        raise HTTPException(status_code=400, detail="No claim provided")

    if claim in predefined_results:
        return predefined_results[claim]

    verification_result = {
        "claim": request.claim,
        "isFake": random.random() < 0.5,
        "trustScore": random.randint(0, 100),
        "sources": [
            {"name": "Source 1", "url": "http://example.com/source1"},
            {"name": "Source 2", "url": "http://example.com/source2"}
        ]
    }
    return verification_result
