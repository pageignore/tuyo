import Big from 'big.js'

function div(v1:string|number, v2:string|number) {
    const x = Big(v1)
    const y = Big(v2)
    return x.div(y).toNumber()
}

export default div