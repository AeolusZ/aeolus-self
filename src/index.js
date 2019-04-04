import {square} from './math'

console.log(square)
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development model!')
} else {
  console.log('Looks like we are in production model!')
}
function component() {
  var element = document.createElement('div')
  var button = document.createElement('button')
  var br = document.createElement('br')
  button.innerHTML = 'Click me and look at the console'
  element.appendChild(br)
  element.appendChild(button)
  button.onclick = e => import(/*webpackChunkName: "print"*/'./print').then(module => {
    var print = module.default
    print()
  })
  return element
}
document.body.appendChild(component())
