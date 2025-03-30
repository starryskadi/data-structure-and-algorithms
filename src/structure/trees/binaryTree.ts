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

    insert(value: T) {
        const newNode = new BinaryTreeNode<T>(value)
        if (!this.root) {
            this.root = newNode
            return
        }

        let currentNode: BinaryTreeNode<T> | null = this.root

        while (currentNode)  {
            if (value === currentNode.value) {
                currentNode = null
                throw Error("The node with that value already existed")
            }
            // Decide whether it should put on left - if the value is lower than current node
            else if (value < currentNode.value) {
                if (currentNode.left && currentNode.left.value) {
                    currentNode = currentNode.left
                } else if (!currentNode.left) {
                    currentNode.left = newNode
                    currentNode = null
                }
            // Decide whether it should put on the right - if the value is exceed than current node 
            } else if (value > currentNode.value) {
                if (currentNode.right && currentNode.right.value) {
                    currentNode = currentNode.right
                } else if (!currentNode.right) {
                    currentNode.right = newNode
                    currentNode = null
                }
            }
        }        
    }

    lookup(value: T) {
        let currentNode: BinaryTreeNode<T> | null = this.root
        let foundNode: BinaryTreeNode<T> | null = null

        while (currentNode)  {
            // Decide whether it should put on left - if the value is lower than current node
            if (value === currentNode.value) {
                foundNode = currentNode
                currentNode = null
            }
            else if (value < currentNode.value) {
                if (currentNode.left && currentNode.left.value) {
                    currentNode = currentNode.left
                } else if (!currentNode.left) {
                    currentNode = null
                }
            // Decide whether it should put on the right - if the value is exceed than current node 
            } else if (value > currentNode.value) {
                if (currentNode.right && currentNode.right.value) {
                    currentNode = currentNode.right
                } else if (!currentNode.right) {
                    currentNode = null
                }
            } 
        }     
        
        return foundNode
    }

    traverse(node: BinaryTreeNode<T>) {
  
    }
}