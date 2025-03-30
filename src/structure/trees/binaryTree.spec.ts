import { BinarySearchTree, BinaryTreeNode } from "./binaryTree"


describe('Binary Tree', () => { 
    it("Binary Tree can be inserted", () => {
        const binarySearchTree = new BinarySearchTree()
        binarySearchTree.insert(50)
        binarySearchTree.insert(30)
        binarySearchTree.insert(55)

        binarySearchTree.insert(29)
        binarySearchTree.insert(31)

        const lookupItem = binarySearchTree.lookup(30)

        expect(lookupItem).toEqual(new BinaryTreeNode(30, new BinaryTreeNode(29), new BinaryTreeNode(31)))
    })
 })