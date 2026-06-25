import { secondaryServices, services } from '@/data/services';

export const footerContent = {
  company: {
    description:
      'Consultoría empresarial especializada en servicios contables, tributarios, laborales y documentarios para emprendedores, pymes y empresas en Perú.',
    contact: {
      whatsapp: '989 342 085',
      phone: '(01) 657 8198',
      email: 'consultas@serviserc.com',
    },
  },
  columns: [
    {
      title: 'Servicios principales',
      links: services.slice(0, 8).map((service) => ({
        label: service.title,
        href: `/servicios/${service.slug}/`,
      })),
    },
    {
      title: 'Otros servicios',
      links: secondaryServices.map((service) => ({
        label: service,
        href: '/servicios/',
      })),
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nosotros', href: '/#nosotros' },
        { label: 'Convenio UCH', href: '/convenio-uch/' },
        { label: 'Nuestras Sedes', href: '/#sedes' },
        { label: 'Contacto', href: '/#contacto' },
      ],
    },
  ],
  locations: [
    'Los Olivos — Av. Alfredo Mendiola MZ. J LT. 13-B Urb. Santa Luisa 2',
    'San Isidro — Paseo de la República 3557 OF. 701 - Lima',
    'Carabayllo — Jr. Huaylas Mz.E Lt.20 Urb. Chavín de Huantar 1',
  ],
  bottom: '© 2026 SERVISERC S.A.C. Todos los derechos reservados.',
};
