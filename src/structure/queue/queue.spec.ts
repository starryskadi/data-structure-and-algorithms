import { Queue } from "./queue"

describe("Queue", () => {
    it("Queue can be enqueued", () => {
        const queue = new Queue<number>()

        queue.enqueue(1)

        expect(queue.peek()).toBe(1)
    })

    it("Queue can be dequeued", () => {
        const queue = new Queue<number>()

        queue.enqueue(1)
        queue.enqueue(2)

        queue.dequeue()

        expect(queue.peek()).toBe(2)
    })

    it("Queue can be peeked", () => {
        const queue = new Queue<string>()

        queue.enqueue("John")
        queue.enqueue("Smith")

        expect(queue.peek()).toBe("John")
    })


    it("Queue length is correct, when enqueue and dequeue", () => {
        const queue = new Queue<string>()

        queue.enqueue("John")
        queue.enqueue("Smith")

        queue.dequeue()

        expect(queue.length).toBe(1)
    })
})