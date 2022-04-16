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


////contact form validation

const Form = document.querySelector('.form');
const Email = document.getElementById('email');
const Name = document.getElementById('name');
const Comment = document.getElementById('comment');
const Msg = document.querySelector('.ErrorMessage');
const reg = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

