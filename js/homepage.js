{
    const welcome = () => {
        console.log("Cześć!");
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");

        body.classList.toggle("darkTheme");
        body.classList.contains("darkTheme")
            ? themeName.innerText = ("jasny")
            : themeName.innerText = ("ciemny");
    }

    const init = () => {
        welcome();

        const button = document.querySelector(".js-changeBackgroundButton");

        button.addEventListener("click", onChangeBackgroundClick);
    }

    init();
}