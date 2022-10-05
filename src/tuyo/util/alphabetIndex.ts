
function alphabetIndex(target:string, index:number = 0):number | null {
    if(!target || typeof target !== 'string') return null
    return target.charCodeAt(index) - 97
}

export default alphabetIndex