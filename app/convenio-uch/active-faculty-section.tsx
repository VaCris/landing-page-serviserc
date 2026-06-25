'use client';

import { useState } from 'react';
import { asset } from '@/lib/site';

type Faculty = { number: number; name: string; image: string; careers: string[] };

export default function ActiveFacultySection({
  faculties,
}: {
  faculties: Faculty[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFaculty = faculties[activeIndex];

  const getImageUrl = (img: string) => {
    if (img.startsWith('http')) return img;
    return asset(`/img/${img}`);
  };

  return (
    <div className={["agreement-careers-vertical", activeIndex % 2 === 1 ? "is-reversed" : ""].join(" ")}>
      {/* Columna IZQUIERDA: Imagen */}
      <div className="agreement-careers-image-col">
        <div className="agreement-careers-image-main">
          <img
            key={`img-${activeFaculty.number}`}
            src={getImageUrl(activeFaculty.image)}
            alt={activeFaculty.name}
            className="agreement-careers-img-transition"
          />
          <div
            key={`num-${activeFaculty.number}`}
            className="agreement-careers-overlay-num"
          >
            {String(activeFaculty.number).padStart(2, '0')}
          </div>
          <div
            key={`letter-${activeFaculty.number}`}
            className="agreement-careers-letter"
            aria-hidden="true"
          >
            {activeFaculty.number === 1 && "I"}
            {activeFaculty.number === 2 && "C"}
            {activeFaculty.number === 3 && "H"}
            {activeFaculty.number === 4 && "S"}
            {activeFaculty.number === 5 && "E"}
          </div>
        </div>
      </div>

      {/* Columna CENTRO: Línea de tiempo */}
      <div className="agreement-careers-timeline">
        <div className="agreement-careers-stack">
          {faculties.map((fac, idx) => (
            <button
              key={fac.name}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={[
                'agreement-career-row',
                idx === activeIndex ? 'is-active' : 'is-inactive',
              ].join(' ')}
            >
              <span className="agreement-career-num">{idx === activeIndex ? String(fac.number) : ''}</span>
              <span className="agreement-career-line" />
              <span className="agreement-career-name">{fac.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Columna DERECHA: Panel */}
      <div className="agreement-careers-panel">
        <div
          key={`panel-bg-${activeFaculty.number}`}
          className="agreement-careers-panel-bg-num"
        >
          {String(activeFaculty.number)}
        </div>

        <div className="agreement-careers-panel-content">
          <h3 className="agreement-careers-panel-title">
            {activeFaculty.name}
          </h3>

          {activeFaculty.careers.length > 0 && (
            <ul className="agreement-careers-plain-list">
              {activeFaculty.careers.map((career) => (
                <li key={career}>{career}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mobile: Acordeón (solo visible en mobile) */}
      <div className="agreement-careers-mobile-wrapper">
        {faculties.map((fac, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={fac.name}
              className={[
                'agreement-careers-mobile-item',
                isActive ? 'is-active' : 'is-inactive',
              ].join(' ')}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="agreement-careers-mobile-trigger"
              >
                <span className="agreement-careers-mobile-label">{fac.name}</span>
                <span className="agreement-careers-mobile-num">
                  {String(fac.number).padStart(2, '0')}
                </span>
                <svg className="agreement-careers-mobile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div className="agreement-careers-mobile-expand">
                <div className="agreement-careers-mobile-image">
                  <img
                    src={getImageUrl(fac.image)}
                    alt={fac.name}
                    width={800}
                    height={600}
                  />
                  <div className="agreement-careers-mobile-img-num">
                    {String(fac.number).padStart(2, '0')}
                  </div>
                </div>
                <div className="agreement-careers-mobile-body">
                  <h3 className="agreement-careers-mobile-title">{fac.name}</h3>
                  {fac.careers.length > 0 && (
                    <ul className="agreement-careers-mobile-list">
                      {fac.careers.map((career) => (
                        <li key={career}>{career}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
