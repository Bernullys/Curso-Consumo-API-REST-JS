const API = "https://api.thedogapi.com/v1/images/search?limit=4";

async function consumiendoApi () {
    try {
        const response = await fetch(API);
        const data = await response.json();
        const doggyPictures = document.querySelector(".imagen");
        doggyPictures.src = data[0].url;

        const doggyPictures1 = document.querySelector(".imagen1");
        doggyPictures1.src = data[1].url;

        const doggyPictures2 = document.querySelector(".imagen2");
        doggyPictures2.src = data[2].url;

        const doggyPictures3 = document.querySelector(".imagen3");
        doggyPictures3.src = data[3].url;

        const doggyPictures4 = document.querySelector(".imagen4");
        doggyPictures4.src = data[4].url;

    } catch (error) {
        throw new Error ("There is a problem with the API");
    };
};

consumiendoApi();