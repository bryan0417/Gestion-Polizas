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

```Entrar al git bash
git clone https://github.com/bryan0417/Gestion-Polizas && cd "Gestion-Polizas"
```

### 2. Levantar el backend (Spring Boot)

```Entrar al git bash
cd policy-backend/policy && ./mvnw spring-boot:run
```

El backend quedará disponible en `http://localhost:7070`.  
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
Gestion-Polizas/
├── policy-backend/
│   └── policy/              # API REST - Spring Boot
│       ├── src/
│       ├── mvnw
|       ├── polizas.db
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
- **SQLite** como base de datos embebida: sin instalación de motor externo, el archivo se crea en tiempo de ejecución y los datos de prueba se cargan automáticamente.
- **Arquitectura en capas** (Controller → Service → Repository) para separar responsabilidades y facilitar el testing unitario.

### Frontend
- **Angular components** para manejar cada vista por componentes.
- **Reactive Forms** para manejo de validaciones en los formularios de pólizas.

---

## Reflexión

El mayor reto fue definir el modelo de dominio antes de escribir código: que atributos y que tablas se iban a crear, me apoye con un agente creado con git hub copilots, y en el proceso de desarrollo hubo atributos que se eliminaron. Fue la primera vez que utilizaba SQLite pero es super facil, no se requiere de instalacion de servidor, es ligero y raapido, y utilice una extension en VS code para ver la base de datos.

Si tuviera más tiempo, añadiría paginación en el listado de pólizas, manejo de errores más granular en el frontend y busquedas o consultas mas avanzadas como filtros, una complejidad es que al no tener como un  listado de requerimientos casi que uno es entender el problema y plantear una solucion que pueda ayudar al problema.

En la sección de pruebas se realizaron pruebas funcionales de los endpoints utilizando Postman, verificando el correcto funcionamiento de las operaciones implementadas y las respuestas del sistema ante diferentes solicitudes. No se llevaron a cabo otros tipos de pruebas, como pruebas unitarias, de integración o automatizadas, debido a la falta de experiencia y conocimientos suficientes en dichas metodologías al momento del desarrollo del proyecto.
