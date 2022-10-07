import Big from 'big.js'

function plus(v1:string|number, v2:string|number) {
    const x = Big(v1)
    const y = Big(v2)
    return x.plus(y).toNumber()
}

export default plus