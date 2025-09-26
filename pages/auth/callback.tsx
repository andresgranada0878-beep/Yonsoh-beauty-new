import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../providers/authprovider';

export default function AuthCallback() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Usuario autenticado, redirigir a Shopify
        const shopifyUrl = new URLSearchParams(window.location.search).get('shop');
        const returnUrl = new URLSearchParams(window.location.search).get('return_url') || '/account';
        
        if (shopifyUrl) {
          const fullUrl = `https://${shopifyUrl}${returnUrl}`;
          window.location.href = fullUrl;
        } else {
          router.push('/shopify-integration');
        }
      } else {
        // No autenticado, redirigir al login
        router.push('/login');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="auth-callback">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Procesando autenticación...</p>
      </div>
    </div>
  );
}
