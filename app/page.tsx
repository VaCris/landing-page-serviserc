import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { agreement } from '@/data/agreement';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { asset, whatsappLink } from '@/lib/site';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <main className="home-page">
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 82%) 54%, rgb(216 35 42 / 36%)), url(${asset('/img/97712-493.webp')})`,
        }}
      >
        <div className="container home-hero-grid home-hero-simple">
          <div className="home-hero-content">
            <span className="hero-kicker">Consultoría empresarial</span>
            <h1 className="hero-title">Asesoría contable, tributaria y laboral para el crecimiento de tu negocio</h1>
            <p className="hero-copy">
              Te ayudamos a mantener tu empresa en orden, cumplir con tus obligaciones y tomar mejores decisiones con seguridad.
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
        </div>
      </section>

      <section className="section section-separated home-editorial-section" id="servicios">
        <div className="container home-services-wrap">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Servicios</span>
              <h2 className="section-title">Servicios principales</h2>
              <p className="section-copy">
                Asesoría especializada para ordenar, formalizar y fortalecer la gestión de tu negocio.
              </p>
            </div>
            <Link className="btn btn-primary" href="/servicios/">
              Ver todos los servicios
            </Link>
          </div>

          <div className="home-featured-services-grid">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-split-section" id="nosotros">
        <div className="container editorial-split-layout">
          <div className="editorial-copy">
            <span className="section-eyebrow">Sobre SERVISERC</span>
            <h2 className="section-title">Acompañamos la gestión de tu negocio con orden y claridad</h2>
            <p className="section-copy">
              En SERVISERC S.A.C. brindamos soluciones contables integrales para empresas de diversos tamaños y sectores. Nuestro equipo ofrece un servicio personalizado y eficiente para cubrir necesidades tributarias, laborales, contables y empresariales.
            </p>
            <p className="section-copy" style={{ marginTop: 18 }}>
              Nuestra misión es facilitar la gestión de cada negocio, apoyar el cumplimiento de normativas vigentes y optimizar los procesos contables con una atención cercana y confiable.
            </p>
          </div>

          <div className="editorial-image-stack">
            <div className="editorial-image-main">
              <img src={asset('/img/sobre-nosotros.webp')} alt="Equipo de asesoría SERVISERC" />
            </div>
            <div className="editorial-image-badge">
              <strong>Atención especializada</strong>
              <span>Contabilidad, tributación, gestión laboral y soporte documentario para negocios en crecimiento.</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="agreement-band"
        style={{
          backgroundImage: `url(${asset('/img/uch-1.webp')})`,
        }}
      >
        <div className="container">
          <div className="agreement-band-content">
            <span className="section-eyebrow">Convenio educativo</span>
            <h2 className="agreement-band-title">{agreement.title}</h2>
            <p className="agreement-band-copy">{agreement.description}</p>
            <p className="agreement-band-note">{agreement.note}</p>
            <div className="hero-actions">
              <Link className="btn btn-secondary" href="/convenio-uch/">
                Ver convenio
              </Link>
              <a className="btn btn-primary" href={whatsappLink('Hola Serviserc, necesito información sobre el convenio UCH')} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="locations-band section-separated" id="sedes">
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
