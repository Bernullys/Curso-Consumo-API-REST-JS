const API = "https://api.thedogapi.com/v1/images/search";

let imagenDog;

const refreshButton = document.getElementById("refreshImage");
const anotherImage = document.querySelector(".imagen");


async function fetchData (urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

const refreshDog = async (urlApi) => {
    try {
        imagenDog = document.querySelector(".imagen");
        imagenDog.src = await fetchData(data[0].url);
    } catch (error) {
        throw new Error("Sonthing is wrong");
    }
}

refreshButton.onclick = refreshDog;








