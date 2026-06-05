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
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgb(5 18 38 / 96%), rgb(7 29 61 / 88%) 46%, rgb(216 35 42 / 48%)), url(${asset('/img/97712-493.webp')})`,
        }}
      >
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <span className="hero-kicker">Consultoría empresarial</span>
            <h1 className="hero-title">Haz crecer tu negocio, haz crecer tu imagen</h1>
            <p className="hero-copy">
              Servicios contables, laborales, tributarios y documentarios para pequeñas empresas, emprendedores y negocios en crecimiento.
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

          <div className="home-hero-panel" aria-label="Resumen de servicios SERVISERC">
            <div className="hero-panel-card hero-panel-card-main">
              <span>Atención integral</span>
              <strong>Contable · Tributaria · Laboral</strong>
              <p>Ordenamos la gestión de tu negocio para que avances con mayor seguridad.</p>
            </div>
            <div className="hero-panel-grid">
              <div className="hero-mini-card">
                <strong>01</strong>
                <span>Formalización</span>
              </div>
              <div className="hero-mini-card">
                <strong>02</strong>
                <span>Declaraciones</span>
              </div>
              <div className="hero-mini-card">
                <strong>03</strong>
                <span>Libros contables</span>
              </div>
              <div className="hero-mini-card">
                <strong>04</strong>
                <span>Asesoría SUNAT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-separated" id="servicios">
        <div className="container section-heading-row">
          <div>
            <h2 className="section-title">Servicios principales</h2>
            <p className="section-copy">
              Asesoría especializada para ordenar, formalizar y fortalecer la gestión de tu negocio.
            </p>
          </div>
          <Link className="btn btn-primary" href="/servicios/">
            Ver todos los servicios
          </Link>
        </div>
        <div className="container">
          <div className="grid-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted section-separated" id="nosotros">
        <div className="container about-grid">
          <div>
            <span className="section-eyebrow">Sobre SERVISERC</span>
            <h2 className="section-title">Sobre nosotros</h2>
            <p className="section-copy">
              En SERVISERC S.A.C. brindamos soluciones contables integrales para empresas de diversos tamaños y sectores. Nuestro equipo ofrece un servicio personalizado y eficiente para cubrir necesidades tributarias, laborales, contables y empresariales.
            </p>
            <p className="section-copy" style={{ marginTop: 18 }}>
              Nuestra misión es facilitar la gestión de cada negocio, apoyar el cumplimiento de normativas vigentes y optimizar los procesos contables con una atención cercana y confiable.
            </p>
          </div>
          <div className="image-panel image-panel-soft">
            <img src={asset('/img/1406932329-2048x2048.webp')} alt="Equipo de asesoría SERVISERC" />
          </div>
        </div>
      </section>

      <section className="section section-separated">
        <div className="container agreement-grid home-agreement-card">
          <div className="image-panel image-panel-soft">
            <img src={asset('/img/uch-2.webp')} alt="Convenio SERVISERC con UCH" />
          </div>
          <div className="agreement-card agreement-card-red">
            <span className="section-eyebrow light">Convenio educativo</span>
            <h2>{agreement.title}</h2>
            <p>{agreement.description}</p>
            <p>{agreement.note}</p>
            <Link className="btn btn-secondary" href="/convenio-uch/" style={{ marginTop: 18 }}>
              Ver convenio
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted section-separated" id="sedes">
        <div className="container section-heading-row">
          <div>
            <span className="section-eyebrow">Ubicaciones</span>
            <h2 className="section-title">Nuestras sedes</h2>
          </div>
        </div>
        <div className="container">
          <div className="grid-3">
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
