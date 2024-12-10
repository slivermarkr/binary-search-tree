import Tree from "./classes/tree.js";
import randomSortedArray from "./components/random.js";
import prettyPrint from "./components/prettyprint.js";
import { justPrint, powTwo, doubled } from "./components/callbacks.js";
const sample = [1, 3, 5, 8, 12, 16, 23, 47];

const arr = randomSortedArray(12);
const tree = new Tree(sample);

tree.root = tree.buildTree(tree.arr);
tree.insert(123);
tree.insert(124);
tree.insert(125);
tree.insert(126);
tree.insert(127);
tree.rebalance();
prettyPrint(tree.root);
console.log("\n");
console.log("tree.isBalanced() call:  ", tree.isBalanced());
// let isBalance = tree.isBalanced(tree.root);
// console.log("tree.isBalanced call: ", isBalance);
// Breadth First Search or levelOrder
// const cbJustPrint = tree.postOrder(justPrint);
// const cbDoubled = tree.postOrder(doubled);
// const cbPowTwo = tree.postOrder(powTwo);
// prettyPrint(tree.root);
// console.log("\n");
// console.log("callback: (x) => x");
// console.log(cbJustPrint(tree.root).join("->"));
// console.log("\n");
// console.log("callback: (x) => x * 2");
// console.log(cbDoubled(tree.root).join("->"));
// console.log("\n");
// console.log("callback: (x) => x * x");
// console.log(cbPowTwo(tree.root).join("->"));
// console.log("\n");

// Depth First Search
// Inorder Traversal
// const inTraversePrt = tree.inOrder(justPrint);
// const inTraverseDou = tree.inOrder(doubled);
// const inTraversePow = tree.inOrder(powTwo);

// console.log(inTraversePrt(tree.root).join("->"));
// console.log("\n");
// console.log(inTraverseDou(tree.root).join("->"));
// console.log("\n");
// console.log(inTraversePow(tree.root).join("->"));
// console.log("\n");

// preOrder Traversal
// const preTraversePrt = tree.preOrder(justPrint);
// const preTraverseDou = tree.preOrder(doubled);
// const preTraversePow = tree.preOrder(powTwo);

// console.log(preTraversePrt(tree.root).join("->"));
// console.log("\n");
// console.log(preTraverseDou(tree.root).join("->"));
// console.log("\n");
// console.log(preTraversePow(tree.root).join("->"));
// console.log("\n");

// postOrder Traversal

// const postTraversePrt = tree.postOrder(justPrint);
// const postTraverseDou = tree.postOrder(doubled);
// const postTraversePow = tree.postOrder(powTwo);
// console.log(postTraversePrt(tree.root).join("->"));
// console.log("\n");
// console.log(postTraverseDou(tree.root).join("->"));
// console.log("\n");
// console.log(postTraversePow(tree.root).join("->"));
// console.log("\n");

// prettyPrint(tree.root);
// tree.insert(59);
// tree.insert(69);
// tree.insert(90);
// tree.insert(120);
// prettyPrint(tree.root);
// tree.rebalance();
// prettyPrint(tree.root);
