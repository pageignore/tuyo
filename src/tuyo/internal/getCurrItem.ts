import isArrayLike from 'lodash/isArrayLike'
import canEach from './canEach'
import keys from '../util/keys'
import values from '../util/values'

function getCurrItem<T>(target:any, active:number):Object|null {
    if(!canEach(target)) return null
    if(isArrayLike(target)) {
        return {
            key: active,
            value: target[active],
            done: active >= target.length - 1
        }
    }
    let keysArr = keys(target);
    let valuesArr = values(target);
    return {
        key: keysArr[active],
        value: valuesArr[active],
        done: active >= valuesArr.length - 1
    }
}

export default getCurrItem