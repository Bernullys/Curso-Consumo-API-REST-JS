const instanceApi = axios.create({
    baseURL: "https://api.thedogapi.com/v1",
});
instanceApi.defaults.headers.common["X-API-KEY"] = "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc";

const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search?limit=2";
const API_URL_FAVOURITES = "https://api.thedogapi.com/v1/favourites";
const API_URL_FAVOURITES_DELETE = (id) => `https://api.thedogapi.com/v1/favourites/${id}?api_key=live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc`;
const API_URL_UPLOAD = "https://api.thedogapi.com/v1/images/upload";

async function loadRandomDoggys () {
    try {
        const response = await fetch(API_URL_RANDOM);
        const statusRandom = response.status;
        if (statusRandom !== 200) {
            throw new Error(`Error en la peticion a Randoms ${statusRandom}`);
        };
        const data = await response.json();
        console.log("loadRandomDoggys");
        console.log(data);  

        const doggyPictures1 = document.querySelector(".imagen1");
        doggyPictures1.src = data[0].url;

        const doggyPictures2 = document.querySelector(".imagen2");
        doggyPictures2.src = data[1].url;

        const buttonSaveRandomtoFavourites1 = document.getElementById("save-btn1");
        const buttonSaveRandomtoFavourites2 = document.getElementById("save-btn2");
        buttonSaveRandomtoFavourites1.onclick = () => saveFavouriteDoggy(data[0].id);
        buttonSaveRandomtoFavourites2.onclick = () => saveFavouriteDoggy(data[1].id);


    } catch (error) {
        const errorNodo = document.getElementById("error-in-random");
        errorNodoRandom.innerHTML = `Error: ${error.message}`;
        throw new Error ("Catch de loadRandomsDoggys tomo un error-Este mensaje es para verlo en consola");
    };
};

async function loadFavouriteDoggy () {
    try {
        const response = await fetch(API_URL_FAVOURITES, {
            method: "GET",
            headers: {
                "X-API-KEY": "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc",
            },
        });
        const statusLoadFavourites = response.status;
        if (statusLoadFavourites !== 200) {
            throw new Error (`Error en la petición a Favorites: ${statusLoadFavourites}`);
        }
        const data = await response.json();
        console.log("Favoritos");
        console.log(data);

        const section = document.getElementById("favoriteDogs");
        section.innerHTML = "";
        const h2 = document.createElement("h2");
        const h2Text = document.createTextNode("Doggys Favoritos");
        h2.appendChild(h2Text);
        section.appendChild(h2);

        data.forEach(doggy => {
            const article = document.createElement("article");
            const img = document.createElement("img");
            const button = document.createElement("button");
            const buttonText = document.createTextNode("Sacar foto de favoritos");
            
            img.src = doggy.image.url
            img.width = 150;
            button.appendChild(buttonText);
            button.onclick = () => deleteFavouriteDoggy(doggy.id);
            article.appendChild(img);
            article.appendChild(button);
            section.appendChild(article);
        });
    } catch (error) {
        const errorNodoFavourites = document.getElementById("error-in-favorites");
        errorNodoFavourites.innerHTML = `Error: ${error.message}`;
        throw new Error("Catch de loadFavouritesDoggys tomo un error-Este mensaje es para verlo en consola");
    };
};

async function saveFavouriteDoggy (id) {
    try {
        const { data, status} = await instanceApi.post("/favourites", {
            image_id: id,
        });
    // try {
    //     const response = await fetch(API_URL_FAVOURITES, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-API-KEY": "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc",
    //         },
    //         body: JSON.stringify({
    //             image_id: `${id}`,
    //         }),
    //     });

        // const statusSaveFavourites = response.status;
        // if (statusSaveFavourites !== 200) {
        //     throw new Error (`Error guardando el Favorito ${statusSaveFavourites}`)
        // };

    //    const data = await response.json();
    
        console.log("Save");
        // console.log(response);
        console.log("Doggy guardado en favoritos");

    } catch (error) {
        const errorNodeSaved = document.getElementById("error-in-saving");
        errorNodeSaved.innerHTML = `Error: ${error.message}`;
        throw new Error ("Catch saveFavouriteDoggy error");
    };
    loadFavouriteDoggy ();
};

async function deleteFavouriteDoggy (id) {

    try {
        const response = await fetch(API_URL_FAVOURITES_DELETE(id), {
            method: "DELETE",
            headers: {
                "X-API-KEY": "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc",
            }
        });
        const statusDeleteFavourites = response.status;
        if (statusDeleteFavourites !== 200) {
            throw new Error (`Error eliminando de Favoritos ${statusDeleteFavourites}`)
        };

        const data = await response.text();
        console.log("Delete");
        console.log(response);
        console.log("Doggy eliminado de favoritos");

    } catch (error) {
        const errorNodeDeleted = document.getElementById("error-deleting");
        errorNodeDeleted.innerHTML = `Error: ${error.message}`;
        throw new Error ("Catch deleteDoggy error");
    };

    loadFavouriteDoggy ();
};

async function uploadDoggyPhoto() {
    const form = document.getElementById("uploadingForm");
    const formData = new FormData(form);

    console.log(formData.get("file"));

    const response = await fetch(API_URL_UPLOAD, {
        method: "POST",
        headers: {
            // "Content Type": "multipart/form-data",
            "X-API-KEY": "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc",
        },
        body: formData,
    });

    const data = await response.json();
    console.log("Foto cargada a la api");
    saveFavouriteDoggy(data.id);
}

loadRandomDoggys();
loadFavouriteDoggy();