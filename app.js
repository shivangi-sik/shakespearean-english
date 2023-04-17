var btnTrans= document.querySelector("#btn-trans");
var inputTxt= document.querySelector("#input");
var output= document.querySelector("#out");
var url="https://api.funtranslations.com/translate/shakespeare.json";
function translationalUrl(input){
   return url + "?" + "text=" +input;
}
function errorHandler(error){
   alert("something went wrong with the server! Please try again later");
}
function clickHandler(){
   var text=inputTxt.value;
   fetch(translationalUrl(text))
   .then(response=>response.json())
   .then(json=> {
var translatedText= json.contents.translated;
output.innerText= translatedText;
   })

.catch(errorHandler)
}
 btnTrans.addEventListener("click", clickHandler)