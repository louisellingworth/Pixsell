const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const largeImages = [
  'out/pixsell-meta-image.png',
  'out/Pixsell Logo.png',
  'out/steam Logo .gif'
];

async function optimizeLargeImages() {
  console.log('🔧 Optimizing large images...\n');
  
  for (const imagePath of largeImages) {
    if (!fs.existsSync(imagePath)) {
      console.log(`⚠️  Skipping ${imagePath} - file not found`);
      continue;
    }
    
    const stats = fs.statSync(imagePath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`Processing ${path.basename(imagePath)} (${originalSize} MB)`);
    
    try {
      const outputPath = imagePath.replace(/\.[^.]+$/, '-optimized.webp');
      
      if (imagePath.endsWith('.gif')) {
        // For GIF, convert to optimized WebP
        await sharp(imagePath, { animated: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
      } else {
        // For PNG/JPG, resize first if too large, then convert to WebP
        const image = sharp(imagePath);
        const metadata = await image.metadata();
        
        // If image is very large, resize it first
        let processedImage = image;
        if (metadata.width > 2000 || metadata.height > 2000) {
          console.log(`  📏 Resizing from ${metadata.width}x${metadata.height} to max 2000px`);
          processedImage = image.resize(2000, 2000, {
            fit: 'inside',
            withoutEnlargement: true
          });
        }
        
        await processedImage
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
      }
      
      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024 / 1024).toFixed(2);
      const reduction = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
      
      console.log(`  ✅ Optimized: ${newSize} MB (${reduction}% reduction)`);
      console.log(`  📁 Saved as: ${path.basename(outputPath)}\n`);
      
    } catch (error) {
      console.error(`  ❌ Error optimizing ${imagePath}:`, error.message);
    }
  }
  
  console.log('🎉 Large image optimization complete!');
}

optimizeLargeImages().catch(console.error); 