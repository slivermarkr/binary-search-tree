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
const inTraverse = tree.inOrder(justPrint);
console.log(inTraverse(tree.root).join("->"));
prettyPrint(tree.root);
