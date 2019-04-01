if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development model!')
} else {
  console.log('Looks like we are in production model!')
}
// function component() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['hello', 'webpack'], '')
//     return element
//   }).catch(err => 'An error occurred while loading the component')
// }
async function component() {
  var element = document.createElement('div')
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash')
  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  return element
}
component().then(component => {
  document.body.appendChild(component)
})