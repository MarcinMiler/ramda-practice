import * as R from 'ramda'

const gt10 = R.gt(R.__, 10)

console.log(
    R.gt(2, 1), // true
    R.gt(2, 2), // false
    R.gt(2, 3), // false
    gt10(20), // true
)
