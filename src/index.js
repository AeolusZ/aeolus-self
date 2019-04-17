const Aeolus = require('aeolus-package')
const global = require('./globals.js')
console.log(Aeolus.default)
console.log(Aeolus.default.DateTransform.toDate(new Date()))
console.log(Aeolus.default.DateTransform.toNoSpaceDate('2018-12-24'))
console.log(Aeolus.default.StringTransform.initialsCapital('i am 25 years old'))
console.log(global.file)
console.log(global.parse)

function component() {
  var element = document.createElement('div')
  this.alert('Hmmm, this probably isn\'t a great idea...')
  element.innerHTML = join(['hello', 'webpack'], ' ');
  return element
}
document.body.appendChild(component())  
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())
.then(json => {
  console.log(json)
})
.catch(err => {
  console.error(err)
})