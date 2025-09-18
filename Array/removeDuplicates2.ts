const DuplicatesFromSortedArrayNums = [0, 0, 1, 1, 1, 1, 2, 3, 3]

function removeDuplicatesFromSortedArray(nums: number[]): number {
  if (nums.length === 0) return 0

  let writeIndex = 2

  for (let readIndex = 2; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== nums[writeIndex - 2]) {
      nums[writeIndex] = nums[readIndex]
      writeIndex++
    }
  }

  return writeIndex
}

console.log(removeDuplicatesFromSortedArray(DuplicatesFromSortedArrayNums))
