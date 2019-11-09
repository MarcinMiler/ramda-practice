import * as R from 'ramda'

const square = (x: number) => x * x

console.log(
    R.minBy(square, -2, 2), // 2
)
