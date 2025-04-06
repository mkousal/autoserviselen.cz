/* Navbar - Autoservis Elen Šlapanice */


const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active");
});

/* AutoUpdate Datum - Autoservis Elen Šlapanice */


const date = document.getElementById("datum");

datum = new Date().getFullYear()

date.innerHTML = `© Autoservis Elen - Šlapanice ${datum} . Všechna Práva Vyhrazena`