export const siteConfig = {
  name: 'SERVISERC S.A.C.',
  description: 'Servicios de contabilidad, asesoría tributaria, laboral y empresarial para pequeñas y microempresas en Perú.',
  url: 'https://vacris.github.io/landing-page-serviserc',
  whatsapp: '51989342085',
};

export function whatsappLink(message = 'Hola Serviserc, necesito más información') {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function asset(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
}
