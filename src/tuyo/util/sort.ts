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
    'array': 6,
    'object': 7,
    'set': 8,
    'map': 9,
}

const objectLikeCompare: Object = {
    'array': arrayCompare,
    'object': baseObjectLikeCompare,
    'set': baseObjectLikeCompare,
    'map': baseObjectLikeCompare,
}

function baseCallback(a:any, b:any) {
    return a - b
}

function getOrder(type: string, orderConfig:Object = {}) {
    let order  = orderConfig[type] || Order[type]
    return typeof order === 'number' ? order : 999
}

function stringCompare(a: string, b:string, cb:((a: any, b: any, atype: string, btype: string) => number), orderConfig?:Object) {
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
        res = cb(aNumber, bNumber, 'string', 'string')
    } else {
        // 'abc' '12'
        const aType = isNaN(aNumber) ? 'string' : 'number'
        const bType = isNaN(bNumber) ? 'string' : 'number'
        const aOrder = getOrder(aType, orderConfig)
        const bOrder = getOrder(bType, orderConfig)
        res = cb(aOrder, bOrder, 'order', 'order')
    }
    return res
}

function arrayCompare(a: Array<any>, b:Array<any>, cb:((a: any, b: any, atype: string, btype: string) => number)) {
    let aLen = getLength(a);
    let bLen = getLength(b);
    let res = 0
    sort(a, cb)
    sort(b, cb)
    if(aLen === bLen) {
        for(let i in a) {
            res = baseCompare(a[i], b[i], cb);
            if(res > 0 || res < 0) break
        }
    } else {
        res = cb(aLen, bLen, 'array', 'array')
    }
    return res
}

function baseObjectLikeCompare(a: any, b:any, cb:((a: any, b: any, atype: string, btype: string) => number)) {
    let aLen = getLength(a)
    let bLen = getLength(b)
    const aType = getType(a)
    const bType = getType(b)
    let res = 0
    res = cb(a, b, aType, bType);
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
                res = cb(aKeys.length, bKeys.length, 'length', 'length')
            }
        } else {
            res = cb(aLen, bLen, 'length', 'length')
        }
    }
    return res;
}

function baseCompare(a:any, b:any, cb:((a: any, b: any, atype: string, btype: string) => number), orderConfig?:Object):number {
    const aType = getType(a)
    const bType = getType(b)
    const aOrder = getOrder(aType, orderConfig)
    const bOrder = getOrder(bType, orderConfig)

    let res = 0
    if(aType === bType) {
        if(isObjectLike(a)) {
            res = objectLikeCompare[aType](a, b, cb, orderConfig)
        } else {
            res = aType === 'string' ? stringCompare(a, b, cb, orderConfig) : cb(a, b, aType, bType)
        }
    } else {
        res = cb(aOrder, bOrder, 'order', 'order')
    }
    return res || 0
}


function sort(target:Array<any>, callback?:((a: any, b: any, atype: string, btype: string) => number) | undefined, orderConfig?:Object) {
    if(getType(target) !== 'array') return

    const cb = callback || baseCallback

    function compare(a:any, b:any) {
        return baseCompare(a, b, cb, orderConfig)
    }

    return target.sort(compare)

}

export default sort