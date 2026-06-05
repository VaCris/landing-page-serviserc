'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { asset, whatsappLink } from '@/lib/site';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/#nosotros', label: 'Sobre Nosotros' },
  { href: '/convenio-uch/', label: 'Convenio UCH' },
  { href: '/#sedes', label: 'Sedes' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
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
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <img className="brand-mark" src={asset('/img/172728779273.webp')} alt="Logo SERVISERC" />
          <span>SERVISERC</span>
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="nav-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
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
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
            Contactar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
