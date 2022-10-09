import getType from '../util/getType'
import sort from '../util/sort'
import isFunction from '../util/isFunction'
import { isArray } from '../util/isArray'
import cloneDeep from 'lodash/cloneDeep'

function baseFor(target:any, callback:Function, direction?: string | ((a: any, b: any, atype: string, btype: string) => number)) {
    const isReverse = direction === 'reverse'
    let value
    let i = isReverse ? target.length - 1 : 0
    let end = isReverse ? 0 : target.length
    let cloneTarget = []

    // sort and each
    if(direction && isFunction(direction) && isArray(target)) {
        cloneTarget = cloneDeep(target)
        // @ts-ignore
        cloneTarget = sort(cloneTarget, direction)
    }

    for(; isReverse ? i >= end : i < end; isReverse ? i-- : i++) {
        if(direction && isFunction(direction) && isArray(target)) {
            value = callback.call(cloneTarget, cloneTarget[i], i, getType(cloneTarget[i]), cloneTarget)
        } else {
            value = callback.call(target, target[i], i, getType(target[i]), target)
        }
        if(value === 'continue') continue
        if(value === false) break
    }
}

export default baseFor