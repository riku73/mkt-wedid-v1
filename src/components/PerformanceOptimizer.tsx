'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface PerformanceOptimizerProps {
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
  enableCriticalCSS?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enablePreloading = true,
  enableResourceHints = true,
  enableCriticalCSS = true
}) => {
  
  useEffect(() => {
    // Preload critical resources
    if (enablePreloading) {
      // Preload key fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.onload = () => {
        fontLink.rel = 'stylesheet';
      };
      document.head.appendChild(fontLink);

      // Preload hero images
      const heroImages = [
        '/images/hero-bg.jpg',
        '/images/services-hero.jpg', 
        '/images/about-hero.jpg'
      ];
      
      heroImages.forEach(imagePath => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = imagePath;
        link.as = 'image';
        document.head.appendChild(link);
      });
    }

    // Add resource hints
    if (enableResourceHints) {
      // DNS prefetch for external domains
      const dnsPrefetches = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://images.unsplash.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      dnsPrefetches.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnects = [
        'https://fonts.gstatic.com',
        'https://images.unsplash.com'
      ];

      preconnects.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }

    // Lazy load non-critical content
    const lazyLoadObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            lazyLoadObserver.unobserve(img);
          }
        }
      });
    });

    // Apply lazy loading to images
    document.querySelectorAll('img[data-src]').forEach(img => {
      lazyLoadObserver.observe(img);
    });

    // Critical CSS optimization
    if (enableCriticalCSS) {
      // Identify above-the-fold content and ensure its CSS is loaded first
      const criticalElements = document.querySelectorAll('.hero, .navigation, .above-fold');
      criticalElements.forEach(element => {
        element.classList.add('critical-content');
      });
    }

    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // Report to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Import and use web-vitals library if available
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    }).catch(() => {
      // Fallback if web-vitals is not available
      console.log('Web Vitals library not available');
    });

    return () => {
      lazyLoadObserver.disconnect();
    };
  }, [enablePreloading, enableResourceHints, enableCriticalCSS]);

  return (
    <>
      {/* Service Worker for caching */}
      <Script
        id="service-worker-registration"
        strategy="afterInteractive"
      >
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `}
      </Script>

      {/* Critical performance hints in head */}
      <Script
        id="performance-hints"
        strategy="beforeInteractive"
      >
        {`
          // Preload critical resources
          if (typeof window !== 'undefined') {
            // Prefetch next likely pages
            const prefetchPages = ['/services', '/contact', '/about'];
            prefetchPages.forEach(page => {
              const link = document.createElement('link');
              link.rel = 'prefetch';
              link.href = page;
              document.head.appendChild(link);
            });
          }
        `}
      </Script>

      {/* Image optimization script */}
      <Script
        id="image-optimization"
        strategy="afterInteractive"
      >
        {`
          // WebP detection and lazy loading
          function supportsWebP() {
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            return canvas.toDataURL('image/webp').indexOf('webp') > 0;
          }

          if (supportsWebP()) {
            document.documentElement.classList.add('webp');
          }

          // Optimize images based on device pixel ratio
          function optimizeImages() {
            const images = document.querySelectorAll('img');
            const pixelRatio = window.devicePixelRatio || 1;
            
            images.forEach(img => {
              if (img.dataset.optimized) return;
              
              const width = img.offsetWidth;
              const optimalWidth = Math.ceil(width * pixelRatio);
              
              if (img.src.includes('unsplash.com')) {
                const url = new URL(img.src);
                url.searchParams.set('w', optimalWidth.toString());
                url.searchParams.set('auto', 'format,compress');
                url.searchParams.set('q', '85');
                img.src = url.toString();
              }
              
              img.dataset.optimized = 'true';
            });
          }

          // Run on load and resize
          window.addEventListener('load', optimizeImages);
          window.addEventListener('resize', optimizeImages);
        `}
      </Script>

      {/* Core Web Vitals improvements */}
      <Script
        id="core-web-vitals"
        strategy="afterInteractive"
      >
        {`
          // Reduce layout shift
          function preventLayoutShift() {
            // Set explicit dimensions for images without them
            const images = document.querySelectorAll('img:not([width]):not([height])');
            images.forEach(img => {
              img.style.aspectRatio = '16/9'; // Default aspect ratio
            });

            // Reserve space for dynamic content
            const dynamicContainers = document.querySelectorAll('.dynamic-content');
            dynamicContainers.forEach(container => {
              container.style.minHeight = '200px';
            });
          }

          // Optimize largest contentful paint
          function optimizeLCP() {
            // Ensure hero images are prioritized
            const heroImages = document.querySelectorAll('.hero img, .above-fold img');
            heroImages.forEach(img => {
              img.loading = 'eager';
              img.decoding = 'sync';
            });
          }

          // Optimize first input delay
          function optimizeFID() {
            // Delay non-critical JavaScript
            const nonCriticalScripts = document.querySelectorAll('script[data-priority="low"]');
            nonCriticalScripts.forEach(script => {
              setTimeout(() => {
                script.src = script.dataset.src;
              }, 3000);
            });
          }

          document.addEventListener('DOMContentLoaded', () => {
            preventLayoutShift();
            optimizeLCP();
            optimizeFID();
          });
        `}
      </Script>
    </>
  );
};

export default PerformanceOptimizer;