
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 160,
    centeredSlides: true,
    autoplay: {
      delay: 3800,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });