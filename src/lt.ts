import * as R from 'ramda'

const lt10 = R.lt(R.__, 10)

console.log(
    R.lt(2, 1), // false
    R.lt(2, 2), // false
    R.lt(2, 3), // true
    lt10(20), // false
)
