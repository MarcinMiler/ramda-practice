import * as R from 'ramda'

const lte10 = R.lte(R.__, 10)

console.log(
    R.lte(2, 1), // false
    R.lte(2, 2), // true
    R.lte(2, 3), // true
    lte10(10), // true
)
