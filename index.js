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
  technology: ['css', 'html', 'bootstrap', 'Ruby'],
  image: 'image/tenyears.png',
  seelive: 'https://santosh-konappanavar.github.io/PortFolio/',
  seeSource: 'https://github.com/Santosh-Konappanavar/PortFolio',
};

const storeData = [
  {
    title: 'Data Dashboard Healthcare',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Website.png',
    sn: 0,
    seelive: 'https://santosh-konappanavar.github.io/PortFolio/',
    seeSource: 'https://github.com/Santosh-Konappanavar/PortFolio',
  },
  {
    title: 'Website Protfolio ',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Calculator.png',
    sn: 1,
    seelive: 'https://santosh-konappanavar.github.io/PortFolio/',
    seeSource: 'https://github.com/Santosh-Konappanavar/PortFolio',
  },
  {
    title: 'Profesional Art Printing Data',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/View.png',
    sn: 2,
    seelive: 'https://santosh-konappanavar.github.io/PortFolio/',
    seeSource: 'https://github.com/Santosh-Konappanavar/PortFolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Website.png',
    sn: 3,
    seelive: 'https://santosh-konappanavar.github.io/PortFolio/',
    seeSource: 'https://github.com/Santosh-Konappanavar/PortFolio',
  },
  {
    title: 'Website Protfolio',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Calculator.png',
    sn: 4,
    seelive: 'https://santosh-konappanavar.github.io/PortFolio/',
    seeSource: 'https://github.com/Santosh-Konappanavar/PortFolio',
  },
  {
    title: 'Profesional Art Printing Data',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/View.png',
    sn: 5,
    seelive: 'https://santosh-konappanavar.github.io/PortFolio/',
    seeSource: 'https://github.com/Santosh-Konappanavar/PortFolio',
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