import lkeys from 'lodash/keys'
import getType from './getType'

function keys(target:any):Array<any> {
    if(!target) return []
    const type = getType(target)
    return type === 'set' || type === 'map' ? Array.from(target.keys()) : lkeys(target)
}

export default keys