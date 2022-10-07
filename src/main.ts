import Big from 'big.js';
import { tuyo } from './tuyo'
import { has, sort, isSame, keys, values, each, reduce, getType, plus } from './tuyo/utils'


const number = 0.1
const string = 'abc'
const array = [10, 20, [1, 2, 3], 2, 1]
const object = {a: 1, b:2, c: 3}
const set = new Set([1, 2, 3])
const map = new Map([['a', 1], ['b', 2], ['c', 3]])

const ress = tuyo(number).plus(0.2).minus(0.2).times(100).div(100).toFixed(2).value

tuyo(array).each((value, index, valueType, target) => {
  if(value === 2) return false
  console.log(value)
}, (a, b) => a - b)

const _array = tuyo(array);
while(!_array.iterator.isDone()) {
  const raw = _array.iterator.next()
  console.log(raw)
}

console.log(getType(NaN))

// console.log(array.indexOf([1, 2, 3]))
// console.log(tuyo(array).indexOf([1, 3, 2]), 'ss')

// console.log(tuyo(array).isSame([1, 2, [3, 2, 1], 10, 20]))



const x = new Big(0.1);
const y = new Big(0.2);
const z = x.plus(y)
// console.log(z.toNumber(), 'zz')

// console.log(1.005.toFixed(2), 'num')
// console.log(new Big(1.005).toFixed(2), 'num')


const a = {a: 2}

const q = [1,2]

const testarr = [1,2,3,4,5,[1,2]]
// console.log(has(testarr, q), 'has ?')
// const findres =  testarr.find(item => item == a)
// console.log(findres, 'findres')


const testMap = new Map([[{a:1}, {b:2}], [[1,2], 1]])
// console.log(testMap, 'testMap')
// console.log(has(testMap, [1,2]), 'has ? map')

// const object = { 'a': { 'b': 2 } }
// console.log(has(object, 'b'), 'has ?')
const other = Object.create({ 'a': Object.create({ 'b': 2 }) })

// const hasRes = has(other, 'a')
// console.log(hasRes, 'has')

// console.log(other, 'other')

let res = plus(0.1, 0.2)
// console.log(res, 'res')

const str = 'hello world'
const num = '0.1'
const tt = tuyo(num)
tt.plus(0.2).plus(1).plus(1).plus(1).plus(1).minus(1).toFixed(0)
// console.log(tt, 't')
// console.log(tt.value, 't')
const obj = {a:1, b:2, c:3}
const arr = [1,22,3,44,5,'6', obj]
// const set = new Set([1, '2', {a: 3}])
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

// console.log(isSame([new Map([['abc', 1]]),11,'12',2,new Set([1000,'av', 1 , 11, '3', {a:1 , b:2}])], [new Set([{a:1 , b:2},'av',1, 11, '3', 1000]),2,11,new Map([['abc', 1]]), '12']), 'issame')

// console.log(arr.indexOf(obj), 'indexof')
const arra = [[[11]],[[2]],2,{foo:{foo:2}},1,4,2,{foo:{foo:1}},32,[3,4],[1,2],{foo:1},{foo:0},{foo:{}}]
const arrb = [[[11]],[[2]],2,1,4,2,{foo:{foo:1}},32,[3,4],[1,2],{foo:0},{foo:1},{foo:{}},{foo:{foo:2}}]

const sArr = ['a','z','zz','zzzza', 'z',Infinity, -Infinity, 'c', true, ['3', 1, '22',4, 2, '45' , 22 ],false,true,11,{a: 22}, [77, 1, 100],'ac', {a: 111}, 2, 'aacc', '3', 'aab', 'aabc', {a: 10, b: 1, c: 2}, 'book', {a: 1, b: 10}, new Set([1,2]), new Map([['a', 1],['b', 2],['c', 2]]), new Set([30,40]), new Map([['bb', 99],['cc', 99]]), null, false,'2', undefined]
// console.log(sArr, 'before')
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
// console.log(sArr, 'after')

// const t = ['1' ,'33','ac','z','3', 'c', 'ab', 'abc', 'e', 'b']
// t.sort()
// sArr.sort((a:any, b:any) => {
//   console.log(a, 'a')
//   console.log(b, 'b')
//   return a - b
// })
// console.log(t, 'tt')