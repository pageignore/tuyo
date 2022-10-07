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
tuyo(string).type // string
tuyo(string).isString // true
tuyo(string).length // 3
tuyo(string).each((value, index, valueType, target) => {
    console.log(value, index, valueType, target)
})
// 'a' 0 'string' 'abc'
// 'b' 1 'string' 'abc'
// 'c' 2 'string' 'abc'

tuyo(string).each((value, index, valueType, target) => {
    console.log(value, index, valueType, target)
}, 'reverse')
// 'c' 2 'string' 'abc'
// 'b' 1 'string' 'abc'
// 'a' 0 'string' 'abc'

const array = [10, 20, [1, 2, 3], 2, 1]
// typeof array === 'object'
tuyo(array).type // array
tuyo(array).isArray // true
tuyo(array).length // 3
// sort and each
tuyo(array).each((value, index, valueType, target) => {
  console.log(value, index, valueType, target)
}, (a, b) => a - b)
// 1 0 'number' [10, 20, [1, 2, 3], 2, 1]
// 2 1 'number' [10, 20, [1, 2, 3], 2, 1]
// 10 2 'number' [10, 20, [1, 2, 3], 2, 1]
// 20 3 'number' [10, 20, [1, 2, 3], 2, 1]
// [1, 2, 3] 4 'array' [10, 20, [1, 2, 3], 2, 1]

// continue
tuyo(array).each((value, index, valueType, target) => {
    if(value === 2) return 'continue'
    console.log(value)
}, (a, b) => a - b)
// 1
// 10
// 20
// [1, 2, 3]

// break
tuyo(array).each((value, index, valueType, target) => {
    if(value === 2) return false
    console.log(value)
}, (a, b) => a - b)
// 1

const res = tuyo(array).reduce((prev, curr, index, currType, target) => {
  return currType === 'number' ? prev + curr : prev
})
// res === 33

// array.indexOf([1, 2, 3]) === -1
tuyo(array).indexOf([1, 2, 3]) // 2
tuyo(array).indexOf([1, 3, 2]) // 2
tuyo(array).has([1, 2, 3]) // true
tuyo(array).has([1, 3, 1]) // true

// [10, 20, [1, 2, 3], 2, 1] === [10, 20, [1, 2, 3], 2, 1]  ==>  false
tuyo(array).isSame([10, 20, [1, 2, 3], 2, 1]) // true
tuyo(array).isSame([1, 2, [1, 2, 3], 20, 10]) // true
tuyo(array).isSame([1, 2, [3, 2, 1], 10, 20]) // true

// iterator
const _array = tuyo(array);
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

tuyo(object).each((value, key, valueType, target) => {
  console.log(value, key, valueType, target)
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
tuyo(set).each((value, key, valueType, target) => {
  console.log(value, key, valueType, target)
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
tuyo(set).each((value, key, valueType, target) => {
  console.log(value, key, valueType, target)
})

// reduce..
// isSame..
// has..
// iterator...

```

## Api

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
    isSame,
    keys,
    values,
    each,
    reduce,
    sort,
    alphabetIndex,
    plus,
    minus,
    times,
    div,
    toFixed,
    has,
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
 * @returns {boolean} baseType in ['number', 'string', 'boolean', 'symbol', 'null', 'undefined']
 */
isBaseType(100) // true
isBaseType([]) // false

```
