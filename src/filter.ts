import * as R from 'ramda'

const list = [1, 2, 3, 4, 5, 6]

const isEven = (x: number) => x % 2 === 0

console.log(
    R.filter(isEven)(list), // [2, 4, 6]
    R.filter(isEven)({ a: 1, b: 2, c: 3, d: 4 }), // { a: 2, d: 4 }
)
