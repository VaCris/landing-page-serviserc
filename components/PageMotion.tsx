'use client';

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
].join(',');

export function PageMotion() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelector));

    elements.forEach((element, index) => {
      element.classList.add('motion-ready');
      element.style.setProperty('--motion-delay', `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
