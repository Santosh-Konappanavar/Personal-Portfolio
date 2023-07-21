/* eslint-disable no-undef */
const Dropdown = document.querySelector('.nav_drop');
const mobilemenu = document.querySelector('.Mobile_Menu');

const dropdown = document.querySelector('.dropdown');
Dropdown.addEventListener('click', () => {
  Dropdown.classList.toggle('active');
  mobilemenu.classList.toggle('active');
  dropdown.classList.toggle('active');
});

document.querySelectorAll('.mobile_dropdown').forEach((i) => i.addEventListener('click', () => {
  Dropdown.classList.remove('active');
  mobilemenu.classList.remove('active');
  dropdown.classList.remove('active');
}));

// work section
const popup = document.getElementById('work-section');
const projectCard = {
  title: 'Multi-Post Stories',
  text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technology: ['css', 'html', 'bootstrap', 'JS'],
  image: 'image/portpolio.png',
  seelive: 'https://santosh-konappanavar.github.io/Personal-Portfolio/',
  seeSource: 'https://github.com/Santosh-Konappanavar/Personal-Portfolio',
};

const storeData = [
  {
    title: 'Conference Page',
    text: 'This is a conference page designed to showcase my experiences. The website is built using HTML and CSS. Also for code uniformity. Microverse linters have been incorporated into the code',
    technology: ['HTML', 'CSS', 'Javascript'],
    image: 'image/newspaper.png',
    sn: 0,
    seelive: 'https://santosh-konappanavar.github.io/capstone-project-Conference-page/',
    seeSource: 'https://github.com/Santosh-Konappanavar/capstone-project-Conference-page',
  },
  {
    title: 'Movie APP ',
    text: 'JavaScript project - API-based webapp, using webpack and ES6 features, notably modules.',
    technology: ['HTML', 'CSS', 'React.js'],
    image: 'image/movie.png',
    sn: 1,
    seelive: 'https://santosh-konappanavar.github.io/javascript_Capstone/',
    seeSource: 'https://github.com/Santosh-Konappanavar/javascript_Capstone',
  },
  {
    title: 'Math-Magicians App',
    text: '[Math-Magicians] is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    technology: ['html', 'CSS', 'React.js'],
    image: 'image/calculator.png',
    sn: 2,
    seelive: 'https://santosh-konappanavar.github.io/',
    seeSource: 'https://github.com/Santosh-Konappanavar/Math-Magicians',
  },
  {
    title: 'Book-Store App',
    text: 'Books Store is a webpage that works nearly like a library. You can easily add books and maintain a list, also you can remove it whenever not required a book.',
    technology: ['html', 'CSS', 'React.js'],
    image: 'image/bookstore.png',
    sn: 3,
    seelive: 'https://santosh-konappanavar.github.io/bookstoreUsing-react/',
    seeSource: 'https://github.com/Santosh-Konappanavar/bookstoreUsing-react',
  },
  {
    title: 'BudgetApp',
    text: ' Budget Management App is a web app that helps users categorize and manage their transactions for easy expense tracking. Stay organized and gain insights into your spending habits with this user-friendly tool.',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/budgetapp.png',
    sn: 4,
    seelive: 'https://budgetapp-jdfn.onrender.com/',
    seeSource: 'https://github.com/Santosh-Konappanavar/BudgetApp',
  },
  {
    title: 'Todo-List App',
    text: ' TODO LIST PROJECT was created using html, css, javascript and bundled with webpack.',
    technology: ['html', 'bootstrap', 'Ruby on Rail'],
    image: 'image/todo.png',
    sn: 5,
    seelive: 'https://santosh-konappanavar.github.io/TodoList/',
    seeSource: 'https://github.com/Santosh-Konappanavar/TodoList',
  },
];

// Loading the First cards dynamically
const Project = document.createElement('div');
Project.id = 'project';
Project.innerHTML = `<img id="placeholder" src="image/Img Placeholder.png" />
  <div class="project_container">
          <h2 id="projecttext">${projectCard.title}</h2>
          <p id="project_supporttext">${projectCard.text}
           </p>
          
          <ul id="project_language">
          ${projectCard.technology
    .map((iterate) => `<li class="languageitem">${iterate}</li>`)
    .join('')}
          </ul>
          <button class="projectbtn" type="button" >See Project</button>
        </div>
        </div>
  `;
