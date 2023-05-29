const { constructBinaryTree } = require('./helper_binarytree.js');

const values = [3, 9, 20, null, null, 15, 7];
const root = constructBinaryTree(values);



const { preOrderTraversal } = require('./144. Binary Tree Preorder Traversal.js');
const { generateTrees } = require('./95. Unique Binary Search Trees II.js');

console.log(JSON.stringify(generateTrees(2)));