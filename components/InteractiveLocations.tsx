'use client';

import { useState } from 'react';
import { locations } from '@/data/locations';

export function InteractiveLocations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = locations[activeIndex];

  return (
    <div className="interactive-locations-container">
      <div className="interactive-locations-sidebar">
        {locations.map((loc, idx) => (
          <button 
            key={loc.name}
            type="button"
            className={`interactive-locations-btn ${idx === activeIndex ? 'is-active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="il-btn-content">
              <h3>{loc.name}</h3>
              <p>{loc.address}</p>
            </div>
            <div className="il-btn-chevron">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </button>
        ))}
      </div>
      <div className="interactive-locations-map-wrapper">
        <div className="il-map-box">
          <iframe 
            key={activeLocation.name}
            src={activeLocation.map} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title={`Mapa de ${activeLocation.name}`} 
          />
        </div>
        <div className="il-details-box">
          <div className="il-contact-info">
            <div className="il-detail-row">
              <strong>Referencia:</strong>
              <span>{activeLocation.reference}</span>
            </div>
            <div className="il-detail-row">
              <strong>Celular:</strong>
              <span>{activeLocation.phones.join(' / ')}</span>
            </div>
            <div className="il-detail-row">
              <strong>Teléfono Oficina:</strong>
              <span>{activeLocation.office}</span>
            </div>
          </div>

          <div className="il-schedule-box">
            <strong>Horario de Atención</strong>
            <ul className="il-schedule-list">
              <li>
                <span>Lun - Vie:</span>
                <span>9:00 AM – 6:00 PM</span>
              </li>
              <li>
                <span>Sábados:</span>
                <span>9:00 AM – 1:00 PM</span>
              </li>
              <li>
                <span>Domingos:</span>
                <span className="closed-text">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
