import Node from "./node.js";

export default class Tree {
  constructor(arr) {
    this.arr = arr;
    this.root = null;
  }
  getArr = () => this.arr;
  getRoot = () => this.root;

  buildTree(array = this.getArr(), start = 0, end = array.length - 1) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
    return root;
  }

  insert(value, root = this.getRoot()) {
    if (root === null) return new Node(value);

    if (root.data > value) {
      root.left = this.insert(value, root.left);
    } else if (root.data < value) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }
  // helper function for deleting node with two childen.
  getSuccessor(node) {
    node = node.right;
    if (node !== null && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  deletion(value, root = this.getRoot()) {
    if (root === null) return root;

    if (root.data > value) {
      root.left = this.deletion(value, root.left);
    } else if (root.data < value) {
      root.right = this.deletion(value, root.right);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      const succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.deletion(succ.data, root.right);
    }
    return root;
  }

  find(value, root = this.getRoot()) {
    if (root === null) return root;

    if (value === root.data) {
      return root;
    } else if (value < root.data) {
      return this.find(value, root.left);
    } else if (value > root.data) {
      return this.find(value, root.right);
    }
    return null;
  }

  levelOrder(cb) {
    if (!cb) throw new Error("Please pass in a callback fn().");

    return (root) => {
      if (root === null) return root;
      const queue = [];
      const result = [];
      if (root) queue.push(root);
      while (queue.length) {
        const node = queue.shift();
        result.push(cb(node.data));

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return result;
    };
  }

  inOrder(cb) {
    if (!cb) throw new Error("Please pass in a callback fn().");
    return (root) => {
      const result = [];

      function recurse(r) {
        if (r === null) return r;
        if (r.left) recurse(r.left);
        result.push(cb(r.data));
        if (r.right) recurse(r.right);
      }

      recurse(root);
      return result;
    };
  }
}
