/* Navbar - Autoservis Elen Černovice */


const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active");
});

/* AutoUpdate Datum - Autoservis Elen Černovice */


const date = document.getElementById("datum");

datum = new Date().getFullYear()

date.innerHTML = `© Autoservis Elen - Černovice ${datum} . Všechna Práva Vyhrazena`