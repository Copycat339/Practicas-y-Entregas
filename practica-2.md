# Microservicios  

## ¿Qué son los Microservicios?  
Los microservicios son un estilo de arquitectura de software donde una aplicación se divide en pequeños servicios independientes que se comunican entre sí a través de APIs. Cada microservicio es responsable de una funcionalidad específica y puede desarrollarse, desplegarse y escalarse de manera independiente.  

## Características de los Microservicios  
- **Desacoplamiento:** Cada servicio es independiente.  
- **Escalabilidad:** Se pueden escalar solo los servicios que lo necesiten.  
- **Desarrollo independiente:** Diferentes equipos pueden trabajar en diferentes servicios.  
- **Despliegue flexible:** Se pueden actualizar servicios sin afectar toda la aplicación.  
- **Comunicación mediante APIs:** Normalmente usan HTTP/REST o mensajes asíncronos.  

## Ventajas  
- Facilitan la escalabilidad y el mantenimiento.  
- Mejor tolerancia a fallos (si un servicio falla, no cae toda la app).  
- Se pueden desarrollar en diferentes lenguajes de programación.  

## Desventajas  
- Mayor complejidad en la gestión de la comunicación entre servicios.  
- Requieren una infraestructura más avanzada (como orquestadores tipo Kubernetes).  
- Pueden generar problemas de latencia debido a la comunicación entre servicios.  

## Ejemplo de Arquitectura  
Un sistema de e-commerce basado en microservicios podría tener:  
- **Servicio de Usuarios:** Maneja cuentas y autenticación.  
- **Servicio de Pedidos:** Gestiona los pedidos de los clientes.  
- **Servicio de Pagos:** Procesa pagos y facturación.  
- **Servicio de Inventario:** Administra stock de productos.  

Cada servicio funciona de manera independiente y se comunican entre sí mediante APIs.  

## Tecnologías utilizadas en Microservicios  
- **Contenedores:** Docker, Kubernetes  
- **APIs:** REST, GraphQL  
- **Mensajería:** RabbitMQ, Kafka  
- **Bases de datos:** PostgreSQL, MongoDB  

## Referencias
- https://www.atlassian.com/es/microservices/cloud-computing/microservices-design-patterns