# Sistema de Autenticación con Supabase

## 🚀 Configuración Inicial

### 1. Instalar dependencias:
```bash
npm install
```

### 2. Configurar variables de entorno:
Crea un archivo `.env.local` en la raíz del proyecto con:
```
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key_aqui
```

### 3. Configurar Supabase:
1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Ve a Settings > API
4. Copia la URL y la clave anónima
5. Pégala en tu archivo `.env.local`

### 4. Ejecutar el proyecto:
```bash
npm run dev
```

## 📁 Estructura de Archivos

```
├── providers/
│   └── authprovider.tsx          # Contexto de autenticación
├── components/
│   └── LoginForm.tsx             # Formulario de login
├── pages/
│   ├── _app.tsx                  # Configuración de la app
│   └── login.tsx                 # Página de login
├── styles/
│   └── globals.css               # Estilos globales
└── package.json                  # Dependencias
```

## 🔧 Uso del AuthProvider

### En cualquier componente:
```tsx
import { useAuth } from '../providers/authprovider';

function MyComponent() {
  const { user, signIn, signOut, loading } = useAuth();
  
  if (loading) return <div>Cargando...</div>;
  
  if (user) {
    return (
      <div>
        <p>¡Hola {user.email}!</p>
        <button onClick={signOut}>Cerrar Sesión</button>
      </div>
    );
  }
  
  return <div>No estás logueado</div>;
}
```

## 🌐 URLs Disponibles

- `/login` - Página de login y registro
- `/` - Página principal (protegida)

## 🔐 Funciones Disponibles

- `signIn(email, password)` - Iniciar sesión
- `signUp(email, password)` - Registrarse
- `signOut()` - Cerrar sesión
- `resetPassword(email)` - Resetear contraseña
- `user` - Usuario actual
- `session` - Sesión actual
- `loading` - Estado de carga
