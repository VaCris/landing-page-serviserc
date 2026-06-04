import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { siteConfig, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'SERVISERC S.A.C. | Asesoría Contable y Tributaria',
    template: '%s | SERVISERC S.A.C.',
  },
  description: siteConfig.description,
  openGraph: {
    title: 'SERVISERC S.A.C. | Asesoría Contable y Tributaria',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'SERVISERC S.A.C.',
    images: ['https://iili.io/d6MdEcQ.webp'],
    locale: 'es_PE',
    type: 'website',
  },
  keywords: [
    'contabilidad Perú',
    'asesoría tributaria',
    'asesoría contable',
    'consultoría empresarial',
    'SERVISERC',
    'SUNAT',
  ],
};

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/#nosotros', label: 'Sobre Nosotros' },
  { href: '/convenio-uch/', label: 'Convenio UCH' },
  { href: '/#sedes', label: 'Sedes' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="container navbar">
            <Link className="brand" href="/">
              <img className="brand-mark" src="/img/172728779273.webp" alt="Logo SERVISERC" />
              <span>SERVISERC</span>
            </Link>
            <nav className="nav-links" aria-label="Navegación principal">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <img src="/img/Whatsapp_37229.webp" alt="WhatsApp" />
        </a>
        <footer className="footer">
          <div className="container">
            <p>Copyright © 2024 SERVISERC S.A.C. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
