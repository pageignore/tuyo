
function alphabetIndex(target:string, index:number = 0):number | null {
    if(!target || typeof target !== 'string' || index > target.length - 1) return null
    return target.charCodeAt(index) - 97
}

export default alphabetIndex