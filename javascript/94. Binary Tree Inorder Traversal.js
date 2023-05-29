const { constructBinaryTree } = require('./helper_binarytree.js');

const values = [3,9,20,null,null,15,7];
const root = constructBinaryTree(values);


function inOrderTraversal(root){
    let re=[];
    const helper = (root,re)=>{
        if(!root){
            return;
        }
        helper(root.left,re)
        re.push(root.val)
        helper(root.right,re)
    }
    helper(root,re);
    return re;
}

console.log(JSON.stringify(inOrderTraversal(root)));