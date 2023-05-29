const { constructBinaryTree } = require('./helper_binarytree.js');
const { preOrderTraversal } = require('./144. Binary Tree Preorder Traversal.js');

describe('preOrderTraversal', () => {
    test('Returns the correct pre-order traversal for a binary tree -case 1', () => {
        const values = [3, 9, 20, null, null, 15, 7];
        const root = constructBinaryTree(values);
        const expectedTraversal = [3, 9, 20, 15, 7];

        expect(preOrderTraversal(root)).toEqual(expectedTraversal);
    });
    test('Returns the correct pre-order traversal for a binary tree -case 2', () => {
        const values = [3, 9, 20];
        const root = constructBinaryTree(values);
        const expectedTraversal = [3, 9, 20];

        expect(preOrderTraversal(root)).toEqual(expectedTraversal);
    });

    // Add more test cases here if needed
});
