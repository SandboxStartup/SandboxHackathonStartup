const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: 'http://localhost:8081', // Replace with the URL of your app
})); // Allow cross-origin requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.post('/api/createUser', (req, res) => {
  console.log('Request body:', req.body);
  const user = req.body;
  // Handle user creation logic here
  console.log('User created:', user);
  res.status(201).json({ message: 'User created successfully', user });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
