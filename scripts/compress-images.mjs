import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targets = [
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

(async () => {
  for (const pattern of targets) {
    const dir = path.join(__dirname, path.dirname(pattern));
    const files = await imagemin([pattern], {
      destination: dir,
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminWebp({ quality: 75 }),
      ],
    });
    files.forEach(f => {
      console.log(`Compressed: ${f.destinationPath}`);
    });
  }
  console.log('Image compression complete!');
})(); 