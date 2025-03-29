export const mergeTwoSortedArray = (firstArray: Array<number>, secondArray: Array<number>) => {
    const mergedArray: Array<number> = []

    if (!firstArray.length) {
        return secondArray
    }

    if (!secondArray.length) {
        return firstArray
    } 

    let firstIndex = 0
    let secondIndex = 0

    let firstItem = firstArray[firstIndex]
    let secondItem = secondArray[secondIndex]

    while (firstItem !== undefined || secondItem !== undefined) {
      
        if (firstItem <= secondItem) {
            mergedArray.push(firstItem)
            firstIndex++
            firstItem = firstArray[firstIndex]
        } else if (secondItem < firstItem) {
            mergedArray.push(secondItem)
            secondIndex++
            secondItem = secondArray[secondIndex]
        }

       if (secondItem === undefined) {
            mergedArray.push(firstItem)
            firstIndex++
            firstItem = firstArray[firstIndex]
       }

       if (firstItem === undefined) {
            mergedArray.push(secondItem)
            secondIndex++
            secondItem = secondArray[secondIndex]
        } 
    } 

    return mergedArray
}