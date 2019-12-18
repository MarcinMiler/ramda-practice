import * as R from 'ramda'

console.log(
    R.pathEq(['a', 'b'], 2)({ a: { b: 2 } }), // true
)
