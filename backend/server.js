const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/verify-claim', (req, res) => {
  const { claim } = req.body;

  // Mock verification result
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
