function showMenu() {
    var x = document.getElementById("myNav");
    if (menuOpen === false) {
        x.classList.add("responsive");
        menuOpen = true;
    } else {
        x.classList.remove("responsive");
        menuOpen = false;
    }
}
var navIcon = document.getElementsByClassName("icon")[0]
var menuOpen = false;
navIcon.addEventListener("click", showMenu)
