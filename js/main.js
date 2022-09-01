const navLink1 = document.getElementById('link1');
const navLink2 = document.getElementById('link2');
const navLink3 = document.getElementById('link3');
const navLink4 = document.getElementById('link4');
const mobnavLink1 = document.getElementById('linkmob1');
const mobnavLink2 = document.getElementById('linkmob2');
const mobnavLink3 = document.getElementById('linkmob3');
const mobnavLink4 = document.getElementById('linkmob4');
const mobMenu = document.getElementById('mobile__menu');
const mobMenuBtn = document.getElementById('mob__menu');
const mobMenuClose = document.getElementById('close');
const figure = document.getElementById('figure');

navLink1.addEventListener('mouseover', () => {
    figure.style.background = '#865dc8';  
});

navLink2.addEventListener('mouseover', () => {
    figure.style.background = '#faba69';  
});

navLink3.addEventListener('mouseover', () => {
    figure.style.background = '#ef7584';  
});

navLink4.addEventListener('mouseover', () => {
    figure.style.background = '#a4e24c';  
});

mobMenuBtn.addEventListener('click', () => {
    mobMenu.style.transform = 'translateX(0)';
    mobMenu.style.opacity = '1.0';
});
mobnavLink1.addEventListener('click', () => {
    mobMenu.style.transform = 'translateX(-100%)';
    mobMenu.style.opacity = '0';
});
mobnavLink2.addEventListener('click', () => {
    mobMenu.style.transform = 'translateX(-100%)';
    mobMenu.style.opacity = '0';
});
mobnavLink3.addEventListener('click', () => {
    mobMenu.style.transform = 'translateX(-100%)';
    mobMenu.style.opacity = '0';
});
mobnavLink4.addEventListener('click', () => {
    mobMenu.style.transform = 'translateX(-100%)';
    mobMenu.style.opacity = '0';
});
mobMenuClose.addEventListener('click', () => {
    mobMenu.style.transform = 'translateX(-100%)';
    mobMenu.style.opacity = '0';
});

$('.services__wrapper').slick({
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

