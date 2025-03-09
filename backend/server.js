const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/verify-claim', async (req, res) => {
const { claim } = req.body;
if (!claim) {
return res.status(400).json({ error: "No claim provided" });
}

try {
const response = await axios.post('http://localhost:8000/verify-claim', { claim });
res.json(response.data);
} catch (error) {
res.status(500).json({ error: "Error verifying claim" });
}
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});