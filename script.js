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

// cards

const cardsUl = document.getElementById('cardsul');
const projects = [
    {
        id: 1,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    },

    {
        id: 2,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    },

    {
        id: 3,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    },

    {
        id: 4,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    },

    {
        id: 5,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    },

    {
        id: 6,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    },


]

 const projectsCards = projects.map((card) => `
 <li>
         <div class="project">
          <div class="container">
            <h2>${card.name}</h2>
            <ul>
${card.languages}
            </ul>
            <button class="grow">See Project</button>
          </div>
        </div>
</li>

 `).join('');

 cardsUl.innerHTML += projectsCards;
 console.log(1234567);















//contact form validation//

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








