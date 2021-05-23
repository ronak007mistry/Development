


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {

            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }

        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    search(node, data) {

        if (node === null)
            return null;

        else if (data < node.data)
            return this.search(node.left, data);

        else if (data > node.data)
            return this.search(node.right, data);

        else
            return node;
    }

    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    findMaxNode(node) {
        if (node.right === null)
            return node;
        else
            return this.findMaxNode(node.right);
    }
}