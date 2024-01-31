const express = require('express');
const fetch = require('node-fetch');
const app = express();
const BIN_ID = '65ba84021f5677401f28f3cb';
const X_MASTER_KEY = '$2a$10$SPnSCePVMiT4fZnmd.DVkOYXTe9wOTGzhsevMfAVMbTaXoroZSa6y';

app.use(express.json());

app.post('/guardar-datos', async (req, res) => {
  const url = `https://api.jsonbin.io/b/${BIN_ID}`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': X_MASTER_KEY,
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(req.body),
    });

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
