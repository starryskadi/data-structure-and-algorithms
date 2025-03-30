// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


export function fibonacciIterative(index: number){
   let arr = [0, 1]

   for (var i = 2; i <= index; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
   }

   return arr[index]
}


export function fibonacciRecursive(index: number): number {
    if (index <= 1) {
        return index
    }

    let prevItem = fibonacciRecursive(index - 2)
    let currentItem = fibonacciRecursive(index - 1)
    let total = prevItem + currentItem
    
    return total
}
