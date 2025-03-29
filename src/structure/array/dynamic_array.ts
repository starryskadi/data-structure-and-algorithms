export class DynamicArray<T> {
    items: Record<number, T> = {}
    currentIndex: number = 0


    constructor() { }

    push(value: T): void {
        this.items[this.currentIndex] = value
        this.currentIndex++
    }

    pop(): void {
        delete this.items[this.currentIndex]
        this.currentIndex--
    }

    unshift(value: T): void {
        this.unshiftItems(0)
        this.items[0] = value
        this.currentIndex++
    }

    shift(): void {
        delete this.items[0]
        this.shiftItems(1)

        this.currentIndex--
    }

    delete(index: number): void {
        delete this.items[index]

        this.shiftItems(index + 1)

        this.currentIndex--
    }

    private unshiftItems(index: number): void {
        for (var i = this.currentIndex - 1; i >= index; i--) {
            const prevItem = this.items[i]
            this.items[i + 1] = prevItem
        }

        delete this.items[index]
    }

    private shiftItems(index: number): void {
        for (var i = index; i < this.currentIndex; i++) {
            const prevItem = this.items[i]
            this.items[i - 1] = prevItem
        }

        delete this.items[this.currentIndex - 1]
    }

    get(index: number) {
        if (index < 0 || index > this.currentIndex) {
            throw Error("Index: out of bound")
        }

        if (this.items[index]) {
            return this.items[index]
        }
        return null
    }

    set(index: number, value: T): void {
        if (index < 0 || index > this.currentIndex) {
            throw Error("Index: out of bound")
        }
        
        this.items[index] = value
    }

    length(): number {
        return this.currentIndex
    }

}