const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
const { minify } = require('terser');
const CleanCSS = require('clean-css');
const { minify: minifyHtml } = require('html-minifier');

// Configuration
const config = {
  outDir: 'out',
  // JavaScript minification options
  jsOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info', 'console.debug'],
      passes: 2,
      unsafe: true,
      unsafe_comps: true,
      unsafe_Function: true,
      unsafe_math: true,
      unsafe_proto: true,
      unsafe_regexp: true,
      unsafe_undefined: true,
    },
    mangle: {
      toplevel: true,
      safari10: true,
    },
    format: {
      comments: false,
    },
  },
  // CSS minification options
  cssOptions: {
    level: {
      1: {
        all: true,
        normalizeUrls: false,
      },
      2: {
        all: true,
        mergeMedia: true,
        mergeNonAdjacentRules: true,
        removeEmpty: true,
        removeUnusedAtRules: true,
        restructureRules: true,
      },
    },
    compatibility: {
      properties: {
        ieBangHack: false,
        ieFilters: false,
        iePrefixHack: false,
        ieSuffixHack: false,
        ieZoom: false,
      },
    },
  },
  // HTML minification options
  htmlOptions: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
  },
  // File extensions to process
  extensions: {
    js: ['.js', '.mjs'],
    css: ['.css'],
    html: ['.html', '.htm'],
  },
  // Skip files that match these patterns
  skipPatterns: [
    '**/node_modules/**',
    '**/.git/**',
    '**/out/**',
    '**/*.min.*',
    '**/*.map',
  ],
};

// Function to get human readable file size
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Function to check if file should be skipped
function shouldSkipFile(filePath) {
  return config.skipPatterns.some(pattern => {
    const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
    return regex.test(filePath);
  });
}

// Function to minify JavaScript
async function minifyJavaScript(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = await minify(code, config.jsOptions);
    
    if (result.error) {
      throw new Error(result.error);
    }
    
    return result.code;
  } catch (error) {
    console.warn(chalk.yellow(`  ⚠ JavaScript minification failed for ${filePath}: ${error.message}`));
    return fs.readFileSync(filePath, 'utf8'); // Return original if minification fails
  }
}

// Function to minify CSS
function minifyCSS(filePath) {
  try {
    const css = fs.readFileSync(filePath, 'utf8');
    const cleanCSS = new CleanCSS(config.cssOptions);
    const result = cleanCSS.minify(css);
    
    if (result.errors.length > 0) {
      console.warn(chalk.yellow(`  ⚠ CSS minification warnings for ${filePath}:`));
      result.errors.forEach(error => console.warn(chalk.yellow(`    ${error}`)));
    }
    
    return result.styles;
  } catch (error) {
    console.warn(chalk.yellow(`  ⚠ CSS minification failed for ${filePath}: ${error.message}`));
    return fs.readFileSync(filePath, 'utf8'); // Return original if minification fails
  }
}

// Function to minify HTML
function minifyHTML(filePath) {
  try {
    const html = fs.readFileSync(filePath, 'utf8');
    return minifyHtml(html, config.htmlOptions);
  } catch (error) {
    console.warn(chalk.yellow(`  ⚠ HTML minification failed for ${filePath}: ${error.message}`));
    return fs.readFileSync(filePath, 'utf8'); // Return original if minification fails
  }
}

// Function to process a single file
async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stats = fs.statSync(filePath);
  const originalSize = stats.size;
  
  console.log(chalk.blue(`Processing ${path.relative(config.outDir, filePath)} (${formatBytes(originalSize)})`));
  
  let minifiedContent = '';
  let fileType = '';
  
  // Determine file type and minify accordingly
  if (config.extensions.js.includes(ext)) {
    minifiedContent = await minifyJavaScript(filePath);
    fileType = 'JavaScript';
  } else if (config.extensions.css.includes(ext)) {
    minifiedContent = minifyCSS(filePath);
    fileType = 'CSS';
  } else if (config.extensions.html.includes(ext)) {
    minifiedContent = minifyHTML(filePath);
    fileType = 'HTML';
  } else {
    return { skipped: true, reason: 'Unsupported file type' };
  }
  
  // Write minified content back to file
  fs.writeFileSync(filePath, minifiedContent);
  
  const newStats = fs.statSync(filePath);
  const newSize = newStats.size;
  const savings = ((1 - newSize / originalSize) * 100).toFixed(2);
  
  console.log(chalk.green(`  ✓ ${fileType}: ${formatBytes(newSize)} (${savings}% smaller)`));
  
  return {
    skipped: false,
    originalSize,
    newSize,
    savings: originalSize - newSize,
    savingsPercentage: savings,
    fileType,
  };
}

