import { locations } from '@/data/locations';
import { Service, services } from '@/data/services';
import { absoluteAsset, absoluteUrl, siteConfig, whatsappLink } from '@/lib/site';

const coordinatesByLocation: Record<string, { latitude: number; longitude: number }> = {
  'Los Olivos': { latitude: -11.9584867, longitude: -77.0695886 },
  'San Isidro': { latitude: -12.0998168, longitude: -77.0261631 },
  Carabayllo: { latitude: -11.8733845, longitude: -77.0265813 },
};

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AccountingService', 'ProfessionalService'],
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteAsset(siteConfig.logo),
    image: absoluteAsset(siteConfig.ogImage),
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    priceRange: '$$',
    areaServed: [
      { '@type': 'City', name: 'Lima' },
      { '@type': 'AdministrativeArea', name: 'Lima Metropolitana' },
      { '@type': 'Country', name: 'Perú' },
    ],
    address: locations.map((location) => ({
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.name,
      addressRegion: 'Lima',
      addressCountry: 'PE',
    })),
    location: locations.map((location) => ({
      '@type': 'Place',
      name: `SERVISERC ${location.name}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address,
        addressLocality: location.name,
        addressRegion: 'Lima',
        addressCountry: 'PE',
      },
      geo: coordinatesByLocation[location.name]
        ? {
            '@type': 'GeoCoordinates',
            latitude: coordinatesByLocation[location.name].latitude,
            longitude: coordinatesByLocation[location.name].longitude,
          }
        : undefined,
      telephone: location.phones.map((phone) => `+51 ${phone}`),
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+${siteConfig.whatsapp}`,
        contactType: 'customer service',
        areaServed: 'PE',
        availableLanguage: ['es'],
      },
    ],
    sameAs: [whatsappLink()],
    knowsAbout: [
      'Contabilidad',
      'Asesoría tributaria',
      'Asesoría laboral',
      'Constitución de empresas',
      'Facturación electrónica',
      'Libros contables',
      'SUNAT',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'es-PE',
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  };
}

export function servicesItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${absoluteUrl('/servicios/')}/#services`,
    name: 'Servicios contables y tributarios de SERVISERC',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/servicios/${service.slug}/`),
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(`/servicios/${service.slug}/`)}/#service`,
    name: service.title,
    description: service.description,
    image: absoluteAsset(service.image),
    url: absoluteUrl(`/servicios/${service.slug}/`),
    serviceType: service.title,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Lima' },
      { '@type': 'AdministrativeArea', name: 'Lima Metropolitana' },
      { '@type': 'Country', name: 'Perú' },
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'PEN',
      url: whatsappLink(`Hola Serviserc, necesito información sobre ${service.title}`),
    },
  };
}
