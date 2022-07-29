if (document.body.clientWidth < 600) {

const swiper = new Swiper('.swiper', {

  effect: 'cards',
  width: 700,
  cardsEffect: {
    rotate: false,
    slideShadows: false,
  },
  
});

/*
const swiper = new Swiper('.swiper', {

  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: -150,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  }
 
});
*/
};