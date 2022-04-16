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
  
  Email.addEventListener('change', () => {
    Save();
  });
  Name.addEventListener('change', () => {
    Save();
  });
  Comment.addEventListener('change', () => {
    Save();
  }); 

////contact form validation

const Form = document.querySelector('.form');
const Email = document.getElementById('email');
const Name = document.getElementById('name');
const Comment = document.getElementById('comment');
const Msg = document.querySelector('.ErrorMessage');
const reg = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

Form.addEventListener('submit', (e) => {
    if (!reg.test(Email.value)) {
      Email.classList.add('invalid-email');
      Msg.innerHTML = `Error: Email must be lowercase, <br> example: ${Email.value.toLowerCase()}`;
      e.preventDefault();
    }
  });
