class CustomStack {
  maxSize: number;
  stack: number[];
  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  push(x: number): void {
    if (this.stack.length >= this.maxSize) return;
    this.stack.length++;
    this.stack[this.stack.length - 1] = x;
  }

  pop(): number {
    if (this.stack.length <= 0) return -1;
    const last = this.stack[this.stack.length - 1];
    this.stack.length--;
    return last;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < this.stack.length; i++) {
      if (i > k - 1) break;
      this.stack[i] = this.stack[i] + val;
    }
  }
}