popup.append(Project);

const projectBtn = document.querySelector('.projectbtn');
projectBtn.addEventListener('click', () => {
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  const popWindow = document.createElement('div');

  popWindow.className = 'popclass';

  popWindow.innerHTML = ` <h2 class ="popupHeader">${projectCard.title} </h2>
  <button id= "remove"> <img src="image/cancel-icon.png"/> </button>
  
  <ul  class = "popupLanguage">
  <li class="languageitem">html</li>
  <li class="languageitem">Bootstrap</li>
  
  <li class="languageitem">Ruby on the rails</li>
  </ul>
  <div class ="popuptextimagemenu">
  <img id="placeholder"  src="${projectCard.image}" />
  <div class ="popuptextbuttonmenu">
  <p class="popprojectsupporttext1">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
      </p>
      <div class="popButton">
      <button class=" img" type="button"><a href ="${projectCard.seelive}">See Live <img class = "popimg" src= "image/Icon.png"></a></button>
      <button class=" img" type="button"><a href ="${projectCard.seeSource}">See Source <img class = "popimg" src= "image/Vector.png"></a> </button>
      </div>
      </div>
      </div>
      `;
  backdrop.append(popWindow);
  popup.append(backdrop);

  const removeBtn = document.getElementById('remove');
  removeBtn.addEventListener('click', () => {
    popup.removeChild(backdrop);
  });
});

const container = document.createElement('div');
container.className = 'desktopitem';
storeData.forEach((item) => {
  const mobilecontent = document.createElement('div');

  mobilecontent.className = 'otherproject';

  mobilecontent.innerHTML = `
  <h2 class="otherprojectheading">${item.title}</h2>
  <p class="otherprojecttext">${item.text}
   </p>
  
  <ul id="project2language">
  ${item.technology
    .map((items) => `<li class="language2item">${items}</li>`)
    .join('')}
  </ul>
  
  <button class="seeproject2" type="button" id ="${
  item.sn
}">See Project</button>
  
  </div>
  </div>`;
  mobilecontent.style.backgroundImage = `url(${item.image})`;
  container.append(mobilecontent);

  popup.append(container);
});

//

//  Handiling Popup

function windowpopup(data) {
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  const popWindow = document.createElement('div');

  popWindow.className = 'popclass';

  popWindow.innerHTML = ` <h2 class ="popupHeader">${data.title} </h2>
    <button id= "remove"> <img src="image/cancel-icon.png"/> </button>
    
    <ul  class = "popupLanguage">
    <li class="languageitem">html</li>
    <li class="languageitem">Bootstrap</li>
   
    <li class="languageitem">Ruby on the rails</li>
  </ul>
  <div class ="popuptextimagemenu">
    <img id="placeholder" src="image/tenyears.png" />
    <div class ="popuptextbuttonmenu">
    <p class="popprojectsupporttext1">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
        </p>
        <div class="popButton">
        <button class=" img" type="button"><a href ="${projectCard.seelive}">See Live <img class = "popimg" src= "image/Icon.png"></a></button>
        <button class=" img" type="button"><a href ="${projectCard.seeSource}"> See Source <img class = "popimg" src= "image/Vector.png"></a> </button>
        </div>
        </div>
        </div>
        `;
  backdrop.append(popWindow);
  popup.append(backdrop);

  const removeBtn = document.getElementById('remove');
  removeBtn.addEventListener('click', () => {
    popup.removeChild(backdrop);
  });
}

storeData.forEach((j, k) => {
  document.getElementById(k).addEventListener('click', () => {
    windowpopup(j);
  });
});

// Email Validation
const contactform = document.getElementById('contact');
const emailValue = contactform.elements.email;
const errorMessage = document.querySelector('small');

contactform.addEventListener('submit', (e) => {
  const email = emailValue.value;
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    errorMessage.className = 'error';
  }
});