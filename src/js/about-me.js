import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.about-me-info-list', {
    duration: 400,
    openOnInit: [0],
    showMultiple: true,

    onOpen: currentElement => {
      setTimeout(() => {
        updateIcon(currentElement, 'open');
      }, 0);
    },

    onClose: currentElement => {
      setTimeout(() => {
        updateIcon(currentElement, 'close');
      }, 0);
    },
  });

  function updateIcon(element, state) {
    const icon = element.querySelector('.accordion-close-icon use');
    if (icon) {
      icon.setAttribute(
        'href',
        state === 'open'
          ? '/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-opensvg'
          : '/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-closesvg'
      );
    }
  }

  document.querySelectorAll('.about-me-info-item').forEach((item, index) => {
    updateIcon(item, index === 0 ? 'open' : 'close');
  });
});

// === swiper ===
document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.querySelector('.about-me-skills-list');
  const originalSlides = Array.from(swiperWrapper.children);
  const minSlidesNeeded = 30;

  while (swiperWrapper.children.length < minSlidesNeeded) {
    originalSlides.forEach(slide => {
      const clone = slide.cloneNode(true);
      swiperWrapper.appendChild(clone);
    });
  }

  const swiper = new Swiper('.about-me-swiper', {
    loop: true,
    loopAdditionalSlides: 6,
    navigation: {
      nextEl: '.about-me-swiper-button',
    },
    allowSlidePrev: false,
    spaceBetween: 0,
    slidesPerView: 2,
    slidesPerGroup: 1,
    breakpoints: {
      768: { slidesPerView: 3 },
      1440: { slidesPerView: 6 },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: true,
    },
  });
});
