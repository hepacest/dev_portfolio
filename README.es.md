# HEPAC Developer Portfolio

Soy Helen Patricia Acero Castro y este es mi portafolio, enfocado en presentar proyectos de software de mi interés y aplicando buenas prácticas de ingeniería de software.

> **English version:** This project is also documented in [English](README.md).

## Sobre el Proyecto

Este repositorio contiene un portafolio personal. Presenta proyectos seleccionados, un resumen del perfil profesional y un selector de idioma para visitantes en español e inglés.

### Requerimientos Funcionales

- Mostrar un catálogo de proyectos con nombre, categoría, descripción y enlaces al código fuente.
- Soportar cambio de contenido bilingüe entre español e inglés.
- Exponer una ruta dedicada para cada proyecto y redirigir a los visitantes hacia la aplicación desplegada.

### Requerimientos No Funcionales

- Interfaz responsiva para navegación en desktop y móvil.
- Navegación clara y de baja fricción.
- Estructura mantenible con componentes reutilizables de React y datos de idioma centralizados.

## Stack Técnico

| Capa | Tecnología |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16.2.4 |
| UI | [React](https://react.dev/) 19.2.4 |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 |
| Linting | [ESLint](https://eslint.org/) 9 |

## Arquitectura y Lógica

La aplicación sigue una estructura simple basada en App Router:

- `app/` contiene las rutas principales, el layout global y la ruta de redirección del proyecto.
- `components/` contiene secciones reutilizables de UI como header, footer, about y project cards.
- `data/` centraliza metadata de proyectos y diccionarios de idioma.
- `public/` almacena assets estáticos como flags.
- `types/` define tipos compartidos de TypeScript usados en la aplicación.

### Flujo de Información

1. La página principal carga el locale seleccionado en el estado del cliente.
2. Los textos de traducción se leen desde `data/languages`.
3. La metadata de proyectos se lee desde `data/projects.ts` y se renderiza con componentes reutilizables.
4. La ruta `app/markdown-editor` redirige al deployment externo del proyecto.

## Guía de Inicio Rápido

### Requisitos Previos

- Node.js 20+ recomendado
- npm 10+ recomendado

### Instalación

```bash
git clone https://github.com/hepacest/dev_portfolio.git
cd dev_portfolio
npm install
```

### Variables de Entorno

Actualmente este proyecto no requiere un archivo `.env` para la ejecución local.

### Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

### Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```text
.
├── app/                  # Páginas App Router y layout
├── components/           # Secciones y cards reutilizables de UI
├── data/                 # Datos de proyectos y traducciones
├── public/               # Assets estáticos
├── types/                # Tipos compartidos de TypeScript
├── eslint.config.mjs     # Configuración de ESLint
├── next.config.ts        # Configuración de Next.js
└── package.json          # Scripts y dependencias
```

## Proyectos Actuales

| Proyecto | Descripción | Stack | Código | Live |
|---|---|---|---|---|
| Markdown Editor | Editor Markdown con vista previa en tiempo real | React, Vite, Tailwind CSS | [GitHub](https://github.com/hepacest/markdown-editor) | [Website](https://markdown-editor.hepac.dev/) |

## Estado del Proyecto

En producción y en mejora continua.

## Contribución

Las contribuciones no están formalmente abiertas todavía. Si deseas proponer mejoras o reportar issues, abre un issue o contáctame primero.

## Licencia

Actualmente este repositorio no define un archivo de licencia.

## Contacto

- Email: [hepacest@gmail.com](mailto:hepacest@gmail.com)