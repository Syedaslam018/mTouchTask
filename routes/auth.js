const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET; // Replace with your actual secret key

// Dummy user data (In real applications, use a database)
const dummyUser = {
  id: '12345',
  email: 'admin@example.com',
  password: 'password123',
};

// POST /api/auth/login - Generate JWT Token
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate user credentials (dummy check here)
  if (email === dummyUser.email && password === dummyUser.password) {
    // Generate JWT token
    const token = jwt.sign({ id: dummyUser.id, email: dummyUser.email }, JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
