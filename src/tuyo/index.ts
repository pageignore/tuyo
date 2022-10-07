import type { Object, ITuyo} from './internal/type'
import getTypeUpper from './internal/getTypeUpper'
import getLength from './internal/getLength'
import getCurrItem from './internal/getCurrItem'
import getType from './util/getType'
import each from './util/each'
import reduce from './util/reduce'
import plus from './util/plus'
import minus from './util/minus'
import times from './util/times'
import div from './util/div'
import toFixed from './util/toFixed'
import has from './util/has'
import indexOf from './util/indexOf'
import sort from './util/sort'
import isSameType from './util/isSameType'
import isSame from './util/isSame'

const activeSymbol = Symbol()

class Tuyo implements ITuyo {
    #value:any
    #type:string
    #length:number
    iterator:Object = {
        [activeSymbol]: 0,
        isDone: this.#isDone.bind(this),
        next: this.#next.bind(this)
    }

    constructor(value:any) {
        this.#value = value;
        this.#type = getType(value)
        this.#length = getLength(value)
        const _typeForUpper:string = getTypeUpper(value)
        // @ts-ignore
        this[`is${_typeForUpper}`] = true
    }

    each(callback:Function, direction?: string | ((a: any, b: any, atype: string, btype: string) => number)) {
        each(this.value, callback, direction)
        return this
    }

    reduce(callback:Function, initValue?:any) {
        return reduce(this.value, callback, initValue)
    }

    sort(callback?:((a: any, b: any, atype: string, btype: string) => number) | undefined, orderConfig?:Object) {
        if(this.#type !== 'array') throw Error('Can only Sort on Array')
        sort(this.#value, callback, orderConfig)
    }

    has(item:any) {
        return has(this.#value, item)
    }
    

    indexOf(item:any) {
        if(this.#type !== 'array') throw Error('Can only indexOf on Array')
        return indexOf(this.#value, item)
    }

    isSameType(target:any) {
        return isSameType(this.#value, target)
    }

    isSame(target:any) {
        return isSame(this.#value, target)
    }

    plus(val:string|number) {
        const res = plus(this.#value,val)
        this.#setValue(res)
        return this
    }

    minus(val:string|number) {
        const res = minus(this.#value,val)
        this.#setValue(res)
        return this
    }
    
    times(val:string|number) {
        const res = times(this.#value,val)
        this.#setValue(res)
        return this
    }

    div(val:string|number) {
        const res = div(this.#value,val)
        this.#setValue(res)
        return this
    }

    toFixed(dp:number) {
        const res = toFixed(this.#value, dp)
        this.#setValue(res)
        return this
    }

    #isDone():boolean {
        return this.iterator[activeSymbol] >= this.#length
    }

    #next():Object|null {
        const active:number = this.iterator[activeSymbol]
        const raw = getCurrItem(this.value, active)
        this.iterator[activeSymbol]++
        return raw
    }

    #setValue(value:any) {
        const oldType = getTypeUpper(this.#value)
        // @ts-ignore
        delete this[`is${oldType}`]
        this.#value = value;
        this.#type = getType(value)
        this.#length = getLength(value)
        const _typeForUpper:string = getTypeUpper(value)
        // @ts-ignore
        this[`is${_typeForUpper}`] = true
    }

    get value() {
        return this.#value
    }

    get type() {
        return this.#type
    }

    get length() {
        return this.#length
    }

}

export function tuyo(parameter:any):Object {
    return new Tuyo(parameter)
}
 