/**
 * A simple implementation of the ‘stack’ data type using JavaScript’s builtin
 * Array
 * @class Stack
 * @extends {Array}
 */
class Stack extends Array {

  /**
   * Creates an instance of Stack.
   * @param {number | undefined} [stackLength=undefined] Length of stack created
   * @memberof Stack
   */
  constructor (stackLength = undefined) {
    super(stackLength);
    if (! isNaN(stackLength)) this.maxLength = stackLength;
  }

  /**
   * Creates a stack from an iterable object (first object on bottom).
   * @static
   * @param {Iterable<any> | ArrayLike<any>} iterable An iterable object to convert to a stack.
   * @memberof Stack
   */
  static from (iterable) {
    return Array.from(iterable)
  }

  /**
   * Creates a stack from an iterable object (first object on top).
   * @static
   * @param {Iterable<any> | ArrayLike<any>} iterable An iterable object to convert to a stack.
   * @memberof Stack
   */
  static fromReverse (iterable) {
    return Array.from(iterable).reverse()
  }

  /**
   * Appends new elements to the top of a stack, and returns the new height of
   * the stack.
   * @param {any[]} items New elements to add to the stack.
   * @returns
   * @memberof Stack
   */
  push (...items) {
    for (const item of items) {
      if (++this.length > this.maxLength) throw new Error('stack overflow');
      super.push(item);
    }
    return this.length;
  }

  /**
   * Returns the top item on the stack without removing it
   * @returns {any}
   * @memberof Stack
   */
  peek () {
    return this.slice(-0, -1);
  }
  // peek (count = 1) {
  //   return this.slice(-0, count * -1);
  // }

  /**
   * Gets or sets the bottom item in the stack.
   * @memberof Stack
   * @type {any}
   */
  get bottom () {
    return this[0];
  }
  set bottom (value) {
    this[0] = value;
  }

  /**
   * Gets or sets the top item in the stack.
   * @memberof Stack
   * @type {any}
   */
  get top () {
    return this[this.length - 1];
  }
  set top (value) {
    this[this.length - 1] = value;
  }

  /**
   * Gets the maximum length (if any) of the stack.
   * @readonly
   * @memberof Stack
   */
  get maxLength () {
    return this.maxLength;
  }
}

export { Stack };
