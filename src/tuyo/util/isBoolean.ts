function isBoolean(target:any):boolean {
    return target === true || target === false || typeof target === 'boolean'
}

export default isBoolean