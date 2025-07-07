const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');
const chalk = require('chalk');

// Enhanced configuration
const config = {
  inputDir: path.join(__dirname, '../public'),
  quality: {
    jpeg: 75,
    webp: 70,
    avif: 60,
    png: 75
  },
  skipExisting: false, // Process all images
  createWebp: true,
  createAvif: false,
  resize: true,      // Enable resizing for large images
  maxWidth: 1920,
  maxHeight: 1080,
  // For very large images, create multiple sizes
  responsiveSizes: [320, 640, 1024, 1920],
  // Progressive JPEG for better perceived performance
  progressive: true,
  // Strip metadata to reduce file size
  stripMetadata: true,
};

// Function to get human readable file size
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Function to optimize a single image with enhanced features
async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const dir = path.dirname(inputPath);
  const name = path.basename(inputPath, ext);
  const stats = fs.statSync(inputPath);
  
  // Only process image files
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
    return;
  }
  
  console.log(chalk.blue(`Processing ${path.relative(config.inputDir, inputPath)} (${formatBytes(stats.size)})`));
  
  try {
    // Initialize sharp with metadata stripping
    let image = sharp(inputPath);
    
    if (config.stripMetadata) {
      image = image.withMetadata(false);
    }
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // Resize if needed
    if (config.resize && (metadata.width > config.maxWidth || metadata.height > config.maxHeight)) {
      image = image.resize({
        width: Math.min(metadata.width, config.maxWidth),
        height: Math.min(metadata.height, config.maxHeight),
        fit: 'inside',
        withoutEnlargement: true
      });
      console.log(chalk.yellow(`  Resizing to fit within ${config.maxWidth}x${config.maxHeight}`));
    }
    
    // Optimize based on format
    if (ext === '.jpg' || ext === '.jpeg') {
      const outputPath = path.join(dir, `${name}-optimized${ext}`);
      await image
        .jpeg({ 
          quality: config.quality.jpeg, 
          progressive: config.progressive, 
          optimizeScans: true,
          mozjpeg: true // Use mozjpeg for better compression
        })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(2);
      console.log(chalk.green(`  ✓ Optimized JPEG: ${formatBytes(newStats.size)} (${savings}% smaller)`));
    } else if (ext === '.png') {
      const outputPath = path.join(dir, `${name}-optimized${ext}`);
      await image
        .png({ 
          quality: config.quality.png, 
          compressionLevel: 9, 
          palette: true,
          progressive: true
        })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(2);
      console.log(chalk.green(`  ✓ Optimized PNG: ${formatBytes(newStats.size)} (${savings}% smaller)`));
    }
    
    // Create WebP version
    if (config.createWebp) {
      const webpPath = path.join(dir, `${name}.webp`);
      try {
        await image
          .webp({ 
            quality: config.quality.webp,
            effort: 6, // Higher effort for better compression
            nearLossless: false
          })
          .toFile(webpPath);
        
        const webpStats = fs.statSync(webpPath);
        const savings = ((1 - webpStats.size / stats.size) * 100).toFixed(2);
        console.log(chalk.green(`  ✓ WebP: ${formatBytes(webpStats.size)} (${savings}% smaller than original)`));
      } catch (err) {
        console.warn(chalk.yellow(`  ⚠ Failed to create WebP: ${err.message}`));
      }
    }
    
    // Create responsive sizes for large images
    if (metadata.width > 1024 && config.responsiveSizes.length > 0) {
      console.log(chalk.blue(`  Creating responsive sizes...`));
      
      for (const size of config.responsiveSizes) {
        if (size < metadata.width) {
          const responsivePath = path.join(dir, `${name}-${size}w.webp`);
          try {
            await image
              .resize(size, null, { withoutEnlargement: true })
              .webp({ quality: config.quality.webp })
              .toFile(responsivePath);
            
            const responsiveStats = fs.statSync(responsivePath);
            console.log(chalk.green(`    ✓ ${size}w: ${formatBytes(responsiveStats.size)}`));
          } catch (err) {
            console.warn(chalk.yellow(`    ⚠ Failed to create ${size}w: ${err.message}`));
          }
        }
      }
    }
    
  } catch (err) {
    console.error(chalk.red(`  ✗ Error: ${err.message}`));
    throw err;
  }
}

