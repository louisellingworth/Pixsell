const fs = require('fs');
const path = require('path');

// SEO Optimization Script
console.log('🔍 Starting SEO Optimization Check...\n');

// Check meta description length
function checkMetaDescription() {
  const layoutPath = path.join(__dirname, '../app/layout.tsx');
  const content = fs.readFileSync(layoutPath, 'utf8');
  
  const descriptionMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (descriptionMatch) {
    const description = descriptionMatch[1];
    const length = description.length;
    
    console.log(`📝 Meta Description Length: ${length} characters`);
    if (length > 160) {
      console.log(`❌ Meta description is too long (${length} chars). Should be under 160 characters.`);
      return false;
    } else {
      console.log(`✅ Meta description length is optimal (${length} chars)`);
      return true;
    }
  }
  
  console.log('❌ No meta description found');
  return false;
}

// Check page title for keywords
function checkPageTitle() {
  const layoutPath = path.join(__dirname, '../app/layout.tsx');
  const content = fs.readFileSync(layoutPath, 'utf8');
  
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) {
    const title = titleMatch[1];
    const keywords = ['game publishing', 'china', 'co-publishing', 'localization'];
    const foundKeywords = keywords.filter(keyword => 
      title.toLowerCase().includes(keyword.toLowerCase())
    );
    
    console.log(`📋 Page Title: "${title}"`);
    console.log(`🔑 Keywords found in title: ${foundKeywords.length}/${keywords.length}`);
    
    if (foundKeywords.length >= 2) {
      console.log(`✅ Page title contains sufficient keywords: ${foundKeywords.join(', ')}`);
      return true;
    } else {
      console.log(`❌ Page title needs more keywords. Found: ${foundKeywords.join(', ')}`);
      return false;
    }
  }
  
  console.log('❌ No page title found');
  return false;
}

// Check Schema.org markup
function checkSchemaMarkup() {
  const layoutPath = path.join(__dirname, '../app/layout.tsx');
  const content = fs.readFileSync(layoutPath, 'utf8');
  
  const schemaTypes = [
    'Organization',
    'Service', 
    'WebSite',
    'BreadcrumbList'
  ];
  
  const foundSchemas = schemaTypes.filter(type => 
    content.includes(`"@type": "${type}"`)
  );
  
  console.log(`🏗️  Schema.org markup found: ${foundSchemas.length}/${schemaTypes.length} types`);
  console.log(`📊 Found schemas: ${foundSchemas.join(', ')}`);
  
  if (foundSchemas.length >= 3) {
    console.log('✅ Comprehensive Schema.org markup detected');
    return true;
  } else {
    console.log('❌ Schema.org markup needs improvement');
    return false;
  }
}

// Check .htaccess redirects
function checkHtaccessRedirects() {
  const htaccessPath = path.join(__dirname, '../.htaccess');
  
  if (!fs.existsSync(htaccessPath)) {
    console.log('❌ .htaccess file not found');
    return false;
  }
  
  const content = fs.readFileSync(htaccessPath, 'utf8');
  
  const requiredRedirects = [
    'www\\.pixsell\\.games',
    'www\\.pixsellgames\\.com',
    'HTTPS.*off'
  ];
  
  const foundRedirects = requiredRedirects.filter(pattern => 
    new RegExp(pattern).test(content)
  );
  
  console.log(`🔄 Redirect rules found: ${foundRedirects.length}/${requiredRedirects.length}`);
  
  if (foundRedirects.length >= 2) {
    console.log('✅ Proper redirect configuration detected');
    return true;
  } else {
    console.log('❌ Redirect configuration needs improvement');
    return false;
  }
}

// Check CSS minification configuration
function checkCssMinification() {
  const postcssPath = path.join(__dirname, '../postcss.config.js');
  const nextConfigPath = path.join(__dirname, '../next.config.js');
  
  let score = 0;
  let total = 2;
  
  // Check PostCSS config
  if (fs.existsSync(postcssPath)) {
    const postcssContent = fs.readFileSync(postcssPath, 'utf8');
    if (postcssContent.includes('cssnano')) {
      console.log('✅ CSS minification configured in PostCSS');
      score++;
    } else {
      console.log('❌ CSS minification not configured in PostCSS');
    }
  }
  
  // Check Next.js config
  if (fs.existsSync(nextConfigPath)) {
    const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
    if (nextConfigContent.includes('optimizeCss') || nextConfigContent.includes('cssChunking')) {
      console.log('✅ CSS optimization configured in Next.js');
      score++;
    } else {
      console.log('❌ CSS optimization not configured in Next.js');
    }
  }
  
  console.log(`🎨 CSS optimization: ${score}/${total} configurations found`);
  return score >= 1;
}

// Run all checks
function runSeoChecks() {
  console.log('='.repeat(50));
  console.log('SEO OPTIMIZATION REPORT');
  console.log('='.repeat(50));
  
  const checks = [
    { name: 'Meta Description Length', fn: checkMetaDescription },
    { name: 'Page Title Keywords', fn: checkPageTitle },
    { name: 'Schema.org Markup', fn: checkSchemaMarkup },
    { name: 'Redirect Configuration', fn: checkHtaccessRedirects },
    { name: 'CSS Minification', fn: checkCssMinification }
  ];
  
  let passed = 0;
  let total = checks.length;
  
  checks.forEach(check => {
    console.log(`\n🔍 Checking: ${check.name}`);
    console.log('-'.repeat(30));
    if (check.fn()) {
      passed++;
    }
  });
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 SEO SCORE: ${passed}/${total} (${Math.round(passed/total*100)}%)`);
  console.log('='.repeat(50));
  
  if (passed === total) {
    console.log('🎉 All SEO issues have been resolved!');
  } else {
    console.log('⚠️  Some SEO issues still need attention.');
  }
  
  return passed === total;
}

// Run the checks
runSeoChecks(); 