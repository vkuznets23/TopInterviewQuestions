function check(x: number, tops: number[], bottoms: number[]): number {
  let rotateTop = 0
  let rotateBottom = 0

  for (let i = 0; i < tops.length; i++) {
    if (tops[i] !== x && bottoms[i] !== x) return -1
    else if (tops[i] !== x) rotateTop++
    else if (bottoms[i] !== x) rotateBottom++
  }
  const result = Math.min(rotateTop, rotateBottom)

  return result
}

function minDominoRotations(tops: number[], bottoms: number[]): number {
  let minRotation = Infinity
  for (let x = 1; x <= 6; x++) {
    let rotation: number = check(x, tops, bottoms)
    if (rotation !== -1) minRotation = Math.min(minRotation, rotation)
  }
  return minRotation === Infinity ? -1 : minRotation
}

const tops = [2, 4, 2, 3]
const bottoms = [4, 2, 1, 2]

//So Infinity is just a way to say: "I don't have a meaningful value yet, so I'll use a number that's guaranteed to be larger than anything else." If you initialized minValue = 0, then Math.min(0, 10) would always return 0, and you'd miss the actual minimum value

console.log(minDominoRotations(tops, bottoms))
