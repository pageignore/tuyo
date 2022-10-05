import getType from "./getType"
import { bascType } from '../internal/type'

function isBaseType(target:any):boolean {
    const type = getType(target)
    return bascType.indexOf(type) >= 0
}

export default isBaseType