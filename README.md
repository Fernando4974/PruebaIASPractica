# PruebaIASPractica
🤖
 Prueba Técnica: Desarrollador Node.js Junior 
Descripción del Proyecto
 🧩
 (Products)
 Crear una aplicación backend en Node.js para gestionar un catálogo de productos y sus categorías. La aplicación
 debe incluir una base de datos SQL con dos tablas: products y categories , y establecer una relación entre ellas.
 Cada producto debe tener:
 Nombre (texto),
 Descripción (texto),
 Precio (número),
 Stock (número),
 Pertenecer a una categoría (id de categoría).
 Es importante hacer uso de buenas prácticas de nombramiento de variables y organización en tu código.
 Tareas a Realizar
 1. Base de Datos y Modelado
 🛢
 :
 Crea una base de datos con dos tablas: products y categories .
 Establece una relación entre las tablas de modo que cada producto pertenezca a una categoría.
 Una categoría puede tener muchos productos.
 Configura tus variables de conexión a base de datos en un archivo .env .
 2. Modelos y Migraciones 
�
�
 :
 Define modelos para las entidades Product y Category .
 3. API REST
 🌐
 :
 Desarrolla una API REST con las siguientes rutas:
 GET /products : Obtener la lista completa de productos (el endpoint debe tener paginación).
 GET /products/:id : Obtener detalles de un producto específico.
 POST /products : Agregar un nuevo producto al catálogo.
 PUT /products/:id : Actualizar información de un producto existente.
 DELETE /products/:id : Eliminar un producto del catálogo.
 4. Validación y Middleware
 🛠 
:
 Implementa validaciones para los datos de entrada en las rutas de creación y actualización de productos y
 categorías ( POST && PUT ).
 5. Seguridad y Autorización:
 1/2
 https://md2pdf.netlify.app
md2pdf - Markdown to PDF
 12/2/24, 14:39
 Implementa medidas básicas de seguridad, como la configuración de CORS.
 6. Documentación y Buenas Prácticas 
�
�
 :
 Proporciona una documentación clara sobre la estructura de la API y cómo consumirla.
 Cumple con las mejores prácticas de codificación y convenciones de Node.js.
 7. Entorno de Desarrollo y Dependencias:
 Utiliza un entorno de desarrollo adecuado para Node.js.
 Puedes usar dependencias como Express para la creación del servidor y Sequelize para interactuar con la
 base de datos.
 ⏲
 Gestión Eficiente del Tiempo 
⏳
 La duración máxima son 1 hora
