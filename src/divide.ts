import * as R from 'ramda'

const half = R.divide(R.__, 2)

console.log(
    half(4), // 2
    R.divide(7, 100), // 0.07
)
