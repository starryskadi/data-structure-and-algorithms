import { HashTable } from "./hash_table"

describe("Hash Table", () => {
    it("Hash Table can create and delete", () => {
        const hashTable = new HashTable<number>(50)

        hashTable.set("10", 50)
        hashTable.set("30", 22)
        hashTable.set("35", 25)
        hashTable.set("50", 35)

        const item = hashTable.get("10")

        expect(item?.[1]).toBe(50)
    })

    it("Hash Table can get All keys", () => {
        const hashTable = new HashTable<number>(50)

        hashTable.set("10", 50)
        hashTable.set("30", 22)
        hashTable.set("35", 25)
        hashTable.set("50", 35)

        const key = hashTable.keys().find((key) => {
            return key === "30"
        })

        expect(key).toBe("30")
    })
})