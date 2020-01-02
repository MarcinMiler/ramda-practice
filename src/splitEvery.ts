import * as R from 'ramda'

console.log(
    R.splitEvery(2)([1, 2, 3, 4, 5, 6]), // [[1, 2], [3, 4], [5, 6]]
)
