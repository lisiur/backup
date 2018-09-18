class Stack {
  items: any[];
  constructor() {
    this.items = []
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length > 0
  }
  size() {
    return this.items.length
  }
  push(...element: any[]) {
    this.items.push(...element)
  }
  clear() {
    this.items.length = 0
  }
}