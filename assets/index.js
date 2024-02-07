var API_KEY = "sk-iGNw65c1a13750a7d4027";
function search() {
    fetch("https://perenual.com/api/species-list?key=".concat(API_KEY))
        .then(function (response) { return response.text(); })
        .then(function (result) { return console.log(result); })
        .catch(function (error) { return console.log("error", error); });
}
