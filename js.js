
document.getElementById("buton2").onclick = function () {
    window.location = "http://www.youtube.com";
};
document.getElementById("buton3").onclick = function () {
    window.location = "http://www.youtube.com";
};
let Sedan = document.getElementById("sedan");
let Suv = document.getElementById("suv");
var culoareSuv = getComputedStyle(Suv).backgroundColor;
const btn = document.getElementById("buton");
btn.addEventListener('click', function onClick(event){
    Sedan.style.backgroundColor = culoareSuv;
});
