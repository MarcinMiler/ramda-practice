import * as R from 'ramda'

console.log(
    R.partition(R.gt(R.__, 10), [1, 5, 11, 15]), // [[11, 15], [1, 5]]
)
