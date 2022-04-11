const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>  {
    hamburger.classList.toggle("active1");
    navMenu.classList.toggle("active1");
})

document.querySelectorAll(".nav-link").forEach (n => n.addEventListener("click", () => {
        hamburger.classList.remove("active1");
        navMenu.classList.remove("active1");
    }))

hamburger.addEventListener('click', navMenu);
document.querySelectorAll(".nav-link"), navMenu.classList.remove('active1');