import { BinarySearchTree, BinaryTreeNode } from "./binaryTree"


describe('Binary Tree', () => { 
    it("Binary Tree can be inserted and lookup", () => {
        const binarySearchTree = new BinarySearchTree()
        binarySearchTree.insert(50)
        binarySearchTree.insert(30)
        binarySearchTree.insert(55)

        binarySearchTree.insert(29)
        binarySearchTree.insert(31)

        const lookupItem = binarySearchTree.lookup(30)

        expect(lookupItem).toEqual(new BinaryTreeNode(30, new BinaryTreeNode(29), new BinaryTreeNode(31)))
    })

    it("Binary Tree can't be inserted thne same value", () => {
        const binarySearchTree = new BinarySearchTree()
        binarySearchTree.insert(50)
        binarySearchTree.insert(30)
        binarySearchTree.insert(55)

        binarySearchTree.insert(29)
        binarySearchTree.insert(31)

        expect(() => binarySearchTree.insert(29)).toThrow()
    })
 })