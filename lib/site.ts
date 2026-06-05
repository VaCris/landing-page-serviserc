export const siteConfig = {
  name: 'SERVISERC S.A.C.',
  legalName: 'Consultoría Empresarial SERVISERC S.A.C.',
  description: 'Servicios de contabilidad, asesoría tributaria, laboral y empresarial para pequeñas y microempresas en Lima, Perú.',
  url: 'https://vacris.github.io/landing-page-serviserc',
  whatsapp: '51989342085',
  email: 'consultoriaempresarialserviserc@gmail.com',
  locale: 'es_PE',
  country: 'PE',
  region: 'Lima',
  city: 'Lima',
  logo: '/img/172728779273.webp',
  ogImage: '/img/servicios-generales.webp',
  keywords: [
    'asesoría contable en Lima',
    'asesoría tributaria en Lima',
    'contabilidad para pymes',
    'consultoría empresarial Perú',
    'constitución de empresas Perú',
    'facturación electrónica SUNAT',
    'libros contables Perú',
    'devolución IGV',
    'reclamación SUNAT',
    'servicios contables Los Olivos',
    'servicios contables San Isidro',
    'servicios contables Carabayllo',
  ],
};

export function whatsappLink(message = 'Hola Serviserc, necesito más información') {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function asset(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
}

export function absoluteUrl(path = '/') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath === '/' ? '' : cleanPath}`;
}

export function absoluteAsset(path: string) {
  return absoluteUrl(asset(path));
}
