import { DynamicArray } from "./dynamic_array"

describe('Dynamic Array', () => { 
    it("Dynamic Array can be created and add item", () => {
        const array = new DynamicArray<number>()

        array.push(1)
        array.push(1)
        array.push(1)
        array.push(1)
        array.push(1)
        array.push(1)
        array.push(1)
        array.push(1)
        array.push(1)
        array.push(1)

        expect(array.length()).toBe(10)
    })

    it("Dynamic Array can push new elements", () => {
        const array = new DynamicArray<number>() 

        array.push(1)

        expect(array.get(0)).toBe(1)
    })

    it("Dynamic array can pop the last element", () => {
        const array = new DynamicArray<number>()

        array.push(1)
        array.push(2)

        array.pop()

        expect(array.length()).toBe(1)
    })

    it("Dynamic array can get the correct length", () => {
        const array = new DynamicArray<number>() 

        array.push(1)
        array.push(2)
        array.push(3)

        array.pop()

        expect(array.length()).toBe(2)
    })

    it("Dynamic array's first item can removed with shift", () => {
        const array = new DynamicArray<number>() 

        array.push(1)
        array.push(2)
        array.push(3)

        array.shift()

        expect(array.items).toEqual({
            "0": 2,
            "1": 3
        })
    })

    it("Dynamic array's first item can be added with unshift", () => {
        const array = new DynamicArray<number>() 

        array.push(1)
        array.push(2)
        array.push(3)

        array.unshift(0)

        expect(array.items).toEqual({
            "0": 0,
            "1": 1,
            "2": 2, 
            "3": 3
        })
    })

    it("Dynamic array's can be deleted with delete index", () => {
        const array = new DynamicArray<number>() 

        array.push(1)
        array.push(2)
        array.push(3)

        array.delete(1)

        expect(array.items).toEqual({
            "0": 1,
            "1": 3
        })
    })
})