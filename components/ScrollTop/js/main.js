const nav = document.querySelector('nav');

// step1
// let oldValue = 0;
// window.addEventListener('scroll', function() {
//   const newValue = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//   if (oldValue - newValue < 0) {
//     nav.classList.add('active')
//   }
//   if (oldValue - newValue > 0) {
//     nav.classList.remove('active')
//   }
//   oldValue = newValue;
// });

// step2

const isFireFox = (navigator.userAgent.indexOf('Firefox') !== -1);
const wheelEvent = isFireFox ? 'DOMMouseScroll' : 'wheel';

window.addEventListener(wheelEvent, mouseWheelEvent)

function mouseWheelEvent(e) {
  const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
  (delta < 0)
    ? nav.classList.add('active')
    : nav.classList.remove('active')
}