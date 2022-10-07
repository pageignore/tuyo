
import isArrayLike from 'lodash/isArrayLike'
import canEach from '../internal/canEach'
import baseFor from '../internal/baseFor'
import baseEach from '../internal/baseEach'

function each(target:any, callback:Function, direction?: string | ((a: any, b: any, atype: string, btype: string) => number)) {
    if(!target || !canEach(target)) return
    isArrayLike(target) ? baseFor(target, callback, direction) : baseEach(target, callback, direction)
}

export default each