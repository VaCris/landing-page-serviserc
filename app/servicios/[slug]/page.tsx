import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import { asset, whatsappLink } from '@/lib/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado',
    };
  }

  return {
    title: service.title,
    description: service.excerpt,
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
    <main>
      <section
        className="service-detail-hero enhanced-service-hero"
        style={{
          backgroundImage: `linear-gradient(115deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 78%) 48%, rgb(216 35 42 / 36%)), url(${asset(service.image)})`,
        }}
      >
        <div className="container service-hero-layout">
          <div className="service-hero-content">
            <span className="hero-kicker">Servicio SERVISERC</span>
            <h1 className="service-detail-title">{service.title}</h1>
            <p className="hero-copy">{service.excerpt}</p>
            <div className="service-hero-tags">
              <span>Asesoría personalizada</span>
              <span>Atención empresarial</span>
              <span>Soporte documentario</span>
            </div>
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
      </section>

      <section className="section section-separated">
        <div className="container service-detail-grid">
          <article className="service-main-panel">
            <span className="section-eyebrow">Descripción</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>

            <div className="service-benefit-grid">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="service-benefit-card">
                  <span>✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="service-side-panel">
            <h3>Qué incluye</h3>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn btn-primary" href={whatsappLink(`Hola Serviserc, deseo cotizar ${service.title}`)} target="_blank" rel="noopener noreferrer">
              Solicitar información
            </a>
          </aside>
        </div>
      </section>

      <section className="section section-muted section-separated">
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

      <section className="section section-separated">
        <div className="container service-cta-panel">
          <div>
            <span className="section-eyebrow light">Atención SERVISERC</span>
            <h2>¿Necesitas este servicio?</h2>
            <p>Escríbenos por WhatsApp y recibe orientación según la situación de tu negocio.</p>
          </div>
          <a className="btn btn-secondary" href={whatsappLink(`Hola Serviserc, quiero asesoría sobre ${service.title}`)} target="_blank" rel="noopener noreferrer">
            Contactar ahora
          </a>
        </div>
      </section>

      <section className="section section-muted section-separated">
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
