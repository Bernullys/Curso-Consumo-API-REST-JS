const API = "https://api.thedogapi.com/v1/images/search";

let imagenDog;

const refreshButton = document.getElementById("refreshImage");
const anotherImage = document.querySelector(".imagen");


fetch(API)
    .then(response => response.json())
    .then(data => {
        imagenDog = document.querySelector(".imagen");
        imagenDog.src = data[0].url;
    });

refreshButton.onclick = fetch;








