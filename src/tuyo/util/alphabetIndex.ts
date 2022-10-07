
function alphabetIndex(target:string, index:number = 0):number {
    if(!target || typeof target !== 'string' || index > target.length - 1) return -1
    return target.charCodeAt(index) - 97
}

export default alphabetIndex