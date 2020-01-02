import * as R from 'ramda'

console.log(
    R.sortBy(R.head, [[1, 1], [3, 1], [2, 1]]), // [[1, 1], [2, 1], [3, 1]]
)
