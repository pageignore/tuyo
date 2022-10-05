import lvalues from 'lodash/values'
import getType from './getType'
// import isBaseType from './isBaseType'

function values(target:any):Array<any> {
    if(!target) return []
    let res = lvalues(target)
    const type = getType(target);
    // if(isBaseType(target)) {
    //     res = [target]
    // }
    if(type === 'set' || type === 'map') {
        res = Array.from(target.values())
    }
    return res
}

export default values