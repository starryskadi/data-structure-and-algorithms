import { DoublyLinkNode, LinkedNode } from "./linked_node";


export class LinkedNodeList {
    head: LinkedNode | null = null
    tail: LinkedNode | null = null
    length: number = 0
    
    constructor() {}

    append(val: any): void {
        const newNode = new LinkedNode(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            if (this.tail) {
                this.tail.next = newNode
                this.tail = newNode
            }
        }

        this.length++
    }

    prepend(val: any): void {
        const newNode = new LinkedNode(val)
        newNode.next = this.head

        if (this.head) {
            this.head = newNode
        }

        this.length++
    }

    insert(index: any, val: any): void {
        if (index > this.length - 1) {
            throw Error("Index outbound of the length")
        }

        var currentIndex = 0 
        const newNode = new LinkedNode(val)
        let currentHead = this.head
        let prevHead = this.head

        while(currentIndex < index) {
            if (!currentHead) {
                break
            }
            
            prevHead = currentHead
            currentHead = currentHead.next

            currentIndex++
        }

        if (prevHead) {
            newNode.next = currentHead
            prevHead.next = newNode
        }
    }

    remove(index: any) {
        if (index > this.length - 1) {
            throw Error("Index outbound of the length")
        }

        var currentIndex = 0
        let currentHead = this.head
        let prevHead = this.head

        while(currentIndex < index) {
            if (!currentHead) {
                break
            }
            
            prevHead = currentHead
            currentHead = currentHead.next

            currentIndex++
        }

        if (prevHead && currentHead) {
            prevHead.next = currentHead.next
        }
    }

    reverse(): LinkedNode | null {
        // If the item only have one item, no need to reverse
        if (this.length <= 1) {
            return this.head
        }

        let firstItem = this.head 
        this.tail = firstItem
        let secondItem = this.head ? this.head.next : null

        while (secondItem) {
            const thirdItem = secondItem.next

            secondItem.next = firstItem

            firstItem = secondItem

            secondItem = thirdItem
        }

        if (this.head) {
            this.head.next = null
            this.head = firstItem
        }

        return this.head
    }

    printItems(): Array<any> {
        const items: any[] = []
        let currentItem = this.head

        while (currentItem !== null) {
            items.push(currentItem.val)
            currentItem = currentItem.next
        }

        return items
    }
}

export class DoublyLinkNodeList {
    head: DoublyLinkNode | null = null
    tail: DoublyLinkNode | null = null
    length: number = 0

    append(val: any): void {
        const newNode = new DoublyLinkNode(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            if (this.tail) {
                const holdingPointer = this.tail
                this.tail.next = newNode
                this.tail = newNode
                this.tail.prev = holdingPointer
            }
        }

        // console.log(this.head)

        this.length++
    }

    prepend(val: any): void {
        const newNode = new DoublyLinkNode(val)
        newNode.next = this.head

        if (this.head) {
            this.head = newNode
            this.head.prev = null
        }
    }

    insert(index: any, val: any): void {
        if (index > this.length - 1) {
            throw Error("Index outbound of the length")
        }

        var currentIndex = 0 
        const newNode = new DoublyLinkNode(val)
        let currentHead = this.head
        let prevHead = this.head

        while(currentIndex < index) {
            if (!currentHead) {
                break
            }
            
            prevHead = currentHead
            currentHead = currentHead.next

            currentIndex++
        }

        if (prevHead) {
            //  const holdingPointer = prevHead
            newNode.next = currentHead
            newNode.prev = prevHead

            prevHead.next = newNode
            // prevHead.prev = holdingPointer
        }
 
    }

    remove(index: any) {
        if (index > this.length - 1) {
            throw Error("Index outbound of the length")
        }

        var currentIndex = 0
        let currentHead = this.head
        let prevHead = this.head

        while(currentIndex < index) {
            if (!currentHead) {
                break
            }
            
            prevHead = currentHead
            currentHead = currentHead.next

            currentIndex++
        }

        if (prevHead && currentHead) {
            prevHead.next = currentHead.next
        }
    }

    reverse(): DoublyLinkNode | null {
        // If the item only have one item, no need to reverse
        if (this.length <= 1) {
            return this.head
        }

        let firstItem = this.head 
        this.tail = firstItem
   
        let secondItem = this.head ? this.head.next : null

        while (secondItem) {
            const thirdItem = secondItem.next
            const tempSecondItem = secondItem

            secondItem.next = firstItem 
            if (firstItem) firstItem.prev = tempSecondItem

            firstItem = secondItem

            secondItem = thirdItem
        }

        if (this.head) {
            this.head.next = null
            this.head = firstItem
            if (this.head) this.head.prev = null
        }

        return this.head
    }
}