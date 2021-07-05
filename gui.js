var txtArea = document.querySelector("#txtArea")
var button = document.querySelector("#btnClick")
var output = document.querySelector("#output")



var url="https://api.funtranslations.com/translate/yoda.json"
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructURL(text) {
    return url + "?text=" + text

}



button.addEventListener("click", function () {
    var inputTxt=txtArea.value
    // output.innerText = txtArea.value
    fetch(constructURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        output.innerText=translatedText;

    })



})