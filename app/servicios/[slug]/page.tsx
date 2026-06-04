import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import { whatsappLink } from '@/lib/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);

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

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="service-detail-hero">
        <div className="container">
          <span className="hero-kicker">Servicio {service.category}</span>
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
      </section>

      <section className="section section-muted">
        <div className="container detail-grid">
          <article className="detail-box">
            <h2>Descripción del servicio</h2>
            <p className="section-copy">{service.description}</p>

            <h3>Beneficios</h3>
            <ul>
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>

          <aside className="detail-box">
            <h3>Qué incluye</h3>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn btn-whatsapp" href={whatsappLink(`Hola Serviserc, deseo cotizar ${service.title}`)} target="_blank" rel="noopener noreferrer" style={{ marginTop: 18 }}>
              Solicitar información
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
