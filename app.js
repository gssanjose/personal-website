const mySite = {}

mySite.hamburger = document.querySelector('#menu-button');
const hamburger = mySite.hamburger;
mySite.nav = document.querySelector('#nav-menu');
const nav = mySite.nav;

mySite.photoChange = () => {
   const myPhoto = document.querySelector('.self-container');
   myPhoto.addEventListener('click', () => {
      const drawing = document.querySelector('#self-drawing');
      const photo = document.querySelector('#self-pic');
      drawing.classList.toggle('shown');
      photo.classList.toggle('hidden');
   })
}

mySite.showNav = () => {
   mySite.hamburger.addEventListener('click', () => {
   mySite.changeIcon();
   nav.classList.toggle('show-menu');
   })
}

mySite.keyShowNav = () => {
   mySite.hamburger.addEventListener('keypress', (event) => {
      if (event.key == 'Enter') {
         mySite.changeIcon();
         nav.classList.toggle('show-menu');
      }
   })
}

mySite.hideMenu = () => {
   nav.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      mySite.changeIcon();
   })
}

mySite.changeIcon = () => {
   if (hamburger.innerHTML.match(`<i class="fas fa-times"></i>`)) {
      hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
   } else {
      hamburger.innerHTML = `<i class="fas fa-times"></i>`;
   }
}

mySite.init = () => {
   AOS.init();
   mySite.photoChange();
   mySite.showNav();
   mySite.keyShowNav();
   mySite.hideMenu();
}

mySite.init();