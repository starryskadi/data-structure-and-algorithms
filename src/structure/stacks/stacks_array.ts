export class StackWithArray {
    array: number[] = []

    constructor() {}


    push(val: number): void {
        this.array.push(val)
    }

    pop(): number | null{
        const item = this.array.pop()

        if (!item) {
            return null
        }

        return item
    }

    peek(): number | null {
        const item = this.array[this.array.length - 1]

        if (!item) {
            return null
        }

        return item
    }

    empty(): boolean {
        return this.array.length === 0
    }
}
