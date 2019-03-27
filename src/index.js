import { cube } from './math'
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development model!')
} else {
  console.log('Looks like we are in production model!')
}
function component() {
  let element = document.createElement('pre')
  element.innerHTML = [
    'Hello Webpack',
    '5 cubes is equal to' + cube(5)
  ].join('\n\n')
  return element
}
document.body.appendChild(component())