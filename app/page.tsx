import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { agreement } from '@/data/agreement';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { asset, whatsappLink } from '@/lib/site';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <main>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgb(7 29 61 / 90%), rgb(7 29 61 / 60%), rgb(216 35 42 / 35%)), url(${asset('/img/97712-493.webp')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container hero-content">
          <span className="hero-kicker">Consultoría empresarial</span>
          <h1 className="hero-title">Haz crecer tu negocio, haz crecer tu imagen</h1>
          <p className="hero-copy">
            Servicios contables, laborales, tributarios y documentarios para pequeñas y microempresas.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/servicios/">
              Ver servicios
            </Link>
            <a className="btn btn-secondary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="container">
          <h2 className="section-title">Servicios principales</h2>
          <p className="section-copy">
            Asesoría especializada para ordenar, formalizar y fortalecer la gestión de tu negocio.
          </p>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div style={{ marginTop: 34 }}>
            <Link className="btn btn-primary" href="/servicios/">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="nosotros">
        <div className="container about-grid">
          <div>
            <h2 className="section-title">Sobre nosotros</h2>
            <p className="section-copy">
              En SERVISERC S.A.C. brindamos soluciones contables integrales para empresas de diversos tamaños y sectores. Nuestro equipo ofrece un servicio personalizado y eficiente para cubrir necesidades tributarias, laborales, contables y empresariales.
            </p>
            <p className="section-copy" style={{ marginTop: 18 }}>
              Nuestra misión es facilitar la gestión de cada negocio, apoyar el cumplimiento de normativas vigentes y optimizar los procesos contables con una atención cercana y confiable.
            </p>
          </div>
          <div className="image-panel">
            <img src={asset('/img/1406932329-2048x2048.webp')} alt="Equipo de asesoría SERVISERC" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container agreement-grid">
          <div className="image-panel">
            <img src={asset('/img/97712-493.webp')} alt="Servicios empresariales SERVISERC" />
          </div>
          <div className="agreement-card">
            <h2>{agreement.title}</h2>
            <p>{agreement.description}</p>
            <p>{agreement.note}</p>
            <Link className="btn btn-secondary" href="/convenio-uch/" style={{ marginTop: 18 }}>
              Ver convenio
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="sedes">
        <div className="container">
          <h2 className="section-title">Nuestras sedes</h2>
          <div className="grid-3" style={{ marginTop: 30 }}>
            {locations.map((location) => (
              <article className="location-card" key={location.name}>
                <iframe src={location.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Mapa de ${location.name}`} />
                <div className="location-body">
                  <h3>{location.name}</h3>
                  <p>{location.address}</p>
                  <p>{location.reference}</p>
                  <p>Cel: {location.phones.join(' / ')}</p>
                  <p>Telf. Of: {location.office}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
