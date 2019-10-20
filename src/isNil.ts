import * as R from 'ramda'

console.log(
    R.isNil(null), // true
    R.isNil(undefined), // true
    R.isNil({}), // false
    R.isNil(0), // false
)
