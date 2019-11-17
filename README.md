


## **Crud-express-mongo**


Es una aplicación simple de crud simple solo para añadir y eliminar un elemento.
Contiene solo una vista de usuario para su uso, su dirección por defecto es "/" siendo el index del aplicativo

> Tecnologías : Node.js, MongoDB, ejs

Dependencias de producción
 - Express
 - Morgan
 - Body-parser
 - ejs (Motor de plantillas)

Dependencias de desarrollo
 - Nodemon
## Ejecutar servidor
 npm run start
> Comando para el despliegue en entorno de producción

 npm run dev
> Comando para entorno de desarrollo, se ejecuta con nodemon

## Estructura de carpetas

 - **src** : contiene nuestra aplicación
 - **libs** : contiene el script para la conexión  con la base de datos mongodb, para **usar** el script de conexion necesita **configuracion de usario y contraseña** hacia el servidor de la base de datos de mongo
 - **routes** : contiene script de manejo de uri
 - **model** : contiene los schemas que son representaciones abstractas de nuestros documentos mongodb
 - **views** : carpeta que contiene las paginas que se visualizaran en nuestra aplicación web, son ficheros  del motor de plantillas ejs
 - **app.js** : Nuestro archivo central de configuración

```
.
+-- src
|   +-- libs
|   	+-- db-connection.js
|   +-- routes
|   	+-- routes.js
|   +-- models
|   	+-- task.js
|   +-- views
|   	+-- index.ejs
|   +-- app.js
```
