export class LinkedNode<T> {
    val: T | null
    next: LinkedNode<T> | null

    constructor(val: any, next?: LinkedNode<T>) {
        this.val = val || null
        this.next = next || null
    }
}

export class DoublyLinkNode<T> extends LinkedNode<T> {
    declare next: DoublyLinkNode<T> | null
    prev: DoublyLinkNode<T> | null

    constructor(val: any, next?: DoublyLinkNode<T>, prev?: DoublyLinkNode<T>) {
        super(val, next)
        this.prev = prev || null
    }
}