import * as R from 'ramda'

console.log(
    R.propEq('name', 'john')({ name: 'john' }), // true
)
