/**
 * Vercel Web Analytics Integration
 * This file initializes Vercel Web Analytics for the site
 */

// Copy the inject function from @vercel/analytics
// Since this is a static site, we'll use the browser-compatible version
(function() {
  'use strict';
  
  // Initialize the analytics queue
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Detect environment (production vs development)
  function detectEnvironment() {
    // For static sites, we'll default to production when deployed
    // Vercel will handle this automatically
    return 'production';
  }
  
  // Set the mode
  window.vam = detectEnvironment();
  
  // Inject the analytics script
  function injectScript() {
    if (document.querySelector('script[data-vercel-analytics]')) {
      return; // Already injected
    }
    
    var script = document.createElement('script');
    script.src = '/_vercel/insights/script.js';
    script.defer = true;
    script.setAttribute('data-vercel-analytics', '');
    
    // Add to document
    if (document.head) {
      document.head.appendChild(script);
    } else {
      // Fallback: wait for DOM ready
      document.addEventListener('DOMContentLoaded', function() {
        document.head.appendChild(script);
      });
    }
  }
  
  // Inject the script when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectScript);
  } else {
    injectScript();
  }
})();
