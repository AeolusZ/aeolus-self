import _ from 'lodash'
import printMe from './print.js'
function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')
  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)
  return element
}
// 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
let element = component()
document.body.appendChild(element)

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the update printMe module')
    document.body.removeChild(element)
    // 重新渲染页面后，component 更新 click 事件处理
    element = component()
    document.body.appendChild(element)
  })
}