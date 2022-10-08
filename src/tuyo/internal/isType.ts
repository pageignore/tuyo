function isType(type:string):Function {
    return (target:any) => {
        return Object.prototype.toString.call(target) === `[object ${type}]`
    }
}

export default isType