
# Image Uploader Frontend

Aplicación web en Vue 3 y TypeScript para cargar imágenes, generar enlaces y eliminar automáticamente, con pruebas en Vitest. 
Puedes visualizar el proyecto en https://reffcp-upload-image.web.app/

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

El proyecto Image Uploader Frontend proporciona una interfaz de usuario para cargar, gestionar y eliminar imágenes. La aplicación está construida con Vue 3 y TypeScript, y utiliza Vitest para pruebas.

## Características

- Carga de imágenes.
- Generación de enlaces de acceso a las imágenes.
- Eliminación automática de imágenes.
- Pruebas unitarias y end-to-end con Vitest y Cypress.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/Reffcp/image-uploader-frontend.git
    cd image-uploader-frontend
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

## Configuración

Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias.
VITE_API_URL=''
VITE_MAX_SIZE_FILE=2000000


## Ejecución

### En Desarrollo

Para compilar y ejecutar el servidor de desarrollo:

```sh
npm run dev
```

### Compilación y Minificación para Producción

Para compilar el proyecto para producción:

```sh
npm run build
```

## Pruebas

### Ejecutar Pruebas Unitarias

Para ejecutar las pruebas unitarias con Vitest:

```sh
npm run test:unit
```

### Ejecutar Pruebas End-to-End

Para ejecutar las pruebas end-to-end con Cypress:

```sh
npm run test:e2e:dev
```

Para probar el build de producción:

```sh
npm run build
npm run test:e2e
```

## Despliegue

Para desplegar la aplicación en un entorno de producción, sigue los pasos de tu proveedor de hosting. Asegúrate de que todas las variables de entorno necesarias estén configuradas.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
