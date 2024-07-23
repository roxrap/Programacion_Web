# Foro Atractivo y Responsivo

## Proyecto Integrador


En este repositorio se desarrolla un foro que permite a los usuarios escribir y presentar sus publicaciones de manera atractiva. El proyecto incluye un formulario de creación de posts que permite ingresar el título y contenido del post, el enlace (URL) de una imagen relevante de internet y asignar la fecha de creación. Las imágenes se muestran de manera óptima y el diseño general del foro es responsivo, proporcionando una experiencia agradable en diferentes dispositivos.

Patra ello se utiliza tecnologías de programación web, como Node.js, EJS, MySQL y Sequelize. 

![Express Nodejs](https://miro.medium.com/v2/resize:fit:1400/1*f7ztMaMM0etsFHpEfkdiwA.png)

## Tecnologías Utilizadas
* Node.js
* Express
* EJS
* MySQL
* Sequelize

## Instrucciones para la ejecución
1. Crear la base de datos "forodb". En ella crear la siguiente tabla:
CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `detalle` text NOT NULL,
  `url_imagen` varchar(255) NOT NULL,
  `fecha_publicacion` date NOT NULL
  `autor` varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

2. Para poner en marcha este proyecto web, es necesario tener instaladas las siguientes dependencias:

- **cors**: Utilizado para habilitar el acceso a recursos de otros dominios, lo que es esencial para la comunicación entre distintos servicios en la web.

- **dotenv**: Usado para cargar variables de entorno desde un archivo `.env`, lo que proporciona una forma segura de gestionar configuraciones sensibles.

- **ejs**: Una vista de motor de plantillas que facilita la generación dinámica de contenido HTML en ésta aplicación web.

- **express**: El framework de servidor web Node.js que simplifica la creación de aplicaciones web y proporciona manejo de rutas y middleware.

- **morgan**: Un middleware de registro de solicitudes HTTP para el seguimiento y la depuración de solicitudes en el servidor.

- **mysql2**: Controlador MySQL para Node.js que permite conectarnos y realizar las operaciones en la base de datos MySQL.

- **sequelize**: ORM para la interacción con la base de datos SQL, facilita la definición de modelos y consultas SQL en JavaScript.

Estas dependencias son esenciales para construir y ejecutar este proyecto web de manera efectiva. La forma más facil de instalarlas es ejecutando el siguiente comando en la terminal: npm i


3. Modificar el archivo example.env por .env

4. Ejecutar en la consola: node app.js

5. Acceder al navegador: http://localhost:4000


## Contacto
¡No dudes en ponerte en contacto conmigo si quieres hablar sobre proyectos interesantes, adoro los desafíos!

Email: roxana.rapali@gmail.com
Teléfono celular: +549 342 501 8700
