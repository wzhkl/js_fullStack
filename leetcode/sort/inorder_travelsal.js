//      1
// null    2
//      3
// 中序遍历  一棵大树 递归的概念  
// 以左子树、根节点、右子树的顺序输出
function TreeNode(val) {
  this.val = val
  this.right = this.left = null
}

let a1 =new TreeNode(1);
let b1 =new TreeNode(2);
let c1 =new TreeNode(3);
a1.right = b1;
a1.left = null;
b1.left = c1;

var inorderTravelsal = function(root) {
  let arr = [];
  const inorder = root => {
    if (root === null) return null
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right)
  }
  inorder(root);
  return arr;
}

console.log(inorderTravelsal(a1))