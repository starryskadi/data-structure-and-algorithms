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

type BinaryTreeJson<T> = {
    value: T, 
    left: BinaryTreeJson<T> | undefined
    right: BinaryTreeJson<T> | undefined
}

export class BinarySearchTree<T> {
    root: BinaryTreeNode<T> | undefined

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
        let currentNode: BinaryTreeNode<T> | null = this.root

        while (currentNode)  {
            if (value === currentNode.value) {
                return currentNode
            }
            // Decide whether it should put on left - if the value is lower than current node
            if (value < currentNode.value) {
                currentNode =currentNode.left ? currentNode.left: null
            } 
            // Decide whether it should put on the right - if the value is exceed than current node 
            else if (value > currentNode.value) {
                currentNode =currentNode.right ? currentNode.right: null
            } 
        }     
        
        return null
    }

    remove(value: T): boolean {
        // TODO: fix the issue if removed the root node
        if (!this.root) {
            throw Error("There is no data in binary tree yet")  
        }

        let currentNode: BinaryTreeNode<T> = this.root
        let prevNode: BinaryTreeNode<T> = currentNode

        let deleteNode: BinaryTreeNode<T> | null = null
        let deletePrevNode: BinaryTreeNode<T> | null = null
    
        let replaceNode: BinaryTreeNode<T> | null = null

        while (true) {
            if (value === currentNode.value) {
                deletePrevNode = prevNode
                deleteNode = currentNode
                if (currentNode.right) {
                    currentNode = currentNode.right
                }
            }  
            else if (value < currentNode.value) {
                if (!currentNode.left) {
                    replaceNode = currentNode
                    break
                }
            
                prevNode = currentNode
       
                currentNode = currentNode.left
          
            } else {
                if (!currentNode.right) {
                    replaceNode = currentNode
                    break
                }
                prevNode = currentNode
        
                currentNode = currentNode.right
            }
        }

  

        if (deletePrevNode && deleteNode) {
            if (deleteNode.value === deletePrevNode.value) {
                this.root = replaceNode
            }
            else if (deletePrevNode.left?.value === deleteNode.value) {
                deletePrevNode.left = replaceNode
            } else if (deletePrevNode.right?.value === deleteNode.value) {
                deletePrevNode.right = replaceNode
            }

            replaceNode.left = deleteNode.left
            replaceNode.right = deleteNode.right
        }

        if (prevNode.left?.value === replaceNode.value) {
            prevNode.left = undefined
        } else if (prevNode.right?.value === replaceNode.value) [
            prevNode.right = undefined
        ] 

        return true
    }

    traverse(node: BinaryTreeNode<T> | undefined) {
        if (!node) return undefined

        const jsonTree: BinaryTreeJson<T> = {
            value: node.value,
            left: undefined, 
            right: undefined
        }

        jsonTree.left = node.left ? this.traverse(node.left): undefined
        jsonTree.right = node.right ? this.traverse(node.right): undefined

        return jsonTree
    }
}