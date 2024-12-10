import Tree from "./classes/tree.js";
import sortedArray from "./components/random.js";
import prettyPrint from "./components/prettyprint.js";

const sample = [1, 3, 5, 8, 12, 16, 23, 47];
const arr = sortedArray(10);
const tree = new Tree(sample);
tree.root = tree.buildTree(tree.arr);
prettyPrint(tree.root);
