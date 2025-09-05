// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing = (increasing) order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
//To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// const num1: number[] = [1, 2, 3, 0, 0, 0]
// const num2: number[] = [2, 5, 6]
// const m = 3
// const n = 3

const num1 = [0]
const m = 0
const num2 = [1]
const n = 1

// const num1 = [1]
// const m = 1
// const num2: number[] = []
// const n = 0

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1 // last reasonable element nums1
  let p2 = n - 1 // last element nums2
  let p = m + n - 1 // last element nums1

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
  }

  // since nums1 might be empty
  while (p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }

  console.log(nums1)
}

merge(num1, m, num2, n)
