import * as R from 'ramda'

console.log(
    R.max(1, 2), // 2
    R.max(2, 1), // 2
    R.max(2, 2), // 2
    R.max('a', 'b'), // 'b'
)
