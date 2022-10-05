
import isArrayLike from 'lodash/isArrayLike'
import canEach from '../internal/canEach'
import values from '../util/values'
import each from '../util/each'

function reduce(target:any, callback:Function, initValue?:any) {
    if(!target || !canEach(target) || !callback) return
    let prev = initValue === undefined ? isArrayLike(target) ? target[0] : values(target)[0]  : initValue
    let lastPrev = prev
    let i:number = 0
    each(target, (item:any, index:any, type:any) => {
        i++
        if(initValue !== undefined) {
            prev = callback(prev, item, index, type, target)
        } else {
            if(i > 1) {
                prev = callback(prev, item, index, type, target)
            }
        }
        if(prev === 'continue') {
            prev = lastPrev
            return 'continue'
        }
        if(prev === false) return false
        lastPrev = prev
    })
    return prev
}

export default reduce