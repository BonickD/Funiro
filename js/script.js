//<ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>
;
;
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
function ibg() {
  let ibg = document.querySelectorAll('._ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
;
;
;
new Swiper('.quality__container', {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new Swiper('.beautiful__slider', {
  slidesPerView: 2,
  simulateTouch: false,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

new Swiper('.tips__swp-container', {
  breakpoints: {
    1252: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  spaceBetween: 40,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
;
;
//</ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>

document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.icon-menu').classList.toggle('_active');
  document.querySelector('.header__menu').classList.toggle('_active');
  document.querySelector('.header__users').classList.toggle('_active');
  document.querySelector('.header__search').classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
});

//=======================================================================================================================================================>

const item = document.querySelectorAll('.menu__item_1');
if (item.length > 0) {
  const body = document.querySelectorAll('.menu__body_2');

  item.forEach((e) => {
    e.addEventListener('click', function addActive() {
      if (!e.classList.contains('_active')) {
        item.forEach((el) => {
          el.classList.remove('_active');
        });
      }
      e.classList.toggle('_active');
      document.documentElement.addEventListener('click', function check(elem) {
        if (!elem.target.closest('.header__menu')) {
          item.forEach((el) => {
            el.classList.remove('_active');
          });
        }
      });
    });
  });
}
