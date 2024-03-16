// modal 
const openModal = document.querySelector('#open-modal')
const modal = document.querySelector('#modal')

console.log(openModal);

modal.onclick = () => dialog.showModal()

// swiper settings
const swiper = new Swiper('.footer-content__swipper', {
    // Optional parameters
    // direction: 'horizontal',
    // loop: true,
    // loopedSlides: 0,
    // freeMode: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'fraction'
    // },
    // spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.footer-swipper-elipes-1',
      prevEl: '.footer-swipper-elipes-2',
    },
    mousewhel: true,
    keyboaard: true,
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    // slidesPerView: 3,
    // centeredSlides: true
  });

