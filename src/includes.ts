import * as R from 'ramda'

console.log(
    R.contains(1, [1, 2, 3]), // true
    R.contains(4, [1, 2, 3]), // false
    R.contains('ab', 'abc'), // true
)
