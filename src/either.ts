import * as R from 'ramda'

const gte10 = R.gte(R.__, 10)
const isEven = (x: number) => x % 2 === 0

const e = R.either(gte10, isEven)

console.log(
    e(11), // true
    e(9), // false
    e(8), // true
)
