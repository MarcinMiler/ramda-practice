import * as R from 'ramda'

console.log(
    R.equals(1, 1), // true
    // R.equals('1', 1), TS, warning
    R.equals([1, 2], [1, 2]), // true
)
