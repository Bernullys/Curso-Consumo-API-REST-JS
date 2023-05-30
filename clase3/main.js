const API = "https://api.thedogapi.com/v1/images/search";

// cuando cargamos una api, lo primero que tenemos que hacer es convertirla a algo que js pueda comprender.
// la convertimos a un json

fetch(API)
    .then(response => response.json())
    .then(data => { // recibiendo la estructura del json y lo podemos ver ordenada con json viewer y ver que necesitamos.
        const img = document.querySelector("img");
        img.src = data[0].url;
        // data[0].url // elemento 0 del array y atributo url  // hay que ponerle la url a la etiqueta imagen en el html.
    });

const refreshButton = docuent.querySelector(".refresh-button");
refreshButton.addEventListener("click", response);



