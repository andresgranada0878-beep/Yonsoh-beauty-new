import React, { useEffect, useState } from 'react';
import { useAuth } from '../providers/authprovider';

const ShopifyIntegration: React.FC = () => {
  const { user, loading } = useAuth();
  const [shopifyUrl, setShopifyUrl] = useState('');

  useEffect(() => {
    // Obtener la URL de Shopify desde los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const shop = urlParams.get('shop');
    const returnUrl = urlParams.get('return_url');
    
    if (shop) {
      setShopifyUrl(`https://${shop}`);
    }
  }, []);

  const handleShopifyLogin = () => {
    if (user && shopifyUrl) {
      // Redirigir a Shopify con el usuario autenticado
      const returnUrl = new URLSearchParams(window.location.search).get('return_url') || '/account';
      const fullUrl = `${shopifyUrl}${returnUrl}`;
      
      // Crear un token de sesión personalizado (opcional)
      const sessionToken = btoa(JSON.stringify({
        user: user.email,
        timestamp: Date.now(),
        domain: 'yonsohbeauty.myshopify.com'
      }));
      
      // Redirigir con el token
      window.location.href = `${fullUrl}?auth_token=${sessionToken}`;
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="shopify-integration">
      <div className="integration-container">
        <h1>Autenticación Yonsoh Beauty</h1>
        
        {user ? (
          <div className="authenticated-user">
            <div className="user-info">
              <h2>¡Bienvenido, {user.email}!</h2>
              <p>Has iniciado sesión correctamente.</p>
            </div>
            
            <div className="shopify-actions">
              <button 
                onClick={handleShopifyLogin}
                className="shopify-button"
              >
                Continuar a la Tienda
              </button>
              
              <a 
                href="/login" 
                className="change-account"
              >
                Cambiar de cuenta
              </a>
            </div>
          </div>
        ) : (
          <div className="not-authenticated">
            <p>Necesitas iniciar sesión para continuar.</p>
            <a href="/login" className="login-button">
              Iniciar Sesión
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopifyIntegration;
