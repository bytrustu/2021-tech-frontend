// function createElement(type, props) {
//   switch(type) {
//     case 'h1':
//       return [document.createElement('hi')]
//         .map(element => {
//           Object
//             .entries({ ...props, 'data-id': 'title' })
//             .forEach(([name, value]) => element.setAttribute(name, value))
//           return element
//         })[0]
//     case 'div':
//       return [document.createElement('div')]
//         .map(element => {
//           Object
//             .entries({ ...props, 'data-id': 'layout' })
//             .forEach(([name, value]) => element.setAttribute(name, value))
//           return element
//         })[0]
//   }
// }

function createH1(props) {
  return [document.createElement('hi')]
    .map(element => {
      Object
        .entries({ ...props, 'data-id': 'title' })
        .forEach(([name, value]) => element.setAttribute(name, value))
      return element
    })[0]

}

function createDiv(props) {
  return [document.createElement('div')]
    .map(element => {
      Object
        .entries({ ...props, 'data-id': 'layout' })
        .forEach(([name, value]) => element.setAttribute(name, value))
      return element
    })[0]
}

const creatorMap = {
  h1: createH1,
  div: createDiv,
}

const coupler = map => (type, props) => map[type](props)
const createElement = coupler(creatorMap)
