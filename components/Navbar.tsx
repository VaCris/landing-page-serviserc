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

const serviceGroups = {
  contable: services.filter((service) => service.categories.includes('contable')),
  tributario: services.filter((service) => service.categories.includes('tributario')),
  empresarial: services.filter((service) => service.categories.includes('empresarial')),
};

export function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenus = () => {
    setIsOpen(false);
    const details = document.querySelector('details.mobile-services-group') as HTMLDetailsElement | null;
    if (details) details.open = false;

    if (
      typeof document !== 'undefined' &&
      document.activeElement instanceof HTMLElement
    ) {
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
        <Link
          className="brand"
          href="/"
          scroll={true}
          onClick={closeMenus}
        >
          <img
            className="brand-mark"
            src={asset('/img/logo-serviserc.webp')}
            alt="Logo SERVISERC"
          />
          <div className="brand-text">
            <span className="brand-tagline">Consultoría Empresarial</span>
            <span className="brand-name">SERVISERC S.A.C.</span>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          <Link href="/" scroll={true} onClick={closeMenus}>
            Inicio
          </Link>

          {/* ponytail: CSS :hover instead of React state for desktop dropdown */}
          <div className="nav-dropdown">
            <Link
              className="nav-dropdown-trigger"
              href="/servicios/"
              scroll={true}
            >
              Servicios
              <span aria-hidden="true">▾</span>
            </Link>

            <div className="nav-dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <h4>Contables</h4>

                  {serviceGroups.contable.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicios/${service.slug}/`}
                      onClick={closeMenus}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <div className="mega-menu-column">
                  <h4>Tributarios</h4>

                  {serviceGroups.tributario.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicios/${service.slug}/`}
                      onClick={closeMenus}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <div className="mega-menu-column">
                  <h4>Empresariales</h4>

                  {serviceGroups.empresarial.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicios/${service.slug}/`}
                      onClick={closeMenus}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mega-menu-footer">
                <Link href="/servicios/" onClick={closeMenus}>
                  Ver todos los servicios →
                </Link>
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              onClick={closeMenus}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="nav-cta"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenus}
        >
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

      <div
        className={`mobile-menu ${isOpen ? 'is-open' : ''}`}
        id="mobile-menu"
      >
        <nav
          className="mobile-menu-panel"
          aria-label="Navegación móvil"
        >
          <Link href="/" onClick={closeMenus}>
            Inicio
          </Link>

          {/* ponytail: native <details> instead of React state for mobile accordion */}
          <details className="mobile-services-group">
            <summary className="mobile-services-toggle" style={{ listStyle: 'none' }}>
              Servicios
              <span aria-hidden="true">▾</span>
            </summary>

            <div className="mobile-services-list">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}/`}
                  onClick={closeMenus}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </details>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
            >
              {item.label}
            </Link>
          ))}

          <a
            className="btn btn-primary"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenus}
          >
            Contactar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}