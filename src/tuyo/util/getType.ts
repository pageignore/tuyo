import getTypeUpper from "../internal/getTypeUpper"

function getType(target:any):string {
    const typeUpper = getTypeUpper(target)
    return typeUpper === 'NaN' ? 'NaN' : typeUpper.toLowerCase()
}

export default getType