# Argentina Programa 4.0

## Proyecto Integrador


En este repositorio se desarrolla un foro en el que una persona pueda escribir y presentar sus publicaciones de manera atractiva. Se solicita especificamente desarrollar un formulario de creación de posts que permita ingresar el título y contenido del post, ingresar el enlance (URL) de una imagen de internet relevante y asignar la fecha de
creación. Además, se espera que las imágenes se muestren de manera óptima y que el diseño general del foro sea responsivo, proporcionando una experiencia agradable en diferentes dispositivos.

Patra ello se utiliza tecnologías de programación web, como Node.js, EJS, MySQL y Sequelize. 

![Express Nodejs](https://miro.medium.com/v2/resize:fit:1400/1*f7ztMaMM0etsFHpEfkdiwA.png)

## Instrucciones para la ejecución
1. Crear la base de datos "forodb". En ella crear la siguiente tabla:
CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `detalle` text NOT NULL,
  `url_imagen` varchar(255) NOT NULL,
  `fecha_publicacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

2. Para poner en marcha este proyecto web, es necesario tener instaladas las siguientes dependencias:

- **cors**: Utilizado para habilitar el acceso a recursos de otros dominios, lo que es esencial para la comunicación entre distintos servicios en la web.

- **dotenv**: Usado para cargar variables de entorno desde un archivo `.env`, lo que proporciona una forma segura de gestionar configuraciones sensibles.

- **ejs**: Una vista de motor de plantillas que facilita la generación dinámica de contenido HTML en ésta aplicación web.

- **express**: El framework de servidor web Node.js que simplifica la creación de aplicaciones web y proporciona manejo de rutas y middleware.

- **morgan**: Un middleware de registro de solicitudes HTTP para el seguimiento y la depuración de solicitudes en el servidor.

- **mysql2**: Controlador MySQL para Node.js que permite conectarnos y realizar las operaciones en la base de datos MySQL.

- **sequelize**: ORM para la interacción con la base de datos SQL, facilita la definición de modelos y consultas SQL en JavaScript.

Estas dependencias son esenciales para construir y ejecutar este proyecto web de manera efectiva.


3. Configurar el archivo .env con los siguientes datos
PORT=4000
HOST_DB=localhost
DIALECT_DB=mysql
USER_DB=root
PASS_DB=''
NAME_DB=forodb
PORT_DB=3307  # Cambia el puerto de 3306 a 3307. Esto aplica en mi entorno ya que mi mysql apunta al puerto 3307

4. Ejecutar en la consola: node app.js

5. Acceder al navegador: http://localhost:4000


