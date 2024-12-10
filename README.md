# binary-search-tree

project link: https://www.theodinproject.com/lessons/javascript-binary-search-trees

## test #1: Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.

## test #2: Confirm that the tree is balanced by calling isBalanced.

tree.buildTree()
![Alt text](/screenshots/random-to-bst-isbalanced.jpg "random-to-bst")

## test #3: Print out all elements in level, pre, post, and in order..

### levelOrder traversal

tree.levelOrder(tree.root);
![Alt text](/screenshots/BFS.jpg)

### inorder traversal: (left, root, right)

tree.inOrder(tree.root);
![Alt text](/screenshots/inorder-traversal.jpg)

### preorder traversal: (root, left, right)

tree.preOrder(tree.root);
![Alt text](/screenshots/preorder-traversal.jpg)

### postorder traversal: (left, right, root)

tree.postOrder(tree.root);
![Alt text](/screenshots/postorder-traversal.jpg)

## test #4: Unbalance the tree by adding several numbers > 100.

tree.insert(num)...
![Alt text](/screenshots/unbalanced-tree.jpg)

## test#5: Confirm that the tree is unbalanced by calling isBalanced.

tree.isBalanced()
![Alt text](/screenshots/call-isbalanced.jpg)

## test#6: Balance the tree by calling rebalance.

## test#7: Confirm that the tree is balanced by calling isBalanced.

tree.rebalance()
![Alt text](/screenshots/rebalanced.jpg)
