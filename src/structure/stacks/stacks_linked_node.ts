import { LinkedNode } from "../linked_list/linked_node"


export class StackWithLinkedNode<T> {
    top: LinkedNode<T> | null = null
    bottom: LinkedNode<T> | null = null
    length: number = 0

    constructor() {}

    push(val: any): void { 
        const newNode = new LinkedNode<T>(val)
        if (!this.bottom) {
            this.bottom = newNode
            this.top = this.bottom
        } else {
            const holdingPointer = this.top 
            this.top = newNode
            this.top.next = holdingPointer
        }

        this.length++
    }

    pop(): LinkedNode<T> | null {
        if (!this.top) {
            return null
        }

        if (this.top === this.bottom)
        {
            this.bottom = null
        }

        const holdingPointer  = this.top
        this.top = this.top.next

        return holdingPointer
    }

    peek(): LinkedNode<T> | null {
        if (!this.top) {
            return null
        }

        return this.top
    }

    empty(): boolean {
        return this.length === 0
    }
}