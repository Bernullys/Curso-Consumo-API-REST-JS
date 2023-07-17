const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search?limit=4";
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

        const doggyPictures3 = document.querySelector(".imagen3");
        doggyPictures3.src = data[2].url;

        const doggyPictures4 = document.querySelector(".imagen4");
        doggyPictures4.src = data[3].url;

        const buttonSaveRandomtoFavourites1 = document.getElementById("save-btn1");
        const buttonSaveRandomtoFavourites2 = document.getElementById("save-btn2");
        const buttonSaveRandomtoFavourites3 = document.getElementById("save-btn3");
        const buttonSaveRandomtoFavourites4 = document.getElementById("save-btn4");
        buttonSaveRandomtoFavourites1.onclick = () => saveFavouriteDoggy(data[0].id);
        buttonSaveRandomtoFavourites2.onclick = () => saveFavouriteDoggy(data[1].id);
        buttonSaveRandomtoFavourites3.onclick = () => saveFavouriteDoggy(data[2].id);
        buttonSaveRandomtoFavourites4.onclick = () => saveFavouriteDoggy(data[3].id);

    } catch (error) {
        const errorNodoRandom = document.getElementById("error-in-random");
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

        data.forEach(doggy => {
            const article = document.createElement("article");
            const img = document.createElement("img");
            const button = document.createElement("button");
            const buttonText = document.createTextNode("Delete from favorites");
            
            img.src = doggy.image.url
            img.width = 400;
            img.height = 400;
            button.appendChild(buttonText);
            button.onclick = () => deleteFavouriteDoggy(doggy.id);
            article.appendChild(img);
            article.appendChild(button);
            section.appendChild(article);
            section.style.display = "flex";
            section.style.flexWrap = "wrap";
            article.style.display = "flex";
            article.style.flexDirection = "column";
            button.style.height = "25px";
            button.style.backgroundColor = "#33FFE6";
            button.style.borderRadius = "8px";
        });
    } catch (error) {
        const errorNodoFavourites = document.getElementById("error-in-favorites");
        errorNodoFavourites.innerHTML = `Error: ${error.message}`;
        throw new Error("Catch de loadFavouritesDoggys tomo un error-Este mensaje es para verlo en consola");
    };
};

async function saveFavouriteDoggy (id) {
    try {
        const response = await fetch(API_URL_FAVOURITES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc",
            },
            body: JSON.stringify({
                image_id: `${id}`,
            }),
        });

        const statusSaveFavourites = response.status;
        if (statusSaveFavourites !== 200) {
            throw new Error (`Error guardando el Favorito ${statusSaveFavourites}`)
        };

       const data = await response.json();
    
        console.log("Save");
        console.log(response);
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
    saveOwnDoggy(data.id);
};

async function saveOwnDoggy (id) {
    try {
        const response = await fetch(API_URL_FAVOURITES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc",
            },
            body: JSON.stringify({
                image_id: `${id}`,
            }),
        });

        const statusSaveOwn = response.status;
        if (statusSaveOwn !== 200) {
            throw new Error (`Error guardando el propio ${statusSaveOwn}`)
        };

       const data = await response.json();
    
        console.log("SaveOwn");
        console.log(response);
        console.log("Doggy guardado en Own Pictures");

    } catch (error) {
        const errorNodeSaved = document.getElementById("error-in-saving-own");
        errorNodeSaved.innerHTML = `Error: ${error.message}`;
        throw new Error ("Catch saveOwnDoggy error");
    };
    loadOwnDoggy ();
};

async function loadOwnDoggy () {
    try {
        const response = await fetch(API_URL_FAVOURITES, {
            method: "GET",
            headers: {
                "X-API-KEY": "live_imFX3wCXMSiiT5grtBIzq2NKnjjOSqkAUFB02DRHoqYeCNuK65JgQgc2DsTNbDtc",
            },
        });
        const statusLoadOwn = response.status;
        if (statusLoadOwn !== 200) {
            throw new Error (`Error en la petición a OwnDoggys: ${statusLoadOwn}`);
        }
        const data = await response.json();
        console.log("Own");
        console.log(data);

        const section = document.getElementById("your-doggys");
        section.innerHTML = "";

        data.forEach(owndoggy => {
            const article = document.createElement("article");
            const img = document.createElement("img");
            const button = document.createElement("button");
            const buttonText = document.createTextNode("Delete from Own Pictures");
            
            img.src = owndoggy.image.url
            img.width = 400;
            img.height = 400;
            button.appendChild(buttonText);
            button.onclick = () => deleteFavouriteDoggy(owndoggy.id);
            article.appendChild(img);
            article.appendChild(button);
            section.appendChild(article);
            section.style.display = "flex";
            section.style.flexWrap = "wrap";
            article.style.display = "flex";
            article.style.flexDirection = "column";
            button.style.height = "25px";
            button.style.backgroundColor = "#33FFE6";
            button.style.borderRadius = "8px";
        });
    } catch (error) {
        const errorNodoOwn = document.getElementById("error-in-ownDoggy");
        errorNodoOwn.innerHTML = `Error: ${error.message}`;
        throw new Error("Catch de loadOwnDoggys tomo un error-Este mensaje es para verlo en consola");
    };
};



loadRandomDoggys();
loadFavouriteDoggy();

loadOwnDoggy();