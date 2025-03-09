const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const predefinedResults = {
  "the earth is flat": {
    claim: "The Earth is flat",
    isFake: true,
    trustScore: 10,
    sources: [
      { name: "Snopes", url: "https://www.snopes.com" },
      { name: "FactCheck.org", url: "https://www.factcheck.org" }
    ]
  },
  "vaccines cause autism": {
    claim: "Vaccines cause autism",
    isFake: true,
    trustScore: 15,
    sources: [
      { name: "PolitiFact", url: "https://www.politifact.com" },
      { name: "Reuters Fact Check", url: "https://www.reuters.com/fact-check" }
    ]
  },
  "climate change is a hoax": {
    claim: "Climate change is a hoax",
    isFake: true,
    trustScore: 5,
    sources: [
      { name: "BBC News", url: "https://www.bbc.com/news" },
      { name: "The New York Times", url: "https://www.nytimes.com" }
    ]
  },
  "the earth revolves around the sun": {
    claim: "The Earth revolves around the Sun",
    isFake: false,
    trustScore: 95,
    sources: [
      { name: "NASA", url: "https://www.nasa.gov" },
      { name: "European Space Agency", url: "https://www.esa.int" }
    ]
  },
  "water boils at 100°c at sea level": {
    claim: "Water boils at 100°C at sea level",
    isFake: false,
    trustScore: 98,
    sources: [
      { name: "NIST", url: "https://www.nist.gov" },
      { name: "BBC Science", url: "https://www.bbc.co.uk/science" }
    ]
  },
  "humans have 23 pairs of chromosomes": {
    claim: "Humans have 23 pairs of chromosomes",
    isFake: false,
    trustScore: 97,
    sources: [
      { name: "National Human Genome Research Institute", url: "https://www.genomeweb.com" },
      { name: "Nature Genetics", url: "https://www.nature.com/ng/" }
    ]
  }
};

app.post('/verify-claim', (req, res) => {
  const { claim } = req.body;
  if (!claim) {
    return res.status(400).json({ error: "No claim provided" });
  }
  
  const formattedClaim = claim.trim().toLowerCase();

  const matchingKey = Object.keys(predefinedResults).find(key => key === formattedClaim);

  if (matchingKey) {
    return res.json(predefinedResults[matchingKey]); // Return predefined result
  }

  const verificationResult = {
    claim,
    isFake: Math.random() < 0.5,
    trustScore: Math.floor(Math.random() * 100),
    sources: [
      { name: "Source 1", url: "http://example.com/source1" },
      { name: "Source 2", url: "http://example.com/source2" }
    ]
  };

  res.json(verificationResult);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
