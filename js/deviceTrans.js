function updateHomeImage() {
    const Image = document.querySelector('.-My-Img-Bg');
  
    if (window.innerWidth <= 767) {
      Image.classList.add('tablet');
    } 
    else if (window.innerWidth <= 1,120) {
        Image.classList.add('computer');
    } else {
        Image.classList.remove('tablet');
        Image.classList.remove('computer');
    }
      
    
  }
  
  updateHomeImage();
  window.addEventListener('resize', updateHomeImage);

