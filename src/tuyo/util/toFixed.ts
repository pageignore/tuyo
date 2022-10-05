import Big from 'big.js'

function toFixed(target:string|number, dp:number) {
    const x = Big(target)
    return Number(x.toFixed(dp))
}

export default toFixed