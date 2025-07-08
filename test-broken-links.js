#!/usr/bin/env node

/**
 * Test script to verify broken links are fixed
 * Run with: node test-broken-links.js
 */

const https = require('https');
const http = require('http');

const baseUrl = 'https://pixsellgames.com';

// All the routes that were previously broken
const routesToTest = [
  '/about',
  '/contact', 
  '/privacy',
  '/terms',
  '/services',
  '/services/marketing',
  '/services/co-publishing',
  '/services/localisation',
  '/services/partnership',
  '/blog'
];

// Test a single URL
function testUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = baseUrl + url;
    const client = fullUrl.startsWith('https:') ? https : http;
    
    const req = client.get(fullUrl, (res) => {
      const status = res.statusCode;
      const statusText = res.statusMessage;
      
      console.log(`${status} ${statusText} - ${fullUrl}`);
      
      if (status === 200) {
        resolve({ url: fullUrl, status, success: true });
      } else if (status === 404) {
        resolve({ url: fullUrl, status, success: false, expected: true });
      } else {
        resolve({ url: fullUrl, status, success: false, expected: false });
      }
    });
    
    req.on('error', (err) => {
      console.log(`ERROR - ${fullUrl}: ${err.message}`);
      resolve({ url: fullUrl, status: 'ERROR', success: false, expected: false, error: err.message });
    });
    
    req.setTimeout(10000, () => {
      console.log(`TIMEOUT - ${fullUrl}`);
      req.destroy();
      resolve({ url: fullUrl, status: 'TIMEOUT', success: false, expected: false });
    });
  });
}

// Test all routes
async function testAllRoutes() {
  console.log('🔍 Testing Pixsell Website Links...\n');
  
  const results = [];
  
  for (const route of routesToTest) {
    const result = await testUrl(route);
    results.push(result);
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Summary
  console.log('\n📊 Test Results Summary:');
  console.log('========================');
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success && !r.expected);
  const expected404s = results.filter(r => !r.success && r.expected);
  
  console.log(`✅ Working: ${successful.length}/${routesToTest.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  console.log(`⚠️  Expected 404s: ${expected404s.length}`);
  
  if (failed.length > 0) {
    console.log('\n❌ Failed URLs:');
    failed.forEach(r => {
      console.log(`   ${r.status} - ${r.url}`);
    });
  }
  
  if (successful.length === routesToTest.length) {
    console.log('\n🎉 All links are working! The broken links issue has been resolved.');
  } else {
    console.log('\n⚠️  Some links are still broken. Check the .htaccess configuration.');
  }
  
  return results;
}

// Run the test
if (require.main === module) {
  testAllRoutes().catch(console.error);
}

module.exports = { testUrl, testAllRoutes }; 