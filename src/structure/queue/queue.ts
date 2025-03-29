import { LinkedNode } from "../linked_list/linked_node"

export class Queue<T> {
    first: LinkedNode<T> | null = null
    last: LinkedNode<T> | null = null
    length: number = 0

    enqueue(val: T): void {
        const newNode = new LinkedNode<T>(val)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
        } else {
            if (this.last) {
                this.last.next = newNode
            }
            this.last = newNode
        } 

        this.length++
    }

    dequeue(): T | null {
        if (!this.first) {
            return null
        }

        if (this.first === this.last) {
            this.last = null
        }

        const holdingPointer = this.first
        this.first = this.first.next

        this.length--

        return holdingPointer.val
    }

    peek(): T | null {
        return this.first ? this.first.val : null
    }

    empty(): boolean {
        return this.length === 0
    }
}