/**
 * Asset Compression Script
 * 
 * Creates compressed versions (gzip and brotli) of all static assets
 * to improve load time when served with appropriate headers.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const glob = require('glob');
const chalk = require('chalk');

// Configuration
const config = {
  outDir: 'out',
  extensions: ['.html', '.js', '.css', '.svg', '.json', '.xml', '.txt', '.ttf', '.woff', '.woff2'],
  // Files over this size (in bytes) will be compressed
  minSize: 1024, // 1KB
  // Files under this size (in bytes) will be compressed
  maxSize: 10485760, // 10MB
  // Compression levels
  gzipLevel: 9, // Maximum compression level (1-9)
  brotliLevel: 11, // Maximum compression level (0-11)
  // Whether to keep the original file
  keepOriginal: true,
};

/**
 * Gets all files matching extensions in the output directory
 */
function getFiles() {
  let files = [];
  
  config.extensions.forEach(ext => {
    const pattern = `${config.outDir}/**/*${ext}`;
    const matches = glob.sync(pattern, { nodir: true });
    files = [...files, ...matches];
  });
  
  return files;
}

/**
 * Compresses a file using Gzip
 */
function compressWithGzip(file) {
  return new Promise((resolve, reject) => {
    const gzip = zlib.createGzip({ level: config.gzipLevel });
    const source = fs.createReadStream(file);
    const destination = fs.createWriteStream(`${file}.gz`);
    
    source.pipe(gzip).pipe(destination);
    
    destination.on('finish', () => {
      resolve();
    });
    
    destination.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Compresses a file using Brotli
 */
function compressWithBrotli(file) {
  return new Promise((resolve, reject) => {
    const brotli = zlib.createBrotliCompress({
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: config.brotliLevel,
      },
    });
    const source = fs.createReadStream(file);
    const destination = fs.createWriteStream(`${file}.br`);
    
    source.pipe(brotli).pipe(destination);
    
    destination.on('finish', () => {
      resolve();
    });
    
    destination.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Checks if a file is within the size limits for compression
 */
function isWithinSizeLimits(file) {
  const stats = fs.statSync(file);
  return stats.size >= config.minSize && stats.size <= config.maxSize;
}

/**
 * Main function to compress all assets
 */
async function compressAssets() {
  try {
    console.log(chalk.blue('🔍 Looking for assets to compress...'));
    
    const files = getFiles();
    console.log(chalk.green(`Found ${files.length} files to process`));
    
    let compressedCount = 0;
    let skippedCount = 0;
    
    for (const file of files) {
      if (isWithinSizeLimits(file)) {
        console.log(chalk.yellow(`Compressing: ${path.relative(config.outDir, file)}`));
        
        try {
          // Compress with both Gzip and Brotli
          await Promise.all([
            compressWithGzip(file),
            compressWithBrotli(file)
          ]);
          
          compressedCount++;
          
          // Log compression stats
          const originalSize = fs.statSync(file).size;
          const gzipSize = fs.statSync(`${file}.gz`).size;
          const brotliSize = fs.statSync(`${file}.br`).size;
          
          const gzipSavings = ((originalSize - gzipSize) / originalSize * 100).toFixed(2);
          const brotliSavings = ((originalSize - brotliSize) / originalSize * 100).toFixed(2);
          
          console.log(chalk.green(`  ✓ Original: ${(originalSize / 1024).toFixed(2)} KB`));
          console.log(chalk.green(`  ✓ Gzip: ${(gzipSize / 1024).toFixed(2)} KB (${gzipSavings}% saved)`));
          console.log(chalk.green(`  ✓ Brotli: ${(brotliSize / 1024).toFixed(2)} KB (${brotliSavings}% saved)`));
          
          // Remove original if configured
          if (!config.keepOriginal) {
            fs.unlinkSync(file);
          }
        } catch (err) {
          console.error(chalk.red(`  ✗ Error compressing ${file}: ${err.message}`));
        }
      } else {
        skippedCount++;
      }
    }
    
    console.log(chalk.blue(`🎉 Compression complete!`));
    console.log(chalk.blue(`✓ Compressed: ${compressedCount} files`));
    console.log(chalk.blue(`✓ Skipped: ${skippedCount} files`));
    
  } catch (error) {
    console.error(chalk.red('Error compressing assets:'), error);
    process.exit(1);
  }
}

// Run the compression process
compressAssets(); 