const express = require("express");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message;
  // Process the userMessage and generate a bot response
  const botResponse = await axios.post("/api/bot", (req, res) => {
      message:userMessage,
  })`;
  res.json({ response: botResponse });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});