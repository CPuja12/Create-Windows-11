let favicon = document.querySelector(".favicon");
let startmenu = document.querySelector(".startmenu");

favicon.addEventListener("click", () => {
    if (startmenu.style.bottom === "50px") {
        startmenu.style.bottom = "-650px";
    } else {
        startmenu.style.bottom = "50px";
    }
});
