import _ from 'lodash'
import numRef from './ref.json'
import Aeolus from 'aeolus-package'
console.log(Aeolus.DateTransform.toDate('20190409'))
export function numToWorld(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum
  }, '')
}
export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum
  }, '')
}