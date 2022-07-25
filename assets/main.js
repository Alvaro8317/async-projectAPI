containerImageDog = null || document.querySelector("#container-images");
buttonRequest = document.querySelector(".searchApi .button button");
const URLAPIDOG = "https://api.thedogapi.com/v1/images/search";
buttonRequest.addEventListener("click", function(){showDoggyAwait(URLAPIDOG)});
const img = document.querySelector("img");
// /* Función hecha con promesas */
// function showDoggy(URL) {
//   fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//       img.src = data[0].url;
//       img.alt = data[0].id;
//     });
// }


/* Función hecha con async - await */
async function asyncData(URL){
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const showDoggyAwait = async(URL) => {
    try{
        const data = await asyncData(URL);
        img.src = data[0].url;
        img.alt = data[0].id;
    }
    catch (error){
        console.log(error);
    }
}