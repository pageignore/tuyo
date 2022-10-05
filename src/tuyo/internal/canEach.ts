import isArrayLike from 'lodash/isArrayLike'
import isObjectLike from 'lodash/isObjectLike'

function canEach(target:any):boolean {
    return isArrayLike(target) || isObjectLike(target);
}

export default canEach