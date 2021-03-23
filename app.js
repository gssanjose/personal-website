const mySite = {}

mySite.photoChange = () => {
   const myPhoto = document.querySelector('.self-container');
   myPhoto.addEventListener('click', (event) => {
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




mySite.init = () => {
   mySite.photoChange();
}

mySite.init();