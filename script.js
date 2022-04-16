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




////data storage///////////////////


function Save() {
    const collectedData = {
      name: Name.value,
      email: Email.value,
      comment: Comment.value,
    };
    localStorage.setItem('SavedData', JSON.stringify(collectedData));
  }
  
  if (localStorage.getItem('SavedData') === null) {
    const SavedData = { name: '', email: '', comment: '' };
    localStorage.setItem('SavedData', JSON.stringify(SavedData));
  } else {
    const Data = JSON.parse(localStorage.getItem('SavedData'));
    Email.value = Data.email;
    Name.value = Data.name;
    Comment.value = Data.comment;
  }
  
  