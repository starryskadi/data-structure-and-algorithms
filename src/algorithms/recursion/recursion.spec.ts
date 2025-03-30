import { findFactorialIterative, findFactorialRecursive } from "./factorial"
import { fibonacciIterative, fibonacciRecursive } from "./fibnoncci"
import { reverseStringWithRecursive } from "./reverse_string"

describe("Factorial", () => {
    it("findFactorialIterative", () => {
        const result = findFactorialIterative(5)
        expect(result).toEqual(5 * 4 * 3 * 2 * 1)
    })

    it("findFactorialRecursive", () => {
        const result = findFactorialRecursive(5)

        expect(result).toEqual(5 * 4 * 3 * 2 * 1)
    })

    it("fibonacciIterative", () => {
        const result = fibonacciIterative(6)

        expect(result).toEqual(8)
    })

    it("fibonacciRecursive", () => {
        const result = fibonacciRecursive(6)

        expect(result).toEqual(8)
    })

    it("reverseStringWithRecursive", () => {
        const result = reverseStringWithRecursive("Hello World")

        expect(result).toEqual("dlroW olleH")
    })
})