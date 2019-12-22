import * as R from 'ramda'

const isOdd = (x: number) => x % 2 === 1

console.log(
    R.reject(isOdd, [1, 2, 3, 4, 5, 6]), // [2, 4, 6]
    R.reject(isOdd, { x: 1, y: 2, z: 3, q: 4 }), // { y: 2, q: 4 }
)
