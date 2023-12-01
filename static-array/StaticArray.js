// Custom Implementation of a Static Array of same type
class StaticArray {
  constructor(size, type) {
    this.size = size;
    this.type = type;

    this.current = 0;
    this.data = {};
  }

  checkSize() {
    if (this.current >= this.size) {
      throw new Error("Array is full");
    }
  }

  // Implment array push
  push(value) {
    // O(1) time complexity

    this.checkSize();

    this.data[this.current] = value;
    this.current++;
    return this.data.length;
  }

  pop() {
    // O(1) time complexity

    if (this.current <= 0) {
      throw new Error("Array is empty");
    }
    const lastItem = this.data[this.current - 1];
    delete this.data[this.current - 1];
    this.current--;
    return lastItem;
  }

  unshift(value) {
    // O(n) time complexity due to loop through all elements

    this.checkSize();

    for (let i = 0; i < this.current; i++) {
      this.data[i + 1] = this.data[i];
    }

    this.data[0] = value;
    this.current++;

    return this.data[0];
  }

  shift() {
    // O(n) time complexity due to loop through all elements

    if (this.current <= 0) {
      throw new Error("Array is empty");
    }

    for (let i = 0; i < this.current; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.current - 1];
    this.current--;

    return this.data.length;
  }
}

// Test
const staticArray = new StaticArray(3, "string");
staticArray.push("Testing");
staticArray.unshift("Testing2");
staticArray.unshift("Testing3");
staticArray.pop();
staticArray.shift();
console.log(staticArray);
