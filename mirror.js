function mirror(root) {
    if(root.val === null) return;
    if(root.left === null && root.right === null) return;
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left) {
        mirror(root.left);
    }
    if(root.right) {
        mirror(root.right);
    }
}
