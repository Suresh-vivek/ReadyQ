import express from "express";
import cors from "cors";
import { spawn } from "child_process";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 5000;
let pythonProcess; // Declare pythonProcess globally to access it outside the route handler

app.use(cors());
app.use(bodyParser.json());

app.post("/process-url", (req, res) => {
  const url = req.body.url;

  // If there's a pythonProcess running, kill it
  if (pythonProcess) {
    pythonProcess.kill();
    
  }
 

  
  

  // Start a new pythonProcess with the new URL
  pythonProcess = spawn("python3", ["get-data.py", url]);

  let resultData = "";

  pythonProcess.stdout.on("data", (data) => {
    resultData += data.toString();
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      const jsonData = JSON.parse(resultData);
      res.json(jsonData);
    } else {
      res
        .status(500)
        .json({ error: "Failed to fetch data from Python script." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
