# Backend y Frtoned (Resumen)

Exporte el chat en .md de cosas que preguntaba a la IA

# Ejecutar un Proyecto Spring Boot con Maven en VS Code

## Verificar Java

Primero verifica que Java esté instalado:

```powershell
java -version
```

Salida esperada:

```text
java version "17.0.10" 2024-01-16 LTS
Java(TM) SE Runtime Environment (build 17.0.10+11-LTS-240)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.10+11-LTS-240, mixed mode, sharing)
```

## Problema: Maven no reconocido

Si al ejecutar:

```powershell
mvn -version
```

aparece:

```text
mvn : El término 'mvn' no se reconoce como nombre de un cmdlet...
```

significa que Maven no está instalado globalmente o no está agregado al PATH.

## Verificar si existe Maven Wrapper

En la raíz del proyecto verifica que existan los archivos:

```text
mvnw
mvnw.cmd
```

Ejemplo:

```text
.mvn/
src/
target/
mvnw
mvnw.cmd
pom.xml
```

Si existen, no es necesario instalar Maven.

## Ejecutar la aplicación

Desde la raíz del proyecto ejecuta:

```powershell
.\mvnw.cmd spring-boot:run
```

## Resultado esperado

Si la aplicación inicia correctamente, verás algo similar a:

```text
Tomcat started on port 7070 (http) with context path '/'
Started PolicyApplication
```

Esto significa que:

- Spring Boot inició correctamente.
- Hibernate se conectó a SQLite.
- Se crearon las tablas necesarias.
- El servidor está escuchando en el puerto 7070.

## Probar la aplicación

Abre en el navegador:

```text
http://localhost:7070
```

O consume los endpoints de tu API, por ejemplo:

```text
http://localhost:7070/clientes
```

## Comandos Maven más comunes

### Ejecutar la aplicación

```powershell
.\mvnw.cmd spring-boot:run
```

### Compilar y empaquetar

```powershell
.\mvnw.cmd clean package
```

### Instalar dependencias y compilar

```powershell
.\mvnw.cmd clean install
```

### Ejecutar un JAR generado

```powershell
java -jar target/policy-0.0.1-SNAPSHOT.jar
```

## Diferencia con otros ecosistemas

Es común confundir los comandos:

### Node.js

```bash
npm start
```

### Spring Boot

```bash
mvn spring-boot:run
```

o usando Maven Wrapper:

```bash
.\mvnw.cmd spring-boot:run
```

Por lo tanto, el equivalente más cercano a `npm start` en Spring Boot es:

```bash
spring-boot:run
```

## Configuración recomendada de Hibernate

Si en cada ejecución se recrean las tablas, revisa el archivo `application.properties`.

Evita:

```properties
spring.jpa.hibernate.ddl-auto=create
```

Utiliza:

```properties
spring.jpa.hibernate.ddl-auto=update
```

Esto permite actualizar la estructura de la base de datos sin eliminar los datos existentes.

## Verificar la base de datos SQLite

Si la configuración es:

```properties
spring.datasource.url=jdbc:sqlite:polizas.db
```

puedes verificar que el archivo exista:

```powershell
dir *.db
```

Deberías ver:

```text
polizas.db
```

## Angular - *ngIf
- Importar `CommonModule` o `NgIf` en componentes standalone.

## Bootstrap - 2 columnas por fila
```html
<div class="col-12 col-md-6"></div>
```

## Reactive Forms y select
- `formControlName` guarda automáticamente el valor seleccionado.
- Para ejecutar lógica al seleccionar:
```html
<select formControlName="id" (change)="seleccionarCliente()"></select>
```

## Formulario Cliente
```ts
clienteForm = this.fb.group({
  id: [''],
  nombre: [''],
  documento: [''],
  celular: [''],
  correo: [''],
  fechaCreacion: ['']
});
```

## SQLite
### Error DROP COLUMN
SQLite 3.26.0 no soporta:
```sql
ALTER TABLE polizas DROP COLUMN ultimo_seguimiento;
```

Opciones:
- Recrear la tabla.
- Borrar y regenerar la BD si estás en desarrollo.

## JPA - Relación Poliza/Cliente
Enviar desde Angular únicamente:
```json
{
  "clienteId": 1
}
```

En Spring:
```java
Cliente cliente = clienteRepository.findById(dto.getClienteId()).get();
poliza.setCliente(cliente);
```

## CSS botón verde
```css
.btn-verde {
    background-color: #198754;
    border: 1px solid #198754;
}
```

## Centrar contenido
`align-items:center` requiere:
```css
display:flex;
```

o usar:
```css
text-align:center;
```

## JPA Repository
```java
List<Poliza> findByClienteId(Long id);
```

## Navegar entre componentes hermanos
```ts
this.router.navigate(['/polizas', clienteId]);
```

## Error 400 Bad Request
Angular enviaba:
```text
?id=1
```

Backend esperaba:
```java
@RequestParam Long clienteId
```

Corregir:
```ts
params: { clienteId: id }
```

## Recorrer pólizas
```ts
for (const poliza of this.polizas) {
  console.log(poliza.cliente.nombre);
}
```

o:

```ts
this.cliente = this.polizas[0].cliente.nombre;
```
