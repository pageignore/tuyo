import type { Object, ITuyo} from './internal/type'
import getTypeUpper from './internal/getTypeUpper'
import getLength from './internal/getLength'
import getCurrItem from './internal/getCurrItem'
import getType from './util/getType'
import each from './util/each'
import reduce from './util/reduce'

const activeSymbol = Symbol()

class Tuyo implements ITuyo {
    #value:string
    #type:string
    #length:number
    iterator:Object = {
        [activeSymbol]: 0,
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

    each(callback:Function, direction?: string | Function) {
        each(this.value, callback, direction)
    }

    reduce(callback:Function, initValue?:any) {
        reduce(this.value, callback, initValue)
    }

    #next():Object|null {
        const active:number = this.iterator[activeSymbol]
        const raw = getCurrItem(this.value, active)
        this.iterator[activeSymbol]++
        return raw;
    }

    // #setValue(val:any) {
    //     this.#value = val
    // }

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
 