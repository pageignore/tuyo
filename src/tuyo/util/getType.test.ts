import { describe, it, expect } from 'vitest'
import getType from './getType'
describe('getType', () => {
    it('Parameter is empty', async() => {expect(getType()).toEqual('undefined')})
    it.concurrent('undefined', async() => {expect(getType(undefined)).toEqual('undefined')})
    it.concurrent('null', async() => {expect(getType(null)).toEqual('null')})
    it.concurrent('boolean', async() => {expect(getType(false)).toEqual('boolean')})
    it.concurrent('number is 0', async() => {expect(getType(0)).toEqual('number')})
    it.concurrent('number is NaN', async() => {expect(getType(({} - {}))).toEqual('NaN')})
    it.concurrent('""', async() => {expect(getType('')).toEqual('string')})
    it.concurrent('"string"', async() => {expect(getType('string')).toEqual('string')})
    it.concurrent('array', async() => {expect(getType([])).toEqual('array')})
    it.concurrent('object', async() => {expect(getType({})).toEqual('object')})
    it.concurrent('set', async() => {expect(getType(new Set())).toEqual('set')})
    it.concurrent('map', async() => {expect(getType(new Map())).toEqual('map')})
    it.concurrent('WeakSet', async() => {expect(getType(new WeakSet())).toEqual('weakset')})
    it.concurrent('WeakMap', async() => {expect(getType(new WeakMap())).toEqual('weakmap')})
    it.concurrent('function', async() => {expect(getType(new Function())).toEqual('function')})
    it.concurrent('symbol', async() => {expect(getType(Symbol())).toEqual('symbol')})
    it.concurrent('date', async() => {expect(getType(new Date())).toEqual('date')})
    it.concurrent('regExp', async() => {expect(getType(new RegExp('s'))).toEqual('regexp')})
    it.concurrent('Arguments', async() => {
        function fn() {
            expect(getType(arguments)).toEqual('arguments')
        }
        fn()
    })
})
