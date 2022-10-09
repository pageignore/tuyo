
import getType from './getType'

function isNumber(target:any):boolean {
    return getType(target) === 'number'
}

export default isNumber