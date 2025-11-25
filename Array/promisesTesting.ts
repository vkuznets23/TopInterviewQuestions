function doubleNumber(number: number): Promise<number> {
  const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      number *= 2
      resolve(number)
    }, 500)
  })
  return promise
}

doubleNumber(5)
  .then((res) => {
    console.log(res)
    // doubleNumber(res) // не возвращаем Promise
    return doubleNumber(res) // <--- возвращаем Promise
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => console.log(err))

const promises = [
  new Promise<number>((res) => setTimeout(() => res(5), 1000)),
  new Promise<number>((res) => setTimeout(() => res(10), 500)),
  new Promise<number>((res) => setTimeout(() => res(3), 1500)),
]

async function sumFunct(promises: Promise<number>[]): Promise<number> {
  try {
    const allPromises = await Promise.all(promises)
    return allPromises[0] + allPromises[1] + allPromises[2]
  } catch (error) {
    console.log(error)
    throw error
  }
}
