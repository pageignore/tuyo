import { describe, it, expect } from 'vitest'
import isBaseType from './isBaseType'
// ['number', 'string', 'boolean', 'symbol', 'null', 'undefined']
describe('isBaseType', () => {
    it('Parameter is empty', async() => {expect(isBaseType()).toEqual(true)})
    it.concurrent('number', async() => {expect(isBaseType(123)).toEqual(true)})
    it.concurrent('string', async() => {expect(isBaseType('string')).toEqual(true)})
    it.concurrent('boolean', async() => {expect(isBaseType(false)).toEqual(true)})
    it.concurrent('symbol', async() => {expect(isBaseType(Symbol())).toEqual(true)})
    it.concurrent('null', async() => {expect(isBaseType(null)).toEqual(true)})
    it.concurrent('undefined', async() => {expect(isBaseType(undefined)).toEqual(true)})

    it.concurrent('array', async() => {expect(isBaseType([])).toEqual(false)})
    it.concurrent('object', async() => {expect(isBaseType({})).toEqual(false)})
    it.concurrent('set', async() => {expect(isBaseType(new Set())).toEqual(false)})
    it.concurrent('map', async() => {expect(isBaseType(new Map())).toEqual(false)})

})
