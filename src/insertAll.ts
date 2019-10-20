import * as R from 'ramda'

console.log(
    R.insertAll(0, [-4, -3, -2, -1], [1, 2, 3, 4]), // [-4, -3, -2, -1, 1, 2, 3, 4]
)
