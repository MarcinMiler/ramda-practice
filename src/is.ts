import * as R from 'ramda'

console.log(
    R.is(Object, {}), // true
    R.is(Number, 1), // true,
    R.is(String, ''), // true
    R.is(Object, 1), // false
)
