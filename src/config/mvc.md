# Implementación de Arquitectura MVC en React

Este documento explica cómo se ha implementado una arquitectura inspirada en MVC (Modelo-Vista-Controlador) en este proyecto React.

## Conceptos Generales

La arquitectura MVC tradicional separa una aplicación en tres componentes principales:

1. **Modelo**: Gestiona los datos y la lógica de negocio
2. **Vista**: Presenta los datos al usuario
3. **Controlador**: Maneja la interacción del usuario y actualiza el modelo y la vista

## Adaptación a React

En React, la separación estricta de MVC no siempre es aplicable directamente debido a su naturaleza basada en componentes. Sin embargo, hemos adaptado estos conceptos:

### Modelo (M)

En nuestro proyecto, el modelo está representado por:

- **`/src/data/`**: Contiene todos los datos estáticos de la aplicación
- **`/src/types/`**: Define las interfaces y tipos para los datos
- **Estado global** (si se implementa): Context API o Redux para gestionar el estado global

### Vista (V)

La vista está representada por:

- **`/src/components/`**: Componentes de React que renderizan la interfaz de usuario
- **`/src/components/common/`**: Componentes reutilizables
- **`/src/App.tsx`**: Componente principal que organiza la estructura general

### Controlador (C)

El controlador está representado por:

- **`/src/utils/`**: Funciones que manejan la lógica de negocio
- **Hooks personalizados**: Encapsulan la lógica de estado y efectos
- **Manejadores de eventos**: Funciones que responden a las interacciones del usuario

## Flujo de Datos

1. El usuario interactúa con la **Vista** (componentes de React)
2. Los manejadores de eventos en el **Controlador** procesan estas interacciones
3. El **Controlador** actualiza el **Modelo** (datos y estado)
4. El **Modelo** actualizado se pasa a la **Vista** para renderizar los cambios

## Beneficios de esta Arquitectura

- **Separación de responsabilidades**: Cada parte del código tiene un propósito claro
- **Mantenibilidad**: Es más fácil entender y modificar el código
- **Reutilización**: Los componentes y funciones pueden reutilizarse en diferentes partes de la aplicación
- **Testabilidad**: Es más fácil escribir pruebas unitarias para cada parte

## Ejemplo Práctico

### Modelo
```typescript
// src/types/index.ts
export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  skills?: string[];
  certificateLink?: string;
}

// src/data/index.ts
export const educationList: EducationItem[] = [
  {
    title: "Ingeniera en Informática",
    institution: "Instituto Profesional IPP",
    period: "2017 - 2022",
    description: "...",
    skills: [...]
  },
  // ...
];
```

### Controlador
```typescript
// src/utils/index.ts
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

// En un componente
const [expandedCards, setExpandedCards] = useState<number[]>([]);
  
const toggleExpand = (index: number) => {
  setExpandedCards(prev => 
    prev.includes(index) 
      ? prev.filter(i => i !== index)
      : [...prev, index]
  );
};
```

### Vista
```tsx
// src/components/Aprendizaje.tsx
return (
  <SectionContainer 
    id="aprendizaje"
    title="Mi Aprendizaje"
    subtitle="El conocimiento ha sido mi compañero de viaje"
    icon={GraduationCap}
    bgColor="bg-gradient-to-br from-[#f0fdfd] to-white"
  >
    <div className="grid md:grid-cols-3 gap-8">
      {educationList.map((edu, index) => (
        <EducationCard 
          key={index}
          education={edu}
          isExpanded={expandedCards.includes(index)}
          onToggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  </SectionContainer>
);
```

## Extensión del Patrón

Para proyectos más grandes, se podría extender este patrón con:

1. **Servicios**: Para manejar llamadas a API y lógica de negocio compleja
2. **Estado global**: Usando Context API o Redux para compartir estado entre componentes
3. **Rutas**: Usando React Router para navegación entre páginas

## Conclusión

Esta arquitectura proporciona una estructura clara y mantenible para el proyecto, facilitando su desarrollo y evolución a lo largo del tiempo.
