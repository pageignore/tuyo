import isType from './internal/isType'
import isSame from './util/isSame'
import isSameType from './util/isSameType'
import getType from './util/getType'
import keys from './util/keys'
import values from './util/values'
import isBaseType from './util/isBaseType'
import each from './util/each'
import reduce from './util/reduce'
import sort from './util/sort'
import alphabetIndex from './util/alphabetIndex'
import plus from './util/plus'
import minus from './util/minus'
import times from './util/times'
import div from './util/div'
import toFixed from './util/toFixed'
import has from './util/has'
import indexOf from './util/indexOf'

import { isFunction } from './util/isFunction'
import { isArray } from './util/isArray'

function isNumber(target: any) {
    return getType(target) === 'number'
}

const isString = isType('String')
const isBoolean = isType('Boolean')
const isNull = isType('Null')
const isUndefined = isType('Undefined')
const isObject = isType('Object')
const isSet = isType('Set')
const isMap = isType('Map')
const isWeakSet = isType('WeakSet')
const isWeakMap = isType('WeakMap')
const isSymbol = isType('Symbol')
const isDate = isType('Date')
const isArguments = isType('Arguments')
const isRegExp = isType('RegExp')
const isHTMLCollection = isType('HTMLCollection')

export {
    isUndefined,
    isNull,
    isBoolean,
    isNumber,
    isString,
    isArray,
    isObject,
    isFunction,
    isSet,
    isMap,
    isWeakSet,
    isWeakMap,
    isSymbol,
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
    indexOf
}