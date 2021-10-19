class ArrayEx extends Array {
  /**
   * Gets or sets the first item in the stack.
   * @memberof ArrayEx
   * @type {any}
   */
  get first () {
    return this[0];
  }
  set first (value) {
    this[0] = value;
  }

  /**
   * Gets or sets the last item in the stack.
   * @memberof ArrayEx
   * @type {any}
   */
  get last () {
    return this[this.length - 1];
  }
  set last (value) {
    this[this.length - 1] = value;
  }
}

export { ArrayEx };