import getType from '../util/getType'
import keys from '../util/keys'
import values from '../util/values'

function baseEach(target:any, callback:Function, direction?: string | Function) {
    const isReverse = direction === 'reverse'
    const keysArr = keys(target);
    const valuesArr = values(target);
    let value
    let i = isReverse ? keysArr.length - 1 : 0
    let end = isReverse ? 0 : keysArr.length
    for(; isReverse ? i >= end : i < end; isReverse ? i-- : i++) {
        value = callback.call(target, valuesArr[i], keysArr[i], getType(valuesArr[i]), target)
        if(value === 'continue') continue
        if(value === false) break
    }
}

export default baseEach