# tuyo
Provides additional, enhanced & unified operations for various data types in JavaScript.

## Install
`npm i tuyo`

## Usage

```javascript
import { tuyo } from 'tuyo'

// 0.1 + 0.2 = 0.30000000000000004
const number = 0.1
tuyo(number).plus(0.2).value // 0.3
tuyo(number).plus(0.2).minus(0.2).times(100).div(100).toFixed(2).value // 0.10

const string = 'abc'
const _string = tuyo(string)
_string.type // string
_string.isString // true
_string.length // 3
_string.each((value, index, valueType, data) => {
    console.log(value, index, valueType, data)
})
// 'a' 0 'string' 'abc'
// 'b' 1 'string' 'abc'
// 'c' 2 'string' 'abc'

_string.each((value, index, valueType, data) => {
    console.log(value, index, valueType, data)
}, 'reverse')
// 'c' 2 'string' 'abc'
// 'b' 1 'string' 'abc'
// 'a' 0 'string' 'abc'

const array = [10, 20, [1, 2, 3], 2, 1]
const _array = tuyo(array)
// typeof array === 'object'
_array.type // array
_array.isArray // true
_array.length // 3

// array.indexOf([1, 2, 3]) === -1
_array.indexOf([1, 2, 3]) // 2
_array.indexOf([1, 3, 2]) // 2
_array.has([1, 2, 3]) // true
_array.has([1, 3, 1]) // true

// [10, 20, [1, 2, 3], 2, 1] === [10, 20, [1, 2, 3], 2, 1]  ==>  false
_array.isSame([10, 20, [1, 2, 3], 2, 1]) // true
_array.isSame([1, 2, [1, 2, 3], 20, 10]) // true
_array.isSame([1, 2, [3, 2, 1], 10, 20]) // true

_array.isSameType([]) // true
_array.isSameType({}) // false

// sort and each
_array.each((value, index, valueType, data) => {
  console.log(value, index, valueType, data)
}, (a, b) => a - b)
// 1 0 'number' [10, 20, [1, 2, 3], 2, 1]
// 2 1 'number' [10, 20, [1, 2, 3], 2, 1]
// 10 2 'number' [10, 20, [1, 2, 3], 2, 1]
// 20 3 'number' [10, 20, [1, 2, 3], 2, 1]
// [1, 2, 3] 4 'array' [10, 20, [1, 2, 3], 2, 1]

// continue
_array.each((value, index, valueType, data) => {
    if(value === 2) return 'continue'
    console.log(value)
}, (a, b) => a - b)
// 1
// 10
// 20
// [1, 2, 3]

// break
_array.each((value, index, valueType, data) => {
    if(value === 2) return false
    console.log(value)
}, (a, b) => a - b)
// 1

const res = _array.reduce((prev, curr, currIndex, currType, data) => {
  return currType === 'number' ? prev + curr : prev
})
// res === 33

// iterator
while(!_array.iterator.isDone()) {
  const raw = _array.iterator.next()
  console.log(raw)
}
// { done: false, key: 0, value: 10 }
// { done: false, key: 1, value: 20 }
// { done: false, key: 2, value: [1, 2, 3] }
// { done: false, key: 3, value: 2 }
// { done: true, key: 4, value: 1 }

const object = {a: 1, b:2, c: 3}
// typeof object === 'object'
tuyo(object).type // array
tuyo(object).isObject // true
tuyo(object).length // 3

tuyo(object).each((value, key, valueType, data) => {
  console.log(value, key, valueType, data)
})
// 1 'a' 'number' {a: 1, b: 2, c: 3}
// 2 'b' 'number' {a: 1, b: 2, c: 3}
// 3 'c' 'number' {a: 1, b: 2, c: 3}

// reduce..
// isSame..
// has..
// iterator...

const set = new Set([1, 2, 3])
// typeof set === 'object'
tuyo(set).type // set
tuyo(set).isSet // true
tuyo(set).length // 3
tuyo(set).each((value, key, valueType, data) => {
  console.log(value, key, valueType, data)
})

// reduce..
// isSame..
// has..
// iterator...

const map = new Map([['a', 1], ['b'], 2], ['c', 3])
// typeof object === 'object'
tuyo(map).type // map
tuyo(map).isMap // true
tuyo(map).length // 3
tuyo(set).each((value, key, valueType, data) => {
  console.log(value, key, valueType, data)
})

// reduce..
// isSame..
// has..
// iterator...

```

