#!/usr/bin/env node
/**
 * Third-party Resource Optimization Script
 * 
 * This script helps optimize the loading of third-party resources by:
 * 1. Creating resource hints (preconnect, dns-prefetch) for external domains
 * 2. Setting up delayed loading for non-critical third-party scripts
 * 3. Generating CSP (Content Security Policy) rules
 */

const fs = require('fs');
const path = require('path');

// Configuration for third-party resources
const thirdPartyConfig = {
  // Critical domains that should be preconnected
  criticalDomains: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.unsplash.com',
  ],
  
  // Non-critical scripts that can be loaded with delay
  nonCriticalScripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=YOUR-ANALYTICS-ID',
      id: 'gtag-script',
      attributes: {
        async: true,
        'data-delay': '2000', // Load after 2 seconds
        'data-priority': 'low',
      }
    },
    // Add more non-critical scripts here
  ],
  
  // CSP directives for security
  cspDirectives: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "www.googletagmanager.com"],
    'style-src': ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
    'img-src': ["'self'", "data:", "images.unsplash.com"],
    'font-src': ["'self'", "data:", "fonts.gstatic.com"],
    'connect-src': ["'self'"],
    'media-src': ["'self'"],
    'object-src': ["'none'"],
    'frame-src': ["'self'"],
    'worker-src': ["'self'", "blob:"],
    'manifest-src': ["'self'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
  }
};

/**
 * Generate resource hints for critical domains
 */
function generateResourceHints() {
  const domains = thirdPartyConfig.criticalDomains;
  
  const hints = domains.map(domain => {
    // Extract domain without protocol
    const url = new URL(domain);
    const hostname = url.hostname;
    const protocol = url.protocol;
    
    return `
    <!-- Resource hints for ${hostname} -->
    <link rel="preconnect" href="${domain}" />
    <link rel="dns-prefetch" href="${domain}" />
    ${protocol === 'https:' ? `<link rel="preconnect" href="${domain}" crossorigin="anonymous" />` : ''}`;
  }).join('\n');
  
  return `
<!-- Resource hints for faster third-party loading -->
${hints}
  `;
}

/**
 * Generate delayed loading scripts for non-critical resources
 */
function generateDelayedLoadingScript() {
  const scripts = thirdPartyConfig.nonCriticalScripts;
  
  const delayedScripts = scripts.map(script => {
    const attributes = Object.entries(script.attributes || {})
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `
    // Load ${script.id || 'unnamed script'} with delay
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = "${script.src}";
      script.id = "${script.id || ''}";
      ${attributes ? `// Add attributes\n      ${attributes.split(' ').map(attr => {
        const [key, value] = attr.split('=');
        return `script.setAttribute(${key}, ${value});`;
      }).join('\n      ')}` : ''}
      document.body.appendChild(script);
    }, ${script.attributes && script.attributes['data-delay'] ? script.attributes['data-delay'] : '2000'});`;
  }).join('\n');
  
  return `
/**
 * Delayed loading of non-critical third-party resources
 * This script loads non-essential third-party resources with a delay
 * to improve initial page load performance.
 */
function loadDelayedResources() {
  if (document.readyState === 'complete') {
    initDelayedLoading();
  } else {
    window.addEventListener('load', initDelayedLoading);
  }
  
  function initDelayedLoading() {
    ${delayedScripts}
  }
}

// Initialize delayed loading
loadDelayedResources();
  `;
}

/**
 * Generate CSP (Content Security Policy) rules
 */
function generateCSP() {
  const directives = thirdPartyConfig.cspDirectives;
  
  const cspString = Object.entries(directives)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; ');
  
  return `
/**
 * Content Security Policy
 * 
 * Add this to your headers in next.config.js or your server configuration
 * 
 * Content-Security-Policy: ${cspString}
 */
  `;
}

/**
 * Write the optimization files
 */
function writeOptimizationFiles() {
  const resourceHints = generateResourceHints();
  const delayedLoadingScript = generateDelayedLoadingScript();
  const csp = generateCSP();
  
  // Create output directory if it doesn't exist
  const outputDir = path.resolve(process.cwd(), 'app/lib');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write resource hints to a file
  fs.writeFileSync(
    path.resolve(outputDir, 'resourceHints.txt'),
    resourceHints
  );
  console.log('✅ Generated resource hints at app/lib/resourceHints.txt');
  
  // Write delayed loading script to a file
  fs.writeFileSync(
    path.resolve(outputDir, 'delayedLoading.js'),
    delayedLoadingScript
  );
  console.log('✅ Generated delayed loading script at app/lib/delayedLoading.js');
  
  // Write CSP to a file
  fs.writeFileSync(
    path.resolve(outputDir, 'csp.txt'),
    csp
  );
  console.log('✅ Generated CSP at app/lib/csp.txt');
  
  // Display instructions
  console.log(`
🔍 Next steps:
1. Add the resource hints to your <head> in app/layout.tsx
2. Include the delayed loading script with next/script:
   <Script id="delayed-loading" strategy="afterInteractive">{delayedLoading}</Script>
3. Add the CSP headers to your server configuration or next.config.js
`);
}

// Main function
function main() {
  console.log('⚙️ Optimizing third-party resource loading...');
  writeOptimizationFiles();
  console.log('✨ Third-party optimization complete!');
}

main(); 