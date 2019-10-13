import * as R from 'ramda'

console.log(
    R.drop(2, [1, 2, 3, 4]), // [3, 4]
    R.drop(2, 'abcd'), // 'cd',
)
