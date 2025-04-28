import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const imagesDir = path.join(process.cwd(), 'private-images');
  const files = await fs.readdir(imagesDir);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  const filePath = path.join(imagesDir, randomFile);
  const imageBuffer = await fs.readFile(filePath);

  res.setHeader('Content-Type', 'image/png');
  res.send(imageBuffer);
}
