
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
    
    // Load gtag-script with delay
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR-ANALYTICS-ID";
      script.id = "gtag-script";
      // Add attributes
      script.setAttribute(async, "true");
      script.setAttribute(data-delay, "2000");
      script.setAttribute(data-priority, "low");
      document.body.appendChild(script);
    }, 2000);
  }
}

// Initialize delayed loading
loadDelayedResources();
  