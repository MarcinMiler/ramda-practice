import * as R from 'ramda'

console.log(
    R.pathSatisfies(R.lte(R.__, 10), ['a', 'b'])({ a: { b: 5 } }), // true
)
