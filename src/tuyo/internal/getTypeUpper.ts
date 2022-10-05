function getTypeUpper(target:any):string {
    let str = Object.prototype.toString.call(target)
    str = str.substring(0, str.length - 1)
    let type = str.split(' ')[1]
    type = type === 'Number' ? isNaN(target) ? 'NaN' : type : type
    return type
}

export default getTypeUpper