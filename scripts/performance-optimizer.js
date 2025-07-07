const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Configuration
const config = {
  steps: [
    {
      name: 'Image Optimization',
      script: 'node scripts/enhanced-image-optimizer.js',
      description: 'Optimize all images with WebP conversion and responsive sizes',
      required: true,
    },
    {
      name: 'Font Optimization',
      script: 'npm run optimize-fonts',
      description: 'Optimize font loading and create font-display CSS',
      required: false,
    },
    {
      name: 'Third-party Optimization',
      script: 'npm run optimize-third-party',
      description: 'Optimize third-party script loading',
      required: false,
    },
    {
      name: 'Build Project',
      script: 'npm run build',
      description: 'Build the Next.js project with optimizations',
      required: true,
    },
    {
      name: 'Code Minification',
      script: 'node scripts/enhanced-code-minifier.js',
      description: 'Minify JavaScript, CSS, and HTML files',
      required: true,
    },
    {
      name: 'Asset Compression',
      script: 'npm run compress',
      description: 'Create gzip and brotli compressed versions',
      required: true,
    },
    {
      name: 'Critical CSS Extraction',
      script: 'npm run extract-critical-css',
      description: 'Extract critical CSS for above-the-fold content',
      required: false,
    },
    {
      name: 'Cache Configuration',
      script: 'npm run generate-cache',
      description: 'Generate optimized cache headers',
      required: false,
    },
  ],
  // Performance thresholds
  thresholds: {
    maxImageSize: 500 * 1024, // 500KB
    maxJsSize: 200 * 1024,    // 200KB
    maxCssSize: 50 * 1024,    // 50KB
    maxHtmlSize: 100 * 1024,  // 100KB
  },
};

// Function to format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Function to check file sizes and identify optimization opportunities
function analyzeFileSizes() {
  console.log(chalk.blue('\n🔍 Analyzing file sizes...'));
  
  const outDir = 'out';
  if (!fs.existsSync(outDir)) {
    console.log(chalk.yellow('Build directory not found. Run build first.'));
    return;
  }
  
  const largeFiles = [];
  
  // Check images
  const imageFiles = glob.sync(`${outDir}/**/*.{jpg,jpeg,png,gif,webp,svg}`);
  imageFiles.forEach(file => {
    const stats = fs.statSync(file);
    if (stats.size > config.thresholds.maxImageSize) {
      largeFiles.push({
        path: file,
        size: stats.size,
        type: 'image',
        threshold: config.thresholds.maxImageSize,
      });
    }
  });
  
  // Check JavaScript files
  const jsFiles = glob.sync(`${outDir}/**/*.js`);
  jsFiles.forEach(file => {
    const stats = fs.statSync(file);
    if (stats.size > config.thresholds.maxJsSize) {
      largeFiles.push({
        path: file,
        size: stats.size,
        type: 'javascript',
        threshold: config.thresholds.maxJsSize,
      });
    }
  });
  
  // Check CSS files
  const cssFiles = glob.sync(`${outDir}/**/*.css`);
  cssFiles.forEach(file => {
    const stats = fs.statSync(file);
    if (stats.size > config.thresholds.maxCssSize) {
      largeFiles.push({
        path: file,
        size: stats.size,
        type: 'css',
        threshold: config.thresholds.maxCssSize,
      });
    }
  });
  
  // Check HTML files
  const htmlFiles = glob.sync(`${outDir}/**/*.html`);
  htmlFiles.forEach(file => {
    const stats = fs.statSync(file);
    if (stats.size > config.thresholds.maxHtmlSize) {
      largeFiles.push({
        path: file,
        size: stats.size,
        type: 'html',
        threshold: config.thresholds.maxHtmlSize,
      });
    }
  });
  
  if (largeFiles.length > 0) {
    console.log(chalk.yellow(`⚠ Found ${largeFiles.length} files exceeding size thresholds:`));
    largeFiles.forEach(file => {
      const relativePath = path.relative(outDir, file.path);
      const sizeFormatted = formatBytes(file.size);
      const thresholdFormatted = formatBytes(file.threshold);
      console.log(chalk.yellow(`  ${relativePath}: ${sizeFormatted} (threshold: ${thresholdFormatted})`));
    });
  } else {
    console.log(chalk.green('✓ All files are within size thresholds'));
  }
  
  return largeFiles;
}

