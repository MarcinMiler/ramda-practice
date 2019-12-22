import * as R from 'ramda'

console.log(
    R.scan(R.multiply, 1, [1, 2, 3, 4]), // [1, 1, 2, 6, 24]
)
