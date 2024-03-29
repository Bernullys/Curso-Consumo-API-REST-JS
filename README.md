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

Repositorios con apis gratis en github: publicapis (la tengo con estrella para seguirla).
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

Clase 5: QUe son los HTTP Status Codes? Es la forma en que el backend nos avisa de como le fue a nuestra solicitud.
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

    Application-based authentication (Esto es lo que vamos a hacer en este curso) Solo con una api key
    User-based authentication (esto es mas profundo)

    Ahora que añadimos la api key, el backend empezara a dejar registro de cuanto la hemos utilizado y quien la esta utilizando. Y ahora si se pueden utilizar los "verbos" con la api... son otras caracteristicas que se pueden utilizar que vamos a ver de aqui en adelante.

Clase 7: Maquetación del proyecto. Preparar todo el html para las proximas clases utilizar bien la api.


Clase 8: Que son los Métodos HTTP? Son las formas en que el frontend le dice que esta pasando al backend.
    Los mas utilizados son:
        GET             por defecto para consumir info
        POST            para crear info
        PUT     
        PUT y PATCH     para editar informacion que ya hayamos creado, toda o parte.
        DELETE          borrar info


Clase 9: GET: leyendo perritos favoritos.
    Ajustamos el nombre de la funcion ya para avanzar en el proyecto, con un nombre mas descriptivo.
    Para añadir fotos a la seccion de favoritos, se recomienda crear otra funcion. (loadFavouriteDoggys).
    En la documentacion dice que Favourites requiere api key. Ver la documentacion para ver los endpoints para cargar favoritos (es otra url que debemos usar en nuestra nueva funcion).
    El endpoint para get favorites es: /favourites (pero la tuve que poner como el profe en la clase: api_key y no como en la documentación)
    Se cambia solo el endpoint, lo que va despues en el url queda igual.
    Se crea una nueva const con esta url para la nueva funcion. (Ahora me da estado 401 porque no se ha agregado ninguna foto a favoritos).
    En este punto tambien se puede observar que si se saca la api key no dejara utilizar los favoritos.
    Otra forma de utilizar las url's con diferentes endpoints es haciendo const para la base y para los diferentes endpoints y despues llamarlos utilizando template strings.
    
    Termine de hacer la clase guiandome de lo que vi en los comentarios para mostrar los errores utilizando try y catch y tambien un poco de mi propio estilo.

    Aparte: si se hace console.log(data) puedo ver el objeto y cuales son sus propiedades. Ademas es bueno colocar un console.log(nombre de la funcion para entenderlo mas claro en consola).

    OJO: Todavia no he puesto a funcionar la funcion de cargar a favoritos pero por lo que veo el si... pero no ha dicho como. (Despues de ver y volver varias veces vi como --- tenia que agregar una imagen_id de una de las imagenes que se habian cargado. Pero carga solo esa con el boton... creo que despues se acomodara.)

Clase 10: POST: guardando los perritos favoritos.
    Ahora se va a hacer la funcion para guardar las imagenes favoritas.
    Necesitamos la url del endpoint de la api a donde tenemos que enviar esta información.
    El endpoint es el mismo (por eso se utiliza la misma url) pero el post se hace diferente. Porque cuando llamamos a fetch y no queremos utilizarla por defecto (que seria el GET). Tenemos que enviarle un objeto que tenga toda la info que tengamos que enviarle a la api.
    Se agrega el objeto como segundo parametro de la funcion para guardar. Y en el html hay que llamarla con un boton. En este caso se hace con onclick="nombreDeLaFuncion".
        El objeto del segundo argumento:
            body hay que especificarle un string porque ese body que esta en el backend no sabemos en que lenguaje esta entonces para estar seguro de que entienda hay que hacerlo con la funcion JSON.stringify es para que lea como un documento de texto. Y dentro de esa funcion se envia el objeto.
        Queda pendiente la explicación de los elementos del objeto del segundo argumento.


Clase 11: Consultas a la API para escribir HTML dinámico.
    Lo que se va a hacer es manipular el DOM pero dependiendo de la informacion que nos de la api.
    Como los elementos de la imagen es un array se recorre con data.forEach
    Se va a crear toda la estructura en el js para ver la imagen favorita:

            <section>
            <article>
            <img width=250px class="imagen1" alt="Foto de un perrito aleatorio">
            <button>Sacar foto en favoritos</button>
            </article>
            </section>

    Despues de escrito el codigo en js: (Repasar bien esta parte para el Dominio del DOM).

            const article = document.createElement("article");
            const img = document.createElement("img");
            const button = document.createElement("button");
            const buttonText = documente.createTextNode("Sacar foto en favoritos");
    
    Ahora hay que empezar a devolvernos(como se hizo en el curso practico de frontend developer):

    Ahora nos damos cuenta de que se guardaba solo la imagen que le habiamos puesto el id harcodiado.
    Para areglar eso:
        Primero borramos el atributo onclick de los botones de Guardar foto en favoritos que teniamos llamando la funcion.
        Tenemos que cargar los botones al js.
        Despues agregarle la funcion .onclick que llame a la funcion saveFavouriteDoggy con el parametro data.id. Peroooooooooo haciendolo asi las funciones se estan llamando inmediatamente cuando se carga la pagina por lo que de debe meter esa funcion dentro de otra funcion. Y se hizo con arrow function.


