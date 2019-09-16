import * as R from 'ramda'

const even = (x: number) => x % 2 === 0
const gte10 = R.gte(R.__, 10)

console.log(
    R.both(even, gte10)(12), // true
    R.both(even, gte10)(9), // false
)
