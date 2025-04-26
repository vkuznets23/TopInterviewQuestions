function reverseString(s: string[]): void {
  let right = s.length - 1
  let left = 0
  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  console.log(s)
}

const s = ['h', 'e', 'l', 'l', 'o']
reverseString(s)
