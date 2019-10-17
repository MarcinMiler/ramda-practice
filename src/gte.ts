import * as R from 'ramda'

const gte10 = R.gte(R.__, 10)

console.log(
    R.gte(2, 1), // true
    R.gte(2, 2), // true
    R.gte(2, 3), // false
    gte10(10), // true
)
