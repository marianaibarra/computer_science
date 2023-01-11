class Stack {
  constructor() {
    this.data = []; //An array in which we store the values
    this.top = 0; //Points to the top element index.
  }

  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop();
    }
  }

  print() {
    var top = this.top - 1;
    while (top >= 0) {
      console.log(this.data[top]);
      top--;
    }
  }
  reverse() {
    this._reverse(this.top - 1);
  }

  _reverse(index) {
    if (index != 0) {
      this._reverse(index - 1);
    }
    console.log(this.data[index]);
  }
}