Clase 12: Delete: borrando doggys favoritos.
    Primero tenemos terminar de hacer los ajustes cuando se agreguen y no tengamos que refrescar la pagina.
    Lo que se hace es llamar a la funcion loadFavouriteDoggy inmediatamente despues se haya guardado. Peeeeeeeroooooooo antes hay que hacer un ajuste en la funcion de loadFavouriteDoggy: tenemos que limpiar todos los articulos. Pero hay un titulo que se borraria tambien, entonces habria que crearlo despues de limpiar todo (esto se hace antes del data.forEach). Tambien hay que llamar la seccion que estaba en el data.forEach antes para que no se borre.

    Ahora vamos a hacer la funcion para borrar. Buscar en la documentacion el endPoint.
    Añadir una funcion para hacer delete.
    En la url tenemos que añadir el id de la imagen que se quiere eliminar. Para eso en la const que guardamos la url se agrega un arrow function y se utilizan template literals, para agregar el id dinamicamente.
    La documentacion no pide nada especial para el objeto, por eso que queda solo el method : "DELETE".
    Ahora hay que llamar la funcion para delete. Hay que llamarla en el data.forEach cuando se cargan los doggys favoritos, donde creamos el boton que dice: Sacar foto de favoritos, ponerle la funcionalidad onclick que llame la funcion. Se hace con un arrow function con el id como argumento.
    Me encontre con un error que ya le habia pasado a alguien y dejo la respuesta en los comentarios de preguntas:
        El problema en consola que termina con “…is not valid JSON” probablemente sea al intentar convertir la respuesta del servidor en un objeto de JS utilizando el metodo .json(), por alguna razon el servidor no esta respondiendo con objetos JSON cuando se hacen peticiones con errores (y por ende devolviendo estados 4xx). La solucion que encontre es en lugar de utilizar el metodo .json() utiliza el metodo .text() para convertir la respuesta del servidor solo cuando ocurra un error. Ejemplo:

                                        asyncfunctiondeleteFavoriteMichi(id){
                                    const res = await fetch(API_URL_DELETE_FAVORITE(id), {
                                        method: 'DElETE',
                                        headers: {
                                            "x-api-key": api_key
                                        }
                                    })

                                //cuando el estado de la peticion es distinto de 200 utilizo .text(), en caso contrario utilizo .json()
                                    if(res.status !==200){
                                        const error = await res.text()
                                        spanError.innerHTML = "ocurrio un error: " + error
                                    }else{
                                        const data = await res.json();
                                        console.log('delete', data)
                                        loadFavoritesMichis()
                                    }
                                }
    Ademas, viendo los comentarios arregle otro detalle que tenia en el objeto del POST. Cambie image_id: id por image_id: `${id}`
    

Clase 13: ¿Que son los Headers HTTP? Los headers son caracteristicas que se agregan para que el backend pueda entender la peticion que estamos haciendo (es codigo interno). Se utilizan para indicar como se debe entregar la informacion. Link para saber que son los headers: https://apipheny.io/api-headers/
Tipos de Headers HTTP:
    Content Type
    Authorization
    Cookies
    Location
    Etc.


Clase 14: Header de autorizacion.
    Recordando la clase 6, se habia dicho de que para enviar las key al backend teniamos:
        Query parameter: ?api_key=sdfdwdfdsewfgfe. (ya lo vimos).
        Authorization Header: X-API-Key: ABC123 (lo vamos a ver).
    La diferencia es que ya no habria que escribir la clave en la url, sino que se agregara en el headers.
    Se hizo como aparece en el js. Ojo: Tuve que ponerla en la funcion de save tambien porque estaba utilizando la misma const url.
    Lo hicimos tambien para el delete.

    Ojo: Quitar la key del link esta bien pero como seguridad da lo mismo porque cualquiera puede ver el headers con la api key. Para eso hay cursos de seguridad como el de OAuth 2.0.


Clase 15: Header de Content-Type.
    Este header es para que el frontend y el backend sepan en que idioma se estan hablando. Hay que saber que tipo de content type se esta usando en el backend para colocarlo en el frontend.
    Hay muchos tipos de content type.
        Application:
            application/json
            application/xml
            application/zip
            application/x-www-forum-urlencoded    ---este es muy usado.
    
    Ademas, tambien se pueden enviar otros tipos de archivo como audio, imagenes, excel, multipart, entre otros.

        Audio:
            audio/mpeg
            audio/x-ms-wma
            audio/vnd.rn-realaudio
            audio/x-wav
        
        Multipart:
            multipart/mixed
            multipart/alternative
            multipart/related
            multipart/form-data

        Text:
            text/css
            text/csv
            text/html
            text/plain
            text/xml

