export class LinkedNode {
    val: any | null
    next: LinkedNode | null

    constructor(val: any, next?: LinkedNode) {
        this.val = val || null
        this.next = next || null
    }
}

export class DoublyLinkNode extends LinkedNode {
    declare next: DoublyLinkNode | null
    prev: DoublyLinkNode | null

    constructor(val: any, next?: DoublyLinkNode, prev?: DoublyLinkNode) {
        super(val, next)
        this.prev = prev || null
    }
}