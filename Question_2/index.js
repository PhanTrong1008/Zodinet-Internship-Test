class Stack {
  constructor() {
    this.stack = [];
  }

  find(item) {
    const index = this.stack.indexOf(item);

    if (index !== -1) return index;

    return "Not Found";
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    if (this.stack.length == 0) {
      return "Empty Stack";
    }

    return this.stack.pop();
  }

  get size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

let stack = new Stack();
stack.push(243);
stack.push(423);
stack.push(3122);
stack.push(645);

console.log(stack);
console.log("Index: ", stack.find(645));
