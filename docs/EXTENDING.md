# Guía para Extender el Proyecto

Este documento proporciona orientación sobre cómo extender y mejorar el proyecto CamiDevAI.

## Tabla de Contenidos

- [Añadir Nuevas Secciones](#añadir-nuevas-secciones)
- [Modificar Estilos](#modificar-estilos)
- [Añadir Nuevas Funcionalidades](#añadir-nuevas-funcionalidades)
- [Integración con Backend](#integración-con-backend)
- [Optimización de Rendimiento](#optimización-de-rendimiento)
- [Pruebas](#pruebas)

## Añadir Nuevas Secciones

Para añadir una nueva sección al sitio:

1. **Crear el componente**:
   ```tsx
   // src/components/NuevaSeccion.tsx
   import React from 'react';
   import SectionContainer from './common/SectionContainer';
   import { MiIcono } from 'lucide-react';

   export default function NuevaSeccion() {
     return (
       <SectionContainer
         id="nueva-seccion"
         title="Mi Nueva Sección"
         subtitle="Descripción de la nueva sección"
         icon={MiIcono}
         bgColor="bg-white"
       >
         {/* Contenido de la sección */}
       </SectionContainer>
     );
   }
   ```

2. **Añadir datos** (si es necesario):
   ```typescript
   // src/data/index.ts
   export const nuevosDatos = [
     {
       titulo: "Elemento 1",
       descripcion: "Descripción del elemento 1",
       // ...
     },
     // ...
   ];
   ```

3. **Actualizar App.tsx**:
   ```tsx
   // src/App.tsx
   import NuevaSeccion from './components/NuevaSeccion';

   function App() {
     return (
       <div className="min-h-screen bg-white">
         <Header />
         <main>
           {/* ... */}
           <NuevaSeccion />
           {/* ... */}
         </main>
         <Footer />
       </div>
     );
   }
   ```

4. **Actualizar navegación**:
   ```typescript
   // src/config/routes.ts
   export const SECTION_IDS = {
     // ...
     NUEVA_SECCION: 'nueva-seccion',
   };

   export const NAVIGATION_ITEMS = [
     // ...
     { name: 'Nueva Sección', href: `#${SECTION_IDS.NUEVA_SECCION}` },
   ];
   ```

## Modificar Estilos

### Cambiar Colores Principales

1. Actualizar el archivo de tema:
   ```typescript
   // src/config/theme.ts
   export const theme = {
     colors: {
       primary: {
         light: '#nuevo-color-claro',
         DEFAULT: '#nuevo-color-principal',
         dark: '#nuevo-color-oscuro',
       },
       // ...
     },
     // ...
   };
   ```

2. Los componentes que utilizan estos colores se actualizarán automáticamente.

### Añadir Nuevos Estilos Globales

1. Modificar el archivo CSS principal:
   ```css
   /* src/index.css */
   @layer components {
     .mi-nueva-clase {
       @apply bg-primary-light text-white rounded-lg p-4;
     }
   }
   ```

## Añadir Nuevas Funcionalidades

### Añadir un Blog

1. Crear componentes necesarios:
   ```
   src/components/blog/
   ├── BlogList.tsx
   ├── BlogPost.tsx
   └── BlogCard.tsx
   ```

2. Añadir datos para el blog:
   ```typescript
   // src/data/blog.ts
   export interface BlogPost {
     id: string;
     title: string;
     excerpt: string;
     content: string;
     date: string;
     author: string;
     image: string;
     tags: string[];
   }

   export const blogPosts: BlogPost[] = [
     // ...
   ];
   ```

3. Actualizar rutas y navegación.

### Añadir Galería de Proyectos

1. Crear componentes necesarios:
   ```
   src/components/projects/
   ├── ProjectsGallery.tsx
   └── ProjectCard.tsx
   ```

2. Añadir datos para proyectos:
   ```typescript
   // src/data/projects.ts
   export interface Project {
     id: string;
     title: string;
     description: string;
     image: string;
     technologies: string[];
     link: string;
   }

   export const projects: Project[] = [
     // ...
   ];
   ```

## Integración con Backend

Para integrar con un backend:

1. **Crear servicios API**:
   ```typescript
   // src/services/api.ts
   import axios from 'axios';

   const API_URL = 'https://tu-api.com';

   export const api = axios.create({
     baseURL: API_URL,
     headers: {
       'Content-Type': 'application/json',
     },
   });

   export const getProjects = async () => {
     const response = await api.get('/projects');
     return response.data;
   };

   export const sendContactForm = async (formData) => {
     const response = await api.post('/contact', formData);
     return response.data;
   };
   ```

2. **Usar los servicios en componentes**:
   ```tsx
   import { useEffect, useState } from 'react';
   import { getProjects } from '../services/api';

   export default function Projects() {
     const [projects, setProjects] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchProjects = async () => {
         try {
           const data = await getProjects();
           setProjects(data);
         } catch (err) {
           setError(err);
         } finally {
           setLoading(false);
         }
       };

       fetchProjects();
     }, []);

     // Renderizado condicional según el estado
   }
   ```

## Optimización de Rendimiento

### Lazy Loading de Componentes

```tsx
// src/App.tsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

### Optimización de Imágenes

1. Usar formatos modernos (WebP)
2. Implementar carga progresiva
3. Usar tamaños adecuados para cada dispositivo

## Pruebas

### Configurar Jest y React Testing Library

1. Instalar dependencias:
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

2. Crear archivo de configuración:
   ```js
   // jest.config.js
   module.exports = {
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
     moduleNameMapper: {
       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
     },
   };
   ```

3. Ejemplo de prueba:
   ```tsx
   // src/components/Header.test.tsx
   import { render, screen } from '@testing-library/react';
   import Header from './Header';

   test('renders header with logo', () => {
     render(<Header />);
     const logoElement = screen.getByText(/CamiDevAI/i);
     expect(logoElement).toBeInTheDocument();
   });
   ```

---

Este documento es una guía inicial. A medida que el proyecto evolucione, se recomienda mantener actualizada esta documentación.
