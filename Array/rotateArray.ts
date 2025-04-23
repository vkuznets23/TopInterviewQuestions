const nums2 = [1, 2, 3, 4, 5, 6, 7]
const k = 3

function rotate(nums: number[], k: number): void {
  k = k % nums.length
  const cut = nums.splice(nums.length - k, k)
  nums.unshift(...cut)

  console.log(nums)
}

rotate(nums2, k)
