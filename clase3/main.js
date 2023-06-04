const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search?limit=2&x-api-key=live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc";
const API_URL_FAVOURITES = "https://api.thedogapi.com/v1/favorites?sub_id&x-api-key=live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc";


async function loadRandomDoggys () {
    try {
        const response = await fetch(API_URL_RANDOM);
        const statusRandom = response.status;
        if (statusRandom !== 200) {
            throw new Error(`Error en la peticion a Randoms ${statusRandom}`);
        }
        const data = await response.json();
        console.log(data);  

        const doggyPictures1 = document.querySelector(".imagen1");
        doggyPictures1.src = data[0].url;

        const doggyPictures2 = document.querySelector(".imagen2");
        doggyPictures2.src = data[1].url;

    } catch (error) {
        const errorNodo = document.getElementById("error-in-random");
        errorNodoRandom.innerHTML = `Error: ${error.message}`;
        throw new Error ("Catch de loadRandomsDoggys tomo un error-Este mensaje es para verlo en consola");
        
    };
};

async function loadFavouriteDoggys () {
    try {
        const response = await fetch(API_URL_FAVOURITES);
        const statusFavourites = response.status;
        if (statusFavourites !== 200) {
            throw new Error (`Error en la petición a Favorites: ${statusFavourites}`);
        }
        const data = await response.json();
    } catch (error) {
        const errorNodoFavourites = document.getElementById("error-in-favorites");
        errorNodoFavourites.innerHTML = `Error: ${error.message}`;
        throw new Error("Catch de loadFavouritesDoggys tomo un error-Este mensaje es para verlo en consola")
    };
};

async function saveFavouriteDoggys () {
    try {
        const response = await fetch(API_URL_FAVOURITES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image_id: "aIYnbVDoBJ"
            }),
        });

        console.log("Save")
        console.log(response)
    } catch (error) {
        throw new Error ("OH OH");
    }
}


loadRandomDoggys();
loadFavouriteDoggys();