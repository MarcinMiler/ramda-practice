import * as R from 'ramda'

const square = (x: number) => x * x

console.log(
    R.maxBy(square, -2, 2), // -2
)
