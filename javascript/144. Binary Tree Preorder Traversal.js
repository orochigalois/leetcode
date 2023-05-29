const preOrderTraversal = (root) => {
    let re = [];
    const helper = (root, re) => {
        if (!root)
            return;
        re.push(root.val);
        helper(root.left, re)
        helper(root.right, re)
    }
    helper(root, re);
    return re;

}

module.exports = { preOrderTraversal };