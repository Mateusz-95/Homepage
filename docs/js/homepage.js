console.log("Cześć!");

let button = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
    body.classList.contains("darkTheme")
        ? themeName.innerText = ("jasny")
        : themeName.innerText = ("ciemny");


});

