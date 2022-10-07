import Big from 'big.js'

function toFixed(target:string|number, dp:number = 2) {
    const x = Big(target)
    return x.toFixed(dp)
}

export default toFixed