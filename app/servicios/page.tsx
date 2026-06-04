import type { Metadata } from 'next';
import { ServiceCard } from '@/components/ServiceCard';
import { secondaryServices, services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Servicios contables, tributarios, laborales, documentarios y empresariales de SERVISERC S.A.C.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="service-detail-hero">
        <div className="container">
          <span className="hero-kicker">Servicios</span>
          <h1 className="service-detail-title">Asesoría para formalizar y hacer crecer tu negocio</h1>
          <p className="hero-copy">
            Conoce nuestros servicios principales y complementarios para empresas, emprendedores y pymes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Servicios principales</h2>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2 className="section-title">Otros servicios</h2>
          <p className="section-copy">
            Servicios documentarios, comprobantes de pago y piezas publicitarias para complementar la atención de tu negocio.
          </p>
          <div className="grid-3" style={{ marginTop: 30 }}>
            {secondaryServices.map((service) => (
              <div key={service} className="detail-box">
                <strong>{service}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
