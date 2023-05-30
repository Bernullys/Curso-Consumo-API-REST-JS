const API = "https://api.thedogapi.com/v1/images/search";

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

const dogFunction = async (urlApi) => {
    try {

        const img = await fetchData(API);
        img.src = data[0].url;
    } catch (Error) {
        throw new Error("Algo esta mal");
    };
};

dogFunction(API);

// const refreshButton = document.querySelector(".refresh-button");
// refreshButton.addEventListener("click", aaaa);



