import * as R from 'ramda'

const list = [1, 2, 3, 4, 5]

console.log(
    R.any(R.equals(1), list), // true
    R.any(R.equals(6), list), // false
)
