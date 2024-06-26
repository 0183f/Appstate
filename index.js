const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const login = require('./login');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await login(email, password);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
    
