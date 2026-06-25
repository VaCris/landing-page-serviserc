import type { SVGProps } from 'react';
import Link from 'next/link';
import { footerContent } from '@/data/footer';
import { asset, whatsappLink } from '@/lib/site';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/contableslegales/', label: 'Facebook' }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="b2b-arch-separator top">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,100 Q50,0 100,100 Z" />
        </svg>
      </div>
      <div className="container footer-grid">
        <div className="footer-company">
          <Link className="footer-brand" href="/">
            <img src={asset('/img/logo-serviserc.webp')} alt="Logo SERVISERC" />
            <div className="brand-text">
              <span className="brand-tagline">Consultoría Empresarial</span>
              <span className="brand-name">SERVISERC S.A.C.</span>
            </div>
          </Link>
          <p>{footerContent.company.description}</p>
          <div className="footer-contact">
            <a href={whatsappLink()}>WhatsApp: {footerContent.company.contact.whatsapp}</a>
            <span>Teléfono: {footerContent.company.contact.phone}</span>
          </div>
          <div className="footer-socials">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {footerContent.columns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-column footer-locations">
          <h3>Nuestras Sedes</h3>
          <ul>
            {footerContent.locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{footerContent.bottom}</p>
        <div>
          <Link href="/servicios/">Servicios</Link>
          <Link href="/convenio-uch/">Convenio UCH</Link>
          <a href={whatsappLink()}>Contacto</a>
        </div>
      </div>
    </footer>
  );
}
