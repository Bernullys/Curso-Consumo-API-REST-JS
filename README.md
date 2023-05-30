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

Repositorios gratis en github: publicapis
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
    Retos: 
        Crear un boton que refresque las imagenes.
        Utilizar la funcion async y await.

