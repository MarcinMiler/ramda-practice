import * as R from 'ramda'

const f = R.flip(R.divide)

console.log(
    R.divide(2, 10), // 0.2
    f(2, 10), // 5
    f(10, 2), // 0.2
)
