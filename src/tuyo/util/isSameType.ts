import getType from './getType'

function isSameType(v1:any, v2:any):boolean {
    const typeOfV1 = getType(v1)
    const typeOfV2 = getType(v2)
    return typeOfV1 === typeOfV2
}

export default isSameType