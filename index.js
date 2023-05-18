const button = document.getElementById("nav-toggle")
const iconMenu = document.getElementById("menu")
const iconClose = document.getElementById("close")
const main = document.getElementById("0")
const navLinks = document.getElementById("nav-links")
const body =  document.querySelector('body');
const scrollingDiv = document.getElementsByClassName("lo")
const navLinkBar = document.getElementsByClassName("nav-link")


let bodyStatus = document.body.dataset.nav







document.addEventListener('DOMContentLoaded', function() {
  // Get all the images with the "main-col-image" class
  const images = document.querySelectorAll('.main-col-image');

  // Count the number of images
  let imageCount = images.length;

  // Function to track image load
  function trackImageLoad() {
    imageCount--;

    if (imageCount === 0) startAnimations(images);
  }
  images.forEach(image => image.addEventListener('load', trackImageLoad));
});

function startAnimations(images) {

  const windowElement = document.querySelector('.window');
  const welcomeElement = document.querySelector('.welcome');
 
  setTimeout(() => {
    windowElement.style.animation = 'fade-out 4s cubic-bezier(.74, .06, .4, .92) forwards';
    
  }, 2000);

  setTimeout(() => {
    welcomeElement.style.animation = 'none';
    welcomeElement.style.animation = 'fade-welcome-out 2s cubic-bezier(.74, .06, .4, .92) forwards';
  }, 1000);
  setTimeout(() => {
    images.forEach((image, index) => {
      gsap.set(image, { opacity: 0 });
      gsap.to(image, {
        opacity: 1,
        duration: 1,
        delay: index * 0.2, // Delay each image by 0.2 seconds
        ease: 'power2.out' // Easing function
      });
    });
    body.style.overflow = 'auto';
  }
  , 3500);
}


const scrollingDivs = document.querySelectorAll('.main-col.lo');
function resetScrollPositions() {
    scrollingDivs.forEach(scrollingDiv => {
        scrollingDiv.style.transform = `translateY(0)`;
        scrollingDiv.style.transformOrigin = 'center center';
      });
 
  }
  
const toggleNav = () =>{
    bodyStatus =  bodyStatus === "true" ? "false" : "true"  
    if(bodyStatus === "true"){
        body.style.height="100vh"
        main.style.transform="translateY(-50%)"
        iconClose.style.opacity = 1
        iconMenu.style.opacity = 0  
        navLinks.style.transform="translateY(0%) scale(1)"
        resetScrollPositions()
    
    }
    else{
        body.style.height="100%"
        main.style.transform="translateY(0%)"
        navLinks.style.transform="translateY(70%) scale(0.9)"
        iconClose.style.opacity = 0
        iconMenu.style.opacity = 1

    }
} 
button.onmouseover = () => { 
   if( bodyStatus === "true"){
    iconClose.style.opacity = 1
   }
   else if(bodyStatus === "false"){
     iconMenu.style.opacity = 1  
   }
     
}
button.onmouseout= () => {
    
    iconMenu.style.opacity = 0
     if(bodyStatus === "false"){
         iconClose.style.opacity = 0 
       }
}

window.addEventListener('scroll', () => {
  const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const translatePercentage = 12 * scrollPercentage;

  scrollingDivs.forEach(scrollingDiv => {
    scrollingDiv.style.transform = `translateY(${translatePercentage}%)`;
    scrollingDiv.style.transformOrigin = 'center center';
  });
});


