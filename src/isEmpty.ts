import * as R from 'ramda'

console.log(
    R.isEmpty({}), // true
    R.isEmpty(''), // true
    R.isEmpty([]), // true
    R.isEmpty(null), // false
)
