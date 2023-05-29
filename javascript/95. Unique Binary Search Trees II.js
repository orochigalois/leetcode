const { TreeNode } = require('./helper_binarytree.js');
function generateTrees(n) {
    if (n === 0) {
        return [];
    }

    return generateTreesRecursive(1, n);
}

function generateTreesRecursive(start, end) {
    const result = [];

    if (start > end) {
        result.push(null);
        return result;
    }

    for (let i = start; i <= end; i++) {
        const leftSubtrees = generateTreesRecursive(start, i - 1);
        const rightSubtrees = generateTreesRecursive(i + 1, end);

        for (const leftSubtree of leftSubtrees) {
            for (const rightSubtree of rightSubtrees) {
                const root = new TreeNode(i);
                root.left = leftSubtree;
                root.right = rightSubtree;
                result.push(root);
            }
        }
    }

    return result;
}


module.exports = { generateTrees };