import canEach from '../internal/canEach'
import each from './each'
import isArrayLike from 'lodash/isArrayLike'
import isSame from './isSame'

function has(target:any, item:any):boolean {
    if(!target) return false
    if(!canEach) return target === item
    let res = false
    const isAL  = isArrayLike(target)
    each(target, (v:any, k:any) => {
        if(isAL) {
            if(isSame(item, v)) {
                res = true
                return false;
            }
        } else {
            if(isSame(item, k)) {
                res = true
                return false;
            }
        }
    })
    return res
}

export default has