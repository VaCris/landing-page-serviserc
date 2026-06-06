import type { Metadata, Viewport } from 'next';
import './globals.css';
import './visual-upgrades.css';
import './image-modal-overrides.css';
import './uch-hero-overrides.css';
import './agreement-compact-overrides.css';
import './service-detail-overrides.css';
import './navbar-dropdown-overrides.css';
import './service-card-visual-overrides.css';
import { JsonLd } from '@/components/JsonLd';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { absoluteAsset, asset, siteConfig, whatsappLink } from '@/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#071d3d',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'SERVISERC S.A.C. | Asesoría Contable, Tributaria y Laboral en Lima',
    template: '%s | SERVISERC S.A.C.',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Accounting services',
  keywords: siteConfig.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SERVISERC S.A.C. | Asesoría Contable y Tributaria en Lima',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteAsset(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: 'SERVISERC S.A.C. servicios contables y tributarios',
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SERVISERC S.A.C. | Asesoría Contable y Tributaria en Lima',
    description: siteConfig.description,
    images: [absoluteAsset(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'PE-LIM',
    'geo.placename': 'Lima, Perú',
    'geo.position': '-12.046374;-77.042793',
    ICBM: '-12.046374, -77.042793',
    'business:contact_data:country_name': 'Perú',
    'business:contact_data:region': 'Lima',
    'business:contact_data:locality': 'Lima',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE">
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
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