Clase 16: FormData: publicando imagenes de doggys.
    Ojo: ver diferencia entre los content types y los mime type.
    Sabiendo esa diferencia se va a utilizar FormData.

    Vamos a utilizar una instancia del prototipo FormData que ya viene en los navegadores. Vamos a agarrar los valores que hayan ingresado los usuarios desde un input o lo que sea del html.

    Necesitamos agregar un formulario.
    Un formulario por defecto trae un atributo action="" para colocar un link o url en donde se enviaria la informacion del formulario. Eso se lo quitamos y le ponemos un selector id.
    Necesitamos colocar un input dentro del formulario, con un id="file" y tambien es super importante colocarle un type="file" y un name="file" (eso lo pide la documentacion de la api), el name es para que FormData sepa cual es el archivo que esta guardando, porque lo guarda como un objeto con su valor.
    Ya tenemos el input, ahora falta un boton para enviar el formulario. Tenemos que asignarle que sea type="button" para que envie el valor. Ademas al boton se le coloca el atributo onclick="" llamando la funcion que va a subir la foto con ayuda del FormData.
    Ahora se crea la funcion que subira la foto.
    Se crean instancias del prototipo FormData que ya viene en JS. (Es una clase que se utiliza en los form y tiene varios metodos como set y get).
    Se llama desde el js al form que esta en el html.
    La instancia la llamamos formData. Perooo hay que colocarle el argumento form que estamos llamando del html. Asi agarrara todos los valores que ingresamos en los inputs y los va a agregar a FormData.
    Hayyyy que ver en la documentacion cual es la url para subir archivos. Despues de agarrar todo con el FormData hay que traer la info de la api.
    Se agrega el post pero esta vez no se necesita el content type (porque el FormData lo hace automaticamente, ademas el servidor no lo soportaba) y tampoco stringify el body (esto porque estamos utilizando el FormData, se coloca en el body: el formulario).
    Al final se llamo la funcion de guardar en favoritos con el id de la foto que estamos subiendo para poder verla de una vez entre las favoritas.


Clase 17: Axios: libreria de JavaScript para consumir APIs.
    Existen herramientas que existen para utilizar fetch en entornos donde no se soporta fetch. Axios es una de las mejores.
    Algunas son:
        Axios
        Trae.js
        node-fetch
        request
    Ojo: cuando node soporte fetch estas herramientas ya no serian necesarias. OJOOOO parece que ya se puedeeeee.

    Hay un repositorio de Axios y su pagina para explicarlo. En resumen hace varias cosas de una sola vez, con menos codigo y mas simple.
    En el codigo  vamos a cambiar una de las funciones con axios. Para enlazarlo se puede descargar o tambien enlazar con una etiqueta sript(es lo que vamos a hacer).
    Hay que crear una instancia de Axios. (ver las primeras lineas).
    Vamos a cambiar la funcion save.
    No me funciona. Me dice que axios is not defined. En la clase aparecen los archivos del profe --- para probar.


Clase 18: CORS, caché, redirect y tu propio clon de fetch.
    Otras propiedades de fetch:
        Mode: (tenemos que saber como esta en el backend)
            cors
            no-cors         (por defecto)
            same.origin
        
            Nosotros tambien podemos decirle a fetch con quien queremos intercambiar informacion.

        Caché: (capacidad de recordar la info que ya hemos traido anteriormente).
            default
            no-store
            reload
            no-cache
            force-cache
            only-if-cached

        El backend tambien puede hacer su propio cache.
        Se puede especificar cuando queremos o no cache.
        Recomendacion: no utilizar.

        Redirect: (que hacer cuando nos encontremos con un status code de 300)
            follow
            error
            manual
        
    Reto: tu propio clon de fetch. Analizar el codigo de fetch. Esta en la descripcion de la clase.

    Fetch por dentro:
        new Request()
        new Headers()
        new Response()


Clase 19: GraphQL, Web Sockets y Web 3.0: el mundo mas alla de REST.
    sendBeacon
        No espera una respuesta del servidor.
        Es buena idea para analytics.
    
    GraphQL (simple en frontend, complejo en backend)
        Empowered clients.
        All requests on the same endpoint.
    
    Web Sockets
        Dejar el "Tunel abierto".
        Útil para aplicaciones real-time.
        Comunicacion instantanea.
    
    Web 3.0
        Dapps: aplicaciones descentralizadas.

        Aplicaciones Tradicionales:
            Cliente:
                JS
                React
                Angular
                View
            Lógica:
                Node
                Go
                Rubi
                Python
            Persistencia:
                AWS
                Google Platform
        
        Aplicaciones Descentralizadas:
            Cliente:
                Wjs
                etherjs
                whisper
            Logica:
                Solidity
            Persistencia:
                Op
                IPFS
                Polygon


    
    

    



    


