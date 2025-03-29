import { LinkedNode } from "../../structure/linked_list/linked_node"
   
export function addTwoNumbersWithLinkedNode(l1: LinkedNode | undefined, l2: LinkedNode | undefined): LinkedNode | null {
    let item1 = l1
    let item2 = l2
    let carry = 0;

    let dummyNode = new LinkedNode(0)
    let currentNode = dummyNode

    while(item1 || item2 || carry !== 0) {
        let sum = 0 

        if (item1) {
            sum += item1.val 
            if (item1.next)
                {
                    item1 = item1.next
                } else {
                    item1 = undefined
            }
        }

        if (item2) {
            sum += item2.val 

            if (item2.next) {
                item2 = item2.next
            } else {
                item2 = undefined
            }
        }

        sum += carry

        carry = Math.floor(sum / 10)
        sum = sum % 10

        const newNode = new LinkedNode(sum)
        currentNode.next = newNode
        currentNode = newNode
    }

    return dummyNode.next
};