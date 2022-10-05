import getType from '../util/getType'
import { isFunction, isArray } from '../utils'

function baseFor(target:any, callback:Function, direction?: string | Function) {
    const isReverse = direction === 'reverse'
    let value
    let i = isReverse ? target.length - 1 : 0
    let end = isReverse ? 0 : target.length
    if(isFunction(direction) && isArray(target)) {
        target = target.sort(direction)
    }
    for(; isReverse ? i >= end : i < end; isReverse ? i-- : i++) {
        value = callback.call(target, target[i], i, getType(target[i]), target)
        if(value === 'continue') continue
        if(value === false) break
    }
}

export default baseFor