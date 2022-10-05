import Big from 'big.js';
import { tuyo } from './tuyo'
import { sort, isSame, keys, values, each, reduce, getType, plus } from './tuyo/utils'

const x = new Big(0.1);
const y = new Big(0.2);
const z = x.plus(y)
// console.log(z.toNumber(), 'zz')

// console.log(1.005.toFixed(2), 'num')
// console.log(new Big(1.005).toFixed(2), 'num')

let res = plus(0.1, 0.2)
console.log(res, 'res')

const str = 'hello world'
const num = 520
const obj = {a:1, b:2, c:3}
const arr = [1,22,3,44,5,'6', obj]
const set = new Set([1, '2', {a: 3}])
const map1 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
])
const map2 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 2],
])

const same1 = [1,2]

console.log(isSame([new Map([['abc', 1]]),11,'12',2,new Set([1000,'av', 1 , 11, '3', {a:1 , b:2}])], [new Set([{a:1 , b:2},'av',1, 11, '3', 1000]),2,11,new Map([['abc', 1]]), '12']), 'issame')

// console.log(arr.indexOf(obj), 'indexof')
const arra = [[[11]],[[2]],2,{foo:{foo:2}},1,4,2,{foo:{foo:1}},32,[3,4],[1,2],{foo:1},{foo:0},{foo:{}}]
const arrb = [[[11]],[[2]],2,1,4,2,{foo:{foo:1}},32,[3,4],[1,2],{foo:0},{foo:1},{foo:{}},{foo:{foo:2}}]

const sArr = ['a','z','zz','zzzza', 'z',Infinity, -Infinity, 'c', true, ['3', 1, '22',4, 2, '45' , 22 ],false,true,11,{a: 22}, [77, 1, 100],'ac', {a: 111}, 2, 'aacc', '3', 'aab', 'aabc', {a: 10, b: 1, c: 2}, 'book', {a: 1, b: 10}, new Set([1,2]), new Map([['a', 1],['b', 2],['c', 2]]), new Set([30,40]), new Map([['bb', 99],['cc', 99]]), null, false,'2', undefined]
console.log(sArr, 'before')
sort(sArr, (a:any, b:any, atype: string, btype: string):number => {
  return b - a
  // if(atype === 'object' && btype === 'object') {
  //   return a.a - b.a
  // } else if(atype === 'set' && btype === 'set') {
  //   if(a.has(30)) {
  //     return -1
  //   } else {
  //     return 1
  //   }
  // } else if(atype === 'map' && btype === 'map') {
  //   return a.get('bb') - b.get('a')
  // } else {
  //   return b - a
  // }
})
console.log(sArr, 'after')

// const t = ['1' ,'33','ac','z','3', 'c', 'ab', 'abc', 'e', 'b']
// t.sort()
// sArr.sort((a:any, b:any) => {
//   console.log(a, 'a')
//   console.log(b, 'b')
//   return a - b
// })
// console.log(t, 'tt')
