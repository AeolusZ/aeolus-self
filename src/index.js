import _ from 'lodash'
import './style.css'
import Dog from './dog.jpg'
function component() {
  let element = document.createElement('div')
  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  element.classList.add('hello');
  // 添加图片到 div
  let myDog = new Image()
  myDog.src = Dog;
  element.appendChild(myDog)
  return element
}
document.body.appendChild(component())