#!/usr/bin/env node

/**
 * Fix Missing Assets Script
 * 
 * This script ensures all necessary assets are copied to the build directory
 * after Next.js static export. It addresses the issue where images and other
 * static assets are not automatically copied.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  sourceDir: 'public',
  buildDir: 'pixsell-cPanel/pixsell-deploy',
  criticalAssets: [
    'Pixsell Logo.png',
    'steam Logo .gif',
    'pixsell-meta-image.jpg',
    'manifest.json',
    'robots.txt',
    'sw.js',
    'offline.html'
  ],
  assetExtensions: ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot']
};

// Utility functions
function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    log(`Created directory: ${dirPath}`);
  }
}

function copyFile(source, destination) {
  try {
    const destDir = path.dirname(destination);
    ensureDirectoryExists(destDir);
    
    fs.copyFileSync(source, destination);
    log(`Copied: ${source} → ${destination}`, 'success');
    return true;
  } catch (error) {
    log(`Failed to copy ${source}: ${error.message}`, 'error');
    return false;
  }
}

function findAssetsInDirectory(dir, extensions) {
  const assets = [];
  
  function scanDirectory(currentDir) {
    if (!fs.existsSync(currentDir)) return;
    
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          const relativePath = path.relative(config.sourceDir, fullPath);
          assets.push(relativePath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return assets;
}

function copyCriticalAssets() {
  log('Copying critical assets...');
  
  let successCount = 0;
  let totalCount = 0;
  
  for (const asset of config.criticalAssets) {
    const sourcePath = path.join(config.sourceDir, asset);
    const destPath = path.join(config.buildDir, asset);
    
    if (fs.existsSync(sourcePath)) {
      totalCount++;
      if (copyFile(sourcePath, destPath)) {
        successCount++;
      }
    } else {
      log(`Critical asset not found: ${sourcePath}`, 'error');
    }
  }
  
  log(`Critical assets: ${successCount}/${totalCount} copied successfully`);
  return successCount === totalCount;
}

function copyAllAssets() {
  log('Copying all assets...');
  
  const assets = findAssetsInDirectory(config.sourceDir, config.assetExtensions);
  let successCount = 0;
  
  for (const asset of assets) {
    const sourcePath = path.join(config.sourceDir, asset);
    const destPath = path.join(config.buildDir, asset);
    
    if (copyFile(sourcePath, destPath)) {
      successCount++;
    }
  }
  
  log(`All assets: ${successCount}/${assets.length} copied successfully`);
  return successCount === assets.length;
}

function copyFonts() {
  log('Copying fonts...');
  
  const fontsDir = path.join(config.sourceDir, 'fonts');
  const destFontsDir = path.join(config.buildDir, 'fonts');
  
  if (fs.existsSync(fontsDir)) {
    try {
      execSync(`cp -r "${fontsDir}" "${destFontsDir}"`, { stdio: 'inherit' });
      log('Fonts copied successfully', 'success');
      return true;
    } catch (error) {
      log(`Failed to copy fonts: ${error.message}`, 'error');
      return false;
    }
  } else {
    log('Fonts directory not found, skipping...');
    return true;
  }
}

function copyBlogAssets() {
  log('Copying blog assets...');
  
  const blogDir = path.join(config.sourceDir, 'blog');
  const destBlogDir = path.join(config.buildDir, 'blog');
  
  if (fs.existsSync(blogDir)) {
    try {
      execSync(`cp -r "${blogDir}" "${destBlogDir}"`, { stdio: 'inherit' });
      log('Blog assets copied successfully', 'success');
      return true;
    } catch (error) {
      log(`Failed to copy blog assets: ${error.message}`, 'error');
      return false;
    }
  } else {
    log('Blog directory not found, skipping...');
    return true;
  }
}

function verifyAssets() {
  log('Verifying critical assets...');
  
  const missingAssets = [];
  
  for (const asset of config.criticalAssets) {
    const destPath = path.join(config.buildDir, asset);
    if (!fs.existsSync(destPath)) {
      missingAssets.push(asset);
    }
  }
  
  if (missingAssets.length > 0) {
    log(`Missing assets: ${missingAssets.join(', ')}`, 'error');
    return false;
  } else {
    log('All critical assets verified successfully', 'success');
    return true;
  }
}

function main() {
  log('Starting asset fix process...');
  
  // Ensure build directory exists
  ensureDirectoryExists(config.buildDir);
  
  // Copy critical assets first
  const criticalSuccess = copyCriticalAssets();
  
  // Copy all other assets
  const allAssetsSuccess = copyAllAssets();
  
  // Copy fonts
  const fontsSuccess = copyFonts();
  
  // Copy blog assets
  const blogSuccess = copyBlogAssets();
  
  // Verify everything
  const verificationSuccess = verifyAssets();
  
  // Summary
  log('Asset fix process completed!');
  log(`Critical assets: ${criticalSuccess ? '✅' : '❌'}`);
  log(`All assets: ${allAssetsSuccess ? '✅' : '❌'}`);
  log(`Fonts: ${fontsSuccess ? '✅' : '❌'}`);
  log(`Blog assets: ${blogSuccess ? '✅' : '❌'}`);
  log(`Verification: ${verificationSuccess ? '✅' : '❌'}`);
  
  if (criticalSuccess && verificationSuccess) {
    log('🎉 All critical assets are now available!', 'success');
    process.exit(0);
  } else {
    log('⚠️ Some assets may still be missing. Check the logs above.', 'error');
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  copyCriticalAssets,
  copyAllAssets,
  copyFonts,
  copyBlogAssets,
  verifyAssets
}; 