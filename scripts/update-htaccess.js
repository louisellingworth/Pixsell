const fs = require('fs');
const path = require('path');

// Create the optimized .htaccess content
const optimizedHtaccess = `RewriteEngine On
RewriteBase /

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force non-www
RewriteCond %{HTTP_HOST} ^www\\.pixsellgames\\.com$ [NC]
RewriteRule ^(.*)$ https://pixsellgames.com/$1 [R=301,L]

# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html

# Advanced Compression - Brotli with gzip fallback
<IfModule mod_brotli.c>
  AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json application/xml application/xhtml+xml image/svg+xml application/rss+xml application/atom_xml application/vnd.ms-fontobject application/x-font-ttf font/opentype font/woff font/woff2
</IfModule>

# Enable Gzip compression as fallback
<IfModule mod_deflate.c>
  # Enable compression for the following file types
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE image/svg+xml
  AddOutputFilterByType DEFLATE image/x-icon
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/atom_xml
  AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
  AddOutputFilterByType DEFLATE application/x-font-ttf
  AddOutputFilterByType DEFLATE font/opentype
  AddOutputFilterByType DEFLATE font/woff
  AddOutputFilterByType DEFLATE font/woff2
</IfModule>

# Enhanced browser caching optimized for mobile
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Default directive
  ExpiresDefault "access plus 1 month"
  
  # Images - extended cache for mobile bandwidth savings
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # Video
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType video/mpeg "access plus 1 year"
  
  # CSS, JavaScript - extended for mobile performance
  ExpiresByType text/css "access plus 6 months"
  ExpiresByType text/javascript "access plus 6 months"
  ExpiresByType application/javascript "access plus 6 months"
  
  # Fonts - critical for text rendering
  ExpiresByType application/vnd.ms-fontobject "access plus 1 year"
  ExpiresByType application/x-font-ttf "access plus 1 year"
  ExpiresByType application/x-font-opentype "access plus 1 year"
  ExpiresByType application/x-font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  
  # Others
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType application/x-shockwave-flash "access plus 1 month"
</IfModule>

# Enhanced security and performance headers
<IfModule mod_headers.c>
  # Strict Transport Security
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" env=HTTPS
  
  # X-Content-Type-Options
  Header always set X-Content-Type-Options "nosniff"
  
  # X-Frame-Options
  Header always set X-Frame-Options "SAMEORIGIN"
  
  # X-XSS-Protection
  Header always set X-XSS-Protection "1; mode=block"
  
  # Referrer-Policy
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Content-Security-Policy
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self'; media-src 'self'; object-src 'none'; frame-src 'self'; worker-src 'self' blob:; manifest-src 'self'; base-uri 'self'; form-action 'self';"
  
  # Permissions-Policy
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()"

  # Cache immutable content (hash-named files won't change)
  <FilesMatch "\\.(js|css|woff2?|jpe?g|png|gif|ico|svg|webp)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  
  # Enable Keep-Alive for better mobile performance
  Header set Connection keep-alive
  
  # Optimize mobile viewport
  <FilesMatch "\\.html$">
    Header set X-UA-Compatible "IE=edge"
  </FilesMatch>
</IfModule>

# Prevent viewing of .htaccess file
<Files .htaccess>
  Order allow,deny
  Deny from all
</Files>

# Prevent viewing of hidden files/folders
<FilesMatch "^\\.">
  Order allow,deny
  Deny from all
</FilesMatch>

# Disable directory listing
Options -Indexes

# Serve correct MIME types
<IfModule mod_mime.c>
  # JavaScript
  AddType application/javascript js
  # JSON
  AddType application/json json
  # CSS
  AddType text/css css
  # SVG
  AddType image/svg+xml svg svgz
  # Fonts
  AddType application/vnd.ms-fontobject eot
  AddType font/ttf ttf
  AddType font/otf otf
  AddType font/woff woff
  AddType font/woff2 woff2
  # WebP
  AddType image/webp webp
</IfModule>

# Set UTF-8 charset for HTML/CSS/JS
AddDefaultCharset UTF-8
<FilesMatch ".(html|htm|js|css)$">
  SetEnv no-gzip 1
  AddCharset UTF-8 .html .htm .js .css
</FilesMatch>`;

// Path to the out directory's .htaccess file
const htaccessPath = path.join(process.cwd(), 'out', '.htaccess');

// Write the optimized content to the file
fs.writeFileSync(htaccessPath, optimizedHtaccess, 'utf8');

console.log('✅ .htaccess updated with mobile optimizations');