// Function to create a picture element HTML snippet
function generatePictureElement(imagePath, alt = '') {
  const dir = path.dirname(imagePath);
  const name = path.basename(imagePath, path.extname(imagePath));
  const ext = path.extname(imagePath);
  
  let html = `<picture>\n`;
  
  // Add WebP source if it exists
  const webpPath = path.join(dir, `${name}.webp`);
  if (fs.existsSync(webpPath)) {
    html += `  <source srcset="/${path.relative(config.inputDir, webpPath)}" type="image/webp">\n`;
  }
  
  // Add responsive sources if they exist
  for (const size of config.responsiveSizes) {
    const responsivePath = path.join(dir, `${name}-${size}w.webp`);
    if (fs.existsSync(responsivePath)) {
      html += `  <source srcset="/${path.relative(config.inputDir, responsivePath)}" media="(max-width: ${size}px)">\n`;
    }
  }
  
  // Add fallback image
  html += `  <img src="/${path.relative(config.inputDir, imagePath)}" alt="${alt}" loading="lazy">\n`;
  html += `</picture>`;
  
  return html;
}

// Main function to process all images
async function optimizeAllImages() {
  if (!fs.existsSync(config.inputDir)) {
    console.error(chalk.red(`Input directory does not exist: ${config.inputDir}`));
    return;
  }
  
  // Find all image files
  const imagePaths = glob.sync(path.join(config.inputDir, '**/*.{jpg,jpeg,png,gif}'));
  
  console.log(chalk.blue(`Found ${imagePaths.length} images to process`));
  console.log(chalk.blue(`Configuration:`));
  console.log(chalk.blue(`  - Max dimensions: ${config.maxWidth}x${config.maxHeight}`));
  console.log(chalk.blue(`  - WebP: ${config.createWebp ? 'enabled' : 'disabled'}`));
  console.log(chalk.blue(`  - Responsive sizes: ${config.responsiveSizes.join(', ')}`));
  console.log(chalk.blue(`  - Strip metadata: ${config.stripMetadata ? 'enabled' : 'disabled'}`));
  console.log('');
  
  let processed = 0;
  let failed = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const imagePath of imagePaths) {
    try {
      const originalSize = fs.statSync(imagePath).size;
      totalOriginalSize += originalSize;
      
      await optimizeImage(imagePath);
      
      // Calculate optimized size (use original if optimization failed)
      const optimizedSize = fs.statSync(imagePath).size;
      totalOptimizedSize += optimizedSize;
      
      processed++;
    } catch (err) {
      console.error(chalk.red(`Error processing ${imagePath}: ${err.message}`));
      failed++;
    }
  }
  
  console.log(chalk.blue(`\n🎉 Optimization complete!`));
  console.log(chalk.green(`✓ Processed: ${processed} images`));
  console.log(chalk.red(`✗ Failed: ${failed} images`));
  console.log(chalk.blue(`📊 Total size reduction: ${formatBytes(totalOriginalSize - totalOptimizedSize)} (${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(2)}%)`));
  
  // Generate optimization report
  const report = {
    processed,
    failed,
    totalOriginalSize,
    totalOptimizedSize,
    savings: totalOriginalSize - totalOptimizedSize,
    savingsPercentage: ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(2)
  };
  
  fs.writeFileSync(path.join(__dirname, '../image-optimization-report.json'), JSON.stringify(report, null, 2));
  console.log(chalk.blue(`📄 Report saved to: image-optimization-report.json`));
}

// Run the script
optimizeAllImages().catch(err => {
  console.error(chalk.red('Error in optimization process:'), err);
  process.exit(1);
}); 