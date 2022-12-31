/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    class Queue {
        constructor() {
            this.queue = [];
        }
        enqueue(element) {
            this.queue.push(element);
            return this.queue;
        }

        dequeue() {
            return this.queue.shift();
        }
        empty() {
            return this.queue.length === 0;
        }
    }
    let re = [];
    if (root === null) {
        return re;
    }
    let temp = [];
    const nodes = new Queue();
    nodes.enqueue(root)
    let nextLevel = 0;
    let toBePrinted = 1;
    while (!nodes.empty()) {
        let pNode = nodes.dequeue();
        temp.push(pNode.val)
        if (pNode.left !== null) {
            nodes.enqueue(pNode.left);
            nextLevel++;
        }
        if (pNode.right !== null) {
            nodes.enqueue(pNode.right);
            nextLevel++;
        }
        toBePrinted--;
        if (toBePrinted === 0) {
            re.push(JSON.parse(JSON.stringify(temp)))
            temp.length=0
            toBePrinted = nextLevel;
            nextLevel = 0;
        }
    }

    return re;
};