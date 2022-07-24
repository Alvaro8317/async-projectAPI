containerImageDog = null || document.querySelector("#container-images");
buttonRequest = document.querySelector(".searchApi .button button");
const URLAPIDOG = "https://api.thedogapi.com/v1/images/search";
buttonRequest.addEventListener("click", function(){showDoggy(URLAPIDOG)});

function showDoggy(URL) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data[0].url;
      img.alt = data[0].id;
    });
}
