// Define un array de tecnologías con sus atributos
const technologies = [
    {
      id: 1,
      name: 'Vue JS',
      imageSrc: 'https://www.programaenlinea.net/wp-content/uploads/2021/08/vuejs-770x470.png',
      description: 'My strong!',
    },
    {
      id: 2,
      name: 'Node JS',
      imageSrc: 'https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png',
      description: 'Backend',
    },
    {
      id: 3,
      name: 'Javascript',
      imageSrc: 'https://programaenlinea.net/wp-content/uploads/2019/02/javascript-3.jpg',
      description: 'Backend',
    },
    {
      id: 4,
      name: 'React JS',
      imageSrc: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*x0d41ns8PTQZz4a3VbMrBg.png',
      description: 'Backend',
    },
    {
      id: 5,
      name: 'Github',
      imageSrc: 'https://marketing4ecommerce.net/wp-content/uploads/2018/06/GitHub-logo-2-imagen.jpg',
      description: 'Backend',
    },
    {
      id: 6,
      name: 'HTML, CSS, SASS',
      imageSrc: 'https://www.study365.co.uk/wp-content/uploads/2021/09/Build-Amazing-Websites-w-HTML-CSS-Sass-JavaScript-More-Level-3.png',
      description: 'Backend',
    },

  ];
  
  // Función para renderizar las tarjetas de tecnología
  function renderTechCards() {
    const techCardsContainer = document.getElementById('techCardsContainer');
  
    technologies.forEach((tech) => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'col-sm-4';
      cardDiv.innerHTML = `
        <div class="card">
          <img src="${tech.imageSrc}" class="card-img-top" alt="${tech.name}">
          <div class="card-body">
            <h5 class="card-title" style="text-align: center; font-weight: bold">${tech.name}</h5>
          </div>
        </div>
      `;
  
      techCardsContainer.appendChild(cardDiv);
    });
  }
  
  // Llama a la función para renderizar las tarjetas al cargar la página
  document.addEventListener('DOMContentLoaded', renderTechCards);
  