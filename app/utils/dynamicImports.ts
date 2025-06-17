import dynamic from 'next/dynamic';
import React from 'react';

// Simple loading component
const SimpleLoadingComponent = () => (
  React.createElement('div', {
    className: 'animate-pulse bg-gray-800/20 rounded-lg min-h-[150px] w-full'
  })
);

// Default loading state
const loadingComponent = {
  loading: () => React.createElement(SimpleLoadingComponent)
};

// Function to dynamically import components with default loading
export function lazyImport(componentImport: () => Promise<any>) {
  return dynamic(componentImport, {
    ...loadingComponent,
    ssr: false
  });
} 