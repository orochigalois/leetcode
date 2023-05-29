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

module.exports = { inOrderTraversal };