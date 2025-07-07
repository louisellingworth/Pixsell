#!/bin/bash

# Pixsell Website Deployment Fix Script
# This script helps deploy the fixed files to resolve 404/403 errors

echo "🚀 Pixsell Website Deployment Fix"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' directory not found. Build may have failed."
    exit 1
fi

echo ""
echo "📋 Files to upload to your server:"
echo "=================================="
echo "1. All contents of the 'out' directory"
echo "2. The updated '.htaccess' file"
echo ""
echo "📁 Key files that should now work:"
echo "- /about.html"
echo "- /contact.html"
echo "- /privacy.html"
echo "- /terms.html"
echo "- /blog.html"
echo "- /services.html"
echo "- /services/co-publishing.html"
echo "- /services/localisation.html"
echo "- /services/marketing.html"
echo "- /services/partnership.html"
echo "- /blog/[all-blog-posts].html"
echo ""

echo "🔧 .htaccess changes made:"
echo "- Added proper routing for /services/ paths"
echo "- Added proper routing for /blog/ paths"
echo "- Blocked access to llms.txt (404 error)"
echo "- Fixed directory listing issues (403 errors)"
echo ""

echo "📤 Upload Instructions:"
echo "======================"
echo "1. Upload all files from the 'out' directory to your web server's public_html directory"
echo "2. Upload the updated '.htaccess' file to your web server's public_html directory"
echo "3. Make sure the .htaccess file is in the root directory of your website"
echo "4. Clear any server-side caching if available"
echo ""

echo "✅ All routing issues should now be resolved!"
echo ""
echo "🔍 Test these URLs after deployment:"
echo "- https://pixsellgames.com/about"
echo "- https://pixsellgames.com/contact"
echo "- https://pixsellgames.com/privacy"
echo "- https://pixsellgames.com/terms"
echo "- https://pixsellgames.com/blog/"
echo "- https://pixsellgames.com/services/"
echo "- https://pixsellgames.com/services/co-publishing"
echo "- https://pixsellgames.com/services/localisation"
echo "- https://pixsellgames.com/services/marketing"
echo "- https://pixsellgames.com/services/partnership"
echo ""

echo "🎉 Deployment fix ready!" 