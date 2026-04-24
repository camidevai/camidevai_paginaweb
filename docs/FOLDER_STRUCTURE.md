# Estructura de Carpetas

Este documento explica la estructura de carpetas del proyecto CamiDevAI y su propósito.

## Visión General

```
camidevai/
├── docs/                  # Documentación del proyecto
├── public/                # Archivos estáticos accesibles públicamente
├── src/                   # Código fuente
│   ├── components/        # Componentes de React
│   │   ├── common/        # Componentes reutilizables
│   │   └── ...            # Componentes específicos
│   ├── config/            # Configuración de la aplicación
│   ├── data/              # Datos estáticos (modelo)
│   ├── img/               # Imágenes y recursos gráficos
│   ├── types/             # Definiciones de tipos TypeScript
│   ├── utils/             # Funciones de utilidad
│   ├── App.tsx            # Componente principal
│   ├── index.css          # Estilos globales
│   ├── main.tsx           # Punto de entrada
│   └── vite-env.d.ts      # Definiciones de tipos para Vite
├── .gitignore             # Archivos ignorados por Git
├── index.html             # Plantilla HTML principal
├── package.json           # Dependencias y scripts
├── postcss.config.js      # Configuración de PostCSS
├── README.md              # Documentación principal
├── tailwind.config.js     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
└── vite.config.ts         # Configuración de Vite
```

## Detalles de Carpetas

### `/docs`

Contiene documentación adicional del proyecto:

- `EXTENDING.md`: Guía para extender el proyecto
- `FOLDER_STRUCTURE.md`: Este documento

### `/public`

Archivos estáticos que se copian directamente a la carpeta de compilación:

- Favicon
- Robots.txt
- Manifest.json
- Otros recursos estáticos

### `/src`

Contiene todo el código fuente de la aplicación:

#### `/src/components`

Componentes de React organizados por funcionalidad:

- `/common`: Componentes reutilizables como `SkillTag`, `SectionContainer`, etc.
- Componentes específicos para cada sección: `Historia.tsx`, `MiCamino.tsx`, etc.

#### `/src/config`

Configuración centralizada de la aplicación:

- `constants.ts`: Constantes globales
- `routes.ts`: Configuración de rutas
- `theme.ts`: Configuración del tema
- `mvc.md`: Documentación sobre la arquitectura MVC

#### `/src/data`

Datos estáticos que actúan como el "Modelo" en la arquitectura MVC:

- `index.ts`: Datos principales (educación, experiencia, servicios, etc.)

#### `/src/img`

Imágenes y recursos gráficos utilizados en la aplicación:

- `camisol.png`: Imagen principal de Camila

#### `/src/types`

Definiciones de tipos TypeScript:

- `index.ts`: Interfaces y tipos compartidos

#### `/src/utils`

Funciones de utilidad que actúan como parte del "Controlador" en la arquitectura MVC:

- `index.ts`: Funciones de utilidad generales

### Archivos Principales

- `App.tsx`: Componente principal que organiza la estructura general
- `index.css`: Estilos globales con Tailwind CSS
- `main.tsx`: Punto de entrada de la aplicación
- `vite-env.d.ts`: Definiciones de tipos para Vite

## Convenciones de Nomenclatura

- **Componentes**: PascalCase (ej. `Historia.tsx`)
- **Utilidades y configuración**: camelCase (ej. `constants.ts`)
- **Tipos e interfaces**: PascalCase (ej. `EducationItem`)
- **Constantes**: UPPER_SNAKE_CASE (ej. `CONTACT_INFO`)

## Organización de Importaciones

Se recomienda organizar las importaciones en el siguiente orden:

1. Importaciones de React y bibliotecas externas
2. Importaciones de componentes
3. Importaciones de tipos
4. Importaciones de utilidades y configuración
5. Importaciones de datos
6. Importaciones de estilos

Ejemplo:

```tsx
// 1. React y bibliotecas externas
import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

// 2. Componentes
import SectionContainer from './common/SectionContainer';
import SkillTag from './common/SkillTag';

// 3. Tipos
import { EducationItem } from '../types';

// 4. Utilidades y configuración
import { formatDate } from '../utils';
import { SECTION_IDS } from '../config/constants';

// 5. Datos
import { educationList } from '../data';

// 6. Estilos (si se importan directamente)
import './MiComponente.css';
```

## Conclusión

Esta estructura de carpetas está diseñada para ser intuitiva, escalable y mantener una clara separación de responsabilidades siguiendo un patrón similar a MVC. A medida que el proyecto crezca, esta estructura puede adaptarse manteniendo los mismos principios organizativos.
