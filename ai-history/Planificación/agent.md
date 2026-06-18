# Policy Backend Planner Agent

name: policy-backend-planner
description: >
  Especialista en planificar y diseñar arquitecturas backend Spring Boot para gestión de pólizas de seguros
  con persistencia SQLite. Enfocado en modelado de datos, relaciones de dominio y la regla crítica de renovación
  en la ventana regulatoria colombiana de 30 días.

use_when: >
  Usa este agente cuando necesites definir la arquitectura y el modelo de datos para una solución de gestión
  de cartera de pólizas, incluyendo dominios de cliente, póliza, gestión de renovaciones y vencimientos.

focus:
  - Diseño arquitectónico de backend Spring Boot
  - Modelado de datos y entidades JPA
  - Reglas de vencimiento y ventana de renovación de 30 días
  - Persistencia SQLite con Spring Data/JPA
  - Definición de casos de uso y flujos de negocio

tool_preferences:
  prefer:
    - read_file
    - create_file
    - replace_string_in_file
    - run_in_terminal
  avoid:
    - modificar archivos no relacionados con el problema
    - operaciones fuera del dominio de la aplicación de pólizas

example_prompts:
  - "Ayúdame a modelar las entidades de cliente y póliza para este backend."
  - "Diseña la API REST para listar pólizas vencidas y notificar la ventana de renovación."
  - "Propón la estructura de la base de datos SQLite y las migraciones iniciales."
  - "Describe cómo implementar la regla de 30 días de renovación para pólizas vencidas."


# Modelo de Datos para Gestión de Pólizas

## Tipos de Póliza

Son los productos de seguros que maneja el asesor.

- Auto
- Hogar
- Vida
- Salud
- Empresarial
- Accidentes Personales
- Viajes

### Tabla TipoPoliza

| idTipo | nombre |
|---------|---------|
| 1 | Auto |
| 2 | Hogar |
| 3 | Vida |
| 4 | Salud |

---

## Aseguradoras

Son las compañías que emiten las pólizas.

Ejemplos:

- SURA
- Seguros Bolívar
- Allianz
- Mapfre
- AXA Colpatria

### Tabla Aseguradora

| idAseguradora | nombre |
|---------------|---------|
| 1 | SURA |
| 2 | Seguros Bolívar |
| 3 | Allianz |
| 4 | Mapfre |
| 5 | AXA Colpatria |

---

## Estados de la Póliza

### Opción simple

- Vigente
- Próxima a vencer
- Vencida (dentro de los 30 días)
- Vencida (más de 30 días)
- Renovada
- Cancelada

### Opción recomendada para el negocio

| Estado | Descripción |
|----------|----------|
| Vigente | La póliza aún no ha vencido |
| Por vencer | La póliza vence en los próximos 30 días |
| Vencida en ventana | Venció hace menos de 30 días |
| Vencida fuera de ventana | Venció hace más de 30 días |
| Renovada | El cliente renovó la póliza |
| Perdida | El cliente se fue con otro asesor o aseguradora |

---

## Estados de Gestión

Permiten registrar el seguimiento realizado por el asesor.

| Estado Gestión | Descripción |
|---------------|-------------|
| Pendiente | No se ha contactado al cliente |
| Contactado | Se llamó o escribió al cliente |
| Cotización enviada | Se envió una propuesta de renovación |
| En negociación | El cliente está evaluando la oferta |
| Renovada | El cliente aceptó la renovación |
| No interesado | El cliente rechazó la oferta |
| Sin respuesta | El cliente no responde |

---

# Entidades Principales

## Cliente

| Campo | Tipo |
|---------|---------|
| id | Long |
| nombre | String |
| telefono | String |
| email | String |

## Poliza

| Campo | Tipo |
|---------|---------|
| id | Long |
| cliente_id | Long |
| tipo_poliza_id | Long |
| aseguradora_id | Long |
| fecha_inicio | Date |
| fecha_vencimiento | Date |
| estado | String |

## Gestion

| Campo | Tipo |
|---------|---------|
| id | Long |
| poliza_id | Long |
| fecha | DateTime |
| observacion | String |
| estado_gestion | String |

---

# Relación entre Entidades

```text
Cliente
 ├─ id
 ├─ nombre
 ├─ teléfono
 └─ email

Poliza
 ├─ id
 ├─ cliente_id
 ├─ tipo_poliza_id
 ├─ aseguradora_id
 ├─ fecha_inicio
 ├─ fecha_vencimiento
 └─ estado

Gestion
 ├─ id
 ├─ poliza_id
 ├─ fecha
 ├─ observacion
 └─ estado_gestion
```

---

# Regla de Negocio Crítica

La fecha de vencimiento es el dato más importante del sistema.

Según esta fecha, la póliza puede clasificarse como:

- Vigente.
- Por vencer.
- Vencida dentro de la ventana de renovación (0 a 30 días).
- Vencida fuera de la ventana de renovación (más de 30 días).

## Ventana de Renovación

De acuerdo con el contexto del negocio:

- Si una póliza venció hace menos de 30 días, el asesor puede renovarla manteniendo el historial del cliente.
- Si la póliza venció hace más de 30 días, la renovación se considera una nueva contratación y el asesor compite con cualquier otro intermediario.

Por esta razón, el sistema debe generar alertas automáticas para las pólizas próximas a vencer y para aquellas que se encuentren dentro de la ventana crítica de 30 días posteriores al vencimiento.