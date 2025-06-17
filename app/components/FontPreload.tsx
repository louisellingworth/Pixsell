'use client';

import React, { useEffect } from 'react';

const FontPreload: React.FC = () => {
  // Handle font loading on the client side
  useEffect(() => {
    // Find the print media stylesheet and change it to 'all'
    const fontStylesheet = document.querySelector('link[data-font-stylesheet="true"]');
    if (fontStylesheet) {
      fontStylesheet.setAttribute('media', 'all');
    }
  }, []);

  return (
    <>
      {/* Critical font preloading for better CLS and LCP */}
      <link 
        rel="preload" 
        href="/fonts/inter-var.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      
      {/* Secondary fonts with lower priority */}
      <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        media="print"
        data-font-stylesheet="true"
      />
      {/* Fallback if JavaScript is disabled */}
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </noscript>
    </>
  );
};

export default FontPreload;
