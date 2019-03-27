import { cube } from './math'
function component() {
  let element = document.createElement('pre')
  element.innerHTML = [
    'Hello Webpack',
    '5 cubes is equal to' + cube(5)
  ].join('\n\n')
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