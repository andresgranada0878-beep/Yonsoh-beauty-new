import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Yonsoh Beauty</h1>
          <p className="hero-subtitle">Todo lo que necesitas para verte bien, sin salir de casa</p>
          
          <div className="hero-actions">
            <Link href="/login" className="cta-button primary">
              Iniciar Sesión
            </Link>
            <Link href="/shopify-integration?shop=yonsohbeauty.myshopify.com&return_url=/account" className="cta-button secondary">
              Ir a la Tienda
            </Link>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature">
            <h3>🚚 Envío Gratuito</h3>
            <p>En todos tus pedidos</p>
          </div>
          <div className="feature">
            <h3>💄 Productos de Calidad</h3>
            <p>Para verte y sentirte bien</p>
          </div>
          <div className="feature">
            <h3>🏠 Sin salir de casa</h3>
            <p>Comodidad total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
