const fs = require('fs');
const path = require('path');

// Function to add hreflang tags to HTML files
function addHreflangTags(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      addHreflangTags(filePath);
    } else if (file.endsWith('.html')) {
      addHreflangToFile(filePath);
    }
  });
}

function addHreflangToFile(filePath) {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Get the relative path from the out directory
  const relativePath = path.relative('out', filePath);
  const urlPath = relativePath === 'index.html' ? '' : '/' + relativePath.replace('.html', '');
  const fullUrl = `https://pixsellgames.com${urlPath}`;
  
  // Create hreflang tags
  const hreflangTags = `
    <link rel="alternate" hrefLang="en" href="${fullUrl}" />
    <link rel="alternate" hrefLang="x-default" href="${fullUrl}" />
  `.trim();
  
  // Check if hreflang tags already exist
  if (content.includes('hrefLang="en"')) {
    console.log(`  Skipping: ${filePath} (already has hreflang tags)`);
    return;
  }
  
  // Insert hreflang tags after the title tag or in the head section
  if (content.includes('<title>')) {
    content = content.replace(
      /(<title>.*?<\/title>)/s,
      `$1\n    ${hreflangTags}`
    );
  } else if (content.includes('</head>')) {
    content = content.replace(
      /(<\/head>)/,
      `    ${hreflangTags}\n$1`
    );
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`  Updated: ${filePath}`);
}

// Run the script
console.log('🔧 Adding hreflang tags to HTML files...');

if (fs.existsSync('out')) {
  addHreflangTags('out');
  console.log('✅ Hreflang tags added successfully!');
} else {
  console.log('❌ "out" directory not found. Please run "npm run build" first.');
} 