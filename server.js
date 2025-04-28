const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ランダム画像API
app.get('/', (req, res) => {
  const imagesDir = path.join(__dirname, 'private-images');
  const files = fs.readdirSync(imagesDir);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  const filePath = path.join(imagesDir, randomFile);

  res.setHeader('Content-Type', 'image/png');
  res.sendFile(filePath);
});

// 起動
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
