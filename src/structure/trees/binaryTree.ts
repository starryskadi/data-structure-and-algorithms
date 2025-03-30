export class BinaryTreeNode<T> { 
    value: T
    left: BinaryTreeNode<T> | undefined
    right: BinaryTreeNode<T> | undefined

    constructor(value: T, left?: BinaryTreeNode<T>, right?: BinaryTreeNode<T>) {
        this.value = value

        this.left = left
        this.right = right
    }
}

export class BinarySearchTree<T> {
    root: BinaryTreeNode<T> | null = null 

    constructor() {}

    insert(value: T): BinarySearchTree<T> {
        const newNode = new BinaryTreeNode<T>(value)
        if (!this.root) {
            this.root = newNode
            return this
        }

        let currentNode: BinaryTreeNode<T> = this.root

        while (true)  {
            if (value === currentNode.value) {
                throw Error("The node with that value already existed")
            }
            // Decide whether it should put on left - if the value is lower than current node
            else if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    break
                }

                currentNode = currentNode.left
            // Decide whether it should put on the right - if the value is exceed than current node 
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    break
                }

                currentNode = currentNode.right
            }
        }        

        return this
    }

    lookup(value: T): BinaryTreeNode<T> | null {
        if (!this.root) {
            throw Error("There is no data in binary tree yet")
        }
        let currentNode: BinaryTreeNode<T> = this.root
        let foundNode: BinaryTreeNode<T> | null = null

        while (true)  {
            // Decide whether it should put on left - if the value is lower than current node
            if (value === currentNode.value) {
                foundNode = currentNode
                break
            }
            else if (value < currentNode.value) {
                if (currentNode.left && currentNode.left.value) {
                    currentNode = currentNode.left
                } else if (!currentNode.left) {
                    break
                }
            // Decide whether it should put on the right - if the value is exceed than current node 
            } else if (value > currentNode.value) {
                if (currentNode.right && currentNode.right.value) {
                    currentNode = currentNode.right
                } else if (!currentNode.right) {
                    break
                }
            } 
        }     
        
        return foundNode
    }

    traverse(node: BinaryTreeNode<T>) {
  
    }
}