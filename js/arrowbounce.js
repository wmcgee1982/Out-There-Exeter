function scrollWin() {
    window.scrollBy(0, window.innerHeight);
  }



  document.addEventListener('DOMContentLoaded', () => {
    const images = Array.from(document.querySelectorAll('.square-wrapper img'));
    const shuffled = images.sort(() => 0.5 - Math.random());
    let imagesShown = 0;
  
    setTimeout(() => {
      shuffled.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('show');
          imagesShown++;
  
          if (imagesShown === shuffled.length) {
            shuffled.forEach(image => image.classList.add('loaded'));
          }
        }, index * 30);
      });
    }, 4000);
  });
  