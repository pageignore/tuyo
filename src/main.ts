import Big from 'big.js';
import tuyo from './tuyo'
import { has, sort, isSame, keys, values, each, reduce, getType, plus, minus, times, div,toFixed } from './tuyo/utils'

import isSameValue from './isSameValue'

// const arr = [
//     { age: '55', name: 'mary'},
//     { age: '15', name: 'bob'},
//     { age: '5', name: 'monica'},
//     { age: '25', name: 'adam'}
// ]

// sort(arr, (a: any, b: any, compare: Function) => {
//     return compare(a.name, b.name, (a: any, b: any) => {
//         return a - b;
//     })
// })

// console.log(arr, arr)

// const arr = [{name: 'ignore'}, 1, 'z', 11, 'b', '5', '1']
// sort(arr, (a, b) => b - a, {
//     number: 0,
//     object: 1,
//     string: 2
// })
// console.log(arr)

// const arr = ['a','z','zz','zzzza', 'z',Infinity, -Infinity, 'c', true, ['3', 1, '22',4, 2, '45' , 22 ],false,true,11,{a: 22}, [77, 1, 100],'ac', {a: 111}, 2, 'aacc', '3', 'aab', 'aabc', {a: 10, b: 1, c: 2}, 'book', {a: 1, b: 10}, new Set([1,2]), new Map([['a', 1],['b', 2],['c', 2]]), new Set([30,40]), new Map([['bb', 99],['cc', 99]]), null, false,'2', undefined]
// sort(arr, (a, b) => b - a, {
//     string: 1,
//     set: 2,
//     object: 3,
//     map: 4,
//     array: 5,
//     number: 6,
//     boolean: 7,
//     null: 8,
// });
// console.log(arr)

// const arr = [
//     {name: 'Chris', age: 33},
//     {name: 'Allen', age: '20'},
//     {name: 'StephenA', age: '26'},
//     {name: 'Zoey', age: 29},
//     {name: 'StephenB', age: '16'}
// ]
// sort(arr, (a, b, compare) => compare(a.name, b.name, (a, b) => b - a))
// console.log(arr)

// const arr = [
//     [1],
//     [2,1],
//     [1, 2, 3],
//     [4, 3, 2, 1]
// ]
// sort(arr)
// console.log(arr)


// const arr = [
//     'bba',
//     'bca',
//     false,
//     true,
//     null,
//     'aaa',
//     'baaaa',
// ]
// sort(arr)
// console.log(arr)

const arr = [new Date('2022-02-02'), new Date('2022-02-01'), new Date('2022-02-03')]
sort(arr)
console.log(arr)

const sameres = isSame(new Date('2022-02-02'), new Date('2022-02-02'))
