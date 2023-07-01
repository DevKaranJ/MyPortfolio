// Project popup menu //
const projects = [
    {
        id: 1,
        image: 'resources/Snapshoot Portfolio.svg',
        title: 'Multi-Post Stories Gain+Glory',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: 'https://devkaranj.github.io/MyPortfolio/',
        sourceCode: 'https://github.com/DevKaranJ/MyPortfolio',
      },
  {
    id: 2,
    image: 'resources/Snapshoot Portfolio.svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://devkaranj.github.io/MyPortfolio/',
    sourceCode: 'https://github.com/DevKaranJ/MyPortfolio',
  },
  {
    id: 3,
    image: 'resources/Snapshoot Portfolio.svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://devkaranj.github.io/MyPortfolio/',
    sourceCode: 'https://github.com/DevKaranJ/MyPortfolio',
  },
  {
    id: 4,
    image: 'resources/Snapshoot Portfolio.svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://devkaranj.github.io/MyPortfolio/',
    sourceCode: 'https://github.com/DevKaranJ/MyPortfolio',
  },
  {
    id: 5,
    image: 'resources/Snapshoot Portfolio.svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://devkaranj.github.io/MyPortfolio/',
    sourceCode: 'https://github.com/DevKaranJ/MyPortfolio',
  },
  {
    id: 6,
    image: 'resources/Snapshoot Portfolio.svg',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://devkaranj.github.io/MyPortfolio/',
    sourceCode: 'https://github.com/DevKaranJ/MyPortfolio',
}];

const cardContainer = document.querySelector('.modal-card-container');
const popup = document.querySelector('.propop');

// Function to generate card elements
const generateCardContainer = () => {
  const cardElements = projects.map((project) => {
    const techlist = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
    return `
      <article class="card-holder">
        <div class="card">
          <div class="empty-box"></div>
          <div class="Project-name">
            <h3>${project.title}</h3>
            <div class="programming-languages">
              <ul>${techlist}</ul>
            </div>
            <button data-project-id="${project.id}" class="green-button interaction-btn btns">Project Details</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  cardContainer.innerHTML = cardElements;
};

// Function to show popup
const showPopup = (id) => {
  const project = projects.find((proj) => proj.id === id);
  const techlist = project.technology.map((tech) => `<li>${tech}</li>`).join('');
  popup.innerHTML = `
    <article class="popup-card-holder">
      <div class="popup-card">
        <p class="popup-close">X</p>
        <button class="closeButton"><img src="images-3/closeBtn.svg"></button>
        <div class="popup-img-box">
          <img src="${project.image}" />
        </div>
        <div class="popup-body">
          <div class='popup-head'>
            <h3>${project.title}</h3>
            <div class='popup-links-desktop'>
              <a href="${project.liveLink}" class="green-button interaction-btn">See Live</a>
              <a href="${project.sourceCode}" class="green-button interaction-btn">See Source</a>
            </div>
          </div>
          <div class="popup-programming-languages">
            <ul>${techlist}</ul>
          </div>
          <p>${project.description}</p>
          <div class='popup-links-mobile'>
            <a href="${project.liveLink}" class="green-button interaction-btn">See Live</a>
            <a href="${project.sourceCode}" class="green-button interaction-btn">See Source</a>
          </div>
        </div>
      </div>
    </article>
  `;

  const closeBtn = document.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    hidePopup();
  });
};

// Function to hide popup
const hidePopup = () => {
  popup.innerHTML = '';
};

document.addEventListener('DOMContentLoaded', () => {
  generateCardContainer();

  document.querySelectorAll('.btns').forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = parseInt(btn.getAttribute('data-project-id'));
      showPopup(projectId);
    });
  });

  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('closeButton')) {
      hidePopup();
    }
  });
});

const projectsContainer = document.querySelector('#projects-container');

