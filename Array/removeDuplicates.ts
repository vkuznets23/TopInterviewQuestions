const numsArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

function removeDuplicates(nums: number[]): number {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i]
      k++
    }
  }

  console.log(nums)
  console.log(k)
  return k
}

function removeDuplicates2(nums: number[]): number {
  const unique = [...new Set(nums)]

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i]
  }
  console.log(nums)
  console.log(unique.length)
  return unique.length
}

removeDuplicates(numsArr)
removeDuplicates2(numsArr)
