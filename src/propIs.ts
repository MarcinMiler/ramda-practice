import * as R from 'ramda'

console.log(
    R.propIs(Number, 'x')({ x: 1 }), // true
)