// Function to run a single optimization step
async function runStep(step, stepIndex) {
  console.log(chalk.blue(`\n[${stepIndex + 1}/${config.steps.length}] ${step.name}`));
  console.log(chalk.gray(`  ${step.description}`));
  
  try {
    const startTime = Date.now();
    execSync(step.script, { stdio: 'inherit' });
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log(chalk.green(`  ✓ Completed in ${duration}s`));
    return { success: true, duration };
  } catch (error) {
    if (step.required) {
      console.error(chalk.red(`  ✗ Failed: ${error.message}`));
      throw error;
    } else {
      console.warn(chalk.yellow(`  ⚠ Skipped (optional step): ${error.message}`));
      return { success: false, skipped: true };
    }
  }
}

// Function to generate performance report
function generatePerformanceReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    steps: results,
    summary: {
      total: results.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success && !r.skipped).length,
      skipped: results.filter(r => r.skipped).length,
      totalDuration: results.reduce((sum, r) => sum + (r.duration || 0), 0),
    },
    recommendations: [],
  };
  
  // Add recommendations based on results
  const failedSteps = results.filter(r => !r.success && !r.skipped);
  if (failedSteps.length > 0) {
    report.recommendations.push(`Fix ${failedSteps.length} failed optimization steps`);
  }
  
  const skippedSteps = results.filter(r => r.skipped);
  if (skippedSteps.length > 0) {
    report.recommendations.push(`Consider running ${skippedSteps.length} optional optimization steps`);
  }
  
  // Check for large files
  const largeFiles = analyzeFileSizes();
  if (largeFiles.length > 0) {
    report.recommendations.push(`Optimize ${largeFiles.length} files that exceed size thresholds`);
  }
  
  // Save report
  fs.writeFileSync(
    path.join(__dirname, '../performance-optimization-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  return report;
}

// Function to display performance report
function displayPerformanceReport(report) {
  console.log(chalk.blue('\n📊 Performance Optimization Report'));
  console.log(chalk.blue('=' .repeat(50)));
  
  console.log(chalk.blue(`\n📈 Summary:`));
  console.log(chalk.green(`  ✓ Successful: ${report.summary.successful}/${report.summary.total}`));
  console.log(chalk.red(`  ✗ Failed: ${report.summary.failed}`));
  console.log(chalk.yellow(`  ⚠ Skipped: ${report.summary.skipped}`));
  console.log(chalk.blue(`  ⏱ Total duration: ${(report.summary.totalDuration || 0).toFixed(2)}s`));
  
  if (report.recommendations.length > 0) {
    console.log(chalk.blue(`\n💡 Recommendations:`));
    report.recommendations.forEach((rec, index) => {
      console.log(chalk.yellow(`  ${index + 1}. ${rec}`));
    });
  }
  
  console.log(chalk.blue(`\n📄 Detailed report saved to: performance-optimization-report.json`));
}

// Main function to run all optimizations
async function runAllOptimizations() {
  console.log(chalk.blue('🚀 Starting Performance Optimization Pipeline'));
  console.log(chalk.blue('=' .repeat(50)));
  
  const results = [];
  
  try {
    for (let i = 0; i < config.steps.length; i++) {
      const step = config.steps[i];
      const result = await runStep(step, i);
      results.push({ ...result, step: step.name });
    }
    
    // Generate and display report
    const report = generatePerformanceReport(results);
    displayPerformanceReport(report);
    
    console.log(chalk.green('\n🎉 Performance optimization completed successfully!'));
    
  } catch (error) {
    console.error(chalk.red('\n❌ Performance optimization failed:'), error.message);
    process.exit(1);
  }
}

// Import glob for file analysis
const glob = require('glob');

// Run the optimization pipeline
runAllOptimizations(); 