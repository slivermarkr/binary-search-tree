import Tree from "./classes/tree.js";
import randomSortedArray from "./components/random.js";
import prettyPrint from "./components/prettyprint.js";

const arr = randomSortedArray(10);
const sample = [1, 3, 5, 8, 12, 16, 23, 47];

const tree = new Tree(sample);
tree.root = tree.buildTree(tree.arr);

tree.deletion(3);
prettyPrint(tree.root);
