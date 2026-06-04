import Link from 'next/link';
import type { Service } from '@/data/services';
import { asset } from '@/lib/site';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-image">
        <img src={asset(service.image)} alt={service.title} />
      </div>
      <div className="service-body">
        <span className="service-category">Servicio {service.category}</span>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-copy">{service.excerpt}</p>
        <Link className="btn btn-primary service-link" href={`/servicios/${service.slug}/`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
