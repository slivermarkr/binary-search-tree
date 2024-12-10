import Tree from "./classes/tree.js";
import randomSortedArray from "./components/random.js";
import prettyPrint from "./components/prettyprint.js";
import { justPrint, powTwo, doubled } from "./components/callbacks.js";
const sample = [1, 3, 5, 8, 12, 16, 23, 47];

const arr = randomSortedArray(69); //creates a sortedarray
const tree = new Tree(arr); //convert sorted array to BST.

tree.root = tree.buildTree();
prettyPrint(tree.root);
const level = tree.levelOrder(justPrint)(tree.root).join("->");
console.log(level);
// Breadth First Search or levelOrder
// const cbJustPrint = tree.levelOrder(justPrint);
// const cbDoubled = tree.levelOrder(doubled);
// const cbPowTwo = tree.levelOrder(powTwo);
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

// levelOrder Traversal

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
