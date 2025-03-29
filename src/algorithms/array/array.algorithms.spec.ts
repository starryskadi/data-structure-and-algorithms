import { mergeTwoSortedArray } from "./array_merge";
import { reverse_string } from "./array_reverse";

describe("Algorithms: String Reverse", () => {
    it("Can reverse the string 'Hello World'", () => {
        const reversed_string = reverse_string("Hello World")

        expect(reversed_string).toEqual("dlroW olleH")
    })

    it("Merge two sorted array", () => {
            const firstArray =[0, 1, 2, 5]
            const secondArray = [0, 1, 5, 8]

            const mergedArray = mergeTwoSortedArray(firstArray, secondArray)

            expect(mergedArray).toEqual([0, 0, 1, 1, 2, 5, 5,8])
    })
})