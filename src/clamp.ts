import * as R from 'ramda'

console.log(
    R.clamp(1, 10, -5), // 1
    R.clamp(1, 10, 15) // 10
)