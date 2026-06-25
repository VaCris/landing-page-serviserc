'use client';

import { animate } from 'framer-motion';
import { useEffect } from 'react';

const motionSelector = [
  '.home-hero-content',
  '.services-hero-grid > *',
  '.uch-hero-content',
  '.section-heading-row',
  '.service-card-visual',
  '.process-card',
  '.service-process-card',
  '.summary-item',
  '.location-card',
  '.image-panel',
  '.agreement-card',
  '.agreement-careers-image',
  '.careers-panel',
  '.service-main-panel',
  '.service-side-panel',
  '.service-cta-panel',
  '.related-service-card',
  '.faq-item',
  '.faq-split-sidebar',
  '.interactive-locations-sidebar',
  '.interactive-locations-map-wrapper',
  '.agreement-band-content',
].join(',');

const easeOut = [0.22, 1, 0.36, 1] as const;

export function PageMotion() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelector));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.style.opacity = '1';
        element.style.transform = 'none';
      });
      return;
    }

    elements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(24px) scale(.985)';
      element.style.willChange = 'opacity, transform';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const index = elements.indexOf(element);
          const delay = Math.min(index % 6, 5) * 0.065;

          animate(
            element,
            {
              opacity: [0, 1],
              y: [24, 0],
              scale: [0.985, 1],
            },
            {
              duration: 0.72,
              delay,
              ease: easeOut,
            }
          ).then(() => {
            element.style.opacity = '1';
            element.style.transform = '';
            element.style.willChange = '';
          });

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
