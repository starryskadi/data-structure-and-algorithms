import { StaticArray } from "./static_array"

describe('Static Array', () => { 
    it("Static Array can be created", () => {
        const array = new StaticArray<number>(10)

        expect(array.maxItems).toBe(10)
    })

    it("Static Array can't be exceed than it created (max items)", () => {
        const array = new StaticArray<number>(1)

        array.push(1)

        expect(() => array.push(2)).toThrow()
    })

    it("Static Array can push new elements", () => {
        const array = new StaticArray<number>(5) 

        array.push(1)

        expect(array.get(0)).toBe(1)
    })

    it("Static array can pop the last element", () => {
        const array = new StaticArray<number>(5)

        array.push(1)
        array.push(2)

        array.pop()

        expect(array.length()).toBe(1)
    })

    it("Static array can get the correct length", () => {
        const array = new StaticArray<number>(5) 

        array.push(1)
        array.push(2)
        array.push(3)

        array.pop()

        expect(array.length()).toBe(2)
    })

    it("Static array's first item can removed with shift", () => {
        const array = new StaticArray<number>(5) 

        array.push(1)
        array.push(2)
        array.push(3)

        array.shift()

        expect(array.items).toEqual({
            "0": 2,
            "1": 3
        })
    })

    it("Static array's first item can be added with unshift", () => {
        const array = new StaticArray<number>(5) 

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

    it("Static array's can be deleted with delete index", () => {
        const array = new StaticArray<number>(5) 

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