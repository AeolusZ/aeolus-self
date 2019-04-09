import _ from 'lodash'
import numRef from './ref.json'
import aeolus from 'aeolus-package'

console.log(aeolus.showMsg)
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