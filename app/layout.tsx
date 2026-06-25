import type { Metadata, Viewport } from 'next';
import { Roboto, Montserrat } from 'next/font/google';
import './globals.css';
import './visual-upgrades.css';
import './image-modal-overrides.css';
import './uch-hero-overrides.css';
import './agreement-compact-overrides.css';
import './service-detail-overrides.css';
import './service-detail-editorial-overrides.css';
import './navbar-dropdown-overrides.css';
import './service-card-visual-overrides.css';
import './home-editorial-overrides.css';
import './page-motion-overrides.css';
import { JsonLd } from '@/components/JsonLd';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { PageMotion } from '@/components/PageMotion';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { absoluteAsset, asset, siteConfig, whatsappLink } from '@/lib/site';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#071d3d',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Consultoria Empresarial SERVISERC S.A.C. | Asesoría Contable, Tributaria y Laboral en Lima',
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
    title: 'Consultoria Empresarial SERVISERC S.A.C. | Asesoría Contable y Tributaria en Lima',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteAsset(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: 'Consultoria Empresarial SERVISERC S.A.C. servicios contables y tributarios',
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoria Empresarial SERVISERC S.A.C. | Asesoría Contable y Tributaria en Lima',
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
      <body 
        className={`${roboto.variable} ${montserrat.variable}`}
        style={{
          '--font-body': roboto.style.fontFamily,
          '--font-heading': montserrat.style.fontFamily,
        } as React.CSSProperties}
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <PageMotion />
        <Navbar />
        {children}
        <a className="whatsapp-float-premium" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <div className="wa-premium-content">
            <span className="wa-premium-dot"></span>
            <span className="wa-premium-text">¿Necesitas ayuda?</span>
            <div className="wa-premium-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </div>
        </a>
        <Footer />
      </body>
    </html>
  );
}
