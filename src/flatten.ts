import * as R from 'ramda'

console.log(
    R.flatten([1, [1, [1, [1]]]]), // [1, 1, 1, 1]
)
