class Node {
  key: number;
  value: number;
  left: Node | null;
  right: Node | null;
  previous: Node | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.previous = null;
  }
}

class Result {
  node: Node | null;
  success: boolean;
  comparisons: number;

  constructor(node: Node | null, success: boolean, comparisons: number) {
    this.node = node;
    this.success = success;
    this.comparisons = comparisons;
  }
}

class BinaryTree {
  private root: Node | null;
  public constructor() {
    this.root = null;
  }

  insertKey(key: number, value: number): Result {
    let x: Node | null = this.root;
    let y: Node | null = null;

    let comparisons = 0;

    while (x !== null) {
      y = x;
      if (key < x.key) {
        x = x.left;
        comparisons++;
      } else {
        x = x.right;
        comparisons++;
      }
    }

    const z = new Node(key, value);
    z.previous = y;

    if (y === null) {
      this.root = z;
      comparisons++;
    } else if (key < y.key) {
      y.left = z;
      comparisons++;
    } else {
      y.right = z;
      comparisons++;
    }

    return new Result(z, true, comparisons);
  }

};


export default BinaryTree;