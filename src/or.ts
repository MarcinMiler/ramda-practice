import * as R from 'ramda'

console.log(
    R.or(true, true), // true
    R.or(true, false), // true
    R.or(false, true), // true
    R.or(false, false), // false
)
