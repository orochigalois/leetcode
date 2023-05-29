const { constructBinaryTree } = require('./helper_binarytree.js');

const values = [3,9,20,null,null,15,7];
const root = constructBinaryTree(values);

function zigzagLevelOrder(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];
    let isLeftToRight = true;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (isLeftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
        isLeftToRight = !isLeftToRight;
    }

    return result;
}

console.log(JSON.stringify(zigzagLevelOrder(root)));