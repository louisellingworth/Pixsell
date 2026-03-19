import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const glob = require('glob');

const MAX_DIMENSION = 2000;
const patterns = [
  'public/*.png',
  'public/*.jpg',
  'public/*.jpeg',
  'public/*.webp',
  'public/blog/*.png',
  'public/blog/*.jpg',
  'public/blog/*.jpeg',
  'public/blog/*.webp',
  'public/blog_fixed/*.png',
  'public/blog_fixed/*.jpg',
  'public/blog_fixed/*.jpeg',
  'public/blog_fixed/*.webp',
];

function getAllFiles(patterns) {
  return patterns.flatMap(pattern => glob.sync(pattern));
}

(async () => {
  const files = getAllFiles(patterns);
  for (const file of files) {
    try {
      const image = sharp(file);
      const metadata = await image.metadata();
      if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
        const ext = path.extname(file);
        const base = file.slice(0, -ext.length);
        const tempFile = base + '.tmp' + ext;
        const resized = image.resize({
          width: metadata.width > metadata.height ? MAX_DIMENSION : undefined,
          height: metadata.height > metadata.width ? MAX_DIMENSION : undefined,
          fit: 'inside',
        });
        await resized.toFile(tempFile);
        await fs.rename(tempFile, file);
        console.log(`Resized: ${file} (${metadata.width}x${metadata.height} -> max ${MAX_DIMENSION})`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  console.log('Resizing complete!');
})(); 