# Curso-Consumo-API-REST-JS
Curso para aprender bien como consumir apis.

JS lo utilizamos para programar el frontend de nuestras aplicaciones web. JS en el frontend tiene dos responsabilidades:
    - Interactuar con los usuarios.
    - Comunicarnos con el backend para que de respuestas a las preguntas de los usuarios.
    JS funciona como un puente.

Que es una API REST:
    API (application program interface). Se usa para comunicar internamente, como backend-backend-fontend-robots con robots.
    REST (representational state transfer).

    API REST son interfaces que comunican por medio de HTTP por medio de internet

Cuando un usuario ingresa en el navegador web una pagina, este navegador lo que hace es enviar la solicitud al backend (el servidor de la pagina que se esta buscando) y devuelve su informacion en HTML. ---> Todo esto se llama Server side rendering. Una vez traida la pagina, esta interactua con el usuario a traves de JS, en donde JS se comunica con la api de la pagina web, esta api se comunica con su base de datos y despues devuelve la info a JS para que JS se la envie de nuevo a la pagina web que esta viendo el usuario.

Clase 3: Consume tu primera API REST

Repositorios con apis gratis en github: publicapis
    En el README.md del repositorio aparecen las descripciones de las apis.
    Tomar en cuenta: 
        Auth:   Autenticacion. Por ahora que no requiera o que requiera apiKey porque OAuth es complejo.
        HTTPS:  Ok.
        CORS:   En el curso dara una clase de cors.
    Vamos a utilizar The Dog API: tiene Auth: apiKey, HTTPS: Yes, CORS: No.
    Dentro vemos el precio de las apis y sus caracteristicas.
    El link de inicio lo dan: https://api.thedogapi.com/v1/images/search
    Este va a ser el primer ejemplo, osea la api que vamos a consumir. Este link por dentro tiene un json que por dentro tiene una url que cambia y muestra otra imagen.
    Se pone a consumir la api con un html y un js. Utilizando funciones asincronas.(Ver archivos)
    Herramienta para ver las estructuras de las apis de manera ordenada: JSON Viewer (extension de chrome). Ahora cuando se recargue la pagina se vera de manera ordenada.
    Despues se hace dominio del DOM para enlazar los datos que queremos de la api al html. Y listo funciona.
    Retos: (ver los commits)
        Crear un boton que refresque las imagenes.
        Utilizar la funcion async y await.


Clase 4: Endpoints y query parameter: son una de las formas en que se pueden modificar los parametros que entrega la api. Esto si la api lo permite, para eso hay que leer la documentación de la api.

    Los Endpoints son rutas, por ejemplo: (sirven para hacer solicitudes por partes)
        api.com/breeds
        api.com/categories
        api.com/images
    Los Query parameters: (son informacion extra para especificar mucho mejor el contenido que queremos pedir a la api)
        /breeds?limit=5&page=2
        /category?search=fun
        /images/michi34?format=png
    Reto: implementar query parameters.
        Se escribe el query parameter pero tambien hay que hacer la modificacion en el html y agregar los documentos en el js.

Clase 5: QUe son los HTTP Status Codes?
    HTTP status codes:
        1XX Respuestas Afirmativas
        2XX Respuestas satisfactorias
        3XX Re-direcciones
        4XX Error del cliente
        5XX Error de servidor

Clase 6: Que es una Api key? Es una de las formas en la que el backend puede identificar quien esta haciendo cada solicitud. El backend tiene que saber quien hace las solicitudes para proteger la información, o limitar solicitudes.
    Autenticación: consiste en identificar quien es cada quien. Solo sabe quienes son los usuarios.
    Autorización: nos dice que permisos tiene cada quien. Revisa los permisos.

    Para enviar las api key al backend existen varias formas:
        Query parameter: ?api_key=sdfdwdfdsewfgfe (por ahora).
        Authorization Header: X-API-Key: ABC123 (forma mas comoda).

    Alternativas para que el backend identifique las solicitudes:
        Authorization: Basic
        Authorization: Bearer Token
        OAuth 2.0 (la mejor pero se debe estudiar)
        Access Key + Secret Key

    Application-based authentication (Esto es lo que vamos a hacer en este curso)
    User-based authentication

    Ahora que añadimos la api key, el backend empezara a dejar registro de cuanto la hemos utilizado y quien la esta utilizando. Y ahora si se pueden utilizar los "verbos" con la api... son otras caracteristicas que se pueden utilizar que vamos a ver de aqui en adelante.

Clase 7: Maquetación del proyecto. Preparar todo el html para las proximas clases utilizar bien la api.

