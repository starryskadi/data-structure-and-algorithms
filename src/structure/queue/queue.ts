import { LinkedNode } from "../linked_list/linked_node"

export class Queue {
    first: LinkedNode | null = null
    current: LinkedNode | null = null
    length: number = 0

    enqueue(val: any): void {
        const newNode = new LinkedNode(val)
        if (!this.first) {
            this.first = newNode
            this.current = this.first
        } else {
            if (this.current) {
                this.current.next = newNode
            }
            this.current = newNode
        }
    }

    dequeue(): number | null {
        if (!this.first) {
            return null
        }

        const holdingPointer = this.first
        this.first = this.first.next

        return holdingPointer.val
    }

    peek(): number | null {
        return this.first ? this.first.val : null
    }

    empty(): boolean {
        return this.length === 0
    }
}