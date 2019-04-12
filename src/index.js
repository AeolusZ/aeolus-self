import Aeolus from 'aeolus-package'
console.log(Aeolus.DateTransform.toDate(new Date()))
console.log(Aeolus.DateTransform.toNoSpaceDate('2018-12-24'))
console.log(Aeolus.StringTransform.initialsCapital('i am 25 years old'))

function component() {
  var element = document.createElement('div')
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