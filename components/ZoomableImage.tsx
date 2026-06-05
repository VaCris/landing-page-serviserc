'use client';

import { useEffect, useState } from 'react';

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.classList.add('image-modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('image-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button className={`zoomable-image ${className ?? ''}`} type="button" onClick={() => setIsOpen(true)} aria-label="Ampliar imagen">
        <img src={src} alt={alt} />
        <span>Ampliar imagen</span>
      </button>

      {isOpen ? (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label="Vista ampliada de imagen">
          <button className="image-modal-backdrop" type="button" aria-label="Cerrar imagen ampliada" onClick={() => setIsOpen(false)} />
          <div className="image-modal-content">
            <button className="image-modal-close" type="button" onClick={() => setIsOpen(false)} aria-label="Cerrar">
              ×
            </button>
            <img src={src} alt={alt} />
          </div>
        </div>
      ) : null}
    </>
  );
}
