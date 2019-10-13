import * as R from 'ramda'

console.log(
    R.dropLast(1, [1, 2, 3, 4]), // [1, 2, 3]
    R.dropLast(1, 'abcd'), // abc
)