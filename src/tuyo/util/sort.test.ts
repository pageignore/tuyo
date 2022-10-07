import { describe, it, expect } from 'vitest'
import sort from './sort'
describe('sort', () => {
    it.concurrent('[]', async() => {expect(sort([])).toEqual([])})
    it.concurrent('[number]', async() => {expect(sort([1,100,2])).toEqual([1,2,100])})
    it.concurrent('[string]', async() => {expect(sort(['1','100','2'])).toEqual(['1','2','100'])})
    it.concurrent('[string] abc', async() => {expect(sort(['zoom','book','apple'])).toEqual(['apple','book','zoom'])})
    it.concurrent('array', async() => {
        const res = sort(['a','z','zz','zzzza', 'z',Infinity, -Infinity, 'c', true, ['3', 1, '22',4, 2, '45' , 22 ],false,true,11,{a: 22}, [77, 1, 100],'ac', {a: 111}, 2, 'aacc', '3', 'aab', 'aabc', {a: 10, b: 1, c: 2}, 'book', {a: 1, b: 10}, new Set([1,2]), new Map([['a', 1],['b', 2],['c', 2]]), new Set([30,40]), new Map([['bb', 99],['cc', 99]]), null, false,'2', undefined]);
        expect(res).toEqual([null,false,false,true,true,-Infinity,2,11,Infinity,'2','3','a','aab','aabc','aacc','ac','book','c','z','z','zz','zzzza',[1,77,100],[1,2,4,22,'3','22','45'],{'a':22},{'a':111},{'a':1,'b':10},{a: 10, b: 1, c: 2},new Set([1,2]),new Set([30,40]),new Map([['bb', 99],['cc', 99]]),new Map([['a', 1],['b', 2],['c', 2]]),undefined])
    })
    it.concurrent('array cb', async() => {
        const arr = ['a','z','zz','zzzza', 'z',Infinity, -Infinity, 'c', true, ['3', 1, '22',4, 2, '45' , 22 ],false,true,11,{a: 22}, [77, 1, 100],'ac', {a: 111}, 2, 'aacc', '3', 'aab', 'aabc', {a: 10, b: 1, c: 2}, 'book', {a: 1, b: 10}, new Set([1,2]), new Map([['a', 1],['b', 2],['c', 2]]), new Set([30,40]), new Map([['bb', 99],['cc', 99]]), null, false,'2', undefined]
        const res = sort(arr, ((a,b) => {
            return b - a
        }));
        expect(res).toEqual([new Map([['a', 1],['b', 2],['c', 2]]),new Map([['bb', 99],['cc', 99]]),new Set([30,40]),new Set([1,2]),{a: 10, b: 1, c: 2},{'a':1,'b':10},{'a':111},{'a':22},['45','22','3',22,4,2,1],[100,77,1],'zzzza','zz','z','z','c','book','ac','aacc','aabc','aab','a','3','2',Infinity,11,2,-Infinity,true,true,false,false,null,undefined])
    })
})
