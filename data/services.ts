export type Service = {
  slug: string;
  title: string;
  category: 'principal' | 'documentario' | 'publicitario';
  excerpt: string;
  description: string;
  image: string;
  benefits: string[];
  includes: string[];
};

export const services: Service[] = [
  {
    slug: 'constitucion-de-empresas',
    title: 'Constitución de Empresas',
    category: 'principal',
    excerpt: 'Te ayudamos a formalizar tu empresa de manera rápida, ordenada y segura.',
    description: 'Acompañamos el proceso de constitución de empresas para personas naturales o jurídicas que desean iniciar operaciones cumpliendo los requisitos formales y tributarios.',
    image: '/img/constitucion-de-empresas.webp',
    benefits: ['Ahorro de tiempo en el proceso', 'Orientación tributaria inicial', 'Formalización ordenada del negocio'],
    includes: ['Asesoría inicial', 'Revisión de requisitos', 'Orientación para inscripción y formalización'],
  },
  {
    slug: 'asesoria-contable-laboral-tributaria',
    title: 'Asesoría Contable, Laboral y Tributaria',
    category: 'principal',
    excerpt: 'Asesoría especializada para cumplir correctamente tus obligaciones contables, laborales y tributarias.',
    description: 'Brindamos soporte integral para pequeñas y microempresas que necesitan mantener su contabilidad en regla y cumplir sus obligaciones ante las entidades correspondientes.',
    image: '/img/asesoria-contable-laboral-tributaria.webp',
    benefits: ['Menor riesgo de incumplimientos', 'Acompañamiento profesional', 'Control de obligaciones mensuales'],
    includes: ['Asesoría contable', 'Asesoría laboral', 'Asesoría tributaria', 'Revisión de obligaciones'],
  },
  {
    slug: 'planeamiento-tributario',
    title: 'Planeamiento Tributario',
    category: 'principal',
    excerpt: 'Estrategias para optimizar la carga fiscal de tu negocio dentro del marco legal.',
    description: 'Evaluamos la situación tributaria de tu empresa y proponemos acciones para organizar mejor tus obligaciones, anticipar riesgos y mejorar la toma de decisiones.',
    image: '/img/planeamiento-tributario.webp',
    benefits: ['Mejor control fiscal', 'Prevención de contingencias', 'Decisiones con mayor claridad'],
    includes: ['Diagnóstico tributario', 'Recomendaciones de mejora', 'Acompañamiento preventivo'],
  },
  {
    slug: 'contabilidad-computarizada-electronica',
    title: 'Contabilidad Computarizada y Electrónica',
    category: 'principal',
    excerpt: 'Implementación y gestión contable con herramientas digitales para mayor precisión.',
    description: 'Ordenamos y procesamos la información contable usando medios computarizados y electrónicos, facilitando el control documental y la elaboración de reportes.',
    image: '/img/contabilidad-computarizada-electronica.webp',
    benefits: ['Mayor orden documental', 'Procesos más ágiles', 'Información contable más clara'],
    includes: ['Registro contable', 'Organización electrónica', 'Reportes de control'],
  },
  {
    slug: 'facturacion-electronica',
    title: 'Facturación Electrónica',
    category: 'principal',
    excerpt: 'Automatizamos y orientamos el proceso de emisión de comprobantes electrónicos.',
    description: 'Te ayudamos a organizar la facturación electrónica de tu negocio para mantener un mejor control de comprobantes y cumplir con las exigencias tributarias.',
    image: '/img/facturacion-electronica.webp',
    benefits: ['Mejor control de comprobantes', 'Reducción de errores operativos', 'Cumplimiento tributario'],
    includes: ['Orientación de emisión electrónica', 'Control de comprobantes', 'Asesoría relacionada'],
  },
  {
    slug: 'libros-contables',
    title: 'Actualización y Llenado de Libros Contables',
    category: 'principal',
    excerpt: 'Mantenemos tus libros contables actualizados según las normativas vigentes.',
    description: 'Nos encargamos de la actualización, revisión y llenado de libros contables para que la empresa tenga su documentación ordenada y disponible.',
    image: '/img/libros-contables.webp',
    benefits: ['Documentación al día', 'Mejor control interno', 'Soporte ante revisiones'],
    includes: ['Actualización de libros', 'Revisión de registros', 'Organización documental'],
  },
  {
    slug: 'devolucion-igv',
    title: 'Solicitud de Devolución del IGV',
    category: 'principal',
    excerpt: 'Gestionamos solicitudes de devolución por detracciones, retenciones y otros conceptos.',
    description: 'Orientamos y acompañamos la preparación de solicitudes de devolución del IGV cuando corresponde, revisando la documentación y los sustentos necesarios.',
    image: '/img/devolucion-igv.webp',
    benefits: ['Revisión documentaria', 'Mejor sustento de la solicitud', 'Acompañamiento en el trámite'],
    includes: ['Evaluación del caso', 'Preparación de información', 'Seguimiento del proceso'],
  },
  {
    slug: 'reclamacion-apelacion-sunat',
    title: 'Reclamación y Apelación ante SUNAT',
    category: 'principal',
    excerpt: 'Asistencia para solicitudes de reclamación ante SUNAT y el Tribunal Fiscal.',
    description: 'Brindamos soporte en la preparación y presentación de solicitudes de reclamación y apelación vinculadas a procedimientos tributarios.',
    image: '/img/reclamacion-apelacion-sunat.webp',
    benefits: ['Mejor preparación del expediente', 'Acompañamiento técnico', 'Control de plazos y documentación'],
    includes: ['Revisión del caso', 'Preparación de documentos', 'Orientación del procedimiento'],
  },
  {
    slug: 'legalizacion-libros-contables',
    title: 'Venta de Libros Contables y Legalización',
    category: 'principal',
    excerpt: 'Atención para libros contables, venta y orientación para legalización.',
    description: 'Ofrecemos soporte relacionado con libros contables, su adquisición y la orientación necesaria para mantener documentación formal.',
    image: '/img/venta-y-legalizacion-de-libros-contables.webp',
    benefits: ['Atención rápida', 'Documentación formal', 'Orientación clara'],
    includes: ['Venta de libros', 'Orientación de legalización', 'Soporte documentario'],
  },
];

export const secondaryServices = [
  'Facturas',
  'Boletas',
  'Nota de Crédito / Débito',
  'Guías de Remisión',
  'Guías de Transportista',
  'Notas de Pedido',
  'Recibos de Ingresos o Egresos',
  'Letra de Cambio',
  'Recibos',
  'Volantes',
  'Dípticos',
  'Trípticos',
  'Brochures',
  'Hojas Membretadas',
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}