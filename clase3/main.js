const API = "https://api.thedogapi.com/v1/images/search";


async function consumiendoApi (apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const doggyPictures = document.querySelector(".imagen");
        doggyPictures.src = data[0].url;
    } catch (error) {
        throw new Error ("There is a problem with the API");
    };
};

consumiendoApi(API);