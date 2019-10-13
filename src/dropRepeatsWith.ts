import * as R from 'ramda'

const l = [-1, 1, 1, 2, -2, 3, -3, -3]

console.log(
    R.dropRepeatsWith(R.eqBy(Math.abs), l), // [-1, 2, 3]
)
