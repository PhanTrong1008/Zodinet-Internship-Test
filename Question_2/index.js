class Stack {
  constructor() {
    this.stack = [];
  }

  find(item) {
    const result = this.stack.filter((each) => each == item);

    return result.length > 0 ? true : false;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
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

stack.pop();

console.log(stack);
console.log(stack.find(423));
