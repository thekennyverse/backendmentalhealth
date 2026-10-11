// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { loginUser, registerUser } = require('./users');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.post('/login', async (req, res) => {
  try {
    const authenticated = await loginUser(req.body);
    res.json({ authenticated });
  } catch (err) {
    console.error('Login failed:', err);
    res.status(500).json({ authenticated: false, error: 'Server error' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.status(result.authenticated ? 201 : 400).json(result);
  } catch (err) {
    console.error('Registration failed:', err);
    res.status(500).json({ authenticated: false, error: 'Server error' });
  }
});

// On Vercel the app is exported as a serverless function; locally we listen on a port.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
