/**
 * A simple implementation of the ‘queue’ data type using JavaScript’s builtin
 * Array
 * @class Queue
 * @extends {Array}
 */
class Queue extends Array {
  /**
   * Creates an instance of Queue.
   * @param {number} [queueLength=0]
   * @memberof Queue
   */
  constructor (queueLength = 0) {
    super(queueLength)
  }

  /**
   * Inserts new elements at the start of a queue, and returns the new length of
   * the queue.
   * @param {any[]} items
   * @returns {number}
   * @memberof Queue
   */
  enqueue (...items) {
    return this.unshift(items)
  }

  /**
   * Removes the last element from a queue and returns it. If the queue is
   * empty, undefined is returned and the queue is not modified.
   * @param {number} [count=1]
   * @returns {any|undefined}
   * @memberof Queue
   */
  dequeue (count = 1) {
    return this.pop(count)
  }
  
  /**
   * Gets or sets the first item in the queue.
   * @memberof Queue
   * @type {any}
   */
  get first () {
    return this[this.length - 1];
  }
  set first (value) {
    this[this.length - 1] = value;
  }

  /**
   * Gets or sets the last item in the queue.
   * @memberof Queue
   * @type {any}
   */
  get last () {
    return this[0];
  }
  set last (value) {
    this[0] = value;
  }
}

export { Queue };