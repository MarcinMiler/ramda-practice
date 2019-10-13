import * as R from 'ramda'

const isEven = (x: number) => x % 2 === 0

console.log(
    R.eqBy(Math.abs, -10, 10), // true
    R.eqBy(isEven, 2, 4), // true
)
