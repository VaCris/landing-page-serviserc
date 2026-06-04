import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section section-muted">
      <div className="container detail-box">
        <h1>Contenido no encontrado</h1>
        <p className="section-copy">La página que buscas no existe o fue movida.</p>
        <Link className="btn btn-primary" href="/" style={{ marginTop: 24 }}>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
