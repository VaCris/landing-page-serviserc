import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { getServiceBySlug, services } from '@/data/services';
import { serviceJsonLd } from '@/lib/seo';
import { absoluteAsset, absoluteUrl, asset, siteConfig, whatsappLink } from '@/lib/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${service.title} en Lima`;
  const description = `${service.excerpt} Atención para emprendedores, pymes y empresas en Lima, Perú.`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/servicios/${service.slug}/`),
    },
    keywords: [
      service.title,
      `${service.title} Lima`,
      `${service.title} Perú`,
      'Consultoría Empresarial SERVISERC S.A.C.',
      'asesoría contable Lima',
      'asesoría tributaria Lima',
      ...siteConfig.keywords,
    ],
    openGraph: {
      title: `${title} | Consultoría Empresarial SERVISERC S.A.C.`,
      description,
      url: absoluteUrl(`/servicios/${service.slug}/`),
      images: [
        {
          url: absoluteAsset(service.image),
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: siteConfig.locale,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Consultoría Empresarial SERVISERC S.A.C.`,
      description,
      images: [absoluteAsset(service.image)],
    },
  };
}

const processSteps = [
  {
    title: 'Evaluamos tu caso',
    text: 'Revisamos tu necesidad, documentación disponible y el estado actual de tu negocio.',
  },
  {
    title: 'Definimos el servicio',
    text: 'Te explicamos qué corresponde hacer, qué requisitos necesitas y cómo avanzar de forma ordenada.',
  },
  {
    title: 'Te acompañamos',
    text: 'Brindamos orientación durante el proceso para reducir errores y mejorar el control de tu información.',
  },
];

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="service-detail-page">
      <JsonLd data={serviceJsonLd(service)} />
      <section 
        className="b2b-service-hero"
        style={{
          backgroundImage: `linear-gradient(115deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 85%) 58%, rgb(216 35 42 / 40%)), url(${asset(service.image)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="b2b-hero-bg"></div>
        <div className="container service-hero-layout">
          <div className="service-hero-content">
            <span className="hero-kicker">Servicio SERVISERC</span>
            <h1 className="service-detail-title">{service.title}</h1>
            <p className="hero-copy">{service.excerpt}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappLink(`Hola Serviserc, necesito información sobre ${service.title}`)} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
              <Link className="btn btn-secondary" href="/servicios/">
                Ver otros servicios
              </Link>
            </div>
          </div>
        </div>
        <div className="b2b-slant-separator">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>
      </section>

      <section className="section service-detail-editorial-section">
        <div className="container service-detail-editorial-layout">
          <article className="b2b-service-document">
            <div className="b2b-doc-section">
              <h2 className="b2b-doc-title">Panorama General</h2>
              <p className="b2b-doc-text">{service.description}</p>
            </div>

            <div className="b2b-doc-section">
              <h2 className="b2b-doc-title">Nuestro Enfoque</h2>
              <div className="b2b-approach-grid">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="b2b-approach-item">
                    <div className="b2b-check"></div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="b2b-doc-section">
              <h2 className="b2b-doc-title">Entregables del Servicio</h2>
              <ul className="b2b-deliverables-list">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="b2b-expert-sidebar">
            <div className="b2b-expert-card">
              <div className="b2b-expert-header">
                <div className="b2b-expert-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div className="b2b-expert-info">
                  <h3>Socio Consultor</h3>
                  <span>Especialista SERVISERC</span>
                </div>
              </div>
              <p>¿Tienes dudas sobre cómo implementar esto en tu empresa? Hablemos directamente.</p>
              <a className="btn btn-primary b2b-expert-btn" href={whatsappLink(`Hola Serviserc, deseo hablar con un experto sobre ${service.title}`)} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section service-process-band">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Proceso</span>
              <h2 className="section-title">Cómo te ayudamos</h2>
              <p className="section-copy">
                Un proceso simple para entender tu caso y orientarte con claridad desde el primer contacto.
              </p>
            </div>
          </div>

          <div className="service-process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="service-process-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="service-cta-full"
        style={{
          backgroundImage: `url(${asset(service.image)})`,
        }}
      >
        <div className="b2b-chevron-separator top">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <polygon points="0,0 100,0 50,100" />
          </svg>
        </div>
        <div className="container">
          <div className="service-cta-full-content">
            <span className="section-eyebrow">Atención SERVISERC</span>
            <h2>¿Necesitas este servicio?</h2>
            <p>Escríbenos por WhatsApp y recibe orientación según la situación de tu negocio.</p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href={whatsappLink(`Hola Serviserc, quiero asesoría sobre ${service.title}`)} target="_blank" rel="noopener noreferrer">
                Contactar ahora
              </a>
              <Link className="btn btn-outline" href="/servicios/">
                Ver otros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-related-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">También puede interesarte</span>
              <h2 className="section-title">Otros servicios</h2>
            </div>
            <Link className="btn btn-primary" href="/servicios/">
              Ver todos
            </Link>
          </div>

          <div className="related-service-grid">
            {relatedServices.map((item) => (
              <Link key={item.slug} className="related-service-card" href={`/servicios/${item.slug}/`}>
                <img src={asset(item.image)} alt={item.title} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.excerpt}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
