export function findFactorialRecursive(number: number): number {
    if (number <= 2) {
        return number
    }

    return number * findFactorialRecursive(number - 1)
}
  

// 5, 4, 3, 2, 1
export function findFactorialIterative(number: number): number {
    let total = 1

    for (let i = 2; i <= number; i++) {
        total = total * i
    }

    return total
}
  