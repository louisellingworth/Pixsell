const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public'),
  quality: {
    jpeg: 80,
    webp: 75,
    avif: 60,
    png: 80
  },
  skipExisting: true, // Skip already optimized images
  createWebp: true,   // Create WebP versions
  createAvif: false,  // Create AVIF versions (disabled by default as not all browsers support it)
  resize: false,      // Whether to resize large images
  maxWidth: 1920,     // Maximum width for resized images
  maxHeight: 1080,    // Maximum height for resized images
};

// Function to optimize a single image
async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const dir = path.dirname(inputPath);
  const name = path.basename(inputPath, ext);
  const stats = fs.statSync(inputPath);
  
  // Only process image files
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
    return;
  }
  
  console.log(`Processing ${inputPath} (${(stats.size / 1024).toFixed(2)} KB)`);
  
  // Initialize a sharp instance
  let image = sharp(inputPath);
  
  // Get image metadata
  const metadata = await image.metadata();
  
  // Resize if needed and configured
  if (config.resize && (metadata.width > config.maxWidth || metadata.height > config.maxHeight)) {
    image = image.resize({
      width: Math.min(metadata.width, config.maxWidth),
      height: Math.min(metadata.height, config.maxHeight),
      fit: 'inside',
      withoutEnlargement: true
    });
    console.log(`  Resizing to fit within ${config.maxWidth}x${config.maxHeight}`);
  }
  
  // Optimize based on format
  if (ext === '.jpg' || ext === '.jpeg') {
    const outputPath = path.join(dir, `${name}${ext}`);
    if (!config.skipExisting || !fs.existsSync(outputPath)) {
      await image
        .jpeg({ quality: config.quality.jpeg, progressive: true, optimizeScans: true })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      console.log(`  Saved optimized JPEG: ${(newStats.size / 1024).toFixed(2)} KB (${((1 - newStats.size / stats.size) * 100).toFixed(2)}% smaller)`);
    }
  } else if (ext === '.png') {
    const outputPath = path.join(dir, `${name}${ext}`);
    if (!config.skipExisting || !fs.existsSync(outputPath)) {
      await image
        .png({ quality: config.quality.png, compressionLevel: 9, palette: true })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      console.log(`  Saved optimized PNG: ${(newStats.size / 1024).toFixed(2)} KB (${((1 - newStats.size / stats.size) * 100).toFixed(2)}% smaller)`);
    }
  }
  
  // Create WebP version
  if (config.createWebp) {
    const webpPath = path.join(dir, `${name}.webp`);
    if (!config.skipExisting || !fs.existsSync(webpPath)) {
      await image
        .webp({ quality: config.quality.webp })
        .toFile(webpPath);
      
      const webpStats = fs.statSync(webpPath);
      console.log(`  Created WebP: ${(webpStats.size / 1024).toFixed(2)} KB (${((1 - webpStats.size / stats.size) * 100).toFixed(2)}% smaller than original)`);
    }
  }
  
  // Create AVIF version
  if (config.createAvif) {
    const avifPath = path.join(dir, `${name}.avif`);
    if (!config.skipExisting || !fs.existsSync(avifPath)) {
      try {
        await image
          .avif({ quality: config.quality.avif })
          .toFile(avifPath);
        
        const avifStats = fs.statSync(avifPath);
        console.log(`  Created AVIF: ${(avifStats.size / 1024).toFixed(2)} KB (${((1 - avifStats.size / stats.size) * 100).toFixed(2)}% smaller than original)`);
      } catch (err) {
        console.warn(`  Failed to create AVIF: ${err.message}`);
      }
    }
  }
}

// Main function to process all images
async function optimizeAllImages() {
  // Create scripts directory if it doesn't exist
  if (!fs.existsSync(config.inputDir)) {
    console.error(`Input directory does not exist: ${config.inputDir}`);
    return;
  }
  
  // Find all image files
  const imagePaths = glob.sync(path.join(config.inputDir, '**/*.{jpg,jpeg,png,gif}'));
  
  console.log(`Found ${imagePaths.length} images to process`);
  
  // Process images
  let processed = 0;
  let skipped = 0;
  
  for (const imagePath of imagePaths) {
    try {
      await optimizeImage(imagePath);
      processed++;
    } catch (err) {
      console.error(`Error processing ${imagePath}: ${err.message}`);
      skipped++;
    }
  }
  
  console.log(`\nOptimization complete!`);
  console.log(`Processed: ${processed} images`);
  console.log(`Skipped/Failed: ${skipped} images`);
}

// Run the script
optimizeAllImages().catch(err => {
  console.error('Error in optimization process:', err);
  process.exit(1);
}); 