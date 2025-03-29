// import { StackWithLinkedNode } from "../stacks/stacks_linked_node"

// class MyQueueWithTwoStacks { 
//     stack: StackWithLinkedNode
//     stack2: StackWithLinkedNode

//     constructor() {
//         this.stack = new StackWithLinkedNode()
//         this.stack2 = new StackWithLinkedNode()
//     }

//     push(x: number): void {
//         this.stack.push(x)
//     }  

//     pop(): number | null {
//         if (this.stack2.empty()) {
//             let lastItem = this.stack.pop()
//             while (lastItem) {
//                 this.stack2.push(lastItem.val)
//                 lastItem = this.stack.pop()
//             }
//         } 

//         return this.stack2.pop()?.val
//     }

//     peek(): number | null {
//         if (this.stack2.empty()) {
//             let lastItem = this.stack.pop()
        
//             while (lastItem) {
//                 this.stack2.push(lastItem.val)
//                 lastItem = this.stack.pop()
//             }
//         } 
   
//         return this.stack2.peek()?.val
//     }

//     empty(): boolean {
//         return this.stack.empty() && this.stack2.empty()
//     }
// }