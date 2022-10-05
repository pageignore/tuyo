import isArrayLike from 'lodash/isArrayLike'
import isObjectLike from 'lodash/isObjectLike'
import keys from '../util/keys'

function getLength(target:any):number {
    if(!target) return 0
    let len = 0
    if(isArrayLike(target)) len = target.length
    if(isObjectLike(target)) len = keys(target).length
    return len
}

export default getLength