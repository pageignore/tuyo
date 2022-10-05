
import { isObject } from '../utils'

function arrayHasItem(array:Array<string|number|undefined|null|object>, item:string|number|object):boolean {
    if(!array || array.length === 0 || !item) return false
    if(isObject(item)) {
        array.forEach(n => {
            if(isObject(n)) {

            }
        })
    } else {
        return array.includes(item);
    }
    return true
}

export default arrayHasItem