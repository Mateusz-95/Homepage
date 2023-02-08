{
    const welcome = () => {
        console.log("Cześć!");
    }

    const onChangeBackgroundClick = () => {
        body.classList.toggle("darkTheme");
        body.classList.contains("darkTheme")
            ? themeName.innerText = ("jasny")
            : themeName.innerText = ("ciemny");
    }

    welcome();

    const button = document.querySelector(".js-changeBackgroundButton");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");


    button.addEventListener("click", onChangeBackgroundClick);


}