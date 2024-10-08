/**
 * Class to represent a queue using an array which follows a FIFO
 * (First In First Out) order. New items are added to the back and items are
 * removed from the front.
 */
class Queue {
  /**
   *
   * @param {Array<any>} items The starting items, useful for if you already
   *    have an array of items in the right order and want to convert it to a
   *    queue instance to get access to the queue methods.
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    this.items.push(item);
    return this.size();
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    return this.isEmpty() ? undefined : this.items[0];
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }

  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  compareQueues(q2) {
    if (this.size() !== q2.size()) {
      return false;
    }
    const length = q2.size();
    let flag = true;
    for (let i = 0; i < length; i++) {
      const queue1 = this.dequeue();
      const queue2 = q2.dequeue();
      this.enqueue(queue1);
      q2.enqueue(queue2);
      if (queue1 !== queue2) {
        flag = false;
      }
    }
    return flag;
  }

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() {}
}

const emptyQueue = new Queue();

const myQueue = new Queue();
myQueue.enqueue(46);
myQueue.enqueue(3);
myQueue.enqueue(36);
myQueue.enqueue(37);
myQueue.enqueue(98);
myQueue.enqueue(23);
myQueue.enqueue(89);
myQueue.enqueue(100);
myQueue.enqueue(24);
myQueue.enqueue(75);

const anotherQueue = new Queue();
anotherQueue.enqueue(46);
anotherQueue.enqueue(3);
anotherQueue.enqueue(36);
anotherQueue.enqueue(37);
anotherQueue.enqueue(98);
anotherQueue.enqueue(23);
anotherQueue.enqueue(89);
anotherQueue.enqueue(100);
anotherQueue.enqueue(24);
anotherQueue.enqueue(75);

const palQueue = new Queue();
palQueue.enqueue(5);
palQueue.enqueue(10);
palQueue.enqueue(4);
palQueue.enqueue(9);
palQueue.enqueue(4);
palQueue.enqueue(10);
palQueue.enqueue(5);

const result1 = myQueue.compareQueues(anotherQueue);
console.log(`${result1} should equal true`);

const result2 = emptyQueue.compareQueues(myQueue);
console.log(`${result2} should equal false`);

const result3 = palQueue.isPalindrome();
console.log(`${result3} should equal true`);

const result4 = myQueue.isPalindrome();
console.log(`${result4} should equal false`);
