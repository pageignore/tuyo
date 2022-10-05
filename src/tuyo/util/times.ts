import Big from 'big.js'

function times(v1:string|number, v2:string|number) {
    const x = Big(v1)
    const y = Big(v2)
    return x.times(y).toNumber()
}

export default times