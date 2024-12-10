import Tree from "./classes/tree.js";
import randomSortedArray from "./components/random.js";
import prettyPrint from "./components/prettyprint.js";
import { justPrint, powTwo, doubled } from "./components/callbacks.js";
const arr = randomSortedArray(10);
const sample = [1, 3, 5, 8, 12, 16, 23, 47];

const tree = new Tree(sample);

tree.root = tree.buildTree(tree.arr);
// Breadth First Search or levelOrder
// const cbJustPrint = tree.levelOrder(justPrint);
// const cbDoubled = tree.levelOrder(doubled);
// const cbPowTwo = tree.levelOrder(powTwo);
// console.log(cbJustPrint(tree.root).join("->"));
// console.log(cbDoubled(tree.root).join("->"));
// console.log(cbPowTwo(tree.root).join("->"));

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

// preOrder Traversal
// const postTraversePrt = tree.postOrder(justPrint);
// const postTraverseDou = tree.postOrder(doubled);
// const postTraversePow = tree.postOrder(powTwo);

// console.log(postTraversePrt(tree.root).join("->"));
// console.log("\n");
// console.log(postTraverseDou(tree.root).join("->"));
// console.log("\n");
// console.log(postTraversePow(tree.root).join("->"));
// console.log("\n");
const node = tree.find(8);
console.log(tree.depth(node, tree.root));
prettyPrint(tree.root);
