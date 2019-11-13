import * as R from 'ramda'

console.log(
    R.nthArg(0)(0, 1, 2), // 0
    R.nthArg(-1)(0, 1, 2, 3), // 3
)