// Function to get all files to process
function getFilesToProcess() {
  let files = [];
  
  // Get JavaScript files
  config.extensions.js.forEach(ext => {
    const pattern = `${config.outDir}/**/*${ext}`;
    const matches = glob.sync(pattern, { nodir: true });
    files = [...files, ...matches];
  });
  
  // Get CSS files
  config.extensions.css.forEach(ext => {
    const pattern = `${config.outDir}/**/*${ext}`;
    const matches = glob.sync(pattern, { nodir: true });
    files = [...files, ...matches];
  });
  
  // Get HTML files
  config.extensions.html.forEach(ext => {
    const pattern = `${config.outDir}/**/*${ext}`;
    const matches = glob.sync(pattern, { nodir: true });
    files = [...files, ...matches];
  });
  
  // Filter out files that should be skipped
  files = files.filter(file => !shouldSkipFile(file));
  
  return files;
}

// Main function to minify all code
async function minifyAllCode() {
  try {
    console.log(chalk.blue('🔍 Looking for files to minify...'));
    
    const files = getFilesToProcess();
    console.log(chalk.green(`Found ${files.length} files to process`));
    
    if (files.length === 0) {
      console.log(chalk.yellow('No files found to minify. Make sure you have built the project first.'));
      return;
    }
    
    console.log(chalk.blue('\nConfiguration:'));
    console.log(chalk.blue(`  - JavaScript: ${config.extensions.js.join(', ')}`));
    console.log(chalk.blue(`  - CSS: ${config.extensions.css.join(', ')}`));
    console.log(chalk.blue(`  - HTML: ${config.extensions.html.join(', ')}`));
    console.log(chalk.blue(`  - Skip patterns: ${config.skipPatterns.length} patterns`));
    console.log('');
    
    let processed = 0;
    let skipped = 0;
    let totalOriginalSize = 0;
    let totalNewSize = 0;
    const stats = {
      js: { count: 0, originalSize: 0, newSize: 0 },
      css: { count: 0, originalSize: 0, newSize: 0 },
      html: { count: 0, originalSize: 0, newSize: 0 },
    };
    
    for (const file of files) {
      const result = await processFile(file);
      
      if (result.skipped) {
        skipped++;
      } else {
        processed++;
        totalOriginalSize += result.originalSize;
        totalNewSize += result.newSize;
        
        // Update stats by file type
        const fileTypeKey = result.fileType.toLowerCase();
        if (stats[fileTypeKey]) {
          stats[fileTypeKey].count++;
          stats[fileTypeKey].originalSize += result.originalSize;
          stats[fileTypeKey].newSize += result.newSize;
        }
      }
    }
    
    console.log(chalk.blue(`\n🎉 Minification complete!`));
    console.log(chalk.green(`✓ Processed: ${processed} files`));
    console.log(chalk.yellow(`⚠ Skipped: ${skipped} files`));
    console.log(chalk.blue(`📊 Total size reduction: ${formatBytes(totalOriginalSize - totalNewSize)} (${((1 - totalNewSize / totalOriginalSize) * 100).toFixed(2)}%)`));
    
    // Show breakdown by file type
    console.log(chalk.blue(`\n📈 Breakdown by file type:`));
    Object.entries(stats).forEach(([type, data]) => {
      if (data.count > 0) {
        const savings = ((1 - data.newSize / data.originalSize) * 100).toFixed(2);
        console.log(chalk.blue(`  ${type.toUpperCase()}: ${data.count} files, ${formatBytes(data.originalSize - data.newSize)} saved (${savings}%)`));
      }
    });
    
    // Generate minification report
    const report = {
      processed,
      skipped,
      totalOriginalSize,
      totalNewSize,
      savings: totalOriginalSize - totalNewSize,
      savingsPercentage: ((1 - totalNewSize / totalOriginalSize) * 100).toFixed(2),
      stats,
      timestamp: new Date().toISOString(),
    };
    
    fs.writeFileSync(path.join(__dirname, '../code-minification-report.json'), JSON.stringify(report, null, 2));
    console.log(chalk.blue(`📄 Report saved to: code-minification-report.json`));
    
  } catch (error) {
    console.error(chalk.red('Error in minification process:'), error);
    process.exit(1);
  }
}

// Run the script
minifyAllCode(); 