import Link from 'next/link';
import type { Service } from '@/data/services';
import { asset } from '@/lib/site';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card service-card-visual">
      <img
        className="service-card-bg"
        src={asset(service.image)}
        alt={service.title}
      />

      <div className="service-card-overlay" />

      <div className="service-card-content">
        <h3 className="service-title">{service.title}</h3>

        <span className="service-accent" />

        <p className="service-copy">{service.excerpt}</p>
      </div>

      <Link
        className="service-arrow"
        href={`/servicios/${service.slug}/`}
        aria-label={`Ver detalle de ${service.title}`}
      >
        ↗
      </Link>
    </article>
  );
}