import Link from 'next/link';
import type { Service } from '@/data/services';
import { asset } from '@/lib/site';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div
        className="service-image"
        style={{
          backgroundImage: `linear-gradient(135deg, rgb(7 29 61 / 70%), rgb(216 35 42 / 45%)), url(${asset(service.image)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {service.title.charAt(0)}
      </div>
      <div className="service-body">
        <span className="service-category">Servicio {service.category}</span>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-copy">{service.excerpt}</p>
        <Link className="btn btn-primary" href={`/servicios/${service.slug}/`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
