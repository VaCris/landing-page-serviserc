'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { services } from '@/data/services';
import { asset, whatsappLink } from '@/lib/site';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/#nosotros', label: 'Sobre Nosotros' },
  { href: '/convenio-uch/', label: 'Convenio UCH' },
  { href: '/#sedes', label: 'Sedes' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const closeMenus = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsDesktopServicesOpen(false);

    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    closeMenus();
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);

    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="container navbar">
        <Link className="brand" href="/" onClick={closeMenus}>
          <img className="brand-mark" src={asset('/img/172728779273.webp')} alt="Logo SERVISERC" />
          <span>SERVISERC</span>
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          <Link href="/" onClick={closeMenus}>Inicio</Link>

          <div
            className={`nav-dropdown ${isDesktopServicesOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
          >
            <Link className="nav-dropdown-trigger" href="/servicios/" onFocus={() => setIsDesktopServicesOpen(true)} onClick={closeMenus}>
              Servicios
              <span aria-hidden="true">▾</span>
            </Link>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-list">
                {services.map((service) => (
                  <Link key={service.slug} href={`/servicios/${service.slug}/`} onClick={closeMenus}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenus}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="nav-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={closeMenus}>
          WhatsApp
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`} id="mobile-menu">
        <nav className="mobile-menu-panel" aria-label="Navegación móvil">
          <Link href="/" onClick={closeMenus}>
            Inicio
          </Link>

          <div className="mobile-services-group">
            <button type="button" className="mobile-services-toggle" aria-expanded={isServicesOpen} onClick={() => setIsServicesOpen((current) => !current)}>
              Servicios
              <span aria-hidden="true">{isServicesOpen ? '−' : '+'}</span>
            </button>

            <div className={`mobile-services-list ${isServicesOpen ? 'is-open' : ''}`}>
              {services.map((service) => (
                <Link key={service.slug} href={`/servicios/${service.slug}/`} onClick={closeMenus}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenus}>
              {item.label}
            </Link>
          ))}
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={closeMenus}>
            Contactar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
