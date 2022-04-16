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
                          description2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                          Architecto dicta iste maiores quas deserunt magnam ex, facere
                          excepturi aut repellat at omnis repudiandae atque dolores 
                          quia saepe,nostrum placeat sunt.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Numquam autem ipsam exercitationem corrupti quas pariatur
                          voluptas reprehenderit,!`,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
        seelive: `https://www.google.com`,
        seesource: `https://www.google.com`,
    },

    {
        id: 2,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
                          description2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                          Architecto dicta iste maiores quas deserunt magnam ex, facere
                          excepturi aut repellat at omnis repudiandae atque dolores 
                          quia saepe,nostrum placeat sunt.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Numquam autem ipsam exercitationem corrupti quas pariatur
                          voluptas reprehenderit,!`,

        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
        seelive: `https://www.google.com`,
        seesource: `https://www.google.com`,
    },

    {
        id: 3,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
        description2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Architecto dicta iste maiores quas deserunt magnam ex, facere
        excepturi aut repellat at omnis repudiandae atque dolores 
        quia saepe,nostrum placeat sunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Numquam autem ipsam exercitationem corrupti quas pariatur
        voluptas reprehenderit,!`,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
        seelive: `https://www.google.com`,
        seesource: `https://www.google.com`,
    },

    {
        id: 4,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
                          description2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                          Architecto dicta iste maiores quas deserunt magnam ex, facere
                          excepturi aut repellat at omnis repudiandae atque dolores 
                          quia saepe,nostrum placeat sunt.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Numquam autem ipsam exercitationem corrupti quas pariatur
                          voluptas reprehenderit,!`,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
        seelive: `https://www.google.com`,
        seesource: `https://www.google.com`,
    },

    {
        id: 5,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
                          description2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                          Architecto dicta iste maiores quas deserunt magnam ex, facere
                          excepturi aut repellat at omnis repudiandae atque dolores 
                          quia saepe,nostrum placeat sunt.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Numquam autem ipsam exercitationem corrupti quas pariatur
                          voluptas reprehenderit,!`,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
        seelive: `https://www.google.com`,
        seesource: `https://www.google.com`,
    },

    {
        id: 6,
        name: 'Multi-Post Stories <br> Gain+Glory',
        featureImage: './imagesSnapshot-port1.svg',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam suscipit reprehenderit corrupti possimus molestias totam,
                      animi facere dolor laboriosam laudantium minima necessitatibus.
                          Voluptatem sit aliquid sequi corrupti, quam numquam a. `,
                          description2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                          Architecto dicta iste maiores quas deserunt magnam ex, facere
                          excepturi aut repellat at omnis repudiandae atque dolores 
                          quia saepe,nostrum placeat sunt.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Numquam autem ipsam exercitationem corrupti quas pariatur
                          voluptas reprehenderit,!`,
        languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
        seelive: `https://www.google.com`,
        seesource: `https://www.google.com`,
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
            <button class="grow" onclick="showModal(${card.id})">See Project</button>
          </div>
        </div>
</li>

 `).join('');

 cardsUl.innerHTML += projectsCards;


 //Pop data 

 const popBox = document.getElementById('pop-box')
// Display popup 
 const modalContent = (card) => {
     const template = document.createElement('template')
     template.innerHTML = `
     <div class="font-styles1">

      
     <span class="close-x" onclick="hidePopup()">&times;</span>
     <div class="cont">
        <img class="pop-img1" src="./images/Snapshoot-port1.svg" alt="">
     </div>
     <h3 class="modal-pop1">${card.name}</h3>

     <ul class="modal-ul-list">
       <li class="mb">Ruby on rails</li>
       <li class="mb">CSS</li>
       <li class="mb">JavaScript</li>
       <li class="dk">Codekit</li>
       <li class="dk">GitHub</li>
       <li class="dk">Javascript</li>
       <li class="dk">Bootstrap</li>
       <li class="dk">Terminal</li>
       <li class="dk">Kodepen</li>
     </ul>

     <p class="prg-prg">${card.description2}</p>

       <ul class="m-botton-ul">
         <li><a href="${card.seelive}"><img src="images/seelive.svg" alt="seelive"></a></li>
         <li><a href="${card.seesource}"><img src="images/seesource.svg" alt="social-icons"></a></li>
       </ul>

     </div>
     `;

     popBox.appendChild(template.content);
     popBox.classList.add('class-modal')
 }

// checks which card is clicked














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








