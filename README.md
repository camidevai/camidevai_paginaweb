# CamiDevAI - Sitio Web Personal

Este proyecto es un sitio web personal para Camila Bañares (CamiDevAI), una ingeniera en informática especializada en inteligencia artificial y creación de contenido tecnológico.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## 📝 Descripción

Este sitio web cuenta la historia de transformación personal y profesional de Camila Bañares, desde su trabajo como promotora dental hasta convertirse en ingeniera en informática y creadora de contenido tecnológico. El sitio está diseñado con un enfoque en storytelling, presentando su evolución, servicios y colaboraciones de manera emotiva y cercana.

## 🛠️ Tecnologías

- **React**: Biblioteca JavaScript para construir interfaces de usuario
- **TypeScript**: Superset de JavaScript con tipado estático
- **Vite**: Herramienta de compilación rápida para desarrollo web
- **Tailwind CSS**: Framework CSS utilitario para diseño rápido
- **Lucide React**: Biblioteca de iconos
- **EmailJS**: Servicio para enviar emails desde JavaScript

## 📂 Estructura del Proyecto

El proyecto sigue una estructura modular y organizada:

```
src/
├── components/         # Componentes de React
│   ├── common/         # Componentes reutilizables
│   └── ...             # Componentes específicos de sección
├── data/               # Datos estáticos (modelo)
├── types/              # Definiciones de tipos TypeScript
├── utils/              # Funciones de utilidad
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

### Componentes

Los componentes están organizados por funcionalidad:

- **common/**: Componentes reutilizables como `SkillTag`, `SectionContainer`, etc.
- Componentes específicos para cada sección del sitio: `Historia`, `MiCamino`, `Aprendizaje`, etc.

## 🏗️ Arquitectura

El proyecto implementa una arquitectura inspirada en el patrón MVC (Modelo-Vista-Controlador), adaptada para React:

### Modelo (M)

- **data/**: Contiene todos los datos estáticos de la aplicación
- **types/**: Define las interfaces y tipos para los datos

### Vista (V)

- **components/**: Componentes de React que renderizan la interfaz de usuario
- **App.tsx**: Componente principal que organiza la estructura general

### Controlador (C)

- **utils/**: Funciones que manejan la lógica de negocio
- Hooks y manejadores de eventos dentro de los componentes

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/camidevai.git
   cd camidevai
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 💻 Uso

### Desarrollo

Para trabajar en el proyecto:

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación
npm run preview
```

### Modificación de Contenido

Para modificar el contenido del sitio, edita los archivos en `src/data/`:

- **index.ts**: Contiene todos los datos estáticos como experiencia, educación, servicios, etc.

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Guía de Estilo

- Utiliza TypeScript para todos los componentes nuevos
- Sigue la estructura de carpetas existente
- Utiliza componentes funcionales con hooks
- Documenta tus componentes y funciones

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ para Camila Bañares (CamiDevAI)
