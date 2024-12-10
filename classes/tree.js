import Node from "./node.js";

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
  }
  getArr = () => this.arr;

  buildTree(array = this.getArr(), start = 0, end = array.length - 1) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
    return root;
  }
}
