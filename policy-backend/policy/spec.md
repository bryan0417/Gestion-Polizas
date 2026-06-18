# El problema

Un asesor de seguros administra una cartera de clientes. Cada cliente tiene una o más pólizas vigentes (auto, hogar, vida, etc.), cada póliza con su fecha de vencimiento conocida.
El mes pasado, María, una asesora con 280 clientes activos, nos contó:
"Yo tengo todo en un Excel gigante. Cada lunes filtro las pólizas que vencen ese mes, llamo cliente por cliente, marco una columna 'gestionado' con una X, y cuando renuevan pongo la nueva fecha. Lo malo es que el Excel se daña, se duplica, se pierde el contexto de qué le ofrecí a quién. Y cuando una póliza vence sin que yo me dé cuenta, pierdo el cliente porque se va con otro asesor. Eso me pasa con 5-10 clientes al mes."
María necesita reemplazar su Excel con algo mejor.

# Entender el problema

María tiene una lista grande de clientes, pero la plataforma que usa actualmente no es eficiente porque le resulta que le genera mas problemas y dificultades, y le pone más trabajo, por lo que necesita una aplicación confiable que le guarde los datos de cada cliente y pueda verificar el estado de cada uno sin tener que hacer el tareas tediosas, y tener la información más rapido. Lo más negativo es que esta perdiendo clientes porque no tiene la informacion de cuando se vence las pólizas.

# Construccion solucion

Se desarrrolla una aplicación básica donde prime la eficiencia y ser una app fiable para Maria y poder tener precisión de los datos de cada cliente. Se construye una interfaz sencilla pero clara donde pueda evidenciar de todos los clientes que tiene y con su respectiva información. Decido no realizar un login y tampoco la interacción de mas usuarios porque no se requiere y solo se tendria el usuario para Maria.

# Flujo del sistema

Se tendra en la interfaz grafica un historial de cada interacción para preservar todo el contexto, es decir por cada cliente tiene sus polizas, y de esas polizas se tienen todas las gestiones que se realizan. Cuando se realice alguna renovación o cambios se tendra una fecha de actualizacion donde se podra tener el seguimiento de la ultima vez de la poliza, pero tendra un historial de cada registro que se va creando. Se tiene filtros para poder encontrar clientes de manera rapida. 

# Modelo de datos

## Cliente

- id
- nombre
- documento
- celular
- correo
- fechaCreacion
- Relacion OneToMany polizas

## Poliza

- id
- Relacion ManyToOne cliente
- numeroPoliza
- tipo
- aseguradora
- fechaInicio
- fechaVencimiento
- estado
- Relacion OneToMany gestiones

## Gestion

- id
- Relacion ManyToOne poliza
- fechaGestion
- tipoGestion
- gestionado
- resultado
- fechaProximaAccion

# Endpoints

## API GET
- consultar clientes
- consultar un cliente
- consultar polizas
- consultar una poliza por cliente
- consultar historial de determinada poliza

## API POST
- agregar cliente
- agregar poliza

## API PUT
- actualizar cliente
- actualizar poliza

# Trade offs

## No implementar autenticacion de usuario

Como el sistema está pensado inicialmente para una única asesora (María), se decidió omitir el módulo de autenticación.

## Mantener historial completo de gestiones

La pérdida de contexto es uno de los principales problemas identificados en el uso de Excel.

## Utilizar una base de datos en lugar de Excel

La necesidad de evitar pérdidas de información y mejorar el seguimiento de las pólizas hace que una base de datos sea más adecuada.