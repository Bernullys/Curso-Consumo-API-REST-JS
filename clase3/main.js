const API = "https://api.thedogapi.com/v1/images/search";

async function consumiendoApi () {
    try {
        const response = await fetch(API);
        const data = await response.json();
        const doggyPictures = document.querySelector(".imagen");
        doggyPictures.src = data[0].url;
    } catch (error) {
        throw new Error ("There is a problem with the API");
    };
};

consumiendoApi();