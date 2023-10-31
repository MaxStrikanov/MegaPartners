import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/virtual';
import 'swiper/scss/scrollbar';
import {  Scrollbar } from 'swiper/modules';
import Swiper from 'swiper';


export const blogScroll = () => {
  const blogScroll = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    modules: [Scrollbar],
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
}