import { DoublyLinkNode, LinkedNode } from "./linked_node";


export class LinkedNodeList<T> {
    head: LinkedNode<T> | null = null
    tail: LinkedNode<T> | null = null
    length: number = 0
    
    constructor() {}

    append(val: T): void {
        const newNode = new LinkedNode<T>(val)

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

    prepend(val: T): void {
        const newNode = new LinkedNode<T>(val)
        newNode.next = this.head

        if (this.head) {
            this.head = newNode
        }

        this.length++
    }

    insert(index: number, val: T): void {
        if (index >= this.length) {
            this.append(val)
            return
        }

        if (index === 0) {
            this.prepend(val)
            return
        }

        const newNode = new LinkedNode<T>(val)
        let leadingNode = this.traverseToIndex(index - 1)
        const secondNode = leadingNode ? leadingNode.next: null
      
        if (leadingNode) leadingNode.next = newNode
        newNode.next = secondNode

        this.length++
    }

    remove(index: any) {
        if (index > this.length - 1) {
            throw Error("Index outbound of the length")
        }

        let leadingNode = this.traverseToIndex(index - 1)
        const nextNode = leadingNode?.next?.next
        if (leadingNode) leadingNode.next = nextNode || null

        this.length--
    }

    reverse(): LinkedNode<T> | null {
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

    traverseToIndex(index: number) {
        let counter = 0
        let currentNode = this.head

        console.log(index)

        while (counter !== index) {
            currentNode = currentNode ? currentNode.next : null
            counter++
        }

        return currentNode
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

export class DoublyLinkNodeList<T> {
    head: DoublyLinkNode<T> | null = null
    tail: DoublyLinkNode<T> | null = null
    length: number = 0

    append(val: T): void {
        const newNode = new DoublyLinkNode<T>(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            if (this.tail) {
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            }
        }

        this.length++
    }

    prepend(val: T): void {
        const newNode = new DoublyLinkNode<T>(val)
        newNode.next = this.head

        if (this.head) {
            this.head.prev = newNode
            this.head = newNode
        }
    }

    insert(index: number, val: T): void {
        if (index >= this.length) {
            this.append(val)
            return
        }

        if (index === 0) {
            this.prepend(val)
            return
        }

        const newNode = new DoublyLinkNode<T>(val)
        let leadingNode = this.traverseToIndex(index - 1)
        const follower = leadingNode ? leadingNode.next: null
      
        if (leadingNode) leadingNode.next = newNode
        newNode.prev = leadingNode
        newNode.next = follower
        if (follower) follower.prev = newNode

        this.length++
    }

    remove(index: number) {
        if (index > this.length - 1) {
            throw Error("Index outbound of the length")
        }

        let leadingNode = this.traverseToIndex(index - 1)
        const nextNode = leadingNode?.next?.next
        if (nextNode) nextNode.prev = leadingNode
        if (leadingNode) leadingNode.next = nextNode || null

        this.length--
    }

    reverse(): DoublyLinkNode<T> | null {
        // If the item only have one item, no need to reverse
        if (this.length <= 1) {
            return this.head
        }

        let firstItem = this.head
        this.tail = firstItem

        let secondItem = this.head ? this.head.next : null

        while(secondItem) {
            const temp = secondItem.next
            const secondItemPonter = secondItem

            secondItem.next = firstItem

            if (firstItem) { 
                secondItem.prev = firstItem.prev
                firstItem.prev = secondItemPonter
            }
            
            firstItem = secondItem
       

            secondItem = temp
        }

        // change next value of last to null
        if (this.head) this.head.next = null

        this.head = firstItem

        console.log(this.head)

        return this.head
    }

    traverseToIndex(index: number) {
        let counter = 0
        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode ? currentNode.next : null
            counter++
        }

        return currentNode
    }

    printItems(): Array<T> {
        const items: any[] = []
        let currentItem = this.head

        while (currentItem !== null) {
            items.push(currentItem.val)
            currentItem = currentItem.next
        }

        return items
    }
}