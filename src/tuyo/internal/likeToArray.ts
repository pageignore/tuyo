import type { Object } from './type'
import getType from '../util/getType'

function likeToArray(target:any):Array<any> {
    const type = getType(target)
    let res:Array<any> = [];
    if(type === 'array') {
        res = target
    } else {
        let data = type === 'object' ? Object.entries(target) : target.entries()
        for (let item of data) {
            const key:any = item[0]
            const val:any = item[1]
            const raw:Object = {}
            raw[`${key}`] = val
            res.push(raw)
        }
    }
    return res
}

export default likeToArray