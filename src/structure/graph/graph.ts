export class Graph {
    numerOfNodes: number = 0
    adjacentList: Record<string, string[]> = {}

    constructor() {}

    addVertex(node: string) {
        this.adjacentList[node] = []
    }

    addEdge(node1: string, node2: string) {
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            throw Error("Connecting Nodes: Not Found")
        }

        const isNodeOneConnectToNodeTwo = !!this.adjacentList[node1].find((each) => each === node2)
        if (!isNodeOneConnectToNodeTwo) {
            this.adjacentList[node1].push(node2)
        }

        const isNodeTwoConnectToNodeOne = !!this.adjacentList[node2].find((each) => each === node1)

        if (!isNodeTwoConnectToNodeOne) {
            this.adjacentList[node2].push(node1)
        }
    }
}