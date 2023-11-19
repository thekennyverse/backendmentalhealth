// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { loginUser, registerUser } = require('./users');



require('dotenv').config();

const app = express();
const PORT = 4000; 
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


app.get("/test", (req, res) => {
  res.json({test: true});
});

app.post("/login", async (req, res) => {
  const loginData = req.body;
  const authenticated = await loginUser(loginData);
  res.json({ authenticated });
});

app.post("/register", async (req, res) => {
  const loginData = req.body;
  const authenticated = await registerUser(loginData);
  res.json({ authenticated });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
