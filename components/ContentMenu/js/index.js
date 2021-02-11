// step1. item이 늘어날때 마다 click event listener가 늘어나는 구조라 부하가 커질 우려가 있다.
// const items = document.querySelectorAll('.item');
// items.forEach(function(item) {
//   item.addEventListener('click', function(e) {
//     item.classList.toggle('open');
//     items.forEach(function(elem) {
//       if (elem !== item) elem.classList.remove('open');
//     })
//   })
// })

// step2. item을 감싸고 있는 wrapper에 click event listener를 등록하였고,
// item을 클릭 하였을때 event bubbling을 통하여 wrapper class로 전파가 되고
// wrapper 클래스에 등록된 click event listener가 등록이 되어있기 때문에 실행이 되고,
// 실행이 되상은 target 으로 잡혀 있기 때문에 해당 item으로 걸러지고 프로세스가 실행되게 된다.
// 추가로 wrapper 밖의 내용을 클릭 하였을때 context를 닫아주는 이벤트를 추가 한다.
// const wrapper = document.querySelector('.wrapper');
// const items = document.querySelectorAll('.item');
//
// wrapper.addEventListener('click', function(e) {
//   const targetElem = e.target;
//   e.stopPropagation();
//   if (!targetElem.classList.contains('item')) return;
//   targetElem.classList.toggle('open');
//   items.forEach(function(elem) {
//     if (elem !== targetElem) elem.classList.remove('open');
//   });
// });
//
// document.body.addEventListener('click', function(e) {
//   if (e.target.classList.contains('context')) return;
//   items.forEach(function(elem) {
//     elem.classList.remove('open');
//   })
// })

//step3. click event listener를 body에만 주었고, classList가 context / item / 그 외 를 고려하여 프로세스가 작동하도록 하였다.
// 장점으로는 하나의 click event listener가 등록 되었다는 것이고, 단점으로는 click event 하나에 대해서 조건을 다 따져야 한다. 결국 최적화에 대한 최적화를 고민 해 보아야 한다.
// 그리고 body 에 click event listener가 등록 되어있기 때문에 개별적으로 수행하기 힘들다.
// const items = document.querySelectorAll('.item');
// document.body.addEventListener('click', function(e) {
//   const targetClassList = e.target.classList;
//   if (targetClassList.contains('context')) return;
//   if (targetClassList.contains('item')) {
//     targetClassList.toggle('open');
//     items.forEach(function(elem) {
//       if (elem !== e.target) elem.classList.remove('open');
//     });
//     return;
//   }
//   items.forEach(function(elem) {
//     elem.classList.remove('open');
//   });
// });

// details tag를 활용하면 css로 하위 태그를 open/close 할 수 있다.
const items = document.querySelectorAll('details');
document.body.addEventListener('click', function(e) {
  if (e.target.nodeName !== 'SUMMARY' && e.target.nodeName !== 'P') {
    items.forEach(function(item) {
      item.removeAttribute('open');
    })
  }
  items.forEach(function(item) {
    if (item !== e.target.parentElement) {
      item.removeAttribute('open');
    }
  })
})