import { LinkedNode } from "../../structure/linked_list/linked_node"

export function mergeTwoLists(list1: LinkedNode<number> | null, list2: LinkedNode<number> | null): LinkedNode<number> | null {
    const dummy = new LinkedNode<number>(0)
    let current = dummy

    let item1 = list1
    let item2 = list2

    while (item1 || item2) {
        let firstItem

        if (!item1) {
            if (item2) {
                firstItem = item2
                item2 = item2.next
            } else {
                item2 = null
            }
        } 

        if (!item2) {
            if (item1) {
                firstItem = item1
                if (item1.next) {
                    item1 = item1.next
                } else {
                    item1 = null
                }  
            }
        }

        if (item1 && item2 && item1.val && item2.val) {
            if (item2.val < item1.val) {
                firstItem = item2
                item2 = item2.next
            } else if (item1.val <= item2.val) {
                 firstItem = item1
                 item1 = item1.next
            }
        }
     

        if (firstItem) {
            current.next = firstItem
            current = firstItem
        }
    }

    return dummy.next
};