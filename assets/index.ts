const API_KEY = "sk-iGNw65c1a13750a7d4027";

function search() {
  fetch(`https://perenual.com/api/species-list?key=${API_KEY}&indoor=1`)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

search();
