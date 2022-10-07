import each from './each'
import isSame from './isSame'
import getType from './getType'

function indexOf(target:Array<any>, item:any):number {
    if(!target || getType(target) !== 'array') throw Error('Can only indexOf on Array')
    let res = -1
    each(target, (v:any, i:any) => {
        if(isSame(item, v)) {
            res = i
            return false;
        }
    })
    return res
}

export default indexOf