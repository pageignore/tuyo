import type { Object } from '../internal/type'
import getLength from '../internal/getLength'
import isObjectLike from 'lodash/isObjectLike'
import getType from './getType'
import keys from './keys'
import values from './values'
import alphabetIndex from './alphabetIndex'
import each from './each'

const Order: Object = {
    'null': 0,
    'boolean':1,
    'NaN': 2,
    'symbol': 3,
    'number': 4,
    'string': 5,
    'date': 6,
    'array': 7,
    'object': 8,
    'set': 9,
    'map': 10,
}

const objectLikeCompare: Object = {
    'array': arrayCompare,
    'object': baseObjectLikeCompare,
    'set': baseObjectLikeCompare,
    'map': baseObjectLikeCompare,
}

function isNumber(target: number | undefined | null): boolean {
    return typeof target === 'number'
}

function baseCallback(a:any, b:any) {
    return a - b
}

function getTypeOrder(type: string, orderConfig:Object = {}) {
    let order  = isNumber(orderConfig[type]) ? orderConfig[type] : Order[type]
    return isNumber(order) ? order : 999
}

function stringCompare(a: string, b:string, cb:((a: any, b: any, compare: Function, atype: string, btype: string) => number), orderConfig?:Object) {
    const aNumber = Number(a)
    const bNumber = Number(b)
    let res = 0
    if(isNaN(aNumber) && isNaN(bNumber)) {
        // 'abc'
        each(a, (item:string, index:number) => {
            let aIndex = alphabetIndex(item) || 0
            let bIndex = alphabetIndex(b[index]) || 0
            res = baseCompare(aIndex, bIndex, cb)
            if(res > 0 || res < 0) return false
        })
        if(res === 0) {
            each(b, (item:string, index:number) => {
                let aIndex = alphabetIndex(a[index]) || 0
                let bIndex = alphabetIndex(item) || 0
                res = baseCompare(aIndex, bIndex, cb)
                if(res > 0 || res < 0) return false
            })  
        }
    } else if (!isNaN(aNumber) && !isNaN(bNumber)) {
        // '12'
        res = cb(aNumber, bNumber, baseCompare, 'string', 'string')
    } else {
        // 'abc' '12'
        const aType = isNaN(aNumber) ? 'string' : 'number'
        const bType = isNaN(bNumber) ? 'string' : 'number'
        const aOrder = getTypeOrder(aType, orderConfig)
        const bOrder = getTypeOrder(bType, orderConfig)
        res = cb(aOrder, bOrder, baseCompare, 'order', 'order')
    }
    return res
}

function arrayCompare(a: Array<any>, b:Array<any>, cb:((a: any, b: any, compare: Function, atype: string, btype: string) => number), orderConfig?:Object) {
    let aLen = getLength(a);
    let bLen = getLength(b);
    let res = 0
    sort(a, cb, orderConfig)
    sort(b, cb, orderConfig)
    if(aLen === bLen) {
        for(let i in a) {
            res = baseCompare(a[i], b[i], cb, orderConfig);
            if(res > 0 || res < 0) break
        }
    } else {
        res = cb(aLen, bLen, baseCompare, 'array', 'array')
    }
    return res
}

function baseObjectLikeCompare(a: any, b:any, cb:((a: any, b: any, compare: Function, atype: string, btype: string) => number)) {
    let aLen = getLength(a)
    let bLen = getLength(b)
    const aType = getType(a)
    const bType = getType(b)
    let res = 0
    res = cb(a, b, baseCompare, aType, bType);
    if(isNaN(res) || res === 0) {
        res = 0
        if(aLen === bLen) {
            const aKeys = keys(a)
            const bKeys = keys(b)
            if(aKeys.length === bKeys.length) {
                for(let i in aKeys) {
                    res = baseCompare(aKeys[i], bKeys[i], cb)
                    if(res > 0 || res < 0) break
                }
                if(res === 0) {
                    const aValues = values(a);
                    const bValues = values(b);
                    for(let i in aValues) {
                        res = baseCompare(aValues[i], bValues[i], cb)
                        if(res > 0 || res < 0) break
                    }
                }
            } else {
                res = cb(aKeys.length, bKeys.length, baseCompare, 'length', 'length')
            }
        } else {
            res = cb(aLen, bLen, baseCompare, 'length', 'length')
        }
    }
    return res;
}

function baseCompare(a:any, b:any, cb:((a: any, b: any, compare: Function, atype: string, btype: string) => number), orderConfig?:Object):number {
    const aType = getType(a)
    const bType = getType(b)
    const aOrder = getTypeOrder(aType, orderConfig)
    const bOrder = getTypeOrder(bType, orderConfig)
    let res = 0
    if(aType === bType) {
        if(isObjectLike(a)) {
            const compareFn = objectLikeCompare[aType] ? objectLikeCompare[aType] : baseObjectLikeCompare
            res = compareFn(a, b, cb, orderConfig)
        } else {
            res = aType === 'string' ? stringCompare(a, b, cb, orderConfig) : cb(a, b, baseCompare, aType, bType)
        }
    } else {
        // if has orderConfig, fixed order.  Ascending
        res = orderConfig ? aOrder - bOrder : baseCompare(aOrder, bOrder, cb)
    }
    return res || 0
}


function sort(target:Array<any>, callback?:((a: any, b: any, compare: Function, atype: string, btype: string) => number), orderConfig?:Object) {
    if(getType(target) !== 'array') throw Error('Can only sort on Array')

    const cb = callback || baseCallback

    function compare(a:any, b:any) {
        return baseCompare(a, b, cb, orderConfig)
    }

    return target.sort(compare)

}

export default sort