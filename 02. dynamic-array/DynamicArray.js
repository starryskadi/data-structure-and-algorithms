// javascript array is already dynamic, so we don't need to implement it but it's good to know how it works under the hood

// Custom Implementation of a dynamic array
class DynamicArray {
  constructor() {
    this.current = 0;
    this.data = {};
  }

  // Implment array push
  push(value) {
    // O(1) time complexity | O(n) time complexity if array is full in memory slot and needs to be resized

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
const dynamicArray = new DynamicArray();
dynamicArray.push("Testing");
dynamicArray.unshift("Testing2");
dynamicArray.unshift("Testing3");
dynamicArray.pop();
dynamicArray.shift();

dynamicArray.push("Testing");
dynamicArray.push("Testing");
dynamicArray.push("Testing");

console.log(dynamicArray);
