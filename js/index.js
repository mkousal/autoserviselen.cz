/* Autor: Tomáš Musil - Autoservis Elen Černovice*/


/* Navbar - Autoservis Elen Černovice */


const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active");
});




/* Experience Cards - Autoservis Elen Černovice */

const showNumber = () => { };

const DURATION = 2000;

function doAnimation(duration, callback) {
    const start = Date.now();

    const tCallback = () => {
        callback((Date.now() - start) / DURATION);

        if (Date.now() - start >= duration) {
            return;
        }
        requestAnimationFrame(tCallback);
    };

    requestAnimationFrame(tCallback);
}

const observer = new IntersectionObserver((evts) => {
    for (const ev of evts) {
        if (ev.isIntersecting) {
            const target = ev.target;
            const attr = target.getAttribute("data-count");
            if (!attr) continue;

            const num = Number(attr);
            let counter = 0;

            const MAX_PRE = 20;
            const MAX_POST = 80;

            doAnimation(DURATION, (percentage) => {
                const postValue =
                    Math.pow(((attr * percentage) / attr) * MAX_PRE, 3) / 100;
                const conv = (postValue / MAX_POST) * attr;
                target.textContent = Math.floor(conv);
            });

            observer.unobserve(target);
        }
    }
});
document.querySelectorAll(".cislo").forEach((el) => observer.observe(el));



/* Aktualizace spodního datumu - Autoservis Elen Černovice */

const date = document.getElementById("datum")

const datum = new Date().getFullYear()

date.innerHTML = `© Autoservis Elen - Černovice ${datum}. Všechna Práva Vyhrazena`

/* © Autoservis Elen - Černovice 2025. Všechna Práva Vyhrazena */