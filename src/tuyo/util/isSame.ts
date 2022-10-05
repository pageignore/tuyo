import isArrayLike from 'lodash/isArrayLike'
import isObjectLike from 'lodash/isObjectLike'
import getType from './getType'
import keys from './keys'
import values from './values'
import sort from './sort'

function isSame(v1:any, v2:any):boolean {
    const typeOfV1 = getType(v1)
    const typeOfV2 = getType(v1)
    if(typeof v1 !== typeof v2 || typeOfV1 !== typeOfV2) return false
    if(isObjectLike(v1)) {
        if(v1 === v2) {
            return true
        } else {
            let res = true;
            const valuesArrOfV1 = values(v1)
            const valuesArrOfV2 = values(v2)
            if(valuesArrOfV1.length !== valuesArrOfV2.length) return false
            sort(valuesArrOfV1)
            sort(valuesArrOfV2)
            if(isArrayLike(v1)) {
                for(let i in valuesArrOfV1) {
                    res = isSame(valuesArrOfV1[i], valuesArrOfV2[i])
                    if(!res) return false
                }
            } else {
                const keysArrOfV1 = keys(v1)
                const keysArrOfV2 = keys(v2)
                sort(keysArrOfV1)
                sort(keysArrOfV2)
                for(let i in keysArrOfV1) {
                    res = isSame(keysArrOfV1[i], keysArrOfV2[i])
                    if(!res) return false
                }
                for(let i in valuesArrOfV1) {
                    res = isSame(valuesArrOfV1[i], valuesArrOfV2[i])
                    if(!res) return false
                }
            }
        }
    } else {
        return v1 === v2
    }
    return true
}

export default isSame