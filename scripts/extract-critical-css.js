/**
 * Critical CSS Extraction Script
 * 
 * This script extracts critical CSS for faster initial rendering.
 * It analyzes the HTML and CSS to determine which styles are needed for above-the-fold content.
 */

const fs = require('fs');
const path = require('path');
const { PurgeCSS } = require('purgecss');
const critical = require('critical');
const glob = require('glob');
const chalk = require('chalk');

// Configuration
const config = {
  // Input HTML files
  html: ['out/index.html'],
  // CSS files to analyze
  css: ['out/_next/static/css/*.css'],
  // Output directory for critical CSS
  outputDir: 'out',
  // Mobile-first dimensions
  dimensions: [
    {
      width: 375,
      height: 667,
      name: 'mobile'
    },
    {
      width: 768,
      height: 1024,
      name: 'tablet'
    },
    {
      width: 1440,
      height: 900,
      name: 'desktop'
    }
  ],
  // Options
  options: {
    minify: true,
    extract: true,
    inline: {
      strategy: 'media',
    },
    timeout: 30000,
    ignoreRequestErrors: true,
    penthouse: {
      timeout: 30000,
      renderWaitTime: 1000,
    }
  }
};

async function extractCriticalCSS() {
  try {
    console.log(chalk.blue('🔍 Starting critical CSS extraction...'));
    
    // Make sure the output directory exists
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }
    
    // Process each HTML file
    for (const htmlFile of config.html) {
      console.log(chalk.yellow(`Processing: ${htmlFile}`));
      
      // Get all available CSS files
      const cssFiles = glob.sync(config.css[0]);
      
      if (cssFiles.length === 0) {
        console.log(chalk.red('No CSS files found!'));
        continue;
      }
      
      // Extract critical CSS for each dimension
      for (const dimension of config.dimensions) {
        console.log(chalk.green(`Generating critical CSS for ${dimension.name}...`));
        
        const result = await critical.generate({
          src: htmlFile,
          css: cssFiles,
          width: dimension.width,
          height: dimension.height,
          target: {
            css: path.join(config.outputDir, `critical-${dimension.name}.css`),
            uncritical: path.join(config.outputDir, `non-critical-${dimension.name}.css`),
          },
          ...config.options
        });
        
        console.log(chalk.green(`✅ Critical CSS for ${dimension.name} generated successfully`));
      }
      
      // Inline the critical CSS into the HTML
      await critical.generate({
        inline: true,
        src: htmlFile,
        target: htmlFile,
        css: cssFiles,
        dimensions: config.dimensions,
        ...config.options
      });
      
      console.log(chalk.green(`✅ Critical CSS inlined in ${htmlFile}`));
    }
    
    console.log(chalk.blue('🎉 Critical CSS extraction completed!'));
  } catch (error) {
    console.error(chalk.red('Error extracting critical CSS:'), error);
    process.exit(1);
  }
}

// Run the extraction process
extractCriticalCSS(); 