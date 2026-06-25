import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { agreement } from '@/data/agreement';
import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { InteractiveLocations } from '@/components/InteractiveLocations';
import { asset, whatsappLink } from '@/lib/site';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <main className="home-page">
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgb(5 18 38 / 94%), rgb(7 29 61 / 82%) 54%, rgb(216 35 42 / 36%)), url(${asset('/img/serviserc-hero-banner.avif')})`,
        }}
      >
        <div className="container home-hero-grid home-hero-simple">
          <div className="home-hero-content">
            <h1 className="hero-title" style={{ letterSpacing: '-0.02em' }}>Asesoría Contable, Tributaria y Laboral para el crecimiento de tu negocio</h1>
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
        <div className="home-hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
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
            <h2 className="section-title">Acompañamos la gestión de tu negocio con orden y claridad</h2>
            <p className="section-copy">
              En SERVISERC S.A.C., contamos con soluciones contables integrales para empresas de todos los tipos. Con más de 3 años de experiencia, nuestro equipo ofrece servicios especializados ada[...]
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
          backgroundImage: `url(${asset('/img/uch-1.avif')})`,
        }}
      >
        <div className="home-hero-wave" style={{ top: 0, bottom: 'auto', transform: 'rotate(180deg)' }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
        <div className="container">
          <div className="agreement-band-content">
            <span className="section-eyebrow">Convenio educativo</span>
            <h2 className="agreement-band-title">{agreement.title}</h2>
            <p className="agreement-band-copy">{agreement.description}</p>
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
        <div className="home-hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      <section className="section section-separated faq-section" id="faq">
        <div className="container faq-split-layout">
          <div className="faq-split-sidebar">
            <span className="section-eyebrow">Dudas Resueltas</span>
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-copy">
              Encuentra respuestas rápidas a las consultas más comunes que recibimos como consultora empresarial en Perú. ¿Tienes otra duda? Nuestro equipo está listo para orientarte.
            </p>
            <div className="hero-actions" style={{ marginTop: 32 }}>
              <a className="btn btn-secondary" href={whatsappLink('Hola Serviserc, tengo una duda sobre sus servicios de asesoría')} target="_blank" rel="noopener noreferrer">
                Hacer una consulta
              </a>
            </div>
          </div>

          <div className="faq-grid">
            <details className="faq-item">
              <summary>¿Qué tipo de empresas asesoran?</summary>
              <div className="faq-content">
                <p>Brindamos asesoría a Mypes, Pymes y corporaciones en diversos sectores. Trabajamos con empresas en el Régimen MYPE Tributario, Régimen Especial y Régimen General.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>¿Realizan la constitución de empresas desde cero?</summary>
              <div className="faq-content">
                <p>Sí, nos encargamos de todo el proceso de formalización: desde la reserva de nombre en SUNARP, elaboración de minuta, hasta la obtención del RUC y activación en SUNAT.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>¿Cómo funciona su servicio de asesoría contable mensual?</summary>
              <div className="faq-content">
                <p>Nuestro servicio incluye la declaración de impuestos mensuales (PDT 621, PLAME), elaboración de planillas, registro de compras y ventas, y entrega de estados financieros peri[...]
              </div>
            </details>
            <details className="faq-item">
              <summary>¿Atienden fiscalizaciones o requerimientos de SUNAT?</summary>
              <div className="faq-content">
                <p>Absolutamente. Contamos con amplia experiencia respondiendo a cartas inductivas, esquelas de citación y procesos de fiscalización de SUNAT de manera eficiente y legal.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>¿El servicio es presencial o virtual?</summary>
              <div className="faq-content">
                <p>Ofrecemos un servicio híbrido. Toda la documentación e informes se manejan digitalmente a nivel nacional de forma ágil, pero también contamos con sedes físicas para atenci[...]
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="locations-band section-separated" id="sedes" style={{ position: 'relative' }}>
        <div className="container section-heading-row">
          <div>
            <span className="section-eyebrow">Ubicaciones</span>
            <h2 className="section-title">Nuestras sedes</h2>
          </div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <InteractiveLocations />
        </div>
        <div className="home-hero-wave" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor" style={{ color: '#06172f' }}>
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>
    </main>
  );
}
