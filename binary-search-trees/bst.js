/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     *
     * @type {BSTNode|null}
     */
    this.left = null;
    /** @type {BSTNode|null} */
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     *
     * @type {BSTNode|null}
     */
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root === null;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {BSTNode} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if (this.isEmpty()) return null;

    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {BSTNode} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if (this.isEmpty()) return null;

    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree. Recursive.
   * - Time: O(?).
   * - Space: O(?).
   * @param {BSTNode} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if (this.isEmpty()) return null;
    if (current.left === null) return current.data;

    return this.minRecursive(current.left);
  }

  /**
   * Retrieves the largest integer data from this tree. Recursive.
   * - Time: O(?).
   * - Space: O(?).
   * @param {BSTNode} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if (this.isEmpty()) return null;
    else if (current.right == null) return current.data;

    return this.maxRecursive(current.right);
  }

  /**
   * Logs this tree horizontally with the root on the left.
   * @param {BSTNode} node
   * @param {number} spaceCnt
   * @param {number} spaceIncr
   * @returns {void}
   */
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal, current = this.root) {
    while (current) {
      if (current.data === searchVal) {
        return true;
      }

      if (searchVal < current.data) {
        current = current.left;
      } else if (searchVal > current.data) {
        current = current.right;
      }
    }

    return false;
  }

  /**
   * Determines if this tree contains the given searchVal. Recursive.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (current === null) {
      return false;
    }

    if (current.data === searchVal) {
      return true;
    }

    if (searchVal < current.data) {
      return this.containsRecursive(searchVal, current.left);
    } else if (searchVal > current.data) {
      return this.containsRecursive(searchVal, current.right);
    }
  }

  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {BSTNode} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree (or a subtree if the
   *    startNode is not the root).
   */
  range(startNode = this.root) {
    return this.max(startNode) - this.min(startNode);
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal, current = this.root) {
    const node = new BSTNode(newVal);

    if (this.isEmpty()) {
      this.root = node;
      return this;
    }

    while (true) {
      if (newVal <= current.data) {
        if (current.left === null) {
          current.left = node;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }

        current = current.right;
      }
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree. Recursive.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, current = this.root) {
    if (this.isEmpty()) {
      this.root = new BSTNode(newVal);
      return this;
    }

    if (newVal > current.data) {
      if (current.right === null) {
        current.right = new BSTNode(newVal);
        return this;
      }
      return this.insertRecursive(newVal, current.right);
    }

    if (current.left === null) {
      current.left = new BSTNode(newVal);
      return this;
    }
    return this.insertRecursive(newVal, current.left);
  }

  /**
   * DFS Preorder: (CurrNode, Left, Right)
   * Converts this BST into an array following Depth First Search preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(node = this.root, vals = []) {
    if (node) {
      vals.push(node.data);
      this.toArrPreorder(node.left, vals);
      this.toArrPreorder(node.right, vals);
    }
    return vals;
  }

  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
    if (node) {
      this.toArrInorder(node.left, vals);
      vals.push(node.data);
      this.toArrInorder(node.right, vals);
    }
    return vals;
  }

  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Converts this BST into an array following Depth First Search postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPostorder(node = this.root, vals = []) {
    if (node) {
      this.toArrPostorder(node.left, vals);
      this.toArrPostorder(node.right, vals);
      vals.push(node.data);
    }
    return vals;
  }

  /**
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * Example on the fullTree var:
   * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
   * @param {Node} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */
  toArrLevelorder(current = this.root) {
    const queue = [];
    const vals = [];

    if (current) {
      queue.push(current);
    }

    while (queue.length > 0) {
      const dequeuedNode = queue.shift();
      vals.push(dequeuedNode.data);

      if (dequeuedNode.left) {
        queue.push(dequeuedNode.left);
      }

      if (dequeuedNode.right) {
        queue.push(dequeuedNode.right);
      }
    }
    return vals;
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
  height(node = this.root) {
    if (!node) {
      return 0;
    }
    // base case returns 0 but then the + 1 starts incrementing for each recursive call
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root) {
    if (!node) {
      return 0;
    }
    // Translates into something like: 1 + 1 + 1 + 1 + 0 + 1 + 1 + 1 + 0
    // instead of using a sum variable.
    return 1 + this.size(node.left) + this.size(node.right);
  }

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    // If empty tree
    if (!node) {
      return false;
    }

    // if leaf node, leaf node is the end which means it has no left or right
    if (!node.left && !node.right) {
      return true;
    }

    // if both left and right subtrees are not null and
    // both left and right subtrees are full
    if (node.left && node.right) {
      return this.isFull(node.left) && this.isFull(node.right);
    }
    return false;
  }
}

const emptyTree = new BinarySearchTree();
/* oneNodeTree
        root
        10
*/
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
const fiveNode = new BSTNode(5);
threeLevelTree.root.left = fiveNode;
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);

const result1 = emptyTree.toArrLevelorder();
const expected1 = [];
console.log(`${result1} should equal ${expected1}`);

const result2 = oneNodeTree.toArrLevelorder();
const expected2 = [10];
console.log(`${result2} should equal ${expected2}`);

const result3 = twoLevelTree.toArrLevelorder();
const expected3 = [10, 5, 15];
console.log(`${result3} should equal ${expected3}`);

const result4 = threeLevelTree.toArrLevelorder();
const expected4 = [10, 5, 15, 2, 6, 13];
console.log(`${result4} should equal ${expected4}`);

const result5 = fullTree.toArrLevelorder();
const expected5 = [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90];

const result6 = fullTree.height();
const expected6 = 4;
console.log(`${result6} should equal ${expected6}`);

const result7 = fullTree.size();
const expected7 = 15;
console.log(`${result7} should equal ${expected7}`);

const result9 = threeLevelTree.isFull();
const expected9 = false;
console.log(`${result9} should equal ${expected9}`);

const result8 = fullTree.isFull();
const expected8 = true;
console.log(`${result8} should equal ${expected8}`);