## Api

```javascript
const data = [1,2,3]
const _data = tuyo(data)

// only getter
_data.value // [1, 2, 3]
// only getter
_data.length // 3
// only getter
_data.type // array
// _data.is`Type` 
_data.isArray // true

_data.iterator.isDone() // false
_data.iterator.next() // { done: false, key: 0, value: 1 }

_data.has(1) // true
_data.indexOf(1) // 0
_data.isSameType([]) // true
_data.isSame([3,2,1]) // true
_data.sort((a, b) => b - a) // _data.value == > [3,2,1]

const data = 0.1
data.plus(1).minus(1).times(1).div(1).toFixed(2).value // 0.10

```

## Utils
```javascript
import {
    isUndefined,
    isNull,
    isBoolean,
    isNumber,
    isString,
    isSymbol,
    isArray,
    isObject,
    isSet,
    isMap,
    isWeakSet,
    isWeakMap,
    isFunction,
    isDate,
    isArguments,
    isRegExp,
    isHTMLCollection,
    getType,
    isBaseType,
    isSameType,
    isSame,
    keys,
    values,
    alphabetIndex,
    plus,
    minus,
    times,
    div,
    toFixed,
    has,
    indexOf,
    sort,
    each,
    reduce,
} from 'tuyo/utils'

/**
 * @param {*} value The value to check.
 * @returns {boolean}
 */
isUndefined(undefined) // true
isNull(null) // true
isBoolean(true) // true
isNumber(123) // true
isNumber(NaN) // false
isString('abc') // true
isSymbol(Symbol()) // true
isArray([]) // true
isObject({}) // true
isSet(new Set()) // true
isMap(new Map()) // true
isWeakSet(new WeakSet()) // true
isWeakMap(new WeakMap()) // true
isFunction(function () {}) // true
// ...
// isHTMLCollection()

/**
 * @param {*} value.
 * @returns {string} Object.prototype.toString() [object ${type}] . Except 'NaN'
 */
getType({} - {}) // 'NaN'
// typeof ({} - {})  ==>  number

/**
 * @param {*} value.
 * @returns {boolean} Returns `true` if type in ['number', 'string', 'boolean', 'symbol', 'null', 'undefined'], else `false`.
 */
isBaseType(100) // true
isBaseType([]) // false

/**
 * @param {*} value1.
 * @param {*} value2.
 * @returns {boolean} Returns `true` if 'value1' and 'value2' are of the same type, else `false`.
 */
isSameType([], [1]) // true

/**
 * @param {*} value1.
 * @param {*} value2.
 * @returns {boolean} Returns `true` if 'value1' and 'value2' are of the same value, else `false`.
 */
isSame(null, undefined) // false
isSame(null, '') // false
isSame(0, '') // false
isSame(null, null) // true
isSame({a:1, b:2}, {b:2, a:1}) // true
isSame([1,2,3,4,5], [2,1,4,5,3]) // true
isSame([1,2,3,4,5, new Set([1,2,3])], [new Set([3,2,1],2,1,4,5,3]) // true
isSame([{a:1,b:1}, [1,2,3]], [[3,2,1], {b:1,a:1}]) // true

/**
 * @param {*} value.
 * @returns {array} Returns the keys of the value
 */
keys({a: 1, b:2, c:3}) // ['a', 'b', 'c']
keys([1, 2, 3]) // ['0', '1', '2']
keys(new Map([['a', 1], ['b', 2], ['c', 3]])) // ['a', 'b', 'c']

/**
 * @param {*} value.
 * @returns {array} Returns the values of the value
 */
values({a: 1, b:2, c:3}) // [1, 2, 3]
values([1, 2, 3]) // [1, 2, 3]
values(new Map([['a', 1], ['b', 2], ['c', 3]])) // [1, 2, 3]

/**
 * @param {string} value.
 * @param {string} index.
 * @returns {number} Returns the index of the letter in the alphabet
 */
alphabetIndex('a') // 0
alphabetIndex('z') // 25
alphabetIndex('abc', 1) // 1

/**
 * @param {number} value1.
 * @param {number} value2.
 * @returns {number} Returns the sum of two numbers
 */
plus(0.1, 0.2) // 0.3
// 0.1 + 0.2  ==> 0.30000000000000004

/**
 * @param {number} value1.
 * @param {number} value2.
 * @returns {number} Returns the result of subtracting value2 from value1
 */
minus(0.3, 0.2) // 0.1
// 0.3 - 0.2  ==> 0.09999999999999998

/**
 * @param {number} value1.
 * @param {number} value2.
 * @returns {number} Returns the product of two numbers
 */
times(0.1, 0.2) // 0.02
// 0.1 * 0.2 ==> 0.020000000000000004

/**
 * @param {number} value1.
 * @param {number} value2.
 * @returns {number} Returns the result of dividing value1 by value2
 */
div(0.1, 0.2) // 0.5

/**
 * @param {number} value.
 * @param {number} DP.
 * @returns {number} Returns a string representing the value of this number in normal notation to a fixed number of dp decimal places.
 */
toFixed(1.005, 2) // 1.01
// 1.005.toFixed(2) ==> 1.00

/**
 * @param {*} data.
 * @param {*} matchingvalue
 * @returns {boolean} Returns `true` if the matching value exists in the data, else `false`.
 * 'object'、'map' matching key, else matching value
 */
has([1,2,3], 2) // true
has([1,2,3], '2') // false
has([1,2,3,[1]], [1]) // true
has({a: 1, b: 2}, 'a') // true

/**
 * @param {array} data.
 * @param {*} matchingvalue
 * @returns {number} Returns index if the matching value exists in the data, else `-1`.
 * 
 */
indexOf([1,2,3], 2) // 1
indexOf([1,2,3,[1]], [1]) // 3
// [1,2,3,[1]].indexOf([1]) ==> -1

/**
 * @param {array} data.
 * @param {function} comparison default: (a, b) => a - b
 * @param {object} orderConfig
 * default: {
 * 'null': 0,
 * 'boolean':1,
 * 'NaN': 2,
 * 'symbol': 3,
 * 'number': 4,
 * 'string': 5,
 * 'array': 6,
 * 'object': 7,
 * 'set': 8,
 * 'map': 9,
 * }
 * @returns {array} Returns the sorted array and mutates the original array at the same time.
 * 
 */
const sort_data = [new Set([10, 22]),1, '2', '20', 10, {a: 1, b:2, c: 3}, {a: 10, b:20}, new Set([1, 2])]
sort(sort_data)
console.log(sort_data)
// [1, 10, '2', '20', {a: 10: b: 20}, {a:1, b:2, c:3}, Set([1,2]), Set([10, 22])]

// comparison function
sort(sort_data, (a, b) => b - a)
console.log(sort_data)
// [Set([10, 22]), Set([1,2]), {a:1, b:2, c:3}, {a: 10: b: 20}, '20', '2', 10, 1]

// order config
sort(sort_data, (a, b) => b - a, {
  'string': 0,
  'object': 1,
  'set': 2,
  'number': 3,
})
console.log(sort_data)
// ['20', '2', 10, 1, Set([10, 22]), Set([1,2]), {a:1, b:2, c:3}, {a: 10: b: 20}]

/**
 * @param {*} data.
 * @param {function} callback
 * @param {string | function} order 
 * Optional
 * 'reverse'
 * comparison function like ==> (a, b) => b - a
 */
each([1,2,3,4,5], ((value, index, valueType, data) => {
    return 'continue' // skip the current loop
    return false // break the loop
}))

/**
 * @param {*} data.
 * @param {function} callback
 * @param {*} initData
 */
cosnt res = reduce([1,2,3,4,5], ((prev, curr, currIndex, valueType, data) => {
    return prev + curr
    // return 'continue' // skip the current loop
    // return false // break the loop
}))
// res ==> 15

cosnt res = reduce([1,2,3,4,5], ((prev, curr, currIndex, valueType, data) => {
    return prev + curr
}), 10)
// res ==> 25

```
