import Big from 'big.js'

function minus(v1:string|number, v2:string|number) {
    const x = Big(v1)
    const y = Big(v2)
    return x.minus(y).toNumber()
}

export default minus