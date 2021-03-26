const mySite = {}

mySite.photoChange = () => {
   const myPhoto = document.querySelector('.self-container');
   myPhoto.addEventListener('click', () => {
      // if (event.target.src.match('./images/glen-portrait.png')) {
      //    event.target.src = './images/glensq.jpg';
      // } else {
      //    event.target.src = './images/glen-portrait.png';
      // }
      const drawing = document.querySelector('#self-drawing');
      const photo = document.querySelector('#self-pic');

      drawing.classList.toggle('shown');
      photo.classList.toggle('hidden');
   })
}

mySite.showNav = () => {
   const hamburger = document.querySelector('#menu-button');
   hamburger.addEventListener('click', () => {
      if (hamburger.innerHTML.match(`<i class="fas fa-times"></i>`)) {
         hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
      } else {
         hamburger.innerHTML = `<i class="fas fa-times"></i>`;
      }
   const nav = document.querySelector('#nav-menu');
   nav.classList.toggle('show-menu');
   })
}

mySite.keyShowNav = () => {
   const hamburger = document.querySelector('#menu-button');
   hamburger.addEventListener('keypress', (event) => {
      if (event.key == 'Enter') {
         if (hamburger.innerHTML.match(`<i class="fas fa-times"></i>`)) {
            hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
         } else {
            hamburger.innerHTML = `<i class="fas fa-times"></i>`;
         }
         const nav = document.querySelector('#nav-menu');
         nav.classList.toggle('show-menu');
      }
   })
}

mySite.hideMenu = () => {
   const nav = document.querySelector('#nav-menu');
   nav.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
   })
}


mySite.init = () => {
   AOS.init();
   mySite.photoChange();
   mySite.showNav();
   mySite.keyShowNav();
   mySite.hideMenu();
}

mySite.init();