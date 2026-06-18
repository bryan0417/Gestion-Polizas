# Gestión de Pólizas

Sistema de gestión de pólizas de seguro desarrollado con Spring Boot (backend) y Angular (frontend).

---

## Requisitos previos

Asegúrate de tener instalado:

- **Java 17** — `java -version`
- **Node.js 22.13.1 y npm 11.1.0** — `node -v && npm -v`

> Maven no necesita instalación global. El proyecto incluye Maven Wrapper (`mvnw`) con Maven 3.9.16, que se ejecuta automáticamente.

---

## Ejecución en 3 pasos

### 1. Clonar el repositorio y acceder al proyecto

```bash
git clone <URL_DEL_REPOSITORIO> && cd "GESTION DE POLIZAS"
```

### 2. Levantar el backend (Spring Boot)

```bash
cd policy-backend/policy && ./mvnw spring-boot:run
```

El backend quedará disponible en `http://localhost:8080`.  
La base de datos SQLite se crea automáticamente en el primer arranque con datos de prueba precargados.

### 3. Levantar el frontend (Angular)

Abre una nueva terminal desde la raíz del proyecto:

```bash
cd policy-frontend/poliza-front && npm install && npm start
```

La aplicación quedará disponible en `http://localhost:4200`.

---

## Estructura del proyecto

```
GESTION DE POLIZAS/
├── policy-backend/
│   └── policy/              # API REST - Spring Boot
│       ├── src/
│       ├── mvnw
│       └── pom.xml
└── policy-frontend/
    └── poliza-front/        # SPA - Angular
        ├── src/
        └── package.json
```

## Configuración

La configuración del backend se encuentra en `policy-backend/src/main/resources/application.properties`. No requiere modificación para correr localmente; la base de datos SQLite se genera automáticamente en la raíz del backend.

---

## Decisiones técnicas

### Backend
- **Spring Boot + Spring Data JPA** para la capa de datos con repositorios limpios y mantenibles.
- **SQLite** como base de datos embebida: sin instalación de motor externo, el archivo se crea en tiempo de ejecución y los datos de prueba se cargan automáticamente vía `data.sql`.
- **Arquitectura en capas** (Controller → Service → Repository) para separar responsabilidades y facilitar el testing unitario.

### Frontend
- **Angular standalone components** para reducir el boilerplate de módulos.
- **Reactive Forms** para manejo de validaciones en los formularios de pólizas.
- **HttpClient** con servicios inyectables para mantener la lógica de consumo de API fuera de los componentes.

---

## Reflexión

El mayor reto fue definir el modelo de dominio antes de escribir código: qué atributos mínimos necesita una póliza para ser útil sin sobre-diseñar. Opté por empezar con los casos de uso del enunciado y no agregar campos extra.

Si tuviera más tiempo, añadiría paginación en el listado de pólizas, manejo de errores más granular en el frontend y un pipeline de CI básico con GitHub Actions.