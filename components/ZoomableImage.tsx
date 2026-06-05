'use client';

import { useEffect, useState } from 'react';

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.6;
const ZOOM_STEP = 0.2;

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const closeModal = () => {
    setIsOpen(false);
    setZoom(1);
  };

  const zoomIn = () => {
    setZoom((current) => Math.min(MAX_ZOOM, Number((current + ZOOM_STEP).toFixed(1))));
  };

  const zoomOut = () => {
    setZoom((current) => Math.max(MIN_ZOOM, Number((current - ZOOM_STEP).toFixed(1))));
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === '+' || event.key === '=') zoomIn();
      if (event.key === '-') zoomOut();
      if (event.key === '0') setZoom(1);
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
          <button className="image-modal-backdrop" type="button" aria-label="Cerrar imagen ampliada" onClick={closeModal} />
          <div className="image-modal-window">
            <div className="image-modal-toolbar">
              <span>{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={zoomOut} disabled={zoom <= MIN_ZOOM} aria-label="Alejar imagen">
                −
              </button>
              <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} aria-label="Restablecer zoom">
                100%
              </button>
              <button type="button" onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Acercar imagen">
                +
              </button>
              <button className="image-modal-close" type="button" onClick={closeModal} aria-label="Cerrar">
                ×
              </button>
            </div>
            <div className="image-modal-content">
              <img src={src} alt={alt} style={{ transform: `scale(${zoom})` }} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
