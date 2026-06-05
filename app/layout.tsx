import type { Metadata } from 'next';
import './globals.css';
import './visual-upgrades.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { asset, siteConfig, whatsappLink } from '@/lib/site';

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <img src={asset('/img/Whatsapp_37229.webp')} alt="WhatsApp" />
        </a>
        <Footer />
      </body>
    </html>
  );
}
